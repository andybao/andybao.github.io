//#### ASSIGNMENT 5 - STORE HOURS ####

window.onload = initAll;

var tableObj;

function initAll() {
  tableObj = document.getElementById("schedTbl");
  document.getElementById("routeRb1").onclick = getTextFile();
  //document.getElementById("routeRb2").onclick = getTextFile("sched2.txt");
  //document.getElementById("routeRb3").onclick = getTextFile("sched3.txt");
}

function getTextFile() {

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
  xhttp.open("GET", "sched1.txt", true);

  xhttp.send(null);
}
