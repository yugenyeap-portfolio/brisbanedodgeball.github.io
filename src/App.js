import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
// import Testimonials from './components/Testimonials';
// import Gallery from './components/Gallery';
// import FAQ from './components/FAQ';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        {/* <Testimonials /> */}
        {/* <Gallery /> */}
        {/* <FAQ /> */}
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
