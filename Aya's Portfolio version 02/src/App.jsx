
import './App.css'
import { Menu } from './components/menu/Menu'
import { menuItems } from './utils/constants'

function App() {

  return (
    <>
      <Menu sections={menuItems}></Menu>
    </>
  )
}

export default App
