import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import About from "./components/Navbar/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Project/projects";
import Contact from "./components/Contact/Contact";

function App() {
  return <div className={styles.App} > 
  <Navbar/>
  <Hero/>
  <About/>
  <Experience/>
  <Projects/>
  <Contact/>
  </div>
}

export default App
