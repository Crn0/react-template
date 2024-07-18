import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light')
  const currentTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <div className= {`${currentTheme}`} style={{display: 'grid', placeContent: 'center', height: '100dvh'}}>
     <header>
        <button onClick={() => setTheme((t) => t === 'light' ? 'dark' : 'light')}>
          { theme === 'light' ? 'dark mode ': 'light mode' }
         </button>
     </header>
      
    </div>
  )
}

export default App
