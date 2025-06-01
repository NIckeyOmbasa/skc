// Department data
const departments = {
    chaplaincy: {
        name: "Adventist Chaplaincy Ministries",
        logo: "../assets/images/ACM-Chaplaincy-Logo.svg",
        description: "Adventist Chaplaincy Ministries provides spiritual care and support to healthcare professionals and patients. We work to bring hope and healing through Christ-centered ministry in healthcare settings.",
        mission: "To provide compassionate spiritual care and support to healthcare professionals and patients, sharing God's love and hope in times of need.",
        activities: [
            "Hospital chaplaincy services",
            "Spiritual counseling",
            "Prayer support",
            "Bereavement care",
            "Staff support programs"
        ],
        scripture: "He heals the brokenhearted and binds up their wounds. - Psalm 147:3"
    },
    children: {
        name: "Children's Ministries",
        logo: "../assets/images/children-logo.png",
        description: "Children's Ministries is dedicated to nurturing children into a loving, serving relationship with Jesus. We believe that children are a vital part of the church family and should be given opportunities to grow in their faith.",
        mission: "To help children develop a lifelong relationship with Jesus Christ and prepare them for a life of service in the church and community.",
        activities: [
            "Sabbath School programs",
            "Vacation Bible School",
            "Children's choir",
            "Bible study groups",
            "Special events and activities"
        ],
        scripture: "Train up a child in the way he should go, and when he is old he will not depart from it. - Proverbs 22:6"
    },
    communication: {
        name: "Communication",
        logo: "../assets/images/communication-logo.jpg",
        description: "The Communication Department is responsible for effectively sharing the church's message through various media platforms. We work to tell the story of the church and its mission.",
        mission: "To effectively communicate the church's message and mission to both members and the community through various media channels.",
        activities: [
            "Media production",
            "Social media management",
            "Newsletter publication",
            "Website maintenance",
            "Public relations"
        ],
        scripture: "Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. - Matthew 28:19"
    },
    education: {
        name: "Education",
        logo: "../assets/images/education-logo.webp",
        description: "The Education Department is dedicated to providing quality Christian education that integrates faith and learning. We support schools in their mission to develop students spiritually, academically, and socially.",
        mission: "To provide a Christ-centered education that prepares students for service in this world and for the world to come.",
        activities: [
            "School support and development",
            "Teacher training",
            "Curriculum development",
            "Student programs",
            "Parent education"
        ],
        scripture: "The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is understanding. - Proverbs 9:10"
    },
    family: {
        name: "Family Ministries",
        logo: "../assets/images/AFamilyM-Logo.png",
        description: "Family Ministries is dedicated to strengthening families through biblical principles and support. We provide resources and programs to help families grow in their relationship with God and each other.",
        mission: "To strengthen families through Christ-centered principles and support, helping them build strong, healthy relationships.",
        activities: [
            "Marriage enrichment programs",
            "Parenting workshops",
            "Family counseling",
            "Family retreats",
            "Support groups"
        ],
        scripture: "As for me and my house, we will serve the Lord. - Joshua 24:15"
    },
    health: {
        name: "Health Ministries",
        logo: "../assets/images/health-ministries-logo.png",
        description: "Health Ministries promotes the Adventist health message and lifestyle for whole-person health. We believe in the connection between physical, mental, and spiritual well-being.",
        mission: "To help people experience the joy of whole-person health through the integration of physical, mental, and spiritual wellness.",
        activities: [
            "Health education programs",
            "Cooking classes",
            "Exercise programs",
            "Health screenings",
            "Wellness workshops"
        ],
        scripture: "Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers. - 3 John 1:2"
    },
    ministerial: {
        name: "Ministerial Association",
        logo: "../assets/images/ministerial-logo.webp",
        description: "The Ministerial Association supports and equips pastors in their ministry. We provide resources, training, and fellowship opportunities for church leaders.",
        mission: "To equip and support pastors in their ministry, helping them grow spiritually and professionally.",
        activities: [
            "Pastoral training",
            "Leadership development",
            "Ministerial retreats",
            "Resource sharing",
            "Peer support groups"
        ],
        scripture: "And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers. - Ephesians 4:11"
    },
    volunteer: {
        name: "Adventist Volunteer Service",
        logo: "../assets/images/volunteer-service-logo.svg",
        description: "Adventist Volunteer Service coordinates volunteer opportunities for church members to serve in various capacities. We connect willing volunteers with meaningful service opportunities.",
        mission: "To mobilize and coordinate volunteers for service in the church and community.",
        activities: [
            "Volunteer coordination",
            "Service projects",
            "Mission trips",
            "Community outreach",
            "Skills development"
        ],
        scripture: "For even the Son of Man did not come to be served, but to serve, and to give His life a ransom for many. - Mark 10:45"
    },
    "muslim-relations": {
        name: "Adventist Muslim Relations",
        logo: "../assets/images/AMR-logo.png",
        description: "Adventist Muslim Relations works to build bridges of understanding and friendship with our Muslim neighbors. We promote dialogue and cooperation between faith communities.",
        mission: "To foster understanding and build positive relationships between Adventists and Muslims.",
        activities: [
            "Interfaith dialogue",
            "Community outreach",
            "Cultural events",
            "Educational programs",
            "Service projects"
        ],
        scripture: "If it is possible, as much as depends on you, live peaceably with all men. - Romans 12:18"
    },
    publishing: {
        name: "Publishing",
        logo: "../assets/images/Publishing_Logo.webp",
        description: "The Publishing Department produces and distributes Christian literature and resources. We work to share the gospel message through various media formats.",
        mission: "To produce and distribute quality Christian literature that shares the gospel message.",
        activities: [
            "Book publishing",
            "Magazine production",
            "Digital content",
            "Resource distribution",
            "Author support"
        ],
        scripture: "The grass withers, the flower fades, but the word of our God stands forever. - Isaiah 40:8"
    },
    "sabbath-school": {
        name: "Sabbath School/Personal Ministries",
        logo: "../assets/images/sabbathsch-pm-logo.svg",
        description: "Sabbath School and Personal Ministries coordinate Bible study programs and personal evangelism. We help members grow in their faith and share it with others.",
        mission: "To facilitate spiritual growth through Bible study and equip members for personal evangelism.",
        activities: [
            "Bible study groups",
            "Evangelism training",
            "Outreach programs",
            "Small group ministry",
            "Resource development"
        ],
        scripture: "Study to show yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth. - 2 Timothy 2:15"
    },
    stewardship: {
        name: "Stewardship",
        logo: "../assets/images/stewardship-logo.webp",
        description: "The Stewardship Department teaches biblical principles of financial management and resource stewardship. We help members understand their role as God's stewards.",
        mission: "To teach and promote biblical principles of stewardship in all aspects of life.",
        activities: [
            "Financial education",
            "Resource management",
            "Tithe and offering education",
            "Budgeting workshops",
            "Stewardship seminars"
        ],
        scripture: "Bring all the tithes into the storehouse, that there may be food in My house. - Malachi 3:10"
    },
    women: {
        name: "Women's Ministries",
        logo: "../assets/images/WomenM_logo.webp",
        description: "Women's Ministries empowers women in service and leadership. We provide opportunities for spiritual growth, fellowship, and ministry.",
        mission: "To empower women to reach their potential in Christ and serve in the church and community.",
        activities: [
            "Leadership training",
            "Spiritual retreats",
            "Service projects",
            "Support groups",
            "Mentoring programs"
        ],
        scripture: "She extends her hand to the poor, yes, she reaches out her hands to the needy. - Proverbs 31:20"
    },
    youth: {
        name: "Youth",
        logo: "../assets/images/youth-logo.jpg",
        description: "Youth Ministries is committed to empowering young people to be active participants in the mission of the church. We provide opportunities for spiritual growth, leadership development, and community service. It comprises of 5 clubs (Junior Youth: Adventurers & Pathfinders; Senior Youth: Ambassadors & Young Adults; Public Campus Ministries) and 2 Leadership Curriculums: Masterguide, Senior Youth Leader(SYL)",
        mission: "To lead young people into a saving relationship with Jesus Christ and help them embrace His call to discipleship.",
        activities: [
            "Youth Bible study",
            "Leadership training",
            "Community service projects",
            "Youth camps and retreats",
            "Social activities and events"
        ],
        scripture: "Let no one despise your youth, but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity. - 1 Timothy 4:12"
    }
};

// Function to show department popup
function showDepartmentPopup(departmentId) {
    const department = departments[departmentId];
    if (!department) return;

    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'department-popup';
    popup.innerHTML = `
        <div class="department-popup-content">
            <button class="department-popup-close">&times;</button>
            <div class="department-header">
                <div class="department-logo">
                    <img src="${department.logo}" alt="${department.name} Logo">
                </div>
                <h2 class="department-name">${department.name}</h2>
            </div>
            <p class="department-description">${department.description}</p>
            <div class="department-mission">
                <h4>Our Mission</h4>
                <p>${department.mission}</p>
            </div>
            <div class="department-activities">
                <h4>Our Activities</h4>
                <ul>
                    ${department.activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            </div>
            <p class="department-scripture">${department.scripture}</p>
        </div>
    `;

    // Add popup to body
    document.body.appendChild(popup);

    // Show popup
    setTimeout(() => popup.classList.add('active'), 10);

    // Close popup when clicking close button or outside popup
    popup.addEventListener('click', (e) => {
        if (e.target === popup || e.target.classList.contains('department-popup-close')) {
            popup.classList.remove('active');
            setTimeout(() => popup.remove(), 300);
        }
    });
}

// Add click event listeners to department cards
document.addEventListener('DOMContentLoaded', () => {
    const departmentCards = document.querySelectorAll('.department-card');
    departmentCards.forEach(card => {
        const btn = card.querySelector('.btn');
        const departmentId = card.dataset.department;
        
        if (btn && departmentId) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showDepartmentPopup(departmentId);
            });
        }
    });
}); 