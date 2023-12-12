const todoList = [];

//render text to page, loop through array
function renderTodoList(todo) {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<div>${todo.text}</div>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  console.log(todo);
}

//create todo object
//Add todo object to array
function addTodo(text) {
  const todo = {
    text,
    //toggle to true when complete
    complete: false,
    //generate unique id so the todo can be located in the array and removed
    uniqueId: Date.now(),
  };
  todoList.push(todo);
  renderTodoList(todo);
}

//get text from html form
const form = document.querySelector(".js-form");
//add event listener
form.addEventListener("submit", (event) => {
  //prevent page from refreshing after hitting submit
  event.preventDefault();
  //grab the text
  const input = document.querySelector(".js-input");
  //save input value as variable
  const text = input.value;
  //pass "text" to addTodo() function
  addTodo(text);
});
