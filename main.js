var pierre = document.getElementById("pierre");
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");
var Me = document.getElementById("moi");
var ordi = document.getElementById("ordi");
var ia = "";
var result = document.getElementById("result");
var scoreMe = document.getElementById("scoreme");
var scoreIa = document.getElementById("scoreia");
var i = 1;
var x = 1;
console.log(ordi);

pierre.addEventListener("click", function() {
  Me.setAttribute("src", "media/pierre.jpg");
  ia = Math.floor(Math.random() * 3);
  Ordi();
  if (ia == 0) {
    result.innerHTML = "Égalité";
    // scoreMe.innerHTML = i;
    // scoreIa.innerHTML = x;
  } else if (ia == 1) {
    result.innerHTML = "Gagné";
    scoreMe.innerHTML = i++;
  } else {
    result.innerHTML = "Perdu";
    scoreIa.innerHTML = x++;
  }
  // console.log(result);
});

feuille.addEventListener("click", function() {
  Me.setAttribute("src", "media/feuille.jpg");
  ia = Math.floor(Math.random() * 3);
  Ordi();
  if (ia == 2) {
    result.innerHTML = "Égalité";
  } else if (ia == 0) {
    result.innerHTML = "Gagné";
    scoreMe.innerHTML = i++;
  } else {
    result.innerHTML = "Perdu";
    scoreIa.innerHTML = x++;
  }
  console.log(ia);
});

ciseaux.addEventListener("click", function() {
  Me.setAttribute("src", "media/ciseaux.jpg");
  ia = Math.floor(Math.random() * 3);
  Ordi();
  if (ia == 1) {
    result.innerHTML = "Égalité";
  } else if (ia == 2) {
    result.innerHTML = "Gagné";
    scoreMe.innerHTML = i++;
  } else {
    result.innerHTML = "Perdu";
    scoreIa.innerHTML = x++;
  }
});

function Ordi() {
  console.log("ia :", ia);
  if (ia == 0) {
    ordi.setAttribute("src", "media/pierre.jpg");
  } else if (ia == 1) {
    ordi.setAttribute("src", "media/ciseaux.jpg");
  } else {
    ordi.setAttribute("src", "media/feuille.jpg");
  }
}
