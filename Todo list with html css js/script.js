const inputBox = Document.getElementById("input-box");
const listContainer = Document.getElementById("list-container");

function addTask(){
if (inputBox.value === '') {
    alert("you must write something!")
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
}