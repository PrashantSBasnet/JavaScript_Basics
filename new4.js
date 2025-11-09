//basic of javascript and html
//in line javascript 
//best approach is to place Script at the Bottom
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inline JavaScript Example</title>
  <script>
    function greet() {
      alert("This message comes from inline JavaScript!");
    }
  </script>
</head>
<body>
  <button onclick="greet()">Greet Me</button>
</body>
</html>

  
//alternate approach: Linking External JavaScript File
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My First Web App</title>
</head>
<body>
  <h1>Welcome to My First Web App</h1>
  <button onclick="sayHello()">Click Me</button>

  <!-- Link to external JavaScript file -->
  <script src="script.js"></script>
</body>
</html>

function sayHello() {
  alert("Hello, World! JavaScript is linked successfully");
}


/**
In this example, simple in-memory CRUD app using only HTML, JavaScript with just the logic in the browser’s memory (array).
No frameworks, no backend, no database 
**/

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple CRUD App</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    input, button { padding: 8px; margin: 5px; }
    ul { list-style-type: none; padding: 0; }
    li { margin: 6px 0; }
    button { cursor: pointer; }
  </style>
</head>
<body>
  <h1> Simple CRUD Application</h1>
  <input type="text" id="itemInput" placeholder="Enter a task" />
  <button onclick="addItem()">Add</button>

  <ul id="itemList"></ul>

  <script src="app.js"></script>
</body>
</html>


// In-memory array to store tasks
let items = [];

// Add a new item
function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a task!");
    return;
  }

  items.push(value);
  input.value = ""; // clear input
  renderList();
}

// Delete an item by index
function deleteItem(index) {
  items.splice(index, 1);
  renderList();
}

// Edit an item by index
function editItem(index) {
  const newValue = prompt("Edit item:", items[index]);
  if (newValue !== null && newValue.trim() !== "") {
    items[index] = newValue.trim();
    renderList();
  }
}

// Render the list dynamically
function renderList() {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // clear old content

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <button onclick="editItem(${index})">Edit</button>
      <button onclick="deleteItem(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}



/*
Persist Data with Local Storage
If you want the data to survive page reloads, modify the code slightly:
*/

// localStorage.setItem("items", JSON.stringify(items));

// window.onload = function() {
//   const storedItems = JSON.parse(localStorage.getItem("items"));
//   if (storedItems) items = storedItems;
//   renderList();
// };




