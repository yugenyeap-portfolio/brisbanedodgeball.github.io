import React from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
// import Benefits from './components/Benefits';
// import Testimonials from './components/Testimonials';
// import Gallery from './components/Gallery';
// import FAQ from './components/FAQ';
// import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Benefits /> */}
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
