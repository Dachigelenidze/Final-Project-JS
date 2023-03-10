"use strict";
function Users() {
  let requist = new XMLHttpRequest();
  requist.addEventListener("load", function () {
    let Mosuli = this.responseText;
    let MosuliJS = JSON.parse(Mosuli);
    console.log(MosuliJS);
    let ul = document.createElement("ul");
    MosuliJS.data.forEach((element) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = `${element.first_name} ${element.last_name}`;
      let img = document.createElement("img");
      img.setAttribute("src", element.avatar);
      li.appendChild(p);
      li.appendChild(img);
      ul.appendChild(li);
    });
    document.getElementById("users").appendChild(ul);
  });

  requist.addEventListener("error", function () {
    let p = document.createElement("p");
    p.textContent = "Server Error";
    p.style.fontSize = "50px";

    document.getElementById("users").appendChild(p);
  });

  requist.open("GET", "https://reqres.in/api/users?page=2");
  requist.send();
}

Users();
