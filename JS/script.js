
var userInput = document.getElementById("center-block");
var theList = []



//Updates the userlist from theList list. not confusing i promise
function updateList() {
    var list = document.getElementById("text-list");
    list.innerHTML = "";
    for (var i = 0; i < theList.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(theList[i]));
        list.appendChild(item);
    }

}


//Gets called when ENTER button is pressed
function buttonClicked() {
    theList.push(userInput.value);
    console.log(theList);
    console.log(userInput.value);
    updateList();
}


// Coppied from w3schools. it works
var input = document.getElementById("center-block");

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    document.getElementById("enter-button").click();
  }
}); 

//when user enters the site, automaticly focus on input box
window.onload = function() {
    document.getElementById("center-block").focus();
};