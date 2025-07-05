import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Hero from "./components/Hero"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="antialised">
      {/* Navbar */}
      <Nav/>
      {/* Intro section */}
      <Hero/>
      {/* About section */}
      <About/>
      {/* Experience section */}
      <Experience/>
      {/* Projects section */}
      {/* Contact section */}
      {/* Footer section */}
    </div>
  )
}

export default App
