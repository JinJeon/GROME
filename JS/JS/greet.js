const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetForm = document.querySelector("#greet");
const toDoForm_greet = document.querySelector("#todo-form");
const toDoList_greet = document.querySelector("#todo-list");
const quotes_greet = document.querySelector("#quotes");
 

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

function greetMake(){
    const username = localStorage.getItem(KEY_USERNAME);
    greetForm.classList.remove(HIDDEN_CLASSNAME);
    greetForm.innerText = 
        `HI. ${username}.`;
    toDoForm_greet.classList.remove(HIDDEN_CLASSNAME);
    toDoList_greet.classList.remove(HIDDEN_CLASSNAME);
    quotes_greet.classList.remove(HIDDEN_CLASSNAME);
}
// function onLoginLink(event){
//     console.log(event);
//     event.preventDefault();
//     console.dir(event);
//     alert("clicked.");
// }
// loginLink.addEventListener("click", onLoginLink);
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(KEY_USERNAME, username);
    greetMake();
};
const savedUsername = localStorage.getItem(KEY_USERNAME);
if(savedUsername === null){
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else{
    greetMake(); 
}
