// Beliefs data
const beliefs = [
    {
        number: 1,
        title: "The Holy Scriptures",
        content: "The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration through holy men of God who spoke and wrote as they were moved by the Holy Spirit.",
        scripture: "2 Peter 1:20, 21; 2 Timothy 3:16, 17; Psalm 119:105"
    },
    {
        number: 2,
        title: "The Trinity",
        content: "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons. God is immortal, all-powerful, all-knowing, above all, and ever present.",
        scripture: "Deuteronomy 6:4; Matthew 28:19; 2 Corinthians 13:14"
    },
    {
        number: 3,
        title: "The Father",
        content: "God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation. He is just and holy, merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness.",
        scripture: "Genesis 1:1; Revelation 4:11; 1 Corinthians 15:28"
    },
    {
        number: 4,
        title: "The Son",
        content: "God the eternal Son became incarnate in Jesus Christ. Through Him all things were created, the character of God is revealed, the salvation of humanity is accomplished, and the world is judged.",
        scripture: "John 1:1-3, 14; Colossians 1:15-19; John 3:16"
    },
    {
        number: 5,
        title: "The Holy Spirit",
        content: "God the eternal Spirit was active with the Father and the Son in Creation, incarnation, and redemption. He inspired the writers of Scripture. He filled Christ's life with power.",
        scripture: "Genesis 1:1, 2; Luke 1:35; 2 Peter 1:21"
    },
    {
        number: 6,
        title: "Creation",
        content: "God is Creator of all things, and has revealed in Scripture the authentic account of His creative activity. In six days the Lord made 'the heaven and the earth' and all living things upon the earth.",
        scripture: "Genesis 1; 2; Exodus 20:8-11; Psalm 19:1-6"
    },
    {
        number: 7,
        title: "The Nature of Humanity",
        content: "Man and woman were made in the image of God with individuality, the power and freedom to think and to do. Though created free beings, each is an indivisible unity of body, mind, and spirit.",
        scripture: "Genesis 1:26-28; 2:7; Psalm 8:4-8"
    },
    {
        number: 8,
        title: "The Great Controversy",
        content: "All humanity is now involved in a great controversy between Christ and Satan regarding the character of God, His law, and His sovereignty over the universe.",
        scripture: "Revelation 12:4-9; Isaiah 14:12-14; Ezekiel 28:12-18"
    },
    {
        number: 9,
        title: "The Life, Death, and Resurrection of Christ",
        content: "In Christ's life of perfect obedience to God's will, His suffering, death, and resurrection, God provided the only means of atonement for human sin.",
        scripture: "John 3:16; Isaiah 53; 1 Peter 2:21, 22"
    },
    {
        number: 10,
        title: "The Experience of Salvation",
        content: "In infinite love and mercy God made Christ, who knew no sin, to be sin for us, so that in Him we might be made the righteousness of God.",
        scripture: "2 Corinthians 5:17-21; John 3:16; Galatians 1:4"
    },
    {
        number: 11,
        title: "Growing in Christ",
        content: "By His death on the cross Jesus triumphed over the forces of evil. He who subjugated the demonic spirits during His earthly ministry has broken their power.",
        scripture: "Romans 8:38, 39; 1 John 4:4; Hebrews 10:25"
    },
    {
        number: 12,
        title: "The Church",
        content: "The church is the community of believers who confess Jesus Christ as Lord and Saviour. In continuity with the people of God in Old Testament times, we are called out from the world.",
        scripture: "Ephesians 1:22, 23; 5:23; Colossians 1:17, 18"
    },
    {
        number: 13,
        title: "The Remnant and Its Mission",
        content: "The universal church is composed of all who truly believe in Christ, but in the last days, a time of widespread apostasy, a remnant has been called out to keep the commandments of God.",
        scripture: "Revelation 12:17; 14:6-12; 18:1-4"
    },
    {
        number: 14,
        title: "Unity in the Body of Christ",
        content: "The church is one body with many members, called from every nation, kindred, tongue, and people. In Christ we are a new creation; distinctions of race, culture, learning, and nationality are secondary.",
        scripture: "Romans 12:4, 5; 1 Corinthians 12:12-14; Matthew 28:19, 20"
    },
    {
        number: 15,
        title: "Baptism",
        content: "By baptism we confess our faith in the death and resurrection of Jesus Christ, and testify of our death to sin and of our purpose to walk in newness of life.",
        scripture: "Romans 6:1-6; Colossians 2:12, 13; Acts 16:30-33"
    },
    {
        number: 16,
        title: "The Lord's Supper",
        content: "The Lord's Supper is a participation in the emblems of the body and blood of Jesus as an expression of faith in Him, our Lord and Saviour.",
        scripture: "1 Corinthians 10:16, 17; 11:23-30; Matthew 26:17-30"
    },
    {
        number: 17,
        title: "Spiritual Gifts and Ministries",
        content: "God bestows upon all members of His church in every age spiritual gifts which each member is to employ in loving ministry for the common good of the church and of humanity.",
        scripture: "1 Corinthians 12:4-11; Ephesians 4:8, 11-16; Romans 12:4-8"
    },
    {
        number: 18,
        title: "The Gift of Prophecy",
        content: "The Scriptures testify that one of the gifts of the Holy Spirit is prophecy. This gift is an identifying mark of the remnant church and was manifested in the ministry of Ellen G. White.",
        scripture: "Joel 2:28, 29; Acts 2:14-21; Hebrews 1:1-3"
    },
    {
        number: 19,
        title: "The Law of God",
        content: "The great principles of God's law are embodied in the Ten Commandments and exemplified in the life of Christ. They express God's love, will, and purposes concerning human conduct and relationships.",
        scripture: "Exodus 20:1-17; Matthew 5:17; Deuteronomy 28:1-14"
    },
    {
        number: 20,
        title: "The Sabbath",
        content: "The gracious Creator, after the six days of Creation, rested on the seventh day and instituted the Sabbath for all people as a memorial of Creation.",
        scripture: "Genesis 2:1-3; Exodus 20:8-11; Luke 4:16"
    },
    {
        number: 21,
        title: "Stewardship",
        content: "We are God's stewards, entrusted by Him with time and opportunities, abilities and possessions, and the blessings of the earth and its resources.",
        scripture: "Genesis 1:26-28; 2:15; 1 Chronicles 29:14"
    },
    {
        number: 22,
        title: "Christian Behavior",
        content: "We are called to be a godly people who think, feel, and act in harmony with the principles of heaven. For the Spirit to recreate in us the character of our Lord we involve ourselves only in those things.",
        scripture: "Romans 12:1, 2; 1 John 2:6; Ephesians 5:1-21"
    },
    {
        number: 23,
        title: "Marriage and the Family",
        content: "Marriage was divinely established in Eden and affirmed by Jesus to be a lifelong union between a man and a woman in loving companionship.",
        scripture: "Genesis 2:18-25; Matthew 19:3-9; John 2:1-11"
    },
    {
        number: 24,
        title: "Christ's Ministry in the Heavenly Sanctuary",
        content: "There is a sanctuary in heaven, the true tabernacle which the Lord set up and not man. In it Christ ministers on our behalf, making available to believers the benefits of His atoning sacrifice.",
        scripture: "Hebrews 8:1-5; 4:14-16; 9:11-28"
    },
    {
        number: 25,
        title: "The Second Coming of Christ",
        content: "The second coming of Christ is the blessed hope of the church, the grand climax of the gospel. The Saviour's coming will be literal, personal, visible, and worldwide.",
        scripture: "Titus 2:13; John 14:1-3; Acts 1:9-11"
    },
    {
        number: 26,
        title: "Death and Resurrection",
        content: "The wages of sin is death. But God, who alone is immortal, will grant eternal life to His redeemed. Until that day death is an unconscious state for all people.",
        scripture: "Romans 6:23; 1 Timothy 6:15, 16; Ecclesiastes 9:5, 6"
    },
    {
        number: 27,
        title: "The Millennium and the End of Sin",
        content: "The millennium is the thousand-year reign of Christ with His saints in heaven between the first and second resurrections. During this time the wicked dead will be judged.",
        scripture: "Revelation 20; 1 Corinthians 6:2, 3; Jeremiah 4:23-26"
    },
    {
        number: 28,
        title: "The New Earth",
        content: "On the new earth, in which righteousness dwells, God will provide an eternal home for the redeemed and a perfect environment for everlasting life, love, joy, and learning in His presence.",
        scripture: "2 Peter 3:13; Isaiah 35; 65:17-25; Matthew 5:5"
    }
];

// Function to create a belief card
function createBeliefCard(belief) {
    return `
        <div class="belief-card fade-in">
            <div class="belief-number">${belief.number}</div>
            <h3 class="belief-title">${belief.title}</h3>
            <p class="belief-content">${belief.content}</p>
            <p class="belief-scripture">${belief.scripture}</p>
        </div>
    `;
}

// Function to populate beliefs
function populateBeliefs() {
    const container = document.getElementById('beliefs-container');
    if (container) {
        container.innerHTML = beliefs.map(belief => createBeliefCard(belief)).join('');
    }
}

// Function to search beliefs
function searchBeliefs(query) {
    const container = document.getElementById('beliefs-container');
    if (container) {
        const filteredBeliefs = beliefs.filter(belief => 
            belief.title.toLowerCase().includes(query.toLowerCase()) ||
            belief.content.toLowerCase().includes(query.toLowerCase()) ||
            belief.scripture.toLowerCase().includes(query.toLowerCase())
        );
        container.innerHTML = filteredBeliefs.map(belief => createBeliefCard(belief)).join('');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateBeliefs();
    
    // Add search functionality
    const searchInput = document.getElementById('belief-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchBeliefs(e.target.value);
        });
    }
});

// Add scroll animation
document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.fade-in');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
        if (isVisible) {
            card.classList.add('visible');
        }
    });
}); 