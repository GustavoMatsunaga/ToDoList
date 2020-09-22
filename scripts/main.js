var taskes = document.querySelector(".taskes");
var taskEdit = document.querySelector("#edit");
var taskCreate = document.querySelector("#create");
var main = document.querySelector(".main")

var saveCreate = document.querySelector(".create-button-save")
var deleteCreate = document.querySelector(".create-button-save")

// ADD post-it
var addButton = document.querySelector(".add")
addButton.addEventListener("click", () => {
    taskCreate.classList.toggle("notshow");
    main.classList.toggle("notshow");
})

// CREATE post-it
saveCreate.addEventListener("click", () => {
    taskCreate.classList.toggle("notshow");
    main.classList.toggle("notshow");
})










function createPostIt() {
    var taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    var taskCardText = document.createElement("p");
    taskCardText.classList.add(".task-card-text")
}