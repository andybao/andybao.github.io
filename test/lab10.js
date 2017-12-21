//LAB 10-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION

window.onload = pageLoad;

function pageLoad() {

  var user_name = document.getElementById("inName").value;
  var user_color = document.getElementById("inColor").value;

  //console.log(user_name + " " + user_color);

  document.cookie = "name=" + user_name;
}
