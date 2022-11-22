
var userInput = document.getElementById("center-block");
var theList = JSON.parse(localStorage.getItem("items"));
var checkboxClickedArray = JSON.parse(localStorage.getItem("check"));
var checkBoxCounter = 0;
var userChecked = 0;
var listLength = 0;
var taskDone = 0;


if (!Array.isArray(checkboxClickedArray)){
  checkboxClickedArray = []
}

if (!Array.isArray(theList)){
  theList = []
}

if (theList != []){
    for (var i = 0; i < theList.length; i++) {
        updateList();
    }
}

if (checkboxClickedArray != []){
    for (var i = 0; i < checkboxClickedArray; i++) {
        checkboxAutoClicked(checkboxClickedArray[i]);
    }
}



// add class to the list item
function updateList() {
    var list = document.getElementById("text-list");
    var item = document.createElement("li");
    item.setAttribute("id", "item"+checkBoxCounter);
    item.innerHTML = "<input type='checkbox' id='checkbox"+checkBoxCounter+"' onclick='checkboxClicked("+checkBoxCounter+")'>" + userInput.value;
    list.appendChild(item);
    checkBoxCounter++;
    listLength++;
    console.log(checkboxClickedArray)
    doneCounterFun();
    localCookie()
}




function deleteAll() {
  if (confirm("Are you sure you want to delete the entire list?")){

  var list = document.getElementById("text-list");
  list.innerHTML = "";
  checkBoxCounter = 0;
  listLength = 0;
  theList = [];
  checkboxClickedArray = [];
  localStorage.setItem("check", JSON.stringify(theList)); // saves state of checkbox clicks
  doneCounterFun();
  localCookie()
  }

}


function localCookie(){
  localStorage.setItem("items", JSON.stringify(theList));
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
      checkboxClickedArray.push(number)
    }
    else {
      item.style.textDecoration = "none";
      item.style.color = "white";
      item.style.fontStyle = "normal";
      userChecked--;
      taskDone--;
    }



    // change array value to true or false in the same position as the checkbox
    
    localStorage.setItem("check", JSON.stringify(checkboxClickedArray)); // saves state of checkbox clicks
    doneCounterFun();
    console.log(userChecked)
    console.log("ID clicked: " +  number)
  
}




function checkboxAutoClicked(number) {
  var item = document.getElementById("item"+number);

  item.style.textDecoration = "line-through";
  item.style.color = "grey";
  item.style.fontStyle = "italic";
  userChecked++;
  taskDone++;
  checkboxClickedArray.push(number)
    



    // change array value to true or false in the same position as the checkbox
    
    doneCounterFun();
    console.log(userChecked)
    console.log("ID clicked: " +  number)
  
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