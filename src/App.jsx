import react from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Nav from './components/Nav';
import First from "./components/First";
import Marqee from "./components/Marqee";
import Footer from "./components/Footer";
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="full">
      <Nav />
      <First />
      <Marqee />
      <Footer />


    </div>
  )
}

export default App
