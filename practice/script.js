document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = document.getElementById('new-task').value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('todo-list').appendChild(li);
    document.getElementById('new-task').value = '';
});