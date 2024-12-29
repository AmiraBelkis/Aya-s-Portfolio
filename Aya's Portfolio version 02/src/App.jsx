
import './App.css'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import { Menu } from './components/menu/Menu'
import { menuItems } from './utils/constants'

function App() {

  return (
    <>
      <Menu sections={menuItems}></Menu>
      <Hero></Hero>
      <About></About>
    </>
  )
}

export default App
