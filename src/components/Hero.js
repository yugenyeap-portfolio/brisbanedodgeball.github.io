import React from 'react';
import '../styles/Hero.css';
import heroVideo from '../hero.mp4';

function Hero() {
  return (
    <section className="Hero">
      <video className="HeroVideo" autoPlay muted loop>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-container">
        <h1 class="BDL3">BRISBANE</h1>
        <h1 class="BDL3">DODGEBALL</h1>
        <h1 class="BDL3">LEAGUE</h1>

        <p class="Established">Est. 2022</p>
      </div>
    </section>
  );
}

export default Hero;
