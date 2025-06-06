document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the header
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year-display').textContent = currentYear;

    // Quarter tabs functionality
    const quarterTabs = document.querySelectorAll('.quarter-tab');
    const quarterEvents = document.querySelectorAll('.quarter-events');
    const monthFilter = document.getElementById('month-filter');

    // Function to update month filter options
    function updateMonthFilter(quarter) {
        // Clear existing options except "Select Month"
        while (monthFilter.options.length > 1) {
            monthFilter.remove(1);
        }

        // Add months based on quarter
        const months = {
            1: ['January', 'February', 'March'],
            2: ['April', 'May', 'June'],
            3: ['July', 'August', 'September'],
            4: ['October', 'November', 'December']
        };

        months[quarter].forEach((month, index) => {
            const option = document.createElement('option');
            option.value = quarter * 3 - 2 + index;
            option.textContent = month;
            monthFilter.appendChild(option);
        });

        // Reset to "Select Month"
        monthFilter.value = 'all';
    }

    quarterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and events
            quarterTabs.forEach(t => t.classList.remove('active'));
            quarterEvents.forEach(e => e.classList.remove('active'));

            // Add active class to clicked tab and corresponding events
            tab.classList.add('active');
            const quarterId = `quarter-${tab.dataset.quarter}`;
            const quarterSection = document.getElementById(quarterId);
            quarterSection.classList.add('active');

            // Update month filter options
            updateMonthFilter(parseInt(tab.dataset.quarter));

            // If there's an active search, update visibility
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                // First hide all quarter sections
                quarterEvents.forEach(quarter => {
                    quarter.style.display = 'none';
                });

                // Show the active quarter section
                quarterSection.style.display = 'block';

                // Filter events within the active quarter
                const eventCards = quarterSection.querySelectorAll('.event-card');
                let hasVisibleEvents = false;

                eventCards.forEach(card => {
                    const eventTitle = card.querySelector('h3').textContent.toLowerCase();
                    const department = card.querySelector('.department').textContent.toLowerCase();
                    const venue = card.querySelector('.venue').textContent.toLowerCase();
                    
                    const isVisible = 
                        eventTitle.includes(searchTerm) ||
                        department.includes(searchTerm) ||
                        venue.includes(searchTerm);
                    
                    card.style.display = isVisible ? 'flex' : 'none';
                    
                    if (isVisible) {
                        hasVisibleEvents = true;
                        // Make sure the parent month section is visible
                        const monthSection = card.closest('.month-section');
                        if (monthSection) {
                            monthSection.style.display = 'block';
                        }
                    }
                });

                // Update no results message
                const noResultsMessage = document.getElementById('no-results-message');
                if (!hasVisibleEvents) {
                    if (!noResultsMessage) {
                        const message = document.createElement('div');
                        message.id = 'no-results-message';
                        message.style.textAlign = 'center';
                        message.style.padding = '2rem';
                        message.style.color = '#666';
                        message.innerHTML = 'No events found matching your search criteria.';
                        document.querySelector('.events-container').appendChild(message);
                    }
                } else {
                    if (noResultsMessage) {
                        noResultsMessage.remove();
                    }
                }
            } else {
                // If no search term, show all events in the active quarter
                quarterEvents.forEach(quarter => {
                    quarter.style.display = 'none';
                });
                quarterSection.style.display = 'block';
                
                // Show all events in the active quarter
                const eventCards = quarterSection.querySelectorAll('.event-card');
                eventCards.forEach(card => {
                    card.style.display = 'flex';
                });
                
                // Show all month sections in the active quarter
                const monthSections = quarterSection.querySelectorAll('.month-section');
                monthSections.forEach(section => {
                    section.style.display = 'block';
                });
                
                // Remove no results message if it exists
                const noResultsMessage = document.getElementById('no-results-message');
                if (noResultsMessage) {
                    noResultsMessage.remove();
                }
            }
        });
    });

    // Initialize month filter for first quarter
    updateMonthFilter(1);

    // Month filter functionality
    const monthSections = document.querySelectorAll('.month-section');

    monthFilter.addEventListener('change', () => {
        const selectedMonth = monthFilter.value;
        const activeQuarter = document.querySelector('.quarter-events.active');

        monthSections.forEach(section => {
            if (section.closest('.quarter-events') === activeQuarter) {
                if (selectedMonth === 'all' || section.dataset.month === selectedMonth) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            }
        });
    });

    // Sample events data
    const eventsData = {
        quarter1: {
            january: [
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'Jan',
                    name: 'Youth Conference',
                    department: 'Youth Department',
                    venue: 'Conference Center'
                },
                {
                    startDay: 20,
                    endDay: 22,
                    month: 'Jan',
                    name: 'Health Seminar',
                    department: 'Health Department',
                    venue: 'Main Hall'
                },
                {
                    startDay: 25,
                    endDay: 25,
                    month: 'Jan',
                    name: 'Music Workshop',
                    department: 'Music Department',
                    venue: 'Chapel'
                }
            ],
            february: [
                {
                    startDay: 5,
                    endDay: 7,
                    month: 'Feb',
                    name: 'Leadership Training',
                    department: 'Administration',
                    venue: 'Training Center'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'Feb',
                    name: 'Children\'s Ministry Workshop',
                    department: 'Children\'s Ministry',
                    venue: 'Youth Center'
                },
                {
                    startDay: 19,
                    endDay: 21,
                    month: 'Feb',
                    name: 'Prayer Retreat',
                    department: 'Spiritual Development',
                    venue: 'Retreat Center'
                }
            ],
            march: [
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'Mar',
                    name: 'Music Workshop',
                    department: 'Music Department',
                    venue: 'Chapel'
                },
                {
                    startDay: 17,
                    endDay: 19,
                    month: 'Mar',
                    name: 'Youth Evangelism Training',
                    department: 'Youth Department',
                    venue: 'Conference Hall'
                },
                {
                    startDay: 24,
                    endDay: 24,
                    month: 'Mar',
                    name: 'Health Ministry Seminar',
                    department: 'Health Department',
                    venue: 'Main Hall'
                }
            ]
        },
        quarter2: {
            april: [
                {
                    startDay: 5,
                    endDay: 7,
                    month: 'Apr',
                    name: 'Easter Convention',
                    department: 'Spiritual Development',
                    venue: 'Main Auditorium'
                },
                {
                    startDay: 12,
                    endDay: 14,
                    month: 'Apr',
                    name: 'Youth Leadership Summit',
                    department: 'Youth Department',
                    venue: 'Conference Center'
                },
                {
                    startDay: 19,
                    endDay: 19,
                    month: 'Apr',
                    name: 'Music Ministry Workshop',
                    department: 'Music Department',
                    venue: 'Chapel'
                }
            ],
            may: [
                {
                    startDay: 3,
                    endDay: 5,
                    month: 'May',
                    name: 'Family Life Conference',
                    department: 'Family Ministries',
                    venue: 'Conference Center'
                },
                {
                    startDay: 10,
                    endDay: 10,
                    month: 'May',
                    name: 'Health Ministry Workshop',
                    department: 'Health Department',
                    venue: 'Main Hall'
                },
                {
                    startDay: 17,
                    endDay: 19,
                    month: 'May',
                    name: 'Youth Evangelism Training',
                    department: 'Youth Department',
                    venue: 'Training Center'
                }
            ],
            june: [
                {
                    startDay: 7,
                    endDay: 9,
                    month: 'Jun',
                    name: 'Leadership Development Seminar',
                    department: 'Administration',
                    venue: 'Conference Hall'
                },
                {
                    startDay: 14,
                    endDay: 16,
                    month: 'Jun',
                    name: 'Children\'s Ministry Conference',
                    department: 'Children\'s Ministry',
                    venue: 'Youth Center'
                },
                {
                    startDay: 21,
                    endDay: 21,
                    month: 'Jun',
                    name: 'Music Workshop',
                    department: 'Music Department',
                    venue: 'Chapel'
                }
            ]
        },
        quarter3: {
            july: [
                {
                    startDay: 5,
                    endDay: 7,
                    month: 'Jul',
                    name: 'Youth Camp',
                    department: 'Youth Department',
                    venue: 'Camp Site'
                },
                {
                    startDay: 12,
                    endDay: 12,
                    month: 'Jul',
                    name: 'Health Ministry Workshop',
                    department: 'Health Department',
                    venue: 'Main Hall'
                },
                {
                    startDay: 19,
                    endDay: 21,
                    month: 'Jul',
                    name: 'Family Life Seminar',
                    department: 'Family Ministries',
                    venue: 'Conference Center'
                }
            ],
            august: [
                {
                    startDay: 2,
                    endDay: 4,
                    month: 'Aug',
                    name: 'Leadership Training',
                    department: 'Administration',
                    venue: 'Training Center'
                },
                {
                    startDay: 9,
                    endDay: 11,
                    month: 'Aug',
                    name: 'Music Ministry Conference',
                    department: 'Music Department',
                    venue: 'Main Auditorium'
                },
                {
                    startDay: 16,
                    endDay: 16,
                    month: 'Aug',
                    name: 'Children\'s Ministry Workshop',
                    department: 'Children\'s Ministry',
                    venue: 'Youth Center'
                }
            ],
            september: [
                {
                    startDay: 6,
                    endDay: 8,
                    month: 'Sep',
                    name: 'Youth Evangelism Training',
                    department: 'Youth Department',
                    venue: 'Conference Hall'
                },
                {
                    startDay: 13,
                    endDay: 15,
                    month: 'Sep',
                    name: 'Health Ministry Outreach',
                    department: 'Health Department',
                    venue: 'Community Center'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'Sep',
                    name: 'Music Workshop',
                    department: 'Music Department',
                    venue: 'Chapel'
                }
            ]
        },
        quarter4: {
            october: [
                {
                    startDay: 4,
                    endDay: 6,
                    month: 'Oct',
                    name: 'Leadership Summit',
                    department: 'Administration',
                    venue: 'Conference Center'
                },
                {
                    startDay: 11,
                    endDay: 13,
                    month: 'Oct',
                    name: 'Youth Conference',
                    department: 'Youth Department',
                    venue: 'Main Auditorium'
                },
                {
                    startDay: 18,
                    endDay: 18,
                    month: 'Oct',
                    name: 'Health Ministry Workshop',
                    department: 'Health Department',
                    venue: 'Main Hall'
                }
            ],
            november: [
                {
                    startDay: 1,
                    endDay: 3,
                    month: 'Nov',
                    name: 'Family Life Conference',
                    department: 'Family Ministries',
                    venue: 'Conference Center'
                },
                {
                    startDay: 8,
                    endDay: 10,
                    month: 'Nov',
                    name: 'Music Ministry Workshop',
                    department: 'Music Department',
                    venue: 'Chapel'
                },
                {
                    startDay: 15,
                    endDay: 15,
                    month: 'Nov',
                    name: 'Children\'s Ministry Workshop',
                    department: 'Children\'s Ministry',
                    venue: 'Youth Center'
                }
            ],
            december: [
                {
                    startDay: 6,
                    endDay: 8,
                    month: 'Dec',
                    name: 'Youth Evangelism Training',
                    department: 'Youth Department',
                    venue: 'Training Center'
                },
                {
                    startDay: 13,
                    endDay: 15,
                    month: 'Dec',
                    name: 'Leadership Development Seminar',
                    department: 'Administration',
                    venue: 'Conference Hall'
                },
                {
                    startDay: 20,
                    endDay: 20,
                    month: 'Dec',
                    name: 'Christmas Program',
                    department: 'Music Department',
                    venue: 'Main Auditorium'
                }
            ]
        }
    };

    // Function to create event card
    function createEventCard(event) {
        const dateDisplay = event.startDay === event.endDay 
            ? `<span class="day">${event.startDay}</span>`
            : `<span class="day">${event.startDay}-${event.endDay}</span>`;
            
        return `
            <div class="event-card">
                <div class="event-date">
                    ${dateDisplay}
                    <span class="month">${event.month}</span>
                </div>
                <div class="event-details">
                    <h3>${event.name}</h3>
                    <p class="department">${event.department}</p>
                    <p class="venue"><i class="fas fa-map-marker-alt"></i> ${event.venue}</p>
                </div>
            </div>
        `;
    }

    // Function to populate events
    function populateEvents() {
        // Populate Quarter 1 events
        const quarter1 = document.getElementById('quarter-1');
        const quarter2 = document.getElementById('quarter-2');
        const quarter3 = document.getElementById('quarter-3');
        const quarter4 = document.getElementById('quarter-4');
        
        // Quarter 1
        eventsData.quarter1.january.forEach(event => {
            quarter1.querySelector('[data-month="1"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter1.february.forEach(event => {
            quarter1.querySelector('[data-month="2"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter1.march.forEach(event => {
            quarter1.querySelector('[data-month="3"] .events-grid').innerHTML += createEventCard(event);
        });

        // Quarter 2
        eventsData.quarter2.april.forEach(event => {
            quarter2.querySelector('[data-month="4"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter2.may.forEach(event => {
            quarter2.querySelector('[data-month="5"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter2.june.forEach(event => {
            quarter2.querySelector('[data-month="6"] .events-grid').innerHTML += createEventCard(event);
        });

        // Quarter 3
        eventsData.quarter3.july.forEach(event => {
            quarter3.querySelector('[data-month="7"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter3.august.forEach(event => {
            quarter3.querySelector('[data-month="8"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter3.september.forEach(event => {
            quarter3.querySelector('[data-month="9"] .events-grid').innerHTML += createEventCard(event);
        });

        // Quarter 4
        eventsData.quarter4.october.forEach(event => {
            quarter4.querySelector('[data-month="10"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter4.november.forEach(event => {
            quarter4.querySelector('[data-month="11"] .events-grid').innerHTML += createEventCard(event);
        });
        eventsData.quarter4.december.forEach(event => {
            quarter4.querySelector('[data-month="12"] .events-grid').innerHTML += createEventCard(event);
        });
    }

    // Initialize events
    populateEvents();

    // Event Search Functionality
    const searchInput = document.getElementById('event-search');
    const searchBtn = document.getElementById('search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const eventCards = document.querySelectorAll('.event-card');
        let hasVisibleEvents = false;
        
        // First, hide all quarter sections
        document.querySelectorAll('.quarter-events').forEach(quarter => {
            quarter.style.display = 'none';
        });
        
        eventCards.forEach(card => {
            const eventTitle = card.querySelector('h3').textContent.toLowerCase();
            const department = card.querySelector('.department').textContent.toLowerCase();
            const venue = card.querySelector('.venue').textContent.toLowerCase();
            
            const isVisible = 
                eventTitle.includes(searchTerm) ||
                department.includes(searchTerm) ||
                venue.includes(searchTerm);
            
            // Show/hide the card
            card.style.display = isVisible ? 'flex' : 'none';
            
            if (isVisible) {
                hasVisibleEvents = true;
                
                // Make sure the parent month section is visible
                const monthSection = card.closest('.month-section');
                if (monthSection) {
                    monthSection.style.display = 'block';
                    
                    // Make sure the parent quarter section is visible
                    const quarterSection = monthSection.closest('.quarter-events');
                    if (quarterSection) {
                        quarterSection.style.display = 'block';
                    }
                }
            }
        });
        
        // Show/hide quarter tabs based on search results
        const quarterTabs = document.querySelectorAll('.quarter-tab');
        quarterTabs.forEach(tab => {
            const quarterId = `quarter-${tab.dataset.quarter}`;
            const quarterSection = document.getElementById(quarterId);
            if (quarterSection) {
                tab.style.display = quarterSection.style.display === 'block' ? 'block' : 'none';
            }
        });
        
        // If no events are found, show a message
        const noResultsMessage = document.getElementById('no-results-message');
        if (!hasVisibleEvents) {
            if (!noResultsMessage) {
                const message = document.createElement('div');
                message.id = 'no-results-message';
                message.style.textAlign = 'center';
                message.style.padding = '2rem';
                message.style.color = '#666';
                message.innerHTML = 'No events found matching your search criteria.';
                document.querySelector('.events-container').appendChild(message);
            }
        } else {
            if (noResultsMessage) {
                noResultsMessage.remove();
            }
        }
    }

    // Search on input change with debounce
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(performSearch, 300);
    });

    // Search on button click
    searchBtn.addEventListener('click', performSearch);

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Clear search when month filter changes
    document.getElementById('month-filter').addEventListener('change', function() {
        searchInput.value = '';
        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach(card => {
            card.style.display = 'flex';
            const monthSection = card.closest('.month-section');
            if (monthSection) {
                monthSection.style.display = 'block';
            }
            const quarterSection = card.closest('.quarter-events');
            if (quarterSection) {
                quarterSection.style.display = 'block';
            }
        });
        
        // Show all quarter tabs
        const quarterTabs = document.querySelectorAll('.quarter-tab');
        quarterTabs.forEach(tab => {
            tab.style.display = 'block';
        });
        
        // Remove no results message if it exists
        const noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    });
}); 