// Typewriter Effect
const textElement = document.getElementById('typewriter');
const bioText = "1st Year CSE Student at MRIIRS | Data Analytics Enthusiast | Full-Stack Developer";
let index = 0;

function typeWriter() {
    if (index < bioText.length) {
        textElement.innerHTML += bioText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Scroll Reveal Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Initialize everything on load
window.addEventListener('DOMContentLoaded', () => {
    typeWriter();

    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Smooth scroll for Nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});