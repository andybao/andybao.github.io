//#### ASSIGNMENT 5 - STORE HOURS ####

window.onload = pageLoad;

function pageLoad() {

  var tableObj = document.getElementById("schedTbl");

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      tableObj = this.responseText;
    }
  };

  xhttp.open("GET", "sched1.txt", true);

  xttp.send();
}

function displayMsg(xml) {

}
