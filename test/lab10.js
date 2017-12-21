//LAB 10-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION

window.onload = pageLoad;

function pageLoad() {

  var formHandle = document.forms[0];

  formHandle.onsubmit = processForm;

}

function processForm() {
  var user_name = document.getElementById("inName").value;
  var user_color = document.getElementById("inColor").value;

  document.cookie = "name=" + user_name + "color:" + user_color;

}
