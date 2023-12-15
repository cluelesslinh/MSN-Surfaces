import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import PaymentOptions from './pages/PaymentOptions/PaymentOptions';
import Countertops from './pages/Countertops/countertops';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { CountertopView } from "../src/pages/Countertops/countertopview";

const App = () => {
  const [countertops] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countertops" element={<Countertops />} />
          <Route path="paymentoptions" element={<PaymentOptions />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/countertop/:countertopID" element={<CountertopView countertops={countertops} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App