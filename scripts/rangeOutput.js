const rangeValues = document.getElementById("rangeValues");
const output = document.getElementById("pageRating");

// RANGE event listener
output.addEventListener('change', displayRatingValue);
output.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValues.innerHTML = output.value;
}