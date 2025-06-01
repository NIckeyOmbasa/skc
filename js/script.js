// Media Tabs Functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if this is a scroll button
            const scrollTarget = button.getAttribute('data-scroll');
            if (scrollTarget) {
                const targetElement = document.getElementById(scrollTarget);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }

            // Regular tab functionality
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add('active');
                targetPane.style.animation = 'fadeIn 0.3s ease forwards';
            }
        });
    });
}

// Initialize tabs when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();

    // Set current year in footer
    var currentYearElem = document.getElementById('current-year');
    if (currentYearElem) {
        currentYearElem.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (hamburger && navLinks) {
        // Toggle mobile menu
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Handle dropdown menus on mobile
        dropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (dropdownToggle && dropdownMenu) {
                dropdownToggle.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();
                        dropdown.classList.toggle('active');
                        
                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                    }
                });
            }
        });

        // Close dropdowns and mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown') && !e.target.closest('.hamburger')) {
                dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    }

    // Daily Verse Functionality
    const verseText = document.querySelector('.verse-text');
    const verseReference = document.querySelector('.verse-reference');
    const copyBtn = document.querySelector('.copy-btn');
    const shareBtn = document.querySelector('.share-btn');

    // Array of verses
    const verses = [
        {
            text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
            reference: "Jeremiah 29:11"
        },
        {
            text: "I can do all things through Christ who strengthens me.",
            reference: "Philippians 4:13"
        },
        {
            text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
            reference: "Proverbs 3:5-6"
        },
        {
            text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
            reference: "Joshua 1:9"
        },
        {
            text: "The Lord is my shepherd, I lack nothing.",
            reference: "Psalm 23:1"
        },
        {
            text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
            reference: "Isaiah 40:31"
        },
        {
            text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
            reference: "John 3:16"
        }
    ];

    // Function to get today's verse
    function getTodaysVerse() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const verseIndex = dayOfYear % verses.length;
        return verses[verseIndex];
    }

    // Function to update verse display
    function updateVerse() {
        const verse = getTodaysVerse();
        verseText.textContent = verse.text;
        verseReference.textContent = verse.reference;
    }

    // Function to copy verse to clipboard
    function copyVerse() {
        const text = `${verseText.textContent} - ${verseReference.textContent}`;
        navigator.clipboard.writeText(text).then(() => {
            // Show copy confirmation
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    }

    // Function to share verse
    function shareVerse() {
        const text = `${verseText.textContent} - ${verseReference.textContent}`;
        if (navigator.share) {
            navigator.share({
                title: 'Daily Verse',
                text: text
            }).catch(console.error);
        } else {
            // Fallback for browsers that don't support Web Share API
            copyVerse();
        }
    }

    // Initialize verse
    updateVerse();

    // Add event listeners
    copyBtn.addEventListener('click', copyVerse);
    shareBtn.addEventListener('click', shareVerse);

    // Update verse at midnight
    function updateVerseAtMidnight() {
        const now = new Date();
        const night = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1, // tomorrow
            0, 0, 0 // midnight
        );
        const msToMidnight = night.getTime() - now.getTime();

        setTimeout(() => {
            updateVerse();
            updateVerseAtMidnight(); // Schedule next update
        }, msToMidnight);
    }

    // Schedule first midnight update
    updateVerseAtMidnight();

    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let carouselIndex = 0;
    let interval;

    function showSlide(index) {
        // Remove active class from all items and indicators
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current item and indicator
        items[index].classList.add('active');
        indicators[index].classList.add('active');
        carouselIndex = index;
    }

    function nextSlide() {
        let nextIndex = carouselIndex + 1;
        if (nextIndex >= items.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = carouselIndex - 1;
        if (prevIndex < 0) {
            prevIndex = items.length - 1;
        }
        showSlide(prevIndex);
    }

    // Event listeners for controls
    prevButton.addEventListener('click', () => {
        clearInterval(interval);
        prevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        clearInterval(interval);
        nextSlide();
        startAutoSlide();
    });

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(interval);
            showSlide(index);
            startAutoSlide();
        });
    });

    // Auto slide function
    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Start auto sliding
    startAutoSlide();

    // Pause auto sliding when hovering over carousel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    // Resume auto sliding when mouse leaves carousel
    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Scroll Animation
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check for elements in view
    checkScroll();

    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});