
import './App.css'
import About from './components/about/About'
import Activities from './components/Activities/Activities'
import Hero from './components/hero/Hero'
import { Menu } from './components/menu/Menu'
import Projects from './components/projects/Projects'
import { menuItems } from './utils/constants'

function App() {

  return (
    <>
      <Menu sections={menuItems}></Menu>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Activities></Activities>
    </>
  )
}

export default App
