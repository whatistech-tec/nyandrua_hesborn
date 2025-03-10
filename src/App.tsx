import About from "./Sections/About";
import Header from "./Sections/Header";
import Navbar from "./Sections/Navbar";
import Services from "./Sections/Services";
import Projects from "./Sections/Projects";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setLoading(false);
    },1800);

    // clean up
    return () => clearTimeout(timeout);
  },[])
  return (
    <main>
      {loading && <Loader/>}
      {
        !loading && 
        <>
          <Navbar/>
          <Header/>
          <About/>
          <Services/>
          <Projects/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </>
      }

    </main>
  );
};

export default App;
