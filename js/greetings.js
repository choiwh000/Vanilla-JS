const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const Hidden_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(Hidden_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem( USERNAME_KEY , username);
        paintGreeting(username);
        todo.classList.remove(Hidden_CLASSNAME);
    }

    function paintGreeting(username) {
        greeting.classList.remove(Hidden_CLASSNAME);
        greeting.innerText = `Hello ${username}`;
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);
    const todo = document.querySelector('#todo-form');
 
    if(savedUsername === null){
        loginForm.classList.remove(Hidden_CLASSNAME);
        loginForm.addEventListener('submit', onLoginSubmit);
    } else {
        paintGreeting(savedUsername);
        todo.classList.remove(Hidden_CLASSNAME);
    }
