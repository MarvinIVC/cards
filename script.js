let words = [];
let translations = [];
let currentCardIndex = 0;
let isFlipped = false;

// Generate flashcards and hide only input section
function generateFlashcards() {
  const wordsInput = document.getElementById('words').value;
  const translationsInput = document.getElementById('translations').value;

  // Split input strings into arrays using regex for commas and trim spaces
  words = wordsInput.split(/\s*,\s*/).map(word => word.trim());
  translations = translationsInput.split(/\s*[,，]\s*/).map(translation => translation.trim());

  // Check if both arrays have the same length
  if (words.length !== translations.length) {
    alert('Error: The number of words and translations must match.');
    return;
  }

  // Hide the input section and title only
  document.querySelector('.input-section').style.display = 'none';
  document.querySelector('h1').style.display = 'none';

  // Display the first flashcard
  currentCardIndex = 0;
  displayFlashcard();

  // Show the flashcard container and navigation buttons
  document.getElementById('flashcard-container').style.display = 'flex';
  document.getElementById('navigation').style.display = 'flex';
}

// Display the current flashcard and reset flip state
function displayFlashcard() {
  const cardFront = document.getElementById('card-front');
  const cardBack = document.getElementById('card-back');

  // Always reset the flip state before updating content
  if (isFlipped) {
    document.getElementById('flashcard').classList.remove('flipped');
    isFlipped = false;
  }

  // Update the content for the front and back of the flashcard
  cardFront.textContent = words[currentCardIndex];
  cardBack.textContent = translations[currentCardIndex];
}

// Flip the card
function flipCard() {
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.toggle('flipped');
  isFlipped = !isFlipped;
}

// Navigate to the previous card and ensure it's unflipped
function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    displayFlashcard();
  }
}

// Navigate to the next card and ensure it's unflipped
function nextCard() {
  if (currentCardIndex < words.length - 1) {
    currentCardIndex++;
    displayFlashcard();
  }
}
