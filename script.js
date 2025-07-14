const words = [
  "Ласкаво просимо до IDOLLEGENDARY Studio!",
  "Легендарні ідеї, культовий підхід",
  "Твій сучасний старт у світі технологій",
  "Знаходимо творчість у кожному байті",
  "Ваша ідея — наша реалізація"
];

let part = '';
let i = 0;
let offset = 0;
let forwards = true;
let skip_count = 0;
let skip_delay = 20;
let speed = 100;

const el = document.getElementById('typewriter');

function typewriter() {
    setInterval(function() {
        if (forwards) {
            if (offset >= words[i].length) {
                skip_count++;
                if (skip_count === skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset === 0) {
                forwards = true;
                i++;
                if (i >= words.length) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        el.textContent = part;
        if (forwards) {
            offset++;
        } else {
            offset--;
        }
    }, speed);
}

typewriter();
