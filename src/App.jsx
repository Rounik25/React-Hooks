import './App.css'
import { CountButton } from './components/CountButton'
import { CountButton2 } from './components/CountButton2'
import { ResourceType } from './components/ResourceType'
import { Todos } from './components/todos'
import { Series } from './components/Series'

function App() {
  return (
    <>
      <CountButton />
      <ResourceType />
      <CountButton2 />
      <Todos />
      <Series />
    </>
  )
}

export default App
