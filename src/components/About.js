import React from "react";
import "../styles/about.css";

function About() {
    return (
        <div id="about" className="about">
            <h1 >About Our Dodgeball League</h1>
            <p class="slide-in">We are Brisbane's newest WDBF 7" foam premier dodgeball league. Our league is dedicated to providing a fun and competitive environment for dodgeball enthusiasts of all skill levels.</p>
            <p class="slide-in">Whether you're a seasoned veteran or just starting out, our league has something for everyone. We offer competitive and social divisions, and we're always looking for new players to join us on the court.</p>
            <p class="slide-in">So come on out and experience the thrill of dodgeball with Brisbane's newest premier league!</p>
        </div>
    );
}

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

export default About;
