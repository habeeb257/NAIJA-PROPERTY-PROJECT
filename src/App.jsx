import {Route,Routes} from "react-router-dom"
import Header from "./component/Header"
import Home from "./pages/home/Home"
import Villas from "./pages/villas/Villas"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Fotter from "./component/Fotter"



function App() {
 return (
   <>
     <Header />

     <Routes>
       <Route path="/" element= {<Home />} />
       <Route path="/villas" element={<Villas />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>

    <Fotter/>




   </>
 );
}

export default App
