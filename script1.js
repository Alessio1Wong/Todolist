import { database, ref, onValue, set, remove } from './firebase.js';

// 加载页面时从 Firebase 加载待办事项
window.onload = function () {
    const todoList = document.getElementById('todoList');
    const todosRef = ref(database, 'todos');

    onValue(todosRef, (snapshot) => {
        const todos = snapshot.val();
        todoList.innerHTML = ''; // 清空列表
        for (let key in todos) {
            const todo = todos[key];
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.onclick = function () {
                const updatedTodo = { text: todo.text, completed: this.checked };
                set(ref(database, `todos/${key}`), updatedTodo);
            };

            const span = document.createElement('span');
            span.textContent = todo.text;
            span.classList.add('todo-text');
            if (todo.completed) {
                li.classList.add('completed');
            }

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                remove(ref(database, `todos/${key}`));
            };

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        }
    });
};

// 添加待办事项
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }

    const todosRef = ref(database, 'todos');
    const newTodoRef = ref(todosRef, Date.now().toString()); // 使用时间戳作为唯一键
    set(newTodoRef, { text: todoText, completed: false });

    input.value = ''; // 清空输入框
}
