// YouTube channel ID - Replace with your actual channel ID
const CHANNEL_ID = 'YOUR_CHANNEL_ID';

// YouTube API key - Replace with your actual API key
const API_KEY = 'YOUR_API_KEY';

// Function to check if channel is live
async function checkLiveStatus() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=live&key=${API_KEY}`);
        const data = await response.json();
        
        const liveStreamPlaceholder = document.getElementById('live-stream-placeholder');
        const liveStreamPlayer = document.getElementById('live-stream-player');
        const youtubeEmbed = document.getElementById('youtube-embed');

        if (data.items && data.items.length > 0) {
            // Channel is live
            const videoId = data.items[0].id.videoId;
            youtubeEmbed.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            liveStreamPlaceholder.style.display = 'none';
            liveStreamPlayer.style.display = 'block';
        } else {
            // Channel is not live
            liveStreamPlaceholder.style.display = 'block';
            liveStreamPlayer.style.display = 'none';
            youtubeEmbed.src = '';
        }
    } catch (error) {
        console.error('Error checking live status:', error);
    }
}

// Check live status every 5 minutes
checkLiveStatus();
setInterval(checkLiveStatus, 300000);

// Initial check when page loads
document.addEventListener('DOMContentLoaded', checkLiveStatus); 