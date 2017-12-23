//#### ASSIGNMENT 5 - STORE HOURS ####



var tableObj;

function initAll() {
  tableObj = document.getElementById("schedTbl");
  //document.getElementById("routeRb1").onclick = getTextFile("sched1.txt");
  document.getElementById("routeRb2").onclick = getTextFile("sched2.txt");
  //document.getElementById("routeRb3").onclick = getTextFile("sched3.txt");
}

function getTextFile() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(location) {

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
