import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1 className="font-Alegreya">hi all</h1>
      <h1 className="font-poppins">how are you</h1> */}
      <Header />
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
