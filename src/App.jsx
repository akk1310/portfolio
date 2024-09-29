import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import PortFolio from "./components/PortFolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
      <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                limit={1}
                containerId="containerA"
               
            />
        <Navbar />
        <Home />
        <Education />
        <Skills />
        <PortFolio />
        <Contact />
        <Footer />
      </div>
      {/* <Toaster /> */}
    </>
  );
}

export default App;
