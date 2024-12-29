
import './App.css'
import Hero from './components/hero/Hero'
import { Menu } from './components/menu/Menu'
import { menuItems } from './utils/constants'

function App() {

  return (
    <>
      <Menu sections={menuItems}></Menu>
      <Hero></Hero>
    </>
  )
}

export default App
