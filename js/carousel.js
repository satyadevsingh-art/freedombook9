document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let currentCard = 0;
    const totalCards = cards.length;
    const cycleTime = 8000; // Time each card is fully visible (ms)
    const animationTime = 1000; // Time for fade in/out animation (ms)

    // Function to show a specific card
    function showCard(index) {
        // Hide all cards first
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.zIndex = '1';
        });
        
        // Show the current card with higher z-index
        cards[index].style.opacity = '1';
        cards[index].style.zIndex = '3';
    }

    // Function to cycle through cards
    function cycleCards() {
        currentCard = (currentCard + 1) % totalCards;
        showCard(currentCard);
    }

    // Start the carousel
    function startCarousel() {
        // Show first card initially
        showCard(0);
        
        // Set interval for cycling through cards
        setInterval(cycleCards, cycleTime);
        
        // Add hover pause functionality
        const gamingCards = document.querySelector('.gaming-cards');
        gamingCards.addEventListener('mouseenter', function() {
            clearInterval(intervalId);
        });
        
        gamingCards.addEventListener('mouseleave', function() {
            intervalId = setInterval(cycleCards, cycleTime);
        });
    }

    // Initialize the carousel
    let intervalId;
    startCarousel();
});
