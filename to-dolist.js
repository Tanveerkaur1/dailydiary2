const taskInput = document.getElementById('user-input');
const addButton = document.querySelector('.btn');
const taskList = document.getElementById('task-list');

function addTask(){
    const taskText = taskInput.value;
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value ='';


      const deleteButton = document.createElement('button');
       deleteButton.textContent='delete';
       deleteButton.classList.add('delete');
       listItem.appendChild(deleteButton);


    //     delete function  is in the add task because whenever we want to create a list and want to delet the list then it delte it athat time so we use it in the same fucntion
       function deletetask(){
        taskList.remove(listItem);
    }
    
    deleteButton.addEventListener('click',deletetask);

}

addButton.addEventListener('click',addTask);

