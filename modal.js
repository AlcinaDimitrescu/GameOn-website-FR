function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const form = document.getElementById("form");
var prenom = document.getElementById("first");
var firstName = document.getElementById("error-prenom");

var nom = document.getElementById("last");
var lastName = document.getElementById("error-nom");
var minLength = 2;

var email = document.getElementById("email");
var mail = document.getElementById("error-mail");
const mailCheck =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var naissance = document.getElementById("birthdate");
var birthDate = document.getElementById("error-date");

var tournoi = document.getElementById("quantity");
var tourney = document.getElementById("error-tournoi");
const tourneyCheck = /\d+/;

var radio = document.getElementsByName("location");
var radioCheck = document.getElementById("error-checkbox");

var checkBox = document.getElementById("error-box");
var checkBox1 = document.getElementById("checkbox1");

var counter = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault(); //On enlève le comportement par défaut qui est la soumission du formulaire

  if (prenom.value.length >= minLength) {
    //Prenom//
    firstName.setAttribute("data-error-visible", false);
    counter++;
  } else {
    firstName.setAttribute(
      "data-error",
      "Veuillez rentrer plus de deux caractères"
    );
    firstName.setAttribute("data-error-visible", true);
  }

  if (nom.value.length >= minLength) {
    //Nom//
    lastName.setAttribute("data-error-visible", false);
    counter++;
  } else {
    lastName.setAttribute(
      "data-error",
      "Veuillez rentrer plus de deux caractères"
    );
    lastName.setAttribute("data-error-visible", true);
  }

  if (mailCheck.test(email.value)) {
    //Email//
    mail.setAttribute("data-error-visible", false);
    counter++;
  } else {
    mail.setAttribute("data-error", "Veuillez rentrer une email valide");
    mail.setAttribute("data-error-visible", true);
  }

  if (naissance.value === "") {
    //Date de naissance//
    birthDate.setAttribute(
      "data-error",
      "Veuillez rentrer une date de naissance"
    );
    birthDate.setAttribute("data-error-visible", true);
  } else {
    birthDate.setAttribute("data-error-visible", false);
    counter++;
  }

  if (tourneyCheck.test(tournoi.value)) {
    //Tournois//
    tourney.setAttribute("data-error-visible", false);
    counter++;
  } else {
    tourney.setAttribute("data-error", "Veuillez rentrer une valeur numérique");
    tourney.setAttribute("data-error-visible", true);
  }

  let radioValid = false;

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      //Choix de villes//
      radioValid = true;
      radioCheck.setAttribute("data-error-visible", "false");
      counter++;
      break;
    }
  }
  if (!radioValid) {
    radioCheck.setAttribute("data-error", "Veuillez choisir une ville");
    radioCheck.setAttribute("data-error-visible", "true");
  }

  if (!checkBox1.checked) {
    checkBox.setAttribute(
      "data-error",
      "Veuillez cocher les conditions générales"
    );
    checkBox.setAttribute("data-error-visible", "true");
  } else {
    checkBox1.setAttribute("data-error-visible", "false");
    counter++;
  }

  var validDiv = document.getElementById("validation");

  if (counter === 7) {
    console.log("valider");
    modalbg.style.display = "none";
    validDiv.style.display = "block";
  }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
