
console.log("Hello World!");

var items = ["I", "passed", "the", "quiz"];

var divContent = document.getElementById("wrapper");

for (var i = 0; i < items.length; i++){
	var aParagraph = document.createElement("p");
	divContent.appendChild(aParagraph);
    aParagraph.className = "quiz-word";
	aParagraph.innerHTML = items[i];
}