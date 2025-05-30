// Function to animate counting up
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50; // Adjust speed of counting
    const duration = 2000; // 2 seconds
    const interval = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, interval);
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animation
function handleScrollAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        if (isInViewport(stat) && !stat.classList.contains('animated')) {
            const target = parseInt(stat.getAttribute('data-target'));
            stat.classList.add('animate', 'animated');
            animateCounter(stat, target);
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial check for elements in viewport
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
}); 