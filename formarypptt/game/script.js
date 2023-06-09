//JS just to handle adding and removing squishies
function addSquishy() {
  let squishyTemplate = document.querySelector("#squishy-template");
  let squishy = document.importNode(squishyTemplate.content, true);
  let newSquishy = squishy.querySelector(".squishy");
  newSquishy.onclick = function () {
    this.remove();
  };
  document.querySelector(".squishy-container").appendChild(newSquishy);
}

addSquishy();

document.querySelector(".squishy").addEventListener("click", function () {
  this.remove();
});

document.querySelector("#addSquishy").addEventListener("click", () => {
  addSquishy();
});

document.querySelector("#resetSquishies").addEventListener("click", () => {
  document.querySelector(".squishy-container").innerHTML = "";
  addSquishy();
});