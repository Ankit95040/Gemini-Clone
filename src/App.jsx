import { useState } from 'react'

import './App.css'
import Sidebar from './Component/Sidebar/Sidebar'
import Main from './Component/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  <Sidebar/>
  <Main/>
  </>
  )
}

export default App
