import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Capstone from "./components/Capstone";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Capstone />
    </div>
  );
}

export default App;
