import React from "react";
import '../styles/InfoBox.css';
import Register from "./Register";


const InfoBox = () => {
    return (
    //   <div id="InfoBox" className="InfoBox">
    //     <h2>Schedule</h2>
    //     <p class="slide-in">
    //       We are Brisbane's newest WDBF 7" foam premier dodgeball league.
    //     </p>
    //     <p class="slide-in">
    //       Whether you're a seasoned veteran or just starting out, our league has something for everyone. We offer competitive and social divisions, and we're always looking for new players to join us on the court.
    //     </p>
    //     <p class="slide-in">
    //       Register with us now to experience the thrill of dodgeball with Brisbane's newest premier league!
    //     </p>
    //     {/* Add a registration button or link here */}
    //   </div>
    Register
    );
  };
  
//Sliding animations
const slideInElements = document.querySelectorAll('.slide-in');

const slideInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

slideInElements.forEach(el => slideInObserver.observe(el));

export default InfoBox;