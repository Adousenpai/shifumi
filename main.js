var pierre = document.getElementById("pierre");
var feuille = document.getElementById("feuille");
var ciseaux = document.getElementById("ciseaux");
var Me = document.getElementById("moi");
var ordi = document.getElementById("ordi");
var ia = "";
var result = document.getElementById("result");
var scoreMe = document.getElementById("scoreme");

console.log(ordi);

pierre.addEventListener("click", function() {
  Me.setAttribute("src", "media/pierre.jpg");
  ia = Math.floor(Math.random() * 3);
  Ordi();
  if (ia == 0) {
    result.innerHTML = "Égalité";
    }
    else if(ia == 1){
      result.innerHTML = "Gagné";
      var i = scoreMe++;

    }
    else {
      result.innerHTML = "Perdu";
    }
  // console.log(result);
});

feuille.addEventListener("click", function() {
  Me.setAttribute("src", "media/feuille.jpg");
  ia = Math.floor(Math.random() * 3);
  Ordi();
  console.log(ia);
});

ciseaux.addEventListener("click", function() {
  Me.setAttribute("src", "media/ciseaux.jpg");
  ia = Math.floor(Math.random() * 3);
  // Ordi();
  Ordi();
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
function comparer() {
  if (Me === ordi) {
    result.innerHTML = "Egalité";
  }
}

