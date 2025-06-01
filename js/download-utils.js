function createImageWithText(text, source, type) {
    return new Promise((resolve, reject) => {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = 1080;
        canvas.height = 1080;
        
        // Load background image
        const bgImage = new Image();
        bgImage.crossOrigin = 'anonymous';
        
        bgImage.onload = () => {
            // Draw background image
            ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
            
            // Add semi-transparent overlay for better text readability
            ctx.fillStyle = 'rgba(26, 60, 52, 0.85)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add decorative elements
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.beginPath();
            ctx.arc(canvas.width - 200, canvas.height - 200, 300, 0, Math.PI * 2);
            ctx.fill();
            
            // Load the logo
            const logo = new Image();
            logo.crossOrigin = 'anonymous';
            
            logo.onload = () => {
                try {
                    // Draw logo (twice as big)
                    const logoSize = 120;
                    const logoX = (canvas.width - logoSize) / 2;
                    ctx.drawImage(logo, logoX, 80, logoSize, logoSize);
                    
                    // Draw conference name
                    ctx.fillStyle = '#FFFFFF';
                    ctx.font = 'bold 35px Advent Sans';
                    ctx.textAlign = 'center';
                    ctx.fillText('South Kenya Conference', canvas.width / 2, 240);
                    
                    // Draw the type (Today's Verse or Today's Quote)
                    ctx.font = 'bold 32px Open Sans';
                    ctx.fillText(`Today's ${type}`, canvas.width / 2, 320);
                    
                    // Draw quote icon
                    const iconSize = 60;
                    const iconX = (canvas.width - iconSize) / 2;
                    const iconY = 380;
                    
                    // Draw icon background
                    ctx.fillStyle = '#800000';
                    ctx.beginPath();
                    ctx.arc(iconX + iconSize/2, iconY + iconSize/2, iconSize/2, 0, Math.PI * 2);
                    ctx.fill();
                    
                    // Draw book icon
                    ctx.fillStyle = '#FFFFFF';
                    ctx.save();
                    ctx.translate(iconX + iconSize/2, iconY + iconSize/2);
                    ctx.scale(1.2, 1.2);  // Scale the icon slightly
                    
                    // Book cover
                    ctx.beginPath();
                    ctx.moveTo(-15, -20);
                    ctx.lineTo(15, -20);
                    ctx.lineTo(15, 20);
                    ctx.lineTo(-15, 20);
                    ctx.closePath();
                    ctx.fill();
                    
                    // Book spine
                    ctx.fillStyle = '#800000';
                    ctx.beginPath();
                    ctx.moveTo(-15, -20);
                    ctx.lineTo(-12, -20);
                    ctx.lineTo(-12, 20);
                    ctx.lineTo(-15, 20);
                    ctx.closePath();
                    ctx.fill();
                    
                    // Book pages
                    ctx.fillStyle = '#FFFFFF';
                    ctx.beginPath();
                    ctx.moveTo(-12, -18);
                    ctx.lineTo(13, -18);
                    ctx.lineTo(13, 18);
                    ctx.lineTo(-12, 18);
                    ctx.closePath();
                    ctx.fill();
                    
                    // Book lines
                    ctx.strokeStyle = '#800000';
                    ctx.lineWidth = 1;
                    for(let i = -15; i < 15; i += 5) {
                        ctx.beginPath();
                        ctx.moveTo(-10, i);
                        ctx.lineTo(10, i);
                        ctx.stroke();
                    }
                    
                    ctx.restore();
                    
                    // Configure text for verse/quote
                    const maxWidth = canvas.width - 200;
                    const lineHeight = 60;
                    const words = text.split(' ');
                    let line = '';
                    let y = canvas.height / 2;
                    
                    // Draw the main text
                    ctx.font = 'bold 48px Open Sans';
                    ctx.textBaseline = 'alphabetic';
                    for (let word of words) {
                        const testLine = line + word + ' ';
                        const metrics = ctx.measureText(testLine);
                        
                        if (metrics.width > maxWidth && line !== '') {
                            ctx.fillText(line, canvas.width / 2, y);
                            line = word + ' ';
                            y += lineHeight;
                        } else {
                            line = testLine;
                        }
                    }
                    ctx.fillText(line, canvas.width / 2, y);
                    
                    // Draw the source
                    ctx.font = 'italic 30px Open Sans';
                    ctx.fillText(source, canvas.width / 2, y + lineHeight + 40);
                    
                    resolve(canvas.toDataURL('image/png'));
                } catch (error) {
                    reject(error);
                }
            };
            
            logo.onerror = (error) => {
                reject(new Error('Failed to load logo: ' + error));
            };
            
            // Set the logo source after setting up the event handlers
            logo.src = 'https://i.ibb.co/RkZ1g2wv/sda-logo.png';
        };
        
        bgImage.onerror = (error) => {
            reject(new Error('Failed to load background image: ' + error));
        };
        
        // Set the background image source
        bgImage.src = 'https://i.ibb.co/SwCKHfNG/rm222-mind-33.jpg';
    });
}

async function downloadImage(text, source, type) {
    try {
        const imageData = await createImageWithText(text, source, type);
        const link = document.createElement('a');
        link.href = imageData;
        link.download = `${type.toLowerCase()}-${new Date().toISOString().split('T')[0]}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error creating/downloading image:', error);
        alert('Failed to create image. Please try again.');
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Verse download button
    const verseDownloadBtn = document.querySelector('.verse-container .download-btn');
    if (verseDownloadBtn) {
        verseDownloadBtn.addEventListener('click', async () => {
            try {
                const verseText = document.querySelector('.verse-text').textContent;
                const verseReference = document.querySelector('.verse-reference').textContent;
                await downloadImage(verseText, verseReference, 'Verse');
            } catch (error) {
                console.error('Error downloading verse:', error);
                alert('Failed to download verse. Please try again.');
            }
        });
    }
    
    // Quote download button
    const quoteDownloadBtn = document.querySelector('.quote-container .download-btn');
    if (quoteDownloadBtn) {
        quoteDownloadBtn.addEventListener('click', async () => {
            try {
                const quoteText = document.querySelector('.quote-text').textContent;
                const quoteSource = document.querySelector('.quote-source').textContent;
                await downloadImage(quoteText, quoteSource, 'Quote');
            } catch (error) {
                console.error('Error downloading quote:', error);
                alert('Failed to download quote. Please try again.');
            }
        });
    }
}); 