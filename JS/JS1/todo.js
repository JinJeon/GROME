const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME1 = "hidden";
const KEY_USERNAME1 = "username";
const TODO_KEY = "TODO"

let ToDos = [];

function saveToDo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event){
    const li = event.target.parentElement; 
    li.remove();
    ToDos = ToDos.filter((ToDo)=>ToDo.id!==parseInt(li.id));
    saveToDo();
}
function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text+ "   ";
    const button = document.createElement("button");
    button.classList.add("box");
    button.innerText = "OK";
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
    button.addEventListener("click",deleteToDo);
    if(document.querySelectorAll("li").length > 11){
        const lis = document.querySelector('li:first-child');
        lis.remove();
        ToDos = ToDos.filter((ToDo)=>ToDo.id!==parseInt(lis.id));
        saveToDo();
    }
}


function handleToDoForm(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo, id:Date.now()
    }
    ToDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
    if(JSON.parse(localStorage.getItem("TODO"))[0].text===""){
        const lis = document.querySelector('li:first-child');
        lis.remove();
        ToDos = ToDos.filter((ToDo)=>ToDo.id!==parseInt(lis.id));
        saveToDo();
    }
}

const savedToDos = localStorage.getItem(TODO_KEY);
const Username1 = localStorage.getItem(KEY_USERNAME1);
if(savedToDos !== null && Username1 !== null){
    toDoForm.classList.remove(HIDDEN_CLASSNAME1);
    toDoList.classList.remove(HIDDEN_CLASSNAME1);
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    ToDos = parsedToDos;
}

document.addEventListener("submit", handleToDoForm);

