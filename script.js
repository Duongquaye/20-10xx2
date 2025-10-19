const validNames = [
    "Đinh Tuyết Nhung",
    "Đỗ Mai Phương",
    "Trần Thị Minh Hiền",
    "Bùi Ngọc Bảo Linh"
];

'use strict';

// Data-driven approach for wishes
const specialWishesByName = {
    "Đinh Tuyết Nhung": [
        '"Dù cô ấy nhỏ bé, nhưng cô ấy mạnh mẽ phi thường." ✨',
        '"Mong em sống như một bài thơ – ngọt ngào trong từng câu chữ, kiêu hãnh trong từng dấu lặng." 🌸',
        '"Em không cần hoàn hảo, chỉ cần đủ mạnh mẽ để giữ lấy niềm tin, đủ dịu dàng để yêu thương chính mình." 💝',
        '"Phụ nữ là phép màu giữa đời thường – mong em mãi là điều kỳ diệu trong mắt những người thương em." ❤️',
        '"Như một trang thơ mùa xuân, em là khởi đầu của những điều đẹp nhất." 🌺'
    ],
    "Đỗ Mai Phương": [
        '"Không có nét quyến rũ nào sánh bằng sự dịu dàng của trái tim." 💖',
        '"A woman should be two things: who and what she wants." ✨',
        '"Chúc em như một đoá hồng trong trang sách cổ – dẫu năm tháng có úa phai, hương vẫn còn mãi." 🌹',
        '"Chúc bạn luôn là phiên bản tuyệt vời nhất của chính mình – không cần hoàn hảo, chỉ cần không ngừng tiến về phía trước." 🌟',
        '"Hãy sống như đóa hoa dại – mạnh mẽ giữa bão giông, dịu dàng giữa đời thường." 🌸'
    ],
    "Trần Thị Minh Hiền": [
        '"Bạn không cần là nàng thơ của ai cả, chỉ cần là phiên bản hạnh phúc nhất của chính mình – Mình tin, đó mới là điều đẹp nhất." 🦋',
        '"Chúc bạn luôn thành công, luôn xinh đẹp – và luôn nhớ rằng phụ nữ không cần chạy theo chuẩn mực, họ chính là chuẩn mực." ✨',
        '"Gửi đến những người phụ nữ tuyệt vời: chúc các bạn luôn được yêu thương, được tôn trọng, và được là chính mình – vì không ai có thể thay thế ánh sáng mà các bạn mang đến cho thế giới này." 💫',
        '"Không cần ai tặng hoa, vì chính em là bông hoa đẹp nhất." 🌺',
        '"Không phải hoa nào cũng cần nắng – có bông nở rực giữa giông gió." 🌸'
    ],
    "Bùi Ngọc Bảo Linh": [
        '"Một chút dịu dàng cho ngày thêm ấm, một chút yêu thương cho lòng thêm vui." 🌸',
        '"Cứ mỉm cười nhé, vì đó là cách em làm dịu cả thế giới này." ✨',
        '"Ngọt ngào không phải là điều em cố tạo ra – mà là cách em tồn tại." 🌺',
        '"Nếu cuộc đời là bản nhạc, em chính là giai điệu khiến người ta muốn nghe lại mãi." 🎵',
        '"Chúc bạn 20/10 luôn xinh đẹp, rạng rỡ và hạnh phúc — vì bạn xứng đáng với tất cả những điều tuyệt vời nhất." 💖'
    ]
};

const generalWishes = [
    { message: "Chúc bạn mãi là bông hoa của bình minh – rực rỡ, trong trẻo và chẳng cần ai chứng kiến cũng vẫn nở rộ.", emoji: "🌅" },
    { message: "Ước mong bạn luôn giữ trong tim ngọn lửa nhỏ – đủ ấm để soi sáng mình, và đủ bền để đi qua mọi giông gió.", emoji: "💖" },
    { message: "Chúc bạn một đời an nhiên như gió sớm, mạnh mẽ mà vẫn mềm mại, tự do mà vẫn dịu dàng.", emoji: "�" },
    { message: "Bạn là bài thơ của cuộc đời – có lúc trầm, lúc bổng, nhưng luôn đẹp theo cách riêng.", emoji: "✨" },
    { message: "Mong bạn sống trọn vẹn như trang sách chưa từng bị gấp lại, dẫu ngày mai có thế nào cũng vẫn là chính mình.", emoji: "�" },
    { message: "Chúc bạn đủ kiêu hãnh để đứng một mình, đủ dịu dàng để yêu thương, và đủ mạnh mẽ để bước tiếp dù không ai kề bên.", emoji: "🦋" },
    { message: "Bạn không phải nàng công chúa chờ phép màu – bạn chính là người tạo nên phép màu của mình.", emoji: "👑" },
    { message: "Thế giới có thể đổi thay, nhưng mong bạn mãi là người con gái biết tin vào ánh sáng trong tim.", emoji: "💫" },
    { message: "Chúc bạn như mặt trăng giữa trời đêm – dù ở đâu, vẫn có ánh sáng riêng và chẳng cần xin ai điều đó.", emoji: "🌙" },
    { message: "Hãy là chương đẹp nhất trong câu chuyện đời bạn, dù người đọc có hiểu hay không.", emoji: "�" },
    { message: "Chúc bạn là ánh nắng lọt qua tán lá – chẳng cần rực rỡ, chỉ cần đủ để làm ấm một tâm hồn.", emoji: "☀️" },
    { message: "Có những người đi qua đời ta như cơn mưa. Mong bạn là cơn mưa dịu dàng – đến đâu cũng để lại màu xanh.", emoji: "🌧️" },
    { message: "Chúc bạn luôn nghe thấy tiếng thì thầm của hạnh phúc, ngay cả giữa những ngày tưởng chừng lặng im nhất.", emoji: "🎵" },
    { message: "Hãy sống như một khúc nhạc đẹp – ngắn hay dài chẳng quan trọng, chỉ cần khiến người nghe muốn mỉm cười.", emoji: "🎼" },
    { message: "Mong bạn được yêu thương như một câu thơ hay – giản dị mà khiến người ta nhớ mãi.", emoji: "�" }
];

const flowerWishes = [
    "Chúc bạn mãi là bông hoa của bình minh – rực rỡ, trong trẻo và chẳng cần ai chứng kiến cũng vẫn nở rộ 🌅",
    "Ước mong bạn luôn giữ trong tim ngọn lửa nhỏ – đủ ấm để soi sáng mình, và đủ bền để đi qua mọi giông gió 💖",
    "Chúc bạn một đời an nhiên như gió sớm, mạnh mẽ mà vẫn mềm mại, tự do mà vẫn dịu dàng �",
    "Bạn là bài thơ của cuộc đời – có lúc trầm, lúc bổng, nhưng luôn đẹp theo cách riêng ✨",
    "Mong bạn sống trọn vẹn như trang sách chưa từng bị gấp lại, dẫu ngày mai có thế nào cũng vẫn là chính mình �",
    "Chúc bạn đủ kiêu hãnh để đứng một mình, đủ dịu dàng để yêu thương, và đủ mạnh mẽ để bước tiếp dù không ai kề bên 🦋",
    "Bạn không phải nàng công chúa chờ phép màu – bạn chính là người tạo nên phép màu của mình 👑",
    "Thế giới có thể đổi thay, nhưng mong bạn mãi là người con gái biết tin vào ánh sáng trong tim 💫",
    "Chúc bạn như mặt trăng giữa trời đêm – dù ở đâu, vẫn có ánh sáng riêng và chẳng cần xin ai điều đó 🌙",
    "Hãy là chương đẹp nhất trong câu chuyện đời bạn, dù người đọc có hiểu hay không 📔",
    "Chúc bạn là ánh nắng lọt qua tán lá – chẳng cần rực rỡ, chỉ cần đủ để làm ấm một tâm hồn ☀️",
    "Có những người đi qua đời ta như cơn mưa. Mong bạn là cơn mưa dịu dàng – đến đâu cũng để lại màu xanh �️",
    "Chúc bạn luôn nghe thấy tiếng thì thầm của hạnh phúc, ngay cả giữa những ngày tưởng chừng lặng im nhất 🎵",
    "Hãy sống như một khúc nhạc đẹp – ngắn hay dài chẳng quan trọng, chỉ cần khiến người nghe muốn mỉm cười 🎼",
    "Mong bạn được yêu thương như một câu thơ hay – giản dị mà khiến người ta nhớ mãi 💝"
];

// Cache DOM elements
let input, card, nameSpan, errorMessage, wishes, bgMusic, inputSection, decorativeFlower;

// Start time for the flower animation
let flowerStartTime = 0;
let isFlowerAnimating = false;

// Function to draw the animated flower
function drawFlower() {
    const canvas = document.getElementById('flowerCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!isFlowerAnimating) {
        flowerStartTime = Date.now();
        isFlowerAnimating = true;
    }
    
    const animationProgress = Math.min((Date.now() - flowerStartTime) / 3000, 1); // 3 seconds animation
    
    // Calculate flower position based on stem end
    const stemEndX = 200;
    const stemEndY = 400;
    const stemHeight = 300 * animationProgress;
    const flowerCenterX = stemEndX + Math.sin(Date.now() / 1000) * 10;
    const flowerCenterY = stemEndY - stemHeight;

    // Draw stem with growing animation
    ctx.beginPath();
    ctx.moveTo(stemEndX, stemEndY);
    ctx.quadraticCurveTo(
        stemEndX + Math.sin(Date.now() / 1000) * 20, 
        stemEndY - stemHeight/2, 
        flowerCenterX, 
        flowerCenterY
    );
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 12;
    ctx.stroke();
    
    // Draw leaves with fade-in
    if (animationProgress > 0.3) { // Start leaves after stem begins
        const leafOpacity = Math.min((animationProgress - 0.3) / 0.3, 1);
        const time = Date.now() / 1000;
        
        // Common function to draw a leaf
        const drawLeaf = (heightPercentage, angleOffset, isLeft) => {
            // Calculate the point on the stem where the leaf should attach
            const stemX = stemEndX + Math.sin(Date.now() / 1000) * 20 * (heightPercentage);
            const stemY = stemEndY - (stemHeight * heightPercentage);
            
            const swayAmount = Math.sin(time + (isLeft ? 0 : Math.PI)) * 5;
            const stemPoint = {
                x: stemX,
                y: stemY
            };
            
            // Calculate control points for natural curve
            const leafLength = 80;
            const leafWidth = 30;
            const angle = Math.sin(time * 1.5) * 0.1 + (isLeft ? -0.3 : 0.3);
            
            // Start path from stem
            ctx.beginPath();
            ctx.moveTo(stemPoint.x, stemPoint.y);
            
            // Create leaf shape with multiple curves
            const cp1 = {
                x: stemPoint.x + (isLeft ? -leafWidth : leafWidth) + swayAmount,
                y: stemPoint.y - leafLength * 0.3
            };
            const cp2 = {
                x: stemPoint.x + (isLeft ? -leafWidth * 1.2 : leafWidth * 1.2) + swayAmount,
                y: stemPoint.y - leafLength * 0.6
            };
            const tip = {
                x: stemPoint.x + (isLeft ? -leafWidth * 0.5 : leafWidth * 0.5) + swayAmount,
                y: stemPoint.y - leafLength
            };
            
            // Draw the main curve of the leaf
            ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, tip.x, tip.y);
            
            // Draw the return curve to create the leaf shape
            const cp3 = {
                x: stemPoint.x + (isLeft ? -leafWidth * 0.8 : leafWidth * 0.8) + swayAmount,
                y: stemPoint.y - leafLength * 0.7
            };
            const cp4 = {
                x: stemPoint.x + (isLeft ? -leafWidth * 0.3 : leafWidth * 0.3) + swayAmount,
                y: stemPoint.y - leafLength * 0.3
            };
            
            ctx.bezierCurveTo(cp3.x, cp3.y, cp4.x, cp4.y, stemPoint.x, stemPoint.y);
            
            // Create gradient for more natural look
            const gradient = ctx.createLinearGradient(
                stemPoint.x, stemPoint.y,
                tip.x, tip.y
            );
            gradient.addColorStop(0, `rgba(100, 169, 95, ${leafOpacity})`);
            gradient.addColorStop(0.5, `rgba(129, 199, 132, ${leafOpacity})`);
            gradient.addColorStop(1, `rgba(129, 199, 132, ${leafOpacity * 0.9})`);
            
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Add vein
            ctx.beginPath();
            ctx.moveTo(stemPoint.x, stemPoint.y);
            ctx.quadraticCurveTo(
                cp1.x * 0.8 + tip.x * 0.2,
                cp1.y * 0.8 + tip.y * 0.2,
                tip.x, tip.y
            );
            ctx.strokeStyle = `rgba(100, 169, 95, ${leafOpacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        // Draw left leaf at 60% up the stem
        drawLeaf(0.6, -0.3, true);
        
        // Draw right leaf at 40% up the stem
        drawLeaf(0.4, 0.3, false);
    }
    
    // Draw petals
    const centerX = flowerCenterX;
    const centerY = flowerCenterY;
    const petalCount = 20;
    const time = Date.now() / 1000;
    
    if (animationProgress > 0.5) { // Start petals after leaves
        const petalProgress = (animationProgress - 0.5) / 0.5; // Complete petals in last 0.5 of animation
        
        for (let i = 0; i < petalCount; i++) {
            const petalAnimProgress = Math.max(0, Math.min(1, (petalProgress * petalCount - i) * 2));
            
            if (petalAnimProgress > 0) {
                const angle = (i * 2 * Math.PI / petalCount) + Math.sin(time) * 0.05;
                const waveFactor = Math.sin(time * 2 + i) * 2;
                
                const scale = petalAnimProgress; // Scale for growing effect
                
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.bezierCurveTo(
                    centerX + Math.cos(angle - 0.5) * 40 * scale,
                    centerY + Math.sin(angle - 0.5) * 40 * scale + waveFactor * 2,
                    centerX + Math.cos(angle) * 80 * scale,
                    centerY + Math.sin(angle) * 80 * scale + waveFactor * 2,
                    centerX + Math.cos(angle + 0.5) * 40 * scale,
                    centerY + Math.sin(angle + 0.5) * 40 * scale + waveFactor * 2
                );
                
                // Create a gradient for each petal
                const gradient = ctx.createRadialGradient(
                    centerX + Math.cos(angle) * 40,
                    centerY + Math.sin(angle) * 40,
                    0,
                    centerX + Math.cos(angle) * 40,
                    centerY + Math.sin(angle) * 40,
                    60 * scale
                );
                gradient.addColorStop(0, '#ff69b4');
                gradient.addColorStop(1, '#ff1493');
                
                ctx.fillStyle = gradient;
                ctx.globalAlpha = petalAnimProgress;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
    }
    
    // Draw center with delayed appearance
    if (animationProgress > 0.8) { // Start center near the end
        const centerProgress = (animationProgress - 0.8) / 0.2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 24 * centerProgress, 0, Math.PI * 2);
        const centerGradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, 24 * centerProgress
        );
        centerGradient.addColorStop(0, '#FFD700');
        centerGradient.addColorStop(1, '#FFA500');
        ctx.fillStyle = centerGradient;
        ctx.fill();
    }
    
    // Animation loop
    requestAnimationFrame(drawFlower);
}

document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements on load
    input = document.getElementById('nameInput');
    card = document.getElementById('wishCard');
    decorativeFlower = document.getElementById('decorativeFlower');
    nameSpan = document.getElementById('selectedName');
    errorMessage = document.getElementById('errorMessage');
    wishes = document.querySelector('.wishes');
    bgMusic = document.getElementById('bgMusic');
    inputSection = document.querySelector('.input-section');

    // Add floating hearts randomly
    setInterval(createHeart, 1500);
    
    // Initialize the card as hidden
    card.style.display = 'none';
    
    // Clear error message on input
    input.addEventListener('input', () => {
        errorMessage.textContent = '';
    });
    
    // Handle enter key press
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkName();
        }
    });
});

function checkName() {
    const enteredName = input.value.trim();
    
    // Check if the entered name exactly matches any valid name
    const matchedName = validNames.find(name => 
        name.toLowerCase() === enteredName.toLowerCase()
    );
    
    if (matchedName) {
        // Show and start flower animation
        const canvas = document.getElementById('flowerCanvas');
        canvas.style.display = 'block';
        drawFlower();
        
        // Start falling flower animation
        startFlowerAnimation();

        // Play music when name matches
        bgMusic.volume = 0.5; // Set volume to 50%
        bgMusic.muted = false;
        
        const playMusic = async () => {
            try {
                await bgMusic.play();
                console.log('Nhạc đang phát');
            } catch (error) {
                console.error('Lỗi phát nhạc:', error);
                // Retry once after a short delay
                setTimeout(async () => {
                    try {
                        await bgMusic.play();
                        console.log('Phát nhạc thành công sau khi thử lại');
                    } catch (e) {
                        console.error('Không thể phát nhạc:', e);
                    }
                }, 1000);
            }
        };
        
        playMusic();

        // Hide input section with fade out animation
        inputSection.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            inputSection.style.display = 'none';
        }, 500);
        
        // Show the card with animation
        card.style.display = 'block';
        card.style.animation = 'fadeIn 1s ease-in';
        
    

        // Update the name with the correctly cased version
        nameSpan.textContent = matchedName;
        
        // Clear error message
        errorMessage.textContent = '';
        
        // Clear any existing interval
        if (window.wishInterval) {
            clearInterval(window.wishInterval);
        }
        
        // Update wishes based on name using the new data structure
        const wishesForName = specialWishesByName[matchedName];
        if (wishesForName) {
            const randomWish = wishesForName[Math.floor(Math.random() * wishesForName.length)];
            wishes.innerHTML = `<span>${randomWish}</span>`;
            
            // Add click handler for the wish
            const wishSpan = wishes.querySelector('span');
            wishSpan.addEventListener('click', createWishEffect);
        }

        // Special effect for a specific name
        if (matchedName === "Đinh Tuyết Nhung" || matchedName === "Đỗ Mai Phương" || matchedName === "Bùi Ngọc Bảo Linh" || matchedName === "Trần Thị Minh Hiền") {
            setInterval(createRainFromWish, 2000);
            
            // Show image gallery with animation effects
            const imageGallery = document.getElementById('imageGallery');
            const leftPhoto = imageGallery.querySelector('.left-photo');
            const rightPhoto = imageGallery.querySelector('.right-photo');
            
            // Update image sources based on name
            if (matchedName === "Đinh Tuyết Nhung") {
                leftPhoto.querySelector('img').src = "g:\\My Drive\\z7134283000509_23378f4adbe91982ce1f3ae2ae6680fb.jpg";
                rightPhoto.querySelector('img').src = "g:\\My Drive\\1740575429221.jpg";
            } else if (matchedName === "Đỗ Mai Phương") {
                leftPhoto.querySelector('img').src = "c:\\Users\\ADMIN\\Downloads\\z7134177153500_2b92a1091b85a35fa1eecd5ab55a8dee.jpg";
                rightPhoto.querySelector('img').src = "c:\\Users\\ADMIN\\Downloads\\z7134177153513_644818c31fed8899e1e3b4befc12bdc4.jpg";
            } else if (matchedName === "Bùi Ngọc Bảo Linh") {
                leftPhoto.querySelector('img').src = "c:\\Users\\ADMIN\\Downloads\\z7134224372798_20eb9d8fce4b1d3cdff872f1efc751e4.jpg";
                rightPhoto.querySelector('img').src = "c:\\Users\\ADMIN\\Downloads\\z7134177204064_9cd75c22abce2a42b890bd485cf74f19.jpg";
            } else if (matchedName === "Trần Thị Minh Hiền") {
                leftPhoto.querySelector('img').src = "c:\\Users\\ADMIN\\Downloads\\z7134194949745_2ff94aab94592a25b0c7da84150bbd88.jpg";
                rightPhoto.querySelector('img').src = "c:\\Users\\ADMIN\\Downloads\\z7134194924019_5de45015902bcf62b9aa92340a599c25.jpg";
            }
            
            imageGallery.style.display = 'block';
            
            // Initial state
            leftPhoto.style.opacity = '0';
            leftPhoto.style.transform = 'translateX(-100px) translateY(-50%) rotate(-15deg)';
            rightPhoto.style.opacity = '0';
            rightPhoto.style.transform = 'translateX(100px) translateY(-50%) rotate(15deg)';
            
            // Add transition properties
            leftPhoto.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            rightPhoto.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Animate in
            setTimeout(() => {
                leftPhoto.style.opacity = '1';
                leftPhoto.style.transform = 'translateX(0) translateY(-50%) rotate(-5deg)';
            }, 500);
            
            setTimeout(() => {
                rightPhoto.style.opacity = '1';
                rightPhoto.style.transform = 'translateX(0) translateY(-50%) rotate(5deg)';
            }, 1000);
            
            // Add floating animation
            const frames = imageGallery.querySelectorAll('.frame');
            frames.forEach(frame => {
                frame.style.transition = 'transform 3s ease-in-out infinite';
                let startY = Math.random() * 10;
                
                function float() {
                    frame.style.transform = `rotate(${frame.dataset.rotation || '0deg'}) translateY(${startY}px)`;
                    startY = -startY;
                }
                
                setInterval(float, 3000);
                float(); // Start immediately
            });
            
            // Add sparkle effect to frames
            frames.forEach(frame => {
                setInterval(() => {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.style.cssText = `
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background: radial-gradient(circle, #fff 0%, rgba(255,255,255,0) 70%);
                        pointer-events: none;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                        opacity: 0;
                        animation: sparkleAnim 1.5s ease-in-out;
                    `;
                    frame.appendChild(sparkle);
                    setTimeout(() => sparkle.remove(), 1500);
                }, 2000);
            });
        }

        // Start continuous falling wishes animation
        function createFallingWish() {
            const wishElement = document.createElement('div');
            wishElement.className = 'falling-wish';
            
            // Choose between personal and general wishes
            const wishList = generalWishes; // Simplified for this example, can be extended
            const randomWish = wishList[Math.floor(Math.random() * wishList.length)];
            
            wishElement.innerHTML = `
                <div class="emoji">${randomWish.emoji}</div>
                <div class="message">${randomWish.message}<br>Chúc bạn nhỏ luôn hạnh phúc nhé!</div>
            `;
            
            // Random horizontal position and speed
            const randomX = Math.random() * (window.innerWidth - 300); // Keep away from edges
            const randomDuration = Math.random() * 8 + 17; // Random duration between 17-25 seconds
            
            wishElement.style.left = randomX + 'px';
            wishElement.style.transform = `rotate(${Math.random() * 4 - 2}deg)`; // Slight random rotation
            wishElement.style.animationDuration = `${randomDuration}s`;
            
            // Add hover and click effects
            wishElement.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
            
            wishElement.addEventListener('mouseenter', () => {
                wishElement.style.transform = 'scale(1.1)';
                wishElement.style.backgroundColor = 'rgba(255, 192, 203, 0.2)';
                wishElement.style.boxShadow = '0 0 15px rgba(255, 182, 193, 0.5)';
            });
            
            wishElement.addEventListener('mouseleave', () => {
                wishElement.style.transform = 'scale(1)';
                wishElement.style.backgroundColor = 'transparent';
                wishElement.style.boxShadow = 'none';
            });
            
            // Add click effect
            wishElement.addEventListener('click', (e) => {
                // Prevent the click from triggering multiple times
                e.stopPropagation();
                
                // Get the position of the click for the effects
                const clickX = e.clientX;
                const clickY = e.clientY;
                
                // Remove the wish immediately
                wishElement.remove();
                
                // Create flower burst effect
                createFlowerBurst(clickX, clickY);
                
                // Play a soft chime sound
                const audio = new Audio('data:audio/mp3;base64,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');
                audio.volume = 0.3;
                audio.play();
            });
            
            document.body.appendChild(wishElement);
            
            // Remove the wish after animation completes
            setTimeout(() => {
                wishElement.remove();
            }, randomDuration * 1000);
        }
        
        // Create multiple wishes at start
        for(let i = 0; i < 5; i++) {
            setTimeout(() => createFallingWish(), i * 800);
        }

        // Create new wishes continuously with multiple wishes at once
        window.wishInterval = setInterval(() => {
            // Create 2-3 wishes each time
            const wishCount = Math.floor(Math.random() * 2) + 2;
            for(let i = 0; i < wishCount; i++) {
                setTimeout(() => createFallingWish(), i * 500);
            }
        }, 3000); // Create new batch every 3 seconds
    } else {
        // Hide the card and canvas
        card.style.display = 'none';
        document.getElementById('flowerCanvas').style.display = 'none';


        
        // Only show error message if Enter was pressed and name doesn't match
        if (enteredName && event && event.type === 'keypress' && event.key === 'Enter') {
            errorMessage.innerHTML = 'BỚT ẢO TƯỞNG ĐI MÁ! 😏';
            createLaughingEmojis();
        }
    }

}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.color = `rgb(255, ${Math.random() * 64 + 64}, ${Math.random() * 128 + 128})`;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createRaindrop(x, emoji) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.textContent = emoji;
    raindrop.style.left = x + 'px';
    raindrop.style.top = '0px';
    raindrop.style.fontSize = Math.random() * 14 + 12 + 'px';
    raindrop.style.animationDuration = Math.random() * 2 + 2 + 's';
    
    document.body.appendChild(raindrop);
    
    // Remove raindrop after animation
    setTimeout(() => {
        raindrop.remove();
    }, 4000);
}

function createRainFromWish() {
    const wishElement = document.querySelector('.wishes span');
    if (wishElement) {
        const rect = wishElement.getBoundingClientRect();
        const emojis = ['✨', '💫', '🌸', '💖', '✨', '🌺', '💝', '🦋', '🎵'];
        
        // Create multiple raindrops at random positions under the wish
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const randomX = rect.left + Math.random() * rect.width;
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                createRaindrop(randomX, randomEmoji);
            }, i * 200); // Stagger the creation of raindrops
        }
    }
}

function createLaughingEmojis() {
    const emojis = ['🤣', '😂', '😆', '😝', '🤪'];
    const container = document.querySelector('.container');
    const inputSection = document.querySelector('.input-section');
    const rect = inputSection.getBoundingClientRect();
    
    // Create multiple emojis
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'laughing-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random position around the input section
            const randomX = rect.left + (Math.random() * rect.width * 1.5) - rect.width * 0.25;
            const randomY = rect.top + (Math.random() * rect.height * 1.5) - rect.height * 0.25;
            
            emoji.style.left = randomX + 'px';
            emoji.style.top = randomY + 'px';
            
            document.body.appendChild(emoji);
            
            // Remove after animation
            setTimeout(() => {
                emoji.remove();
            }, 2000);
        }, i * 100);
    }
}

// Add floating heart styles
const floatingHeartStyles = {
    element: 'style',
    content: `
        @keyframes sparkleAnim {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 0;
            }
            50% {
                transform: scale(1) rotate(180deg);
                opacity: 0.8;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
        .floating-heart {
            position: fixed;
            top: -20px;
            animation: floatUp 5s linear;
            z-index: 1000;
        }
        
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `
};

// Add falling flower styles
const fallingFlowerStyles = {
    element: 'style',
    content: `
        .falling-flower {
            position: fixed;
            top: -30px;
            animation: flowerFall linear forwards;
            z-index: 1000;
            cursor: pointer;
            font-size: 20px;
            transition: transform 0.3s ease;
        }
        
        .falling-flower:hover {
            transform: scale(1.2);
        }
        
        .flower-wish {
            position: fixed;
            padding: 15px 25px;
            background: linear-gradient(45deg, rgba(255,192,203,0.9), rgba(255,182,193,0.9));
            border-radius: 20px;
            color: #fff;
            font-size: 16px;
            text-align: center;
            opacity: 0;
            transform: translateY(20px);
            animation: wishAppear 1.5s ease forwards;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
            pointer-events: none;
            z-index: 1001;
        }
        
        @keyframes wishAppear {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            50% {
                opacity: 1;
                transform: translateY(-5px) scale(1.05);
            }
            100% {
                opacity: 0;
                transform: translateY(-30px) scale(1);
            }
        }
        
        @keyframes flowerFall {
            0% {
                transform: translateY(0) rotate(0deg) scale(0.8);
                opacity: 1;
            }
            50% {
                transform: translateY(50vh) rotate(180deg) scale(1);
                opacity: 0.8;
            }
            100% {
                transform: translateY(100vh) rotate(360deg) scale(0.8);
                opacity: 0;
            }
        }
    `
};

// Add flower creation function
function createFallingFlower() {
    const flower = document.createElement('div');
    flower.classList.add('falling-flower');
    flower.innerHTML = '🌸';
    
    // Random position and animation properties
    const randomX = Math.random() * window.innerWidth;
    const randomDuration = Math.random() * 4 + 6; // 6-10 seconds
    const randomDelay = Math.random() * 2;
    const randomSize = Math.random() * 15 + 15; // 15-30px
    
    flower.style.left = `${randomX}px`;
    flower.style.animationDuration = `${randomDuration}s`;
    flower.style.animationDelay = `${randomDelay}s`;
    flower.style.fontSize = `${randomSize}px`;
    flower.style.pointerEvents = 'auto'; // Enable click events
    
    // Add click handler
    flower.addEventListener('click', (e) => {
        // Create wish element
        const wish = document.createElement('div');
        wish.classList.add('flower-wish');
        
        // Get random wish
        const randomWish = flowerWishes[Math.floor(Math.random() * flowerWishes.length)];
        wish.textContent = randomWish;
        
        // Position wish near the clicked flower
        wish.style.left = (e.clientX - 150) + 'px';
        wish.style.top = (e.clientY - 50) + 'px';
        
        // Add to document
        document.body.appendChild(wish);
        
        // Play a soft chime sound
        const audio = new Audio('data:audio/mp3;base64,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');
        audio.play();
        
        // Remove wish after animation
        setTimeout(() => {
            wish.remove();
        }, 1500);
    });
    
    document.body.appendChild(flower);
    
    // Remove flower after animation
    setTimeout(() => {
        flower.remove();
    }, (randomDuration + randomDelay) * 1000);
}

// Start creating flowers periodically
function startFlowerAnimation() {
    // Create initial batch of flowers
    for(let i = 0; i < 10; i++) {
        setTimeout(createFallingFlower, i * 300);
    }
    
    // Continue creating flowers
    setInterval(() => {
        for(let i = 0; i < 3; i++) {
            setTimeout(createFallingFlower, i * 300);
        }
    }, 2000);
}

// Function to create wish click effect
function createWishEffect(event) {
    const wish = event.target;
    
    // Add click animation class
    wish.classList.add('clicked');
    setTimeout(() => wish.classList.remove('clicked'), 500);
    
    // Play sound effect
    const audio = new Audio('data:audio/mp3;base64,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');
    audio.volume = 0.3;
    audio.play();
    
    // Create particles
    const emojis = ['✨', '💫', '🌸', '💖', '✨', '🌺', '💝', '🦋', '🎵'];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'wish-particles';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random position around the click
        const angle = (i / particleCount) * 2 * Math.PI;
        const distance = 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.setProperty('--x', `${x}px`);
        particle.style.setProperty('--y', `${y}px`);
        
        // Position particle at click point
        particle.style.position = 'fixed';
        particle.style.left = event.clientX + 'px';
        particle.style.top = event.clientY + 'px';
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => particle.remove(), 1000);
    }
    
    // Create sparkle effect around the wish
    const sparkleCount = 3;
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'wish-particles';
            sparkle.textContent = '✨';
            sparkle.style.left = (event.clientX - 20 + Math.random() * 40) + 'px';
            sparkle.style.top = (event.clientY - 20 + Math.random() * 40) + 'px';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 200);
    }
}

// Function to create flower burst effect
function createFlowerBurst(x, y) {
    const flowerCount = 12; // Number of flowers in the burst
    const radius = 100; // Radius of the burst

    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.textContent = '🌸';
        flower.style.position = 'fixed';
        flower.style.left = x + 'px';
        flower.style.top = y + 'px';
        flower.style.fontSize = '20px';
        flower.style.zIndex = '9999';
        flower.style.transform = 'translate(-50%, -50%)';
        flower.style.pointerEvents = 'none';

        // Calculate the angle for this flower
        const angle = (i / flowerCount) * 2 * Math.PI;
        
        // Add animation styles
        flower.style.animation = 'flowerBurst 0.8s ease-out forwards';
        
        // Set the direction of movement using CSS custom properties
        flower.style.setProperty('--angle', angle);
        flower.style.setProperty('--radius', radius + 'px');
        
        document.body.appendChild(flower);

        // Remove the flower after animation
        setTimeout(() => flower.remove(), 800);
    }
}

// Add flower burst animation styles
const flowerBurstStyles = document.createElement('style');
flowerBurstStyles.textContent = `
    @keyframes flowerBurst {
        0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(0.3);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(
                calc(-50% + calc(cos(var(--angle)) * var(--radius))),
                calc(-50% + calc(sin(var(--angle)) * var(--radius)))
            ) rotate(360deg) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(flowerBurstStyles);

const style = document.createElement(floatingHeartStyles.element);
style.textContent = floatingHeartStyles.content;
document.head.appendChild(style);

const flowerStyle = document.createElement(fallingFlowerStyles.element);
flowerStyle.textContent = fallingFlowerStyles.content;
document.head.appendChild(flowerStyle);