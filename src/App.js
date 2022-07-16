import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Header/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Galary from "./pages/Galary";
import ScrollToTop from "./components/General/ScrollToTop";



function App() {

  return (
    <>
      <Navigation />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/AshviEngineers' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/galary' element={<Galary />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="*" element={<PageNotFound />} ></Route>
        </Routes>
      </ScrollToTop>
      <Footer />

    </>
  );
}

export default App;
