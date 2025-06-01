let currentQuoteIndex = 0;
const quotes = [
    {
        text: "The life of Christ was a life of humble simplicity, yet how infinitely exalted was his mission. Christ is our example in all things.",
        source: "Ellen G. White, Steps to Christ"
    },
    {
        text: "Every uttered word exerts an influence, every action involves a train of responsibility.",
        source: "Ellen G. White, Living by Principle"
    },
    {
        text: "Daily prayer is as essential to growth in grace, and even to spiritual life itself, as is temporal food to physical well-being.",
        source: "Ellen G. White, The Desire of Ages, p. 122"
    },
    {
        text: "The greatest want of the world is the want of men who will not be bought or sold, men who in their inmost souls are true and honest.",
        source: "Ellen G. White, Education, p. 57"
    },
    {
        text: "True love is not a strong, fiery, impetuous passion. It is, on the contrary, an element calm and deep.",
        source: "Ellen G. White, The Ministry of Healing, p. 358"
    },
    {
        text: "The heart must be renewed by divine grace, or it will be in vain to seek for purity of life.",
        source: "Ellen G. White, Patriarchs and Prophets, p. 372"
    },
    {
        text: "We are to copy no human being. There is no human being wise enough to be our criterion.",
        source: "Ellen G. White, The Ministry of Healing, p. 242"
    },
    {
        text: "God does not require us to give up anything that it is for our best interest to retain.",
        source: "Ellen G. White, Steps to Christ, p. 46"
    },
    {
        text: "The surrender of all our powers to God greatly simplifies the problem of life.",
        source: "Ellen G. White, My Life Today, p. 6"
    },
    {
        text: "The Bible is God's voice speaking to us, just as surely as though we could hear it with our ears.",
        source: "Ellen G. White, Testimonies for the Church, vol. 6, p. 393"
    },
    {
        text: "Prayer is the key in the hand of faith to unlock heaven's storehouse.",
        source: "Ellen G. White, Steps to Christ, p. 94"
    },
    {
        text: "The greatest victories to the church of Christ are not gained by talent or education, but by earnest prayer.",
        source: "Ellen G. White, Patriarchs and Prophets, p. 203"
    },
    {
        text: "Character building is the most important work ever entrusted to human beings.",
        source: "Ellen G. White, Education, p. 225"
    },
    {
        text: "Let us not love in word or in tongue, but in deed and in truth.",
        source: "Ellen G. White, The Desire of Ages, p. 641"
    },
    {
        text: "To think right thoughts, we must live right lives.",
        source: "Ellen G. White, The Ministry of Healing, p. 465"
    },
    {
        text: "God's promises are all made upon conditions.",
        source: "Ellen G. White, Faith and Works, p. 47"
    },
    {
        text: "The strongest argument in favor of the gospel is a loving and lovable Christian.",
        source: "Ellen G. White, The Ministry of Healing, p. 470"
    },
    {
        text: "We should accustom ourselves to often lift the thoughts to God in prayer.",
        source: "Ellen G. White, Messages to Young People, p. 115"
    },
    {
        text: "Christ's method alone will give true success in reaching the people.",
        source: "Ellen G. White, The Ministry of Healing, p. 143"
    },
    {
        text: "The only way to grow in grace is to be disinterestedly doing the work God has given us to do.",
        source: "Ellen G. White, Testimonies for the Church, vol. 5, p. 462"
    },
    {
        text: "Every soul is as fully known to Jesus as if he were the only one for whom the Saviour died.",
        source: "Ellen G. White, The Desire of Ages, p. 480"
    },
    {
        text: "Faith is trusting God—believing that He loves us and knows best what is for our good.",
        source: "Ellen G. White, Education, p. 253"
    },
    {
        text: "The work of God in the earth presents, from age to age, a striking similarity in every great reformation or religious movement.",
        source: "Ellen G. White, The Great Controversy, p. 343"
    },
    {
        text: "The humblest worker, moved by the Holy Spirit, will touch invisible chords whose vibrations will ring to the ends of the earth.",
        source: "Ellen G. White, The Desire of Ages, p. 822"
    },
    {
        text: "God never leads His children otherwise than they would choose to be led, if they could see the end from the beginning.",
        source: "Ellen G. White, The Desire of Ages, p. 224"
    },
    {
        text: "The Bible is its own expositor. Scripture is to be compared with scripture.",
        source: "Ellen G. White, Education, p. 190"
    },
    {
        text: "The secret of success is the union of divine power with human effort.",
        source: "Ellen G. White, Patriarchs and Prophets, p. 509"
    },
    {
        text: "Every act of obedience to Christ, every act of self-denial for His sake, every trial well endured, every victory gained over temptation, is a step in the march to the glory of final victory.",
        source: "Ellen G. White, The Desire of Ages, p. 223"
    },
    {
        text: "The life of the soul cannot be sustained except by the nourishment of the Word of God.",
        source: "Ellen G. White, The Ministry of Healing, p. 122"
    },
    {
        text: "The influence of a holy life is the most convincing sermon that can be given in favor of Christianity.",
        source: "Ellen G. White, The Acts of the Apostles, p. 511"
    },
    {
        text: "God has given us His Word that we may become acquainted with its teachings and know for ourselves what He requires of us.",
        source: "Ellen G. White, The Great Controversy, p. 595"
    },
    {
        text: "The soul that is yielded to Christ becomes His own fortress, which He holds in a revolted world.",
        source: "Ellen G. White, The Desire of Ages, p. 324"
    },
    {
        text: "The work of education and the work of redemption are one.",
        source: "Ellen G. White, Education, p. 30"
    },
    {
        text: "We need to have more distinct views of Jesus and a fuller comprehension of the value of eternal realities.",
        source: "Ellen G. White, Steps to Christ, p. 21"
    },
    {
        text: "The Lord's angels are appointed to keep strict watch over those who put their faith in the Lord.",
        source: "Ellen G. White, Testimonies for the Church, vol. 7, p. 13"
    },
    {
        text: "To the heart that has become purified, all is changed.",
        source: "Ellen G. White, Thoughts from the Mount of Blessing, p. 27"
    },
    {
        text: "The nearer we come to Jesus, and the more clearly we discern the purity of His character, the more clearly we shall discern the exceeding sinfulness of sin.",
        source: "Ellen G. White, Steps to Christ, p. 29"
    },
    {
        text: "The Christian's life is not a modification or improvement of the old, but a transformation of nature.",
        source: "Ellen G. White, The Desire of Ages, p. 172"
    },
    {
        text: "The same power that upholds nature is working also in man.",
        source: "Ellen G. White, Education, p. 99"
    },
    {
        text: "No one can be a true Christian without being a missionary.",
        source: "Ellen G. White, The Desire of Ages, p. 297"
    },
    {
        text: "The Lord desires us to make mention of His goodness and tell of His power.",
        source: "Ellen G. White, Christ's Object Lessons, p. 299"
    },
    {
        text: "The more we study the divine character in the light of the cross, the more we see mercy, tenderness, and forgiveness blended with equity and justice.",
        source: "Ellen G. White, The Desire of Ages, p. 20"
    },
    {
        text: "The mind should not be left to wander at random upon every subject that the adversary of souls may suggest.",
        source: "Ellen G. White, Patriarchs and Prophets, p. 460"
    },
    {
        text: "The Bible is the only rule of faith and doctrine.",
        source: "Ellen G. White, Fundamentals of Christian Education, p. 126"
    },
    {
        text: "The work of God is not to be done in a haphazard manner, but with painstaking effort.",
        source: "Ellen G. White, Testimonies for the Church, vol. 5, p. 411"
    },
    {
        text: "The love of Christ constrains us to live not for ourselves, but for Him who died for us.",
        source: "Ellen G. White, The Acts of the Apostles, p. 71"
    },
    {
        text: "The greatest evidence of the power of Christianity that can be presented to the world is a well-ordered, well-disciplined family.",
        source: "Ellen G. White, The Adventist Home, p. 32"
    },
    {
        text: "God calls for workers who will be producers as well as consumers.",
        source: "Ellen G. White, Testimonies for the Church, vol. 6, p. 206"
    },
    {
        text: "The only way to avoid temptation is to cling to God in prayer and study His Word.",
        source: "Ellen G. White, Messages to Young People, p. 247"
    },
    {
        text: "The life of Christ in the soul is the active principle of love.",
        source: "Ellen G. White, The Desire of Ages, p. 677"
    },
    {
        text: "The more we behold Christ, the more we shall be like Him.",
        source: "Ellen G. White, Testimonies for the Church, vol. 5, p. 744"
    },
    {
        text: "God's ideal for His children is higher than the highest human thought can reach.",
        source: "Ellen G. White, The Desire of Ages, p. 311"
    },
    {
        text: "The angels of God are ever near to protect and guide those who seek to do His will.",
        source: "Ellen G. White, Patriarchs and Prophets, p. 256"
    },
    {
        text: "The cross of Christ is to be the eternal theme of every Christian.",
        source: "Ellen G. White, The Desire of Ages, p. 83"
    }
];

function getQuoteIndexForDate() {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const daysSinceEpoch = Math.floor(startOfDay.getTime() / (1000 * 60 * 60 * 24));
    return daysSinceEpoch % quotes.length;
}

function updateQuote() {
    currentQuoteIndex = getQuoteIndexForDate();
    const quoteText = document.querySelector('.quote-text');
    const quoteSource = document.querySelector('.quote-source');
    
    quoteText.textContent = quotes[currentQuoteIndex].text;
    quoteSource.textContent = quotes[currentQuoteIndex].source;
}

function copyQuote() {
    const quoteText = document.querySelector('.quote-text').textContent;
    const quoteSource = document.querySelector('.quote-source').textContent;
    const fullQuote = `${quoteText}\n\n- ${quoteSource}`;
    
    navigator.clipboard.writeText(fullQuote).then(() => {
        const copyBtn = document.querySelector('.quote-btn.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    });
}

function shareQuote() {
    const quoteText = document.querySelector('.quote-text').textContent;
    const quoteSource = document.querySelector('.quote-source').textContent;
    const fullQuote = `${quoteText}\n\n- ${quoteSource}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Daily EGW Quote',
            text: fullQuote
        }).catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareBtn = document.querySelector('.quote-btn.share-btn');
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = '<i class="fas fa-link"></i> Link Copied!';
        navigator.clipboard.writeText(fullQuote).then(() => {
            setTimeout(() => {
                shareBtn.innerHTML = originalText;
            }, 2000);
        });
    }
}

function scheduleNextUpdate() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        updateQuote();
        scheduleNextUpdate();
    }, timeUntilMidnight);
}

// Initialize the quote and schedule updates when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateQuote();
    scheduleNextUpdate();
    
    // Add event listeners for copy and share buttons
    document.querySelector('.quote-btn.copy-btn').addEventListener('click', copyQuote);
    document.querySelector('.quote-btn.share-btn').addEventListener('click', shareQuote);
}); 