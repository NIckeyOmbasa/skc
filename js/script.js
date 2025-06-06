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
function initializeMediaTabs() {
    const mediaTabs = document.querySelectorAll('.media-tab');
    const mediaContents = document.querySelectorAll('.media-content');

    mediaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            mediaTabs.forEach(t => t.classList.remove('active'));
            mediaContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content
            const tabId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Initialize tabs when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMediaTabs();

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

    // Carousel Data
    const carouselData = [
        {
            images: [
                "https://i.ibb.co/gbPBbbMn/skc.jpg?w=1920"
                
            ],
            title: "Welcome to South Kenya Conference",
            description: "Join us in worship, fellowship, and service as we share God's love.",
            link: "pages/about.html",
            linkText: "Learn More"
        },
        {
            images: [
                "/assets/images/singing.jpg?w=1920",
                "/assets/images/singing2.jpg?w=1920"
            ],
            title: "Experience Worship",
            description: "Join our vibrant worship services every Sabbath.",
            link: "pages/churches.html",
            linkText: "Find a Church"
        },
        {
            images: [
                "https://i.ibb.co/B21xxJRv/volunteer-hero.jpg?w=1920",
                "/assets/images/close-up-people-working-as-team.jpg?w=1920"
            ],
            title: "Serving Our Community",
            description: "Making a difference through various outreach programs.",
            link: "pages/ministries.html",
            linkText: "Our Departments"
        },
        {
            images: [
                "https://i.ibb.co/VccKncCY/youth.jpg?w=1920",
                "/assets/images/programmes.jpg?w=1920"
            ],
            title: "Diverse Programmes",
            description: "Engaging all people in spiritual growth, evangelism and leadership.",
            link: "pages/events.html",
            linkText: "View Events"
        }
        ,
        {
            images: [
                "/assets/images/bibleev.jpg?w=1920",
                "/assets/images/bibleev.jpg?w=1920"
            ],
            title: "Bible Teachings",
            description: "Be enlightened by the word of God, and grow in your faith.",
            link: "pages/beliefs.html",
            linkText: "View Bible Teachings"
        }
    ];

    // Initialize Carousel
    function initializeCarousel() {
        const carouselInner = document.querySelector('.carousel-inner');
        const indicatorsContainer = document.querySelector('.carousel-indicators');
        let currentSlide = 0;
        let autoSlideInterval;

        // Create carousel items
        carouselData.forEach((slide, index) => {
            // Create carousel item
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            // Add images
            slide.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                carouselItem.appendChild(img);
            });

            // Add caption
            const caption = document.createElement('div');
            caption.className = 'carousel-caption';
            caption.innerHTML = `
                <h1>${slide.title}</h1>
                <p>${slide.description}</p>
                <a href="${slide.link}" class="btn">${slide.linkText}</a>
            `;
            carouselItem.appendChild(caption);
            carouselInner.appendChild(carouselItem);

            // Create indicator
            const indicator = document.createElement('button');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            indicator.addEventListener('click', () => showSlide(index));
            indicatorsContainer.appendChild(indicator);
        });

        // Get all slides and indicators
        const slides = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');

        // Navigation controls
        const prevButton = document.querySelector('.carousel-control.prev');
        const nextButton = document.querySelector('.carousel-control.next');

        function getRandomImage(index) {
            const slide = slides[index];
            const images = slide.querySelectorAll('img');
            return images[Math.floor(Math.random() * images.length)];
        }

        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.display = 'none';
            });
            indicators.forEach(ind => ind.classList.remove('active'));

            // Show selected slide
            slides[index].classList.add('active');
            slides[index].style.display = 'block';
            indicators[index].classList.add('active');

            // Randomly select an image if multiple exist
            const images = slides[index].querySelectorAll('img');
            images.forEach(img => img.style.display = 'none');
            getRandomImage(index).style.display = 'block';

            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }

        // Event listeners for controls
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });

        // Auto slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 5 seconds
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // Initialize first slide
        showSlide(0);
        startAutoSlide();
    }

    // Initialize carousel when DOM is loaded
    initializeCarousel();

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

// Statistics Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

function initializeStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

// Initialize statistics when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStatistics();
});