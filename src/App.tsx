import { useState } from 'react'
import ChooseYourPath from './components/ChooseYourPath'

function App() {
  const [showChoosePath, setShowChoosePath] = useState(true)

  const handleChoosePath = (isTechnical: boolean) => {
    if (isTechnical) {
      window.location.href = 'http://adilaitelhoucine.me/My-Portfolio-/'
    } else {
      setShowChoosePath(false)
    }
  }

  if (showChoosePath) {
    return <ChooseYourPath onChoose={handleChoosePath} />
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background-light to-gray-100 dark:from-background-dark dark:to-gray-900">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold gradient-text mb-4">
            Portfolio en construction...
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Les composants sont en cours de recréation
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
