const visit = document.querySelector("#latestVisit");

let visitKey = Number(window.localStorage.getItem("visitKey-ls")) || 0;

let lastVisit = localStorage.setItem(Date.now());
let today = Date.now();
const diffVisit = lastVisit - today;

if (visitKey !== 0) {
    visit.textContent = `You last visited ${visitKey} days ago.`
}
else if (visitKey !== 0 && diffVisit < 86400000) {
    visit.textContent = "Back so soon! Awesome!"
}
else {
    visit.textContent = "Welcome! Let us know if you have any questions."
}

visitKey++;

localStorage.setItem("visitKey-ls", visitKey);