const fetchURL = 'https://jsonplaceholder.typicode.com/todos';
const listContainer = document.getElementById("list-container");
const userId = document.getElementById("user-id-filter");
const idFrom = document.getElementById("id-from-filter");
const idTo = document.getElementById("id-to-filter");
const completed = document.getElementById("completed");
let list;