const pw1 = document.querySelector("#password1");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#message");

pw2.addEventListener("focusout", confirmMatch);

function confirmMatch() {
    if (pw1.value !== pw2.value) {
        message.textContent = "Passwords do not match.";
        message.style.visibility = "show";
        pw2.style.backgroundColor = "#ffcccb";
        pw2 = "";
        pw2.focus;
    }
    else {
        message.style.display = "none";
        pw2.style.backgroundColor = "#fff";
        pw2.style.color = "#000";
    }
}