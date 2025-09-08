document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let currentCard = 1; // Start with the middle card
    const totalCards = cards.length;
    const cycleTime = 5000; // Time before cycling to next card (ms)
    
    // Initial setup
    function initCards() {
        // Set initial positions and z-index
        cards.forEach((card, index) => {
            card.classList.remove('active');
            card.style.transform = getTransformForIndex(index);
            card.style.zIndex = getZIndexForIndex(index);
        });
        
        // Activate the middle card
        cards[1].classList.add('active');
        cards[1].style.animation = 'float 3s ease-in-out infinite';
        
        // Set animations for side cards
        cards[0].style.animation = 'floatLeft 3s ease-in-out infinite';
        cards[2].style.animation = 'floatRight 3s ease-in-out infinite';
    }
    
    function getTransformForIndex(index) {
        switch(index) {
            case 0: return 'rotate(-15deg) translateY(20px)';
            case 1: return 'rotate(0) translateY(0)';
            case 2: return 'rotate(15deg) translateY(20px)';
            default: return '';
        }
    }
    
    function getZIndexForIndex(index) {
        switch(index) {
            case 0: return '1';
            case 1: return '3';
            case 2: return '1';
            default: return '1';
        }
    }
    
    // Function to cycle to the next card
    function cycleToNextCard() {
        // Remove active class from all cards
        cards.forEach(card => card.classList.remove('active'));
        
        // Update current card index
        currentCard = (currentCard + 1) % totalCards;
        
        // Update transforms and z-index for all cards
        cards.forEach((card, index) => {
            const newIndex = (index - currentCard + totalCards) % totalCards;
            card.style.transform = getTransformForIndex(newIndex);
            card.style.zIndex = getZIndexForIndex(newIndex);
            
            // Set appropriate animation
            card.style.animation = '';
            if (newIndex === 1) {
                card.style.animation = 'float 3s ease-in-out infinite';
                card.classList.add('active');
            } else if (newIndex === 0) {
                card.style.animation = 'floatLeft 3s ease-in-out infinite';
            } else {
                card.style.animation = 'floatRight 3s ease-in-out infinite';
            }
        });
    }
    
    // Initialize the carousel
    function startCarousel() {
        initCards();
        
        // Set interval for cycling through cards
        const intervalId = setInterval(cycleToNextCard, cycleTime);
        
        // Add click handlers for manual navigation
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                // If clicking on a side card, make it the active one
                if (!card.classList.contains('active')) {
                    const clickedIndex = Array.from(cards).indexOf(card);
                    const diff = (clickedIndex - currentCard + totalCards) % totalCards;
                    
                    // Update current card index
                    currentCard = clickedIndex;
                    
                    // Update all cards
                    cards.forEach((c, i) => {
                        const newIndex = (i - currentCard + totalCards) % totalCards;
                        c.style.transform = getTransformForIndex(newIndex);
                        c.style.zIndex = getZIndexForIndex(newIndex);
                        c.classList.toggle('active', newIndex === 1);
                        
                        // Set appropriate animation
                        c.style.animation = '';
                        if (newIndex === 1) {
                            c.style.animation = 'float 3s ease-in-out infinite';
                        } else if (newIndex === 0) {
                            c.style.animation = 'floatLeft 3s ease-in-out infinite';
                        } else {
                            c.style.animation = 'floatRight 3s ease-in-out infinite';
                        }
                    });
                }
            });
        });
    }
    
    // Start the carousel
    startCarousel();
});
