let inputNewTask = document.querySelector('#inputNewTask');
let btnNewTask = document.querySelector('#btnNewTask');
let taskList = document.querySelector('#taskList');

function generateId() {
  return Math.floor(Math.random() * 3000);
}

function addTask(task) {
  let li = createTagLi(task);
  taskList.appendChild(li);
  inputNewTask.value = '';
}

function createTagLi(task) {
  let li = document.createElement('li');
  li.id = task.id;
  
  let span = document.createElement('span');
  span.classList.add('taskText')
  span.innerHTML = task.name;

  let div = document.createElement('div');

  let btnEdit = document.createElement('button');
  btnEdit.classList.add('btnAction');
  btnEdit.innerHTML = '<i class="fa fa-pencil"></i>';
  btnEdit.setAttribute('onclick', 'editTask('+task.id+')');
  
  let btnDelete = document.createElement('button');
  btnDelete.classList.add('btnAction');
  btnDelete.innerHTML = '<i class="fa fa-trash"></i>';
  btnDelete.setAttribute('onclick', 'deleteTask('+task.id+')');

  div.appendChild(btnEdit);
  div.appendChild(btnDelete);

  li.appendChild(span);
  li.appendChild(div);
  
  return li;
}

function editTask(idTask){
  let li = document.getElementById(''+ idTask +'');

  if (li) {
    
  }
}

function deleteTask(idTask){
  // let confirm = window.confirm('Tem certeza que deseja excluir?');

  // if (confirm) {
    let li = document.getElementById(''+ idTask +'');

    if (li) {
      taskList.removeChild(li); 
    }
  // }
}

inputNewTask.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    let task = {
      id: generateId(),
      name: inputNewTask.value,
    }
    addTask(task);
  }
});

btnNewTask.addEventListener('click', (e) => {
  let task = {
    id: generateId(),
    name: inputNewTask.value,
  }
  addTask(task);
})

const audioRain = new Audio("./assets/sound/Chuva.wav")
// audioRain.play()
audioRain.loop = true