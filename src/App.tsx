import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import SimpleTechStack from './components/SimpleTechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import MouseTrail from './components/MouseTrail'
import ScrollProgress from './components/ScrollProgress'
import FloatingIcons from './components/FloatingIcons'
import ChooseYourPath from './components/ChooseYourPath'

function App() {
  const [showChoosePath, setShowChoosePath] = useState(true)

  const handleChoosePath = (isTechnical: boolean) => {
    if (isTechnical) {
      // Redirect to VSCode portfolio
      window.location.href = 'http://adilaitelhoucine.me/My-Portfolio-/'
    } else {
      // Show this portfolio
      setShowChoosePath(false)
    }
  }

  // Always show choose path screen first
  if (showChoosePath) {
    return <ChooseYourPath onChoose={handleChoosePath} />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Mouse Trail Effect */}
      <MouseTrail />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Floating Tech Icons */}
      <FloatingIcons />
      
      {/* Enhanced Background with Multiple Layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10" />
        
        {/* Animated Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-primary to-primary-dark opacity-20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br from-secondary to-secondary-dark opacity-20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-accent to-accent-dark opacity-20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float-fast"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse"></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_1px)] [background-size:50px_50px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.25)_1px,transparent_1px)]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="tech-stack">
          <SimpleTechStack />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
