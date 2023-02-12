"use strict";
// იფილტრება h3ით

function search() {
  let filter = document.getElementById("filter").value.toUpperCase();
  let item = document.querySelectorAll(".item");
  let h3 = document.getElementsByTagName("h3");
  for (let i = 0; i <= h3.length; i++) {
    let a = item[i].getElementsByTagName("h3")[0];

    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

filter.addEventListener("keyup", function (event) {
  search(event.target.value);
});
