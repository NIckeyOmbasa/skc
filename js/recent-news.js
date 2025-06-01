// News Popup Functionality
function initializeNewsPopup() {
    const newsCards = document.querySelectorAll('.news-card');
    const newsPopup = document.querySelector('.news-popup');
    const newsPopupContent = document.querySelector('.news-popup-content');
    const newsPopupClose = document.querySelector('.news-popup-close');

    const newsData = {
        'annual-conference': {
            title: 'Annual Conference Session',
            date: 'March 15, 2024',
            description: 'Join us for our Annual Conference Session where we will discuss important matters affecting our conference, elect new officers, and plan for the upcoming year. This event brings together church leaders, pastors, and members from across our conference.',
            details: [
                'Keynote speakers from the General Conference',
                'Workshops and training sessions',
                'Youth and young adult programs',
                'Business sessions and elections',
                'Evening worship services'
            ],
            location: 'Conference Headquarters',
            time: '9:00 AM - 5:00 PM',
            contact: 'conference@skc.org'
        },
        'youth-congress': {
            title: 'Youth Congress 2024',
            date: 'April 20, 2024',
            description: 'A transformative event for young people aged 13-35, featuring inspiring speakers, workshops, and activities designed to strengthen faith and build community.',
            details: [
                'Dynamic worship sessions',
                'Leadership training workshops',
                'Community service projects',
                'Sports and recreation activities',
                'Networking opportunities'
            ],
            location: 'Youth Center',
            time: '8:00 AM - 8:00 PM',
            contact: 'youth@skc.org'
        },
        'health-fair': {
            title: 'Community Health Fair',
            date: 'May 5, 2024',
            description: 'Free health screenings, wellness workshops, and health education for the entire community. Join us for a day dedicated to promoting healthy living and preventive care.',
            details: [
                'Free health screenings',
                'Nutrition workshops',
                'Fitness demonstrations',
                'Mental health resources',
                'Children\'s health activities'
            ],
            location: 'Community Center',
            time: '10:00 AM - 4:00 PM',
            contact: 'health@skc.org'
        },
        'evangelism': {
            title: 'Evangelism Series',
            date: 'June 10, 2024',
            description: 'A week-long evangelism series featuring powerful messages, music, and community outreach programs. Come and experience the transforming power of the gospel.',
            details: [
                'Daily evening meetings',
                'Special music performances',
                'Children\'s programs',
                'Community service projects',
                'Bible study sessions'
            ],
            location: 'Main Church',
            time: '7:00 PM - 9:00 PM',
            contact: 'evangelism@skc.org'
        },
        'education': {
            title: 'Education Summit',
            date: 'July 15, 2024',
            description: 'A comprehensive summit addressing the future of Adventist education, featuring workshops, panel discussions, and networking opportunities for educators and administrators.',
            details: [
                'Curriculum development workshops',
                'Technology integration sessions',
                'Student success strategies',
                'Parent engagement programs',
                'Administrative best practices'
            ],
            location: 'Education Center',
            time: '8:30 AM - 4:30 PM',
            contact: 'education@skc.org'
        },
        'music-festival': {
            title: 'Music Festival',
            date: 'August 20, 2024',
            description: 'A celebration of music and worship featuring choirs, orchestras, and solo performances from across our conference. Join us for an inspiring day of praise and worship.',
            details: [
                'Choir performances',
                'Orchestra concerts',
                'Solo and ensemble presentations',
                'Workshop sessions',
                'Evening gala concert'
            ],
            location: 'Conference Auditorium',
            time: '2:00 PM - 9:00 PM',
            contact: 'music@skc.org'
        }
    };

    // Add click event listeners to news cards
    newsCards.forEach(card => {
        card.addEventListener('click', () => {
            const newsId = card.getAttribute('data-news');
            const news = newsData[newsId];
            const cardImage = card.querySelector('img');
            
            if (news) {
                const detailsList = news.details.map(detail => `<li>${detail}</li>`).join('');
                
                // Update popup content
                newsPopupContent.querySelector('.news-popup-image').src = cardImage.src;
                newsPopupContent.querySelector('.news-popup-image').alt = cardImage.alt;
                newsPopupContent.querySelector('.news-popup-date').textContent = news.date;
                newsPopupContent.querySelector('.news-popup-title').textContent = news.title;
                newsPopupContent.querySelector('.news-popup-description').textContent = news.description;
                newsPopupContent.querySelector('.news-popup-details ul').innerHTML = detailsList;
                newsPopupContent.querySelector('.news-popup-location').textContent = news.location;
                newsPopupContent.querySelector('.news-popup-time').textContent = news.time;
                newsPopupContent.querySelector('.news-popup-contact').textContent = news.contact;
                
                newsPopup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close popup when clicking the close button
    newsPopupClose.addEventListener('click', () => {
        newsPopup.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close popup when clicking outside
    newsPopup.addEventListener('click', (e) => {
        if (e.target === newsPopup) {
            newsPopup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// News Carousel Functionality
function initializeNewsCarousel() {
    const newsGrid = document.querySelector('.news-grid');
    const newsCards = document.querySelectorAll('.news-card');
    const prevBtn = document.getElementById('news-prev');
    const nextBtn = document.getElementById('news-next');
    let currentIndex = 0;
    const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;

    // Initialize the first set of cards
    function initializeCards() {
        newsCards.forEach((card, index) => {
            if (index < cardsPerView) {
                card.classList.add('active');
            }
        });
        updateNavigationButtons();
    }

    // Update navigation buttons state
    function updateNavigationButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= newsCards.length - cardsPerView;
    }

    // Show next set of cards
    function showNext() {
        if (currentIndex < newsCards.length - cardsPerView) {
            newsCards[currentIndex].classList.remove('active');
            newsCards[currentIndex + cardsPerView].classList.add('active');
            currentIndex++;
            updateNavigationButtons();
        }
    }

    // Show previous set of cards
    function showPrev() {
        if (currentIndex > 0) {
            newsCards[currentIndex + cardsPerView - 1].classList.remove('active');
            newsCards[currentIndex - 1].classList.add('active');
            currentIndex--;
            updateNavigationButtons();
        }
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    // Handle window resize
    window.addEventListener('resize', function() {
        const newCardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        if (newCardsPerView !== cardsPerView) {
            // Reset and reinitialize
            newsCards.forEach(card => card.classList.remove('active'));
            currentIndex = 0;
            initializeCards();
        }
    });

    // Initialize the carousel
    initializeCards();
}

// Initialize news functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeNewsPopup();
    initializeNewsCarousel();
}); 