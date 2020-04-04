const fetchURL = 'https://jsonplaceholder.typicode.com/todos';
const listContainer = document.getElementById("list-container");
const userId = document.getElementById("user-id-filter");
const idFrom = document.getElementById("id-from-filter");
const idTo = document.getElementById("id-to-filter");
const completed = document.getElementById("completed");
let list;

function filter() {
    fetch(fetchURL).then(response => response.json())
        .then(json => {
            list = json;
            console.log(list);
            let thisParticularTask = list.filter(function (task) {
                return task.userId == userId.value &&
                    task.id >= idFrom.value &&
                    task.id <= idTo.value &&
                    task.completed == completed.checked
            });
            console.log(thisParticularTask);
            thisParticularTask.forEach(function (task, i) {
                let returnedData = document.createElement("p");
                returnedData.innerHTML = ` UserID: ${task.userId}, ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`;
                listContainer.appendChild(returnedData);
            });
        });
};