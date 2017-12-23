//#### ASSIGNMENT 5 - STORE HOURS ####



var tableObj;

function initAll() {
  var formHandle = document.forms[0];
  tableObj = document.getElementById("schedTbl");

  formHandle.onclick = processForm;

  //document.getElementById("routeRb1").onclick = getTextFile("sched1.txt");
  //document.getElementById("routeRb2").onclick = getTextFile();
  //document.getElementById("routeRb3").onclick = getTextFile("sched3.txt");
}

function processForm() {
  //alert("xxx");
  document.getElementById("routeRb2").onclick = getTextFile();
}

function getTextFile() {

  alert("xxx");

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
  xhttp.open("GET", "sched2.txt", true);

  xhttp.send(null);
}

window.onload = initAll;
