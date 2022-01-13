const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(toDos));
}


function deleteTodo(event) {
    const li = event.target.parentElement;
    // li.classList.add('deleteAni');
    li.remove();
    // setTimeout(() => {li.remove(); }, 500);
    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodos();
    
}



function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    li.classList.add('efec');
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = "";
    // button.addEventListener('click', deleteTodo);
    li.addEventListener('click', deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}


function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener('submit',handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}
