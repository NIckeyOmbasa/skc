// News data structure
const newsData = [
    {
        id: 'annual-conference',
        title: 'Annual Conference Session',
        date: 'March 15, 2024',
        category: 'Conference',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500',
        description: `The South Kenya Conference is pleased to announce its Annual Conference Session, a significant event that brings together church leaders, delegates, and members from across the conference.

This year's session will focus on strategic planning, leadership development, and spiritual growth initiatives. Key highlights include:

• Election of new conference leadership
• Review of past year's achievements
• Strategic planning for upcoming initiatives
• Special worship services and fellowship opportunities`,
        highlights: [
            'Election of new conference leadership',
            'Review of past year\'s achievements',
            'Strategic planning for upcoming initiatives',
            'Special worship services and fellowship opportunities'
        ],
        eventDetails: {
            date: 'March 15-17, 2024',
            time: '9:00 AM - 5:00 PM',
            location: 'South Kenya Conference Headquarters'
        }
    },
    {
        id: 'youth-congress',
        title: 'Youth Congress 2024',
        date: 'March 10, 2024',
        category: 'Youth',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500',
        description: `Join us for an exciting Youth Congress that promises to be a transformative experience for young people across the conference.

The congress will feature inspiring speakers, engaging workshops, and meaningful fellowship activities designed to strengthen faith and build community.`,
        highlights: [
            'Inspiring keynote speakers',
            'Interactive workshops',
            'Music and worship sessions',
            'Team building activities'
        ],
        eventDetails: {
            date: 'March 10-12, 2024',
            time: '8:00 AM - 8:00 PM',
            location: 'Youth Center, Nairobi'
        }
    },
    {
        id: 'health-fair',
        title: 'Community Health Fair',
        date: 'March 5, 2024',
        category: 'Health',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500',
        description: `Our annual Community Health Fair returns with free health screenings and wellness workshops for the entire community.

This event aims to promote holistic health and wellness through various activities and educational sessions.`,
        highlights: [
            'Free health screenings',
            'Nutrition workshops',
            'Fitness demonstrations',
            'Mental health awareness sessions'
        ],
        eventDetails: {
            date: 'March 5, 2024',
            time: '10:00 AM - 4:00 PM',
            location: 'Community Center'
        }
    },
    {
        id: 'evangelism',
        title: 'Evangelism Series',
        date: 'February 28, 2024',
        category: 'Evangelism',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500',
        description: `A special training session for choir members and musicians to enhance our worship experience and evangelistic outreach.

This series will focus on developing musical skills and understanding the role of music in evangelism.`,
        highlights: [
            'Music theory workshops',
            'Vocal training sessions',
            'Worship leadership development',
            'Evangelistic music techniques'
        ],
        eventDetails: {
            date: 'February 28 - March 2, 2024',
            time: '6:00 PM - 9:00 PM',
            location: 'Conference Music Center'
        }
    },
    {
        id: 'education',
        title: 'Education Summit',
        date: 'February 20, 2024',
        category: 'Education',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500',
        description: `Join us for an enlightening Bible study series focusing on the book of Revelation.

This comprehensive study will explore the prophetic messages and their relevance to our lives today.`,
        highlights: [
            'In-depth Bible study',
            'Prophetic interpretation',
            'Group discussions',
            'Practical applications'
        ],
        eventDetails: {
            date: 'February 20 - March 20, 2024',
            time: '7:00 PM - 8:30 PM',
            location: 'Main Sanctuary'
        }
    },
    {
        id: 'music-festival',
        title: 'Music Festival',
        date: 'February 15, 2024',
        category: 'Music',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500',
        description: `Experience the annual Pathfinder camp featuring exciting activities, leadership training, and spiritual growth opportunities.

This event combines fun, learning, and spiritual development in a unique outdoor setting.`,
        highlights: [
            'Leadership training',
            'Outdoor activities',
            'Spiritual workshops',
            'Team building exercises'
        ],
        eventDetails: {
            date: 'February 15-17, 2024',
            time: 'All Day',
            location: 'Pathfinder Camp Ground'
        }
    }
    ,
    {
        id: 'music-festival',
        title: 'Music Festival',
        date: 'February 15, 2024',
        category: 'Music',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500',
        description: `Experience the annual Pathfinder camp featuring exciting activities, leadership training, and spiritual growth opportunities.

This event combines fun, learning, and spiritual development in a unique outdoor setting.`,
        highlights: [
            'Leadership training',
            'Outdoor activities',
            'Spiritual workshops',
            'Team building exercises'
        ],
        eventDetails: {
            date: 'February 15-17, 2024',
            time: 'All Day',
            location: 'Pathfinder Camp Ground'
        }
    }
    ,
    {
        id: 'music-festival',
        title: 'Music Festival',
        date: 'February 15, 2024',
        category: 'Music',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500',
        description: `Experience the annual Pathfinder camp featuring exciting activities, leadership training, and spiritual growth opportunities.

This event combines fun, learning, and spiritual development in a unique outdoor setting.`,
        highlights: [
            'Leadership training',
            'Outdoor activities',
            'Spiritual workshops',
            'Team building exercises'
        ],
        eventDetails: {
            date: 'February 15-17, 2024',
            time: 'All Day',
            location: 'Pathfinder Camp Ground'
        }
    }
];

// DOM Elements
const newsGrid = document.querySelector('.news-grid');
const newsPopup = document.querySelector('.news-popup');
const newsPopupClose = document.querySelector('.news-popup-close');
const newsPrevBtn = document.getElementById('news-prev');
const newsNextBtn = document.getElementById('news-next');

let currentNewsIndex = 0;
const newsPerPage = 3;

// Initialize news cards
function initializeNewsCards() {
    newsGrid.innerHTML = '';
    const startIndex = currentNewsIndex;
    const endIndex = Math.min(startIndex + newsPerPage, newsData.length);

    for (let i = startIndex; i < endIndex; i++) {
        const news = newsData[i];
        const newsCard = createNewsCard(news);
        newsGrid.appendChild(newsCard);
    }

    updateNavigationButtons();
}

// Create news card element
function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.dataset.news = news.id;

    card.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <div class="news-content">
            <span class="date">${news.date}</span>
            <h3>${news.title}</h3>
            <p>${news.description.split('\n\n')[0]}</p>
            <a href="#" class="read-more">Read More</a>
        </div>
    `;

    // Add click event for read more
    const readMoreBtn = card.querySelector('.read-more');
    readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openNewsPopup(news);
    });

    return card;
}

// Open news popup
function openNewsPopup(news) {
    const popupImage = newsPopup.querySelector('.news-popup-image');
    const popupDate = newsPopup.querySelector('.news-popup-date');
    const popupCategory = newsPopup.querySelector('.news-popup-category');
    const popupTitle = newsPopup.querySelector('.news-popup-title');
    const popupDescription = newsPopup.querySelector('.news-popup-description');
    const highlightsList = newsPopup.querySelector('.highlights-list');
    const eventDate = newsPopup.querySelector('.event-date-text');
    const eventTime = newsPopup.querySelector('.event-time-text');
    const eventLocation = newsPopup.querySelector('.event-location-text');

    popupImage.src = news.image;
    popupImage.alt = news.title;
    popupDate.textContent = news.date;
    popupCategory.textContent = news.category;
    popupTitle.textContent = news.title;
    popupDescription.innerHTML = news.description.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update highlights
    highlightsList.innerHTML = news.highlights.map(highlight => `<li>${highlight}</li>`).join('');
    
    // Update event details
    eventDate.textContent = news.eventDetails.date;
    eventTime.textContent = news.eventDetails.time;
    eventLocation.textContent = news.eventDetails.location;

    newsPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close news popup
function closeNewsPopup() {
    newsPopup.classList.remove('active');
    document.body.style.overflow = '';
}

// Update navigation buttons
function updateNavigationButtons() {
    newsPrevBtn.disabled = currentNewsIndex === 0;
    newsNextBtn.disabled = currentNewsIndex + newsPerPage >= newsData.length;
}

// Event Listeners
newsPopupClose.addEventListener('click', closeNewsPopup);

newsPopup.addEventListener('click', (e) => {
    if (e.target === newsPopup) {
        closeNewsPopup();
    }
});

newsPrevBtn.addEventListener('click', () => {
    if (currentNewsIndex > 0) {
        currentNewsIndex -= newsPerPage;
        initializeNewsCards();
    }
});

newsNextBtn.addEventListener('click', () => {
    if (currentNewsIndex + newsPerPage < newsData.length) {
        currentNewsIndex += newsPerPage;
        initializeNewsCards();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeNewsCards();
});