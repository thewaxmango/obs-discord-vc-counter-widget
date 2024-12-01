function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.alt = 'click to set image';

    image.addEventListener('click', () => {
        const url = prompt('Enter Image URL:');
        if (url) {
            image.src = url;
        }
    });

    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerText = '×';

    const counter = document.createElement('div');
    counter.classList.add('counter');

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('button-wrapper');

    const decrementButton = document.createElement('button');
    decrementButton.innerText = '−';

    const incrementButton = document.createElement('button');
    incrementButton.innerText = '+';

    const countDisplay = document.createElement('span');
    countDisplay.innerText = '0';

    let count = 0;

    deleteButton.addEventListener('click', () => {
        card.remove();
    });
    function updateCount(change) {
        count += change;
        countDisplay.innerText = count;
    }
    decrementButton.addEventListener('click', (event) => {
        if (event.ctrlKey) {
            updateCount(-10);
        } else if (event.shiftKey) {
            updateCount(-5);
        } else {
            updateCount(-1);
        }
    });
    incrementButton.addEventListener('click', (event) => {
        if (event.ctrlKey) {
            updateCount(10);
        } else if (event.shiftKey) {
            updateCount(5);
        } else {
            updateCount(1);
        }
    });

    counter.appendChild(countDisplay);
    buttonWrapper.appendChild(incrementButton);
    buttonWrapper.appendChild(decrementButton);
    counter.appendChild(buttonWrapper);
    card.appendChild(image);
    card.appendChild(deleteButton);
    card.appendChild(counter);

    return card;
}

function appendCard() {
    const cardContainer = document.getElementById('card-container');
    const newCard = createCard();
    cardContainer.appendChild(newCard);
}

appendCard()

document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
        appendCard();
    }
});
