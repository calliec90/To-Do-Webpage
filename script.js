const todoList = [];

function createToDoHTML(i, text) {
  const button = `<div class="delete-btn">
    <i class="fa-solid fa-xmark"></i>
  </div>`;
  const html = `<div class="todo-item-container" key=${i}>
      <div class="todo-text"> ${text} </div>
      ${button}
    </div>`;
  $(document).ready(function () {
    $(".delete-btn").click(function () {
      alert("The paragraph was clicked.");
    });
  });
  return html;
}

//render text to page, loop through array
function renderTodoList(todo) {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = createToDoHTML(i, todo.text);
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
