import { Task } from "../task";
import { TASKS } from "../mock-task";

/*

const list = document.querySelector('ul');
const input = document.querySelector('input');
const pending = document.querySelector('#pendingButton')
const allButton = document.querySelector('#allButton');
const completed = document.querySelector('#completedButton');

function contar() {
    const numTasks = document.getElementById('tasksLeft');
    numTasks.textContent = 'Quedan ' + list.children.length + ' tareas';
}

pending.addEventListener('click', () => {

    for (let i = 0; i < list.children.length; i++) {
        console.log(i);
        let item = list.children[i].firstChild.firstChild as HTMLInputElement;
        if (item.checked === true) {
            console.log("Holiiii");
            let li = list.children[i] as HTMLInputElement;
            li.style.display = 'none';
        }
    }
});

allButton.addEventListener('click', () => {

    for (let i = 0; i < list.children.length; i++) {
        console.log(i);
        let li = list.children[i] as HTMLInputElement;
        li.style.display = 'block';
    }
});

completed.addEventListener('click', () => {

    for (let i = 0; i < list.children.length; i++) {
        console.log(i);
        let item = list.children[i].firstChild.firstChild as HTMLInputElement;
        if (item.checked === false) {
            console.log("Holiiii");
            let li = list.children[i] as HTMLInputElement;
            li.style.display = 'none';
        }
    }
});

input.onkeyup = (e) => {

    if (e.key === 'Enter' && input.value !== '') {

        const listItem = document.createElement('li');
        const divTask = document.createElement('div');
        const check = document.createElement('input');
        const span = document.createElement('span');
        const icon = document.createElement('i');

        check.setAttribute('type', 'checkbox');
        span.textContent = input.value;
        icon.innerHTML = '<i class = "material-icons">delete_outline</i>';

        list.appendChild(listItem);
        listItem.appendChild(divTask);
        divTask.appendChild(check);
        divTask.appendChild(span);
        divTask.appendChild(icon);

        input.value = '';

        contar();

        openWindow(icon, span, listItem);
    }
}

function openWindow(icon, name, item) {

    icon.addEventListener('click', () => {

        const deleteTask = document.querySelector('.modal-container');
        const yesButton = document.querySelector('#yesButton');
        const noButton = document.querySelector('#noButton');
        const askDelete = document.querySelector('#askDelete');

        deleteTask.className = ('modal-container.open');

        askDelete.textContent = name.textContent;

        console.log(name.textContent);

        yesButton.addEventListener('click', () => {
            item.remove();
            const deleteTask = document.querySelector('#ventana');
            deleteTask.classList.remove('open');
            contar();

        });

        noButton.addEventListener('click', () => {
            deleteTask.className = ('.modal-container');
        });
        //Falta poner en el no que cambie la clase de nuevo NO FUNCIONA LO DE LA CLASE

    });
}*/

// Elements

const taskListElement: HTMLUListElement = document.querySelector('#taskList');

// Data Functions

function listTasks():Task[]{

    return TASKS;

}

// HTML Functions

// Events

// Load