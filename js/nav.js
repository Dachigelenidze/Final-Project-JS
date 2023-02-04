const nav = ["Home", "Gallery", "Store", "Contact"];

const links = ["index.html", "gallery.html", "store.html", "contacts.html"];

let navtext = '<ul class="flex" id="ul-item">';

for (i = 0; i < nav.length; i++) {
  navtext += '<li><a href="' + links[i] + '">' + nav[i] + "</a></li>";
}

navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;


let navigation = document.getElementById('nav');
let navUl = document.getElementById('ul-item');
let burgerBar = document.getElementById('burgerBar');
let main = document.getElementById('main')
let footer = document.getElementById('footer')
let satauri = document.querySelector(".satauri")


burgerBar.addEventListener('click',function() {
    navigation.classList.toggle('activeNav');
    burgerBar.classList.toggle('activeBugerBar');
    navUl.classList.toggle('toggleNavigation');
    main.classList.toggle('hide');
    footer.classList.toggle('hide');
    satauri.classList.toggle('hide');
})
