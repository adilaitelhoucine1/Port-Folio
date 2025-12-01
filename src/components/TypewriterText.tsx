import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delayBetween?: number
  className?: string
}

const TypewriterText = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = ''
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const text = texts[currentTextIndex]
    
    if (!isDeleting && currentText === text) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), delayBetween)
      return () => clearTimeout(timeout)
    }
    
    if (isDeleting && currentText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false)
      setCurrentTextIndex((currentTextIndex + 1) % texts.length)
      return
    }

    // Type or delete character
    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? text.substring(0, prev.length - 1)
          : text.substring(0, prev.length + 1)
      )
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetween])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  )
}

export default TypewriterText

