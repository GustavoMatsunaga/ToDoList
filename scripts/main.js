/********* MAIN PAGES *********/
var taskes = document.querySelector(".taskes");
var editPage = document.querySelector("#edit");
var createPage = document.querySelector("#create");
var main = document.querySelector(".main");

/********* CREATE AREA *********/
var taskCreate = document.querySelector("#task-card-text-create");
var saveCreate = document.querySelector(".create-button-save");
var deleteCreate = document.querySelector(".create-button-delete");


/********* EDIT AREA *********/
var taskEdit = document.querySelector("#task-card-text-edit");
var saveEdit = document.querySelector(".edit-button-save");
var deleteEdit = document.querySelector(".edit-button-delete");

/********* GLOBAL VARIABLES *********/
var taskesArray = [];
var idGlobal = 0;

/********* MAIN PAGE *********/
// ADD TASK
var addButton = document.querySelector(".add")
addButton.addEventListener("click", () => {
    createPage.classList.toggle("notshow");
    main.classList.toggle("notshow");
})

// SAVE TASK
saveCreate.addEventListener("click", () => {
    togglePageCreate();
    taskesArray.push(taskCreate.value)
    updatePostIt();
    taskCreate.value = ""
})

// DELETE TASK (MAIN PAGE)
deleteCreate.addEventListener("click", () => {
    taskCreate.value = ""
    togglePageCreate();
})



/********* FUNCTIONS *********/
// CREATE THE POST IT BY USING THE INFORMATION GIVE BY THE USER GETTING IT`S VALUE
function createPostIt(task) {
    // Create the task card
    var taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    
    // Create the task text
    var taskCardText = document.createElement("p");
    taskCardText.classList.add(".task-card-text")
    taskCardText.textContent = task;

    // Generates random positions to make the Post-It more dynamic
    taskCard.style.transform = `rotate(${Math.floor(Math.random() * 10) - 5}deg)`;

    // Insert the text on the card
    taskCard.appendChild(taskCardText);
    
    return taskCard;
}

// UPDATE THE VALUES
function updatePostIt () {
    // First clean all the content that there is on taskes
    taskes.textContent = "";

    // Make sure that the ID is 0, so whenever it update the values the ID stay in order
    var i = 0;

    // The actual task will receive the values from the task in taskes and put the ID
    var actualTask = ""
    taskesArray.forEach(task => {
        actualTask = createPostIt(task)
        actualTask.id = i;
        taskes.appendChild(actualTask);
        i++;
    });

    // Adding the event listener of double click
    addEditListener();
}

/********* Toggle the page create to the main page *********/
function togglePageCreate () {
    createPage.classList.toggle("notshow");
    main.classList.toggle("notshow");
}

/********* Toggle the page create to the edit page *********/
function togglePageEdit () {
    editPage.classList.toggle("notshow");
    main.classList.toggle("notshow");
}

/********* Adding the event listener double click *********/
function addEditListener () {
    // Adding edit and delete function with a event listener of double click
    var taskCards = document.querySelectorAll(".task-card");
    taskCards.forEach(taskCard => {
    taskCard.addEventListener("dblclick", editTask);
    })
}

/********* Edit Task *********/
function editTask (event) {
    togglePageEdit ()

    // Gets the element that is going to be updated
    var postIt = event.target

    // Change the content of the box of the task Edit to the Post-It that is going to be edit
    taskEdit.value = postIt.textContent;

    // Put the ID in a Global ID, so other functions have the access to the element that is being updated
    idGlobal = postIt.id;
}

deleteEdit.addEventListener("click", () => {
    // Delete the element using the global ID
    taskesArray.splice(idGlobal, 1);

    // Update the elements
    updatePostIt();
    togglePageEdit();
})

saveEdit.addEventListener("click", () => {
    // Change the content of the element by using the Global ID
    taskesArray[idGlobal] = taskEdit.value;
    // Update the elements
    updatePostIt();
    // Insert the default value to the task edit content
    togglePageEdit();
})