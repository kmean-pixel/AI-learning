// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.menu-item, .story-text, .location-card');

    animatedElements.forEach(el => {
        el.classList.add('fade-in-scroll'); // Add base class for styling
        observer.observe(el);
    });
});

// Add CSS class for JS-enabled animations
const style = document.createElement('style');
style.textContent = `
    .fade-in-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .fade-in-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
