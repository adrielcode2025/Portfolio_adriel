document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('testimonial-track');
    
    // 1. Clone the testimonials to create a seamless infinite loop
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust this number to change speed (0.5 is slow/smooth)

    function step() {
        scrollAmount -= scrollSpeed;
        
        // 2. Reset the position when the first half of the track has passed
        // This is the trick for the infinite "jump-free" loop
        if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
            scrollAmount = 0;
        }

        track.style.transform = `translateX(${scrollAmount}px)`;
        
        requestAnimationFrame(step);
    }

    // 3. Pause on hover
    let animationId = requestAnimationFrame(step);

    track.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationId);
    });

    track.addEventListener('mouseleave', () => {
        animationId = requestAnimationFrame(step);
    });
});