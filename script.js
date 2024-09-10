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

// Display the current flashcard
function displayFlashcard() {
  const cardFront = document.getElementById('card-front');
  const cardBack = document.getElementById('card-back');

  cardFront.textContent = words[currentCardIndex];
  cardBack.textContent = translations[currentCardIndex];

  // Reset flip state
  isFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');
}

// Flip the card
function flipCard() {
  const flashcard = document.getElementById('flashcard');
  if (isFlipped) {
    flashcard.classList.remove('flipped');
  } else {
    flashcard.classList.add('flipped');
  }
  isFlipped = !isFlipped;
}

// Navigate to the previous card
function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    displayFlashcard();
  }
}

// Navigate to the next card
function nextCard() {
  if (currentCardIndex < words.length - 1) {
    currentCardIndex++;
    displayFlashcard();
  }
}