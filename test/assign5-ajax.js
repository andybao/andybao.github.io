//#### ASSIGNMENT 5 - STORE HOURS ####

window.onload = initAll;

var tableObj;

function initAll() {
  tableObj = document.getElementById("schedTbl");
  document.getElementById("routeRb1").onclick = getTextFile;
}

function getTextFile() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    alert("xxxx");
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        tableObj.innerHTML = xhttp.responseText;
      }
      else {
      alert("Connection was unsuccessful: " + xhttp.readyState + ", " + xhttp.status);
    }
  }

  xhttp.open("GET", "sched1.txt", true);

  xhttp.send(null);
  };
}
