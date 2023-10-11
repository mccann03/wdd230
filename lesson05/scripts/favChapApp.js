const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

addEventListener("click", function () {
    if (input.value != '') {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.textContent = input.value;
        button.textContent = "❌";
        li.append(button);
        li.append(ul);
        button.addEventListener("click", function () {
            li.removeChild(ul);
            input.focus();
        });
        input.focus();
        input.value = "";
    };
});