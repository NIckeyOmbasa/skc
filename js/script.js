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
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        // Remove active class from all items and indicators
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Add active class to current item and indicator
        items[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }

    function nextSlide() {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= items.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }

    function prevSlide() {
        let prevIndex = currentIndex - 1;
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

    // News Popup Functionality
    const newsData = {
        1: {
            title: "Youth Conference Success",
            date: "March 15, 2024",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
            description: `The South Kenya Conference Youth Conference was a resounding success, with over 500 young people gathering for a week of spiritual growth and fellowship. The event featured inspiring speakers, engaging workshops, and meaningful worship sessions.\n

Key highlights of the conference included:\n
• Dynamic worship services led by the youth choir\n
• Interactive workshops on leadership and spiritual growth\n
• Community service projects in the local area\n
• Evening social activities and networking opportunities\n

The conference theme "Rise Up" resonated with participants, encouraging them to take active roles in their churches and communities. Many young people made decisions to deepen their faith and commit to serving others.\n

"We are thrilled with the turnout and the impact this conference has had on our youth," said the Youth Director. "The energy and enthusiasm shown by the participants was truly inspiring."`
        },
        2: {
            title: "Community Health Fair",
            date: "March 10, 2024",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
            description: `The annual Community Health Fair brought together healthcare professionals and community members for a day of wellness education and free health screenings. The event, organized by our Health Ministries Department, served over 300 community members.

Services provided included:
• Blood pressure and blood sugar screenings
• BMI measurements and nutritional counseling
• Dental check-ups and oral health education
• Mental health awareness sessions
• Exercise demonstrations and fitness assessments

Local healthcare providers volunteered their time and expertise, making this event possible. The fair also featured cooking demonstrations of healthy recipes and information about preventive healthcare practices.

"This event demonstrates our commitment to holistic health ministry," said the Health Ministries Director. "We believe in caring for the whole person - body, mind, and spirit."`
        },
        3: {
            title: "New Church Plant",
            date: "March 5, 2024",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800",
            description: `The South Kenya Conference celebrated the opening of its newest congregation in a growing community. The church plant represents a significant step in our mission to reach more people with the gospel message.

The new church features:
• Modern worship facilities
• Children's ministry spaces
• Community meeting rooms
• Outdoor gathering areas

The planting process included:
• Community needs assessment
• Evangelistic meetings
• Leadership training
• Building construction and dedication

"We are excited to see how God will use this new church to impact the community," said the Conference President. "This is just the beginning of what we believe will be a vibrant ministry center."`
        }
    };

    const newsPopup = document.querySelector('.news-popup');
    const popupContent = document.querySelector('.news-popup-content');
    const closeButton = document.querySelector('.news-popup-close');
    const readMoreLinks = document.querySelectorAll('.read-more');

    // Function to open popup
    function openPopup(newsId) {
        const news = newsData[newsId];
        if (news) {
            document.querySelector('.news-popup-image').src = news.image;
            document.querySelector('.news-popup-image').alt = news.title;
            document.querySelector('.news-popup-date').textContent = news.date;
            document.querySelector('.news-popup-title').textContent = news.title;
            document.querySelector('.news-popup-description').textContent = news.description;
            newsPopup.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }

    // Function to close popup
    function closePopup() {
        newsPopup.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }

    // Event listeners
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newsId = link.getAttribute('data-news-id');
            openPopup(newsId);
        });
    });

    closeButton.addEventListener('click', closePopup);

    // Close popup when clicking outside
    newsPopup.addEventListener('click', (e) => {
        if (e.target === newsPopup) {
            closePopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && newsPopup.classList.contains('active')) {
            closePopup();
        }
    });
});