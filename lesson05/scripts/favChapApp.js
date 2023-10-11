const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement("li");
        const button = document.createElement("button");
        li.textContent = input.value;
        button.textContent = "❌";
        li.append(button);
        list.append(li);
        button.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = "";
    };
});