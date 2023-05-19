// ===============================================================================================

// Tính thời gian kể từ khi người dùng kick vào 
var startTime;
var elapsedTime = 0;
var timerInterval;

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  var currentTime = new Date().getTime();
  elapsedTime = (currentTime - startTime) / 1000;
}

// Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider_style");
    if (n > slides.length)
        slideIndex = 1
    if (n < 1)
        slideIndex = slides.length
    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "flex";
    
    startTimer(); // Bắt đầu đếm thời gian khi người dùng kick vào
    setTimeout(function() {
        if (elapsedTime >= 3) {
            plusSlides(1);
        }
    }, 3000);
}

// ===============================================================================================
//Validate form
const signinForm = document.getElementById("signinForm");
const fogotPassForm = document.getElementById("fogotPassForm");
const createForm = document.getElementById("createForm");
var emailInput = document.getElementById("email");
var passwInput = document.getElementById("password");
var emailFogot = document.getElementById("email-fogot");
var emailCreate = document.getElementById("email-create");
var passwCreate = document.getElementById("password-create");


signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(emailInput) && isValidPassword(passwInput)) {
        alert("Sign In");
        signinForm.submit();
    }
});
fogotPassForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(emailFogot)) {
        alert("Fogot Password");
        fogotPassForm.submit();
    }
});
createForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateEmail(emailCreate) && isValidPassword(passwCreate)) {
        alert("Create account");
        fogotPassForm.submit();
    }
});

function validateEmail(email) {
    
    if (email.value === "") {
        email.setCustomValidity("Email is required");
        return false;
    }
    if (!isValidEmail(email.value)) {
        email.setCustomValidity("Invalid email address");
        return false;
    }
    email.setCustomValidity("");
    return true;
}

// function validateEmail1() {
//     const val = emailInput.value.trim();
//     if (val === "") {
//         emailInput.setCustomValidity("Email is required");
//         return false;
//     }
//     if (!isValidEmail(val)) {
//         emailInput.setCustomValidity("Invalid email address");
//         return false;
//     }
//     emailInput.setCustomValidity("");
//     return true;
// }
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPassword(passw){
    if(passw.value === ""){
        passw.setCustomValidity("Password is required");
        return false;
    }
    return true;
}

// ===============================================================================================
// Show Hide
function showHide(id){
    var ctr = document.getElementById(id);
    if(ctr.style.display == 'none')
        ctr.style.display = 'block';
    else
        ctr.style.display = 'none';
}
function ShowItem(id){
    alert("Show item");
    var ctr = document.getElementById(id);
    ctr.style.display = 'block';
}
function CloseItem(id){
    var ctr = document.getElementById(id);
    ctr.style.display = 'none';
}
function showForm(id, cl){
    var forms = document.getElementsByClassName(cl);
    for(var i=0;i<forms.length ;i++){
        forms[i].style.display = 'none';
    }
    var formToShow = document.getElementById(id);
    formToShow.style.display = "block";
}
function showFormFlex(id, cl){
    var forms = document.getElementsByClassName(cl);
    for(var i=0;i<forms.length ;i++){
        forms[i].style.display = 'none';
    }
    var formToShow = document.getElementById(id);
    formToShow.style.display = "flex";
}
function closeFormClass(cl){
    var forms = document.getElementsByClassName(cl);
    for(var i = 0;i<forms.length; i++){
        forms[i].style.display = 'none';
    }
}
function closeForm(id, cl){
    var forms = document.getElementsByClassName(cl);
    for(var i=0;i<forms.length ;i++){
        forms[i].style.display = 'block';
    }
    var formToShow = document.getElementById(id);
    formToShow.style.display = "none";
}
function setBackgroundOnClick(cl, clor) {
    var elemments = document.getElementsByClassName(cl);
    var prevElement = null;
    
    for(var i = 0; i<elemments.length; i++){
        elemments[i].onclick = function(){
            if(prevElement != null)
                prevElement.style.background = '';
            this.style.background = clor;
            prevElement = this;
        }
    }
}

// setBackgroundOnClick('tablinks', '#fec524');

// 
// var acc = document.getElementsByClassName("faq-tit");

// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }


function DongMo(cl, clActive){
    var acc = document.getElementsByClassName(cl);
    for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle(clActive);
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
    }
}
DongMo("sidebar-heading", "coll-active");
DongMo("faq-tit", "active");
