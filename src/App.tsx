import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//COMPONENTS
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
function App() {

  return (
    <>
      <Navbar
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '#About' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
      
    
      {/* <header><Navbar/></header> */}
      <main>
        <Home/>  
        <About/>  
      </main>
      
    </>
  )
}

export default App
