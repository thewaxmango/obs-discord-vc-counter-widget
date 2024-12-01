// Function to create a new card
function createCard() {
    // Card structure
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Create image element
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/200x150'; // default placeholder image
    image.alt = 'Card Image';
    
    // Event listener to set image URL on click
    image.addEventListener('click', () => {
        const url = prompt('Enter Image URL:');
        if (url) {
            image.src = url;
        }
    });

    // Create counter and buttons
    const counter = document.createElement('div');
    counter.classList.add('counter');
    
    const decrementButton = document.createElement('button');
    decrementButton.innerText = '-';
    
    const incrementButton = document.createElement('button');
    incrementButton.innerText = '+';
    
    let count = 0;

    // Decrement counter
    decrementButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    // Increment counter
    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    // Update the counter display
    function updateCounter() {
        counter.textContent = `Count: ${count}`;
        counter.appendChild(decrementButton);
        counter.appendChild(incrementButton);
    }

    // Initialize counter
    updateCounter();

    // Append elements to the card
    card.appendChild(image);
    card.appendChild(counter);

    return card;
}

// Add card to container
document.getElementById('add-card-btn').addEventListener('click', () => {
    const cardContainer = document.getElementById('card-container');
    const newCard = createCard();
    cardContainer.appendChild(newCard);
});

// Example: Add one card initially when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-card-btn').click();
});
