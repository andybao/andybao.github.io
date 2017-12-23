//#### ASSIGNMENT 5 - STORE HOURS ####

window.onload = initAll;

var tableObj;

function initAll() {
  tableObj = document.getElementById("schedTbl");
  document.getElementById("routeRb1").checked = getTextFile;
}

function getTextFile() {

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        tableObj.innerHTML = this.responseText;
      }
      else {
      alert("Connection was unsuccessful: " + this.readyState + ", " + this.status);
    }
  }

  xhttp.open("GET", "sched1.txt", true);

  xhttp.send(null);
  }
}
