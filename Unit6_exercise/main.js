
console.log("Hello World!");

var todos = [
    { job: "Walk the Dog", done: true },
    { job: "Take out trash", done: true },
    { job: "Do Homework", done: false },
    { job: "Practice JavaScript", done: false }
];

var divContent = document.getElementsByClassName("content-wrapper")[0];

var aList = document.createElement("ul");
divContent.appendChild(aList);
for (var i = 0; i < todos.length; i++) {
    var aListItem = document.createElement("li");
    aList.appendChild(aListItem);
    aListItem.innerHTML = todos[i].job;
    if (todos[i].done){
        aListItem.className = "done";
    }
    }
