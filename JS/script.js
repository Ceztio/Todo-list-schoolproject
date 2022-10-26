
var userInput = document.getElementById("center-block");
var theList = ["INPUT 1"]

const div = document.createElement("div");
const para = document.createElement("p");
const node = document.createTextNode("New list element");
div.appendChild(para);
para.appendChild(node);

const element = document.getElementById("text-list");
element.appendChild(para);



function updateList() {

}


function buttonClicked() {
    console.log(userInput.value)
}
