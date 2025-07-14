const phrases = [
  "«А де це “тут”?» — подумала Аліса. — «Це ж зовсім не мій дім…»",
  "«Тут усі не ті, ким здаються. Навіть ця сторінка...»",
  "Коли не маєш мети, кожна стежка веде в нікуди, але жодна не здається хибною.",
  // "«Якщо не знаєш, куди йдеш, жодна дорога не виведе тебе на 404!»",
  "«Що це за місце? — запитала Аліса. — Це якась помилка?»",
  "«Втрачені в дивовижній реальності невідомої адреси…»",
  "«Тут можна зустріти лише дивних котів і ще дивніші помилки.»",
  "«Мабуть, хтось переплутав двері… або це портал у 404?»",
  "«Усі найкращі місця — трохи абсурдні. 404 — ідеальний приклад!»",
  "«Щоб знайти сторінку, треба спершу її втратити…»"
];

let idx = 0;
let charIdx = 0;
let isDeleting = false;
let currentPhrase = '';
const phraseElement = document.getElementById('phrase');

function typeWriterEffect() {
  currentPhrase = phrases[idx];
  
  if (isDeleting) {
    charIdx--;
    phraseElement.textContent = currentPhrase.slice(0, charIdx) + '|';
  } else {
    phraseElement.textContent = currentPhrase.slice(0, charIdx + 1) + '|';
    charIdx++;
  }

  let typingSpeed = isDeleting ? 30 : 50;

  if (!isDeleting && charIdx === currentPhrase.length) {
    typingSpeed = 2000; // затримка після друку перед видаленням
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    idx = (idx + 1) % phrases.length;
    typingSpeed = 500; // пауза перед наступним друком
  }

  setTimeout(typeWriterEffect, typingSpeed);
}

typeWriterEffect();
