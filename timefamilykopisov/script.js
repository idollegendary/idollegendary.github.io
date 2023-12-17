const countdownEls = document.querySelectorAll(".countdown")
countdownEls.forEach(countdownEl => createCountdown(countdownEl))

function createCountdown(countdownEl) {
  const target = new Date(new Date(countdownEl.dataset.targetDate).toLocaleString('en'))
  const parts = {
    days: { text: ["days", "day"], dots: 30 },
    hours: { text: ["hours", "hour"], dots: 24 },
    minutes: { text: ["minutes", "minute"], dots: 60 },
    seconds: { text: ["seconds", "second"], dots: 60 },
  }

  Object.entries(parts).forEach(([key, value]) => {
    const partEl = document.createElement("div");
    partEl.classList.add("part", key);
    partEl.style.setProperty("--dots", value.dots);
    value.element = partEl;

    const remainingEl = document.createElement("div");
    remainingEl.classList.add("remaining");
    remainingEl.innerHTML = `
      <span class="number"></span>
      <span class="text"></span>
    `
    partEl.append(remainingEl);
    for (let i = 0; i < value.dots; i++) {
      const dotContainerEl = document.createElement("div");
      dotContainerEl.style.setProperty("--dot-idx", i);
      dotContainerEl.classList.add("dot-container")
      const dotEl = document.createElement("div");
      dotEl.classList.add("dot")
      dotContainerEl.append(dotEl);
      partEl.append(dotContainerEl);
    }
    countdownEl.append(partEl);
  })
  getElapsedTime(target, parts);
}

function getElapsedTime(target, parts) {
  const now = new Date();
  const elapsed = Math.abs(now - target);

  Object.entries(parts).forEach(([key, value]) => {
    let elapsedValue;
    if (key === 'days') {
      elapsedValue = Math.floor(elapsed / 86400000);
    } else if (key === 'hours') {
      elapsedValue = Math.floor((elapsed % 86400000) / 3600000);
    } else if (key === 'minutes') {
      elapsedValue = Math.floor((elapsed % 3600000) / 60000);
    } else if (key === 'seconds') {
      elapsedValue = Math.floor((elapsed % 60000) / 1000);
    }

    const remaining = parts[key].element.querySelector(".number");
    const text = parts[key].element.querySelector(".text");
    remaining.innerText = elapsedValue;
    text.innerText = parts[key].text[Number(elapsedValue === 1)];
    const dots = parts[key].element.querySelectorAll(".dot");

    dots.forEach((dot, idx) => {
      dot.dataset.active = idx <= elapsedValue;
      dot.dataset.lastactive = idx === elapsedValue;
    })
  });

  window.requestAnimationFrame(() => {
    getElapsedTime(target, parts);
  });
}