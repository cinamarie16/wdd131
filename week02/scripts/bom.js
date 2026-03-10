const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", (e) => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);
        input.value = "";
        input.focus();

    } else {
        e.preventDefault();
        input.focus();
        console.log("Please type a chapter");
     }
});