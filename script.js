let words = [];
let translations = [];
let currentCardIndex = 0;
let isFlipped = false;


function generateFlashcards() {
  const wordsInput = document.getElementById('words').value;
  const translationsInput = document.getElementById('translations').value;

  words = wordsInput.split(/\s*[，,]\s*/).map(word => word.trim());
  translations = translationsInput.split(/\s*[,，]\s*/).map(translation => translation.trim());


  if (words.length !== translations.length) {
    alert('Error: The number of words and translations must match.');
    return;
  }

 
  document.querySelector('.input-section').style.display = 'none';
  document.querySelector('h1').style.display = 'none';


  currentCardIndex = 0;
  displayFlashcard();

  
  document.getElementById('flashcard-container').style.display = 'flex';
  document.getElementById('navigation').style.display = 'flex';
}

function displayFlashcard() {
  const cardFront = document.getElementById('card-front');
  const cardBack = document.getElementById('card-back');

 
  cardFront.textContent = words[currentCardIndex];
  cardBack.textContent = translations[currentCardIndex];
}


function flipCard() {
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.toggle('flipped');
  isFlipped = !isFlipped;
}


function prevCard() {
  if (currentCardIndex > 0) {
    resetFlipAndDisplay(() => {
      currentCardIndex--;
      displayFlashcard();
    });
  }
}


function nextCard() {
  if (currentCardIndex < words.length - 1) {
    resetFlipAndDisplay(() => {
      currentCardIndex++;
      displayFlashcard();
    });
  }
}


function resetFlipAndDisplay(callback) {
  const flashcard = document.getElementById('flashcard');
  

  if (isFlipped) {
    flashcard.classList.remove('flipped');
    isFlipped = false;


    setTimeout(() => {
      callback();
    }, 300);
  } else {
   
    callback();
  }
}
