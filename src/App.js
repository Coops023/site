import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
