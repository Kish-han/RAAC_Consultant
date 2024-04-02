import './App.css'
import Contact from './components/contact'
import Herosection from './components/herosection'
import Whatweoffer from './components/whatweoffer'
import WhomWeServe from './components/whomweserve'
import Whoweare from './components/whoweare'

function App() {

  return (
    <main className='mt-12'>
      <Herosection />
      <Whoweare />
      <Whatweoffer />
      <WhomWeServe />
      <Contact />
    </main>

  )
}

export default App
