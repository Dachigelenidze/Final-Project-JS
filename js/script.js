let learnMore = document.getElementById('learn-more');
let box = document.getElementById('overlay');
let box1= document.getElementById('overlay1');
let box2 = document.getElementById('overlay2');
let button = document.querySelector('.fa-rectangle-xmark')
let button1 = document.querySelector('.fa-circle-xmark')
let button2 = document.querySelector('.fa-square-xmark')
let login = document.getElementById('login');
let registernow = document.getElementById('registernow');

learnMore.addEventListener('click', function(){
    
    overlay.classList.add('click');
})

button.addEventListener('click', function(){
    overlay.classList.remove('click');

 });

// RegisterNOW vALIDATION

 
 registernow.addEventListener('click', function(){
    
    box1.classList.add('click');
    document.querySelector(".wrapper2").style.display = "none";
    document.querySelector(".wrapper1").style.display = "none";



})

button1.addEventListener('click', function(){
    box1.classList.remove('click');
    document.querySelector(".wrapper2").style.display = "block";
    document.querySelector(".wrapper1 ").style.display = "block";

 });



 login.addEventListener('click', function(){ 
    box2.classList.add('click');
 document.querySelector(".wrapper2").style.display = "none";
 document.querySelector(".wrapper1").style.display = "none";



})

button2.addEventListener('click', function(){
    box2.classList.remove('click');
 document.querySelector(".wrapper2").style.display = "block";
 document.querySelector(".wrapper1").style.display = "block";

});

// LOG IN VALIDATION

// let formValidation1 = document.getElementById('form')
let myInput = document.getElementById("psw");
let userName = document.getElementById('username');
let errorText = document.getElementById('errortext')
let errorPassword = document.getElementById('errorpassword')
let strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
let regularExpression= "^[A-Za-z][A-Za-z0-9_]{7,29}$";



    userName.addEventListener('keydown', function(){
        if(userName.value.match(regularExpression)) {  
            errorText.innerText = 'Username is Valid'
            errorText.style.color = 'green' ;
          } else {
            errorText.innerText = 'Please insert correct Username'
            errorText.style.color = 'red' ;
          }
    
    })
    
    myInput.addEventListener('keyup', function(){
        if(myInput.value.match(strongRegex)) {  
            errorPassword.innerText = 'Password is Valid'
            errorPassword.style.color = 'green' ;
          } else {
            errorPassword.innerText = 'Password must contain 8 symbols'
            errorPassword.style.color = 'red' ;
          }
        })



