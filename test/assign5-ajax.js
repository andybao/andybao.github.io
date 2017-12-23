//#### ASSIGNMENT 5 - STORE HOURS ####
var tableObj;
var formHandle;

function initAll() {
  formHandle = document.forms[0];
  tableObj = document.getElementById("schedTbl");

  formHandle.onclick = processForm;
}

function processForm() {

  switch(formHandle.routeRb.value) {
  case "1":
    getTextFile("sched1.txt");
    break;
  case "2":
    getTextFile("sched2.txt");
    break;
  case "3":
    getTextFile("sched3.txt");
    break;
  }
}

function getTextFile(location) {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        tableObj.innerHTML = xhttp.responseText;
      }
      else {
        alert("Connection was unsuccessful");
      }
    }
  }
  xhttp.open("GET", location, true);

  xhttp.send(null);
}

window.onload = initAll;
