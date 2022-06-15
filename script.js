let task = document.getElementById('task');
let addButton = document.getElementById('addbtn');
let taskList = document.getElementById('taskList');

function addtask() {

    if (task.value === "") {
      window.alert("[ERRO] Preencha o campo com o nome da nova tarefa.")

    } else {
    
    let item = document.createElement('li');
    item.setAttribute("class", "item");
      
    let chbox = document.createElement('input');
    chbox.setAttribute("type", "checkbox");
    chbox.setAttribute("class", "chbox");
      
    let taskText = document.createElement('span');
    taskText.innerText = task.value;

    let container = document.createElement('div');
    container.setAttribute('class', 'container')
    container.appendChild(chbox);
    container.appendChild(taskText);

    let removebtn = document.createElement('button');
    removebtn.setAttribute("class", "removebtn");
    removebtn.innerText = "Remover";
    removebtn.addEventListener("click", () => {
      item.remove()
    });

    chbox.addEventListener("change", () => {
        if (chbox.checked) {
            taskText.classList.add("marked");
        } else {
            taskText.classList.remove("marked");
        }
    })
    
    item.appendChild(container);
    item.appendChild(removebtn);

    taskList.appendChild(item);
    task.value = "";

    }
}

addButton.addEventListener('click', addtask)