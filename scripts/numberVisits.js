const visits = document.querySelector("#numVisit");

let visitsKey = Number(window.localStorage.getItem("visitsKey-ls")) || 0;

if (visitsKey !== 0) {
    visits.textContent = visitsKey;
}
else {
    visits.textContent = "Welecome"
}

visitsKey++;

localStorage.setItem("visitsKey-ls", visitsKey);