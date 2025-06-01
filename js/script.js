/* Add this to your JavaScript section or create a new script.js file */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

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

    // Navbar Scroll Functionality
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Daily Verse Functionality
    const verseText = document.querySelector('.verse-text');
    const verseReference = document.querySelector('.verse-reference');
    const copyBtn = document.querySelector('.copy-btn');
    const shareBtn = document.querySelector('.share-btn');

    if (verseText && verseReference && copyBtn && shareBtn) {
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
            },
            {
                text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
                reference: "Psalm 27:1"
            },
            {
                text: "Cast all your anxiety on him because he cares for you.",
                reference: "1 Peter 5:7"
            },
            {
                text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
                reference: "Philippians 4:6"
            },
            {
                text: "Come to me, all you who are weary and burdened, and I will give you rest.",
                reference: "Matthew 11:28"
            },
            {
                text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
                reference: "Psalm 34:18"
            },
            {
                text: "God is our refuge and strength, an ever-present help in trouble.",
                reference: "Psalm 46:1"
            },
            {
                text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
                reference: "John 16:33"
            },
            {
                text: "Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal.",
                reference: "Isaiah 26:4"
            },
            {
                text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
                reference: "Proverbs 18:10"
            },
            {
                text: "He gives strength to the weary and increases the power of the weak.",
                reference: "Isaiah 40:29"
            },
            {
                text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
                reference: "Psalm 73:26"
            },
            {
                text: "The Lord will fight for you; you need only to be still.",
                reference: "Exodus 14:14"
            },
            {
                text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
                reference: "2 Timothy 1:7"
            },
            {
                text: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
                reference: "Psalm 34:17"
            },
            {
                text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
                reference: "Isaiah 26:3"
            },
            {
                text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
                reference: "Nahum 1:7"
            },
            {
                text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
                reference: "Psalm 34:4"
            },
            {
                text: "Be still, and know that I am God.",
                reference: "Psalm 46:10"
            },
            {
                text: "The Lord your God is with you, the Mighty Warrior who saves.",
                reference: "Zephaniah 3:17"
            },
            {
                text: "Commit to the Lord whatever you do, and he will establish your plans.",
                reference: "Proverbs 16:3"
            },
            {
                text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
                reference: "Galatians 6:9"
            },
            {
                text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
                reference: "Psalm 28:7"
            },
            {
                text: "I will never leave you nor forsake you.",
                reference: "Hebrews 13:5"
            },
            {
                text: "The Lord gives strength to his people; the Lord blesses his people with peace.",
                reference: "Psalm 29:11"
            },  
            {
                text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge.",
                reference: "Psalm 18:2"
            },
            {
                text: "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
                reference: "Psalm 91:4"
            },
            {
                text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
                reference: "Matthew 6:33"
            },
            {
                text: "The Lord is gracious and compassionate, slow to anger and rich in love.",
                reference: "Psalm 145:8"
            },
            {
                text: "The Lord is near to all who call on him, to all who call on him in truth.",
                reference: "Psalm 145:18"
            },
            {
                text: "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.",
                reference: "James 1:12"
            },
            {
                text: "The Lord is my portion; therefore I will wait for him.",
                reference: "Lamentations 3:24"
            },
            {
                text: "The Lord is good to those whose hope is in him, to the one who seeks him.",
                reference: "Lamentations 3:25"
            },
            {
                text: "The Lord is my strength and my song; he has become my salvation.",
                reference: "Exodus 15:2"
            },
            {
                text: "The Lord is my shepherd; I shall not want.",
                reference: "Psalm 23:1"
            },
            {
                text: "The Lord is my refuge and my fortress, my God, in whom I trust.",
                reference: "Psalm 91:2"
            },
            {
                text: "The Lord is my helper; I will not be afraid. What can mere mortals do to me?",
                reference: "Hebrews 13:6"
            },
            {
                text: "The Lord is my light and my salvation—whom shall I fear?",
                reference: "Psalm 27:1"
            },
            {
                text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
                reference: "Psalm 28:7"
            },
            {
                text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge.",
                reference: "Psalm 18:2"
            },
            {
                text: "The Lord is my portion; therefore I will wait for him.",
                reference: "Lamentations 3:24"
            },
            {
                text: "The Lord is good to those whose hope is in him, to the one who seeks him.",
                reference: "Lamentations 3:25"
            },
            {
                text: "The Lord is my strength and my song; he has become my salvation.",
                reference: "Exodus 15:2"
            },
            {
                text: "The Lord is my shepherd; I shall not want.",
                reference: "Psalm 23:1"
            },
            {
                text: "The Lord is my refuge and my fortress, my God, in whom I trust.",
                reference: "Psalm 91:2"
            },
            {
                text: "The Lord is my helper; I will not be afraid. What can mere mortals do to me?",
                reference: "Hebrews 13:6"
            },
            {
                text: "The Lord is my light and my salvation—whom shall I fear?",
                reference: "Psalm 27:1"
            },
            {
                text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
                reference: "Psalm 28:7"
            },
            {
                text: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge.",
                reference: "Psalm 18:2"
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
    }

    // Carousel Functionality
    const carousel = document.querySelector('.carousel');
    if (carousel) {
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
    }

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

    // Add scroll event listener for side section
    window.addEventListener('scroll', function() {
        const sideSection = document.querySelector('.side-section');
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
        
        // Calculate the gradient stop position based on scroll percentage
        // Use a smoother easing function
        const easedPercentage = Math.min(scrollPercentage, 100);
        const gradientStop = Math.pow(easedPercentage / 100, 0.5) * 100;
        
        // Create the dynamic gradient with smoother transition
        sideSection.style.background = `linear-gradient(to bottom, #1A3C34 ${100 - gradientStop}%, #FFFFFF ${gradientStop}%)`;
    });

    // Update height on window resize
    window.addEventListener('resize', function() {
        const sideSection = document.querySelector('.side-section');
        if (sideSection.classList.contains('scrolled')) {
            const bodyHeight = document.body.scrollHeight;
            sideSection.style.height = bodyHeight + 'px';
        }
    });
});