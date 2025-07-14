const phrases = [
  " Ласкаво просимо до IDOLLEGENDARY Studio!",
  " Легендарні ідеї, культовий підхід",
  " Твій сучасний старт у світі технологій",
  " Знаходимо творчість у кожному байті",
  " Ваша ідея — наша реалізація"
];
let currentPhrase = 0;
let currentChar = 0;
const typewriterEl = document.getElementById('typewriter');

function type() {
  let phrase = phrases[currentPhrase];
  typewriterEl.textContent = phrase.slice(0, currentChar + 1) + " |";
  currentChar++;
  if (currentChar < phrase.length) {
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  let phrase = phrases[currentPhrase];
  typewriterEl.textContent = phrase.slice(0, currentChar - 1) + " |";
  currentChar--;
  if (currentChar > 0) {
    setTimeout(erase, 30);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

type();