document.addEventListener('DOMContentLoaded', function() {
    // Create sparkles and floating icons
    createSparkles();
    createFloatingIcons();
    
    // Modal functionality
    const buyBtn = document.querySelector('.buy-btn');
    const modal = document.getElementById('buy-modal');
    const closeButton = document.querySelector('.close-button');
    
    buyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Create sparkles
function createSparkles() {
    const container = document.querySelector('.sparkles-container');
    const sparkleCount = 50;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Random position
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 15 + 5;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        // Random animation delay
        sparkle.style.animationDelay = Math.random() * 10 + 's';
        
        // Random color
        const colors = ['#ffcce6', '#ffffa1', '#d3a4ff', '#a1c6ff', '#ff9ad5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.backgroundColor = randomColor;
        
        container.appendChild(sparkle);
    }
}

// Create floating beauty icons
function createFloatingIcons() {
    const container = document.querySelector('.sparkles-container');
    const iconCount = 15;
    
    // Beauty and makeup related emojis
    const icons = ['💄', '👑', '👠', '👜', '💋', '💅', '💎', '🌸', '✨', '🧠', '👩‍🦱', '📱', '💰', '💳', '📈'];
    
    for (let i = 0; i < iconCount; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon');
        
        // Random position
        icon.style.left = Math.random() * 100 + '%';
        icon.style.top = Math.random() * 100 + '%';
        
        // Random emoji
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        icon.innerHTML = randomIcon;
        
        // Random size
        const size = Math.random() * 20 + 20;
        icon.style.fontSize = size + 'px';
        
        // Random animation delay and duration
        icon.style.animationDelay = Math.random() * 5 + 's';
        icon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        container.appendChild(icon);
    }
}

// Keep adding new sparkles periodically
setInterval(() => {
    const container = document.querySelector('.sparkles-container');
    
    // Add new sparkle
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position at bottom
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = '95%';
    
    // Random size
    const size = Math.random() * 15 + 5;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    
    // Random color
    const colors = ['#ffcce6', '#ffffa1', '#d3a4ff', '#a1c6ff', '#ff9ad5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.backgroundColor = randomColor;
    
    container.appendChild(sparkle);
    
    // Remove old sparkles to prevent too many elements
    if (container.children.length > 100) {
        container.removeChild(container.children[0]);
    }
}, 1000); 