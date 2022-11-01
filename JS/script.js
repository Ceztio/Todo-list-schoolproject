
var userInput = document.getElementById("center-block");
var theList = [];
var checkBoxCounter = 0;
var userChecked = 0;
var listLength = 0;
var taskDone = 0;


//Updates the userlist from theList list. and adds checkbox next to it


// add class to the list item
function updateList() {
    var list = document.getElementById("text-list");
    var item = document.createElement("li");
    item.setAttribute("id", "item"+checkBoxCounter);
    item.innerHTML = "<input type='checkbox' id='checkbox"+checkBoxCounter+"' onclick='checkboxClicked("+checkBoxCounter+")'>" + userInput.value;
    list.appendChild(item);
    checkBoxCounter++;
    listLength++;
    doneCounterFun();
}

function doneCounterFun() {
    document.getElementById("doneCounter").innerHTML = taskDone+" / "+listLength;
  
}

//Gets called when ENTER button is pressed
function buttonClicked() {
    theList.push(userInput.value);
    console.log(theList);
    console.log(userInput.value);
    updateList();
}


function checkboxClicked(number) {
  var item = document.getElementById("item"+number);
    if (document.getElementById("checkbox"+number).checked) {
      item.style.textDecoration = "line-through";
      item.style.color = "grey";
      item.style.fontStyle = "italic";
      userChecked++;
      taskDone++;
    }
    else {
      item.style.textDecoration = "none";
      item.style.color = "white";
      item.style.fontStyle = "normal";
      userChecked--;
      taskDone--;
    }
    doneCounterFun();
    console.log(userChecked)
    // var itemChange = document.getElementById("item"+number);
    // console.log("ItemChangeValue = "+itemChange.innerText)
    // itemChange.id = "lineOverText";
  
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