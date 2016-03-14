
console.log("Hello World!");

var items = ["I", "passed", "the", "quiz"];

var divContent = document.getElementsByClassName("wrapper")[0];

var aList = document.createElement("ul");
divContent.appendChild(aList);
for (var i = 0; i < items.length; i++){
	var aListItem = document.createElement("li");
	aList.appendChild(aListItem);
	aListItem.innerHTML = items[i];
}