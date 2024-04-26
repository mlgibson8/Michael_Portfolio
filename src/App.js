import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Work from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div >
    <Header />
    <Navbar />
    <Home />
    <About /> 
    <Technologies />
    <Work />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
