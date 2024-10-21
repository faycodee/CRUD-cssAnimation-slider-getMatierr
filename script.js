// data

const tabData = [
  // 0 html
  {
    objectifMat:
      "compose d'instructions permettant de définir des éléments donnant une structure logique d'un texte.",
    nbrhour: 150,
    Coefficient: 2,
    prix: "Free",
    nom: "html",
  },
  // 1 css

  {
    objectifMat: " rendre possible la mise en forme hors document",
    nbrhour: 150,
    Coefficient: 2,
    prix: "Free",
    nom: "css",
  },
  // 2 javascript
  {
    objectifMat:
      "permet d'implémenter des mécanismes complexes sur une page web",
    nbrhour: 200,
    Coefficient: 3,
    prix: 300,
    nom: "javascript",
  },

  // 3 Python
  {
    objectifMat:
      "utilisé pour développer des logiciels, écrire des algorithmes .",
    nbrhour: 200,
    Coefficient: 3,
    prix: 280,
    nom: "python",
  },
  // 4 php
  {
    objectifMat:
      " mettre à la disposition des apprenants toutes les connaissances théoriques et leur faire acquérir des compétences pratiques",
    nbrhour: 130,
    Coefficient: 3,
    prix: 180,
    nom: "php",
  },

  // 5 francais
  {
    objectifMat: "Développer les capacités de son cerveau. ",
    nbrhour: 60,
    Coefficient: 1,
    prix: "Free",
    nom: "francais",
  },
  // 6 arabic
  {
    objectifMat: "Développer les capacités de son cerveau. ",
    nbrhour: 30,
    Coefficient: 1,
    prix: "Free",
    nom: "arabic",
  },
  // 7 english
  {
    objectifMat: "Développer les capacités de son cerveau. ",
    nbrhour: 60,
    Coefficient: 1,
    prix: 300,
    nom: "english",
  },
];

// access des Element
let imgmenu = document.querySelector("#imgmneu");
let ul = document.querySelector("nav ul");
let ho = document.getElementById("ho");
let ma = document.getElementById("ma");
let pa = document.getElementById("pa");
let re = document.getElementById("re");
let si = document.getElementById("si");
let autre = document.getElementById("autre");
let autre2 = document.getElementById("autre2");
let hhtml = document.getElementById("0");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let matier1 = document.getElementById("matier");
let objc = document.getElementById("objc");
let nbrh = document.getElementById("nbrh");
let m3ml = document.getElementById("m3ml");
let m3ml2 = document.getElementById("m3ml2");
let matier2 = document.getElementById("matier2");
let objc2 = document.getElementById("objc2");
let nbrh2 = document.getElementById("nbrh2");
let prix = document.getElementById("prix");
let prix2 = document.getElementById("prix2");
let container2 = document.getElementById("conti2");
let buttonsimg = document.getElementById("buttonsimg");
let buttonsimg2 = document.getElementById("buttonsimg2");
let container2creer = document.getElementById("conti2creer");

console.log(tabData);

// menu bar
function tomenubar() {
  imgmenu.classList.toggle("toggleimg");
  ul.classList.toggle("toggleul");
}
// active or not
onscroll = () => {
  if (scrollY >= 0 && scrollY <= 400.857177734375) {
    pa.classList.remove("active");
    ma.classList.remove("active");
    re.classList.remove("active");
    si.classList.remove("active");
    ho.classList.add("active");
  } else if (scrollY >= 400 && scrollY <= 967.857177734375) {
    re.classList.remove("active");
    si.classList.remove("active");
    ma.classList.add("active");
    ho.classList.remove("active");
    pa.classList.remove("active");
    document.querySelector(".matiere").style.animation =
      " opacity 1s ease forwards";

    document.querySelector("#container1-text").style.animation =
      "movetoright 3s ease";
    document.querySelector("#container2-text h1").style.animation =
      "sizeup 2s ease forwards";
    document.querySelector(".matiere").style.animation =
      "opacity 5s ease forwards";
  } else if (scrollY >= 967.857177734375 && scrollY <= 1367.857177734375) {
    re.classList.remove("active");
    si.classList.remove("active");
    pa.classList.add("active");
    ma.classList.remove("active");
    ho.classList.remove("active");
    document.querySelector("#conti3-table").style.animation =
      " opacity 1s ease forwards";
    document.querySelector(".buttons").style.animation =
      " opacity 2s ease forwards";

    buttonsimg.style.display = "flex";
    document.querySelector("#conti3 img,#contcreer3 img").style.animation =
      " opacity 5s ease forwards";
    document.querySelector(
      "#conti3 button,#contcreer3 button"
    ).style.animation = "  opacity 5s ease forwards";
    document.querySelector("#conti3-table table").style.animation =
      " movetoright 2s ease forwards";
    document.querySelector("#conti3-table h1 ").style.animation =
      " sizeup 2s ease forwards";
  } else if (scrollY <= 1600.857177734375 && scrollY >= 1367.857177734375) {
    re.classList.add("active");
    si.classList.remove("active");
    pa.classList.remove("active");
    ma.classList.remove("active");
    ho.classList.remove("active");
    document.querySelector(".Revieus").style.animation =
      " opacity 1s ease forwards";

    document.querySelector(".Revieus h1 ").style.animation =
      " sizeup 2s ease forwards";
    document.querySelector(".swiper").style.animation =
      " opacity 5s ease forwards";
  } else if (scrollY >= 1900.85717773375 && scrollY <= 3000.85717773375) {
    re.classList.remove("active");
    si.classList.add("active");
    pa.classList.remove("active");
    ma.classList.remove("active");
    ho.classList.remove("active");
    document.querySelector(".Sign").style.animation =
      " opacity 1s ease forwards";
    document.querySelector(".Sign .contiform ").style.animation =
      "  opacity 5s ease forwards";
    document.querySelector(".contiform div h1").style.animation =
      " sizeup 2s ease forwards";
    document.querySelector("#Mobile6").style.animation =
      "movetoright 2.5s ease forwards";
    document.querySelector("#Mobile5").style.animation =
      " sizeup 2.5s ease 1.5s forwards";
    document.querySelector("#Mobile4").style.animation =
      "movetoleft2 2.5s ease 2s forwards";
    document.querySelector("#Mobile3").style.animation =
      " movetoright2 2.5s ease 2.8s forwards";
    document.querySelector("#Mobile2").style.animation =
      "movetoright2 2.5s ease 2s forwards";
    document.querySelector("#Mobile1").style.animation =
      "opacity 6s linear forwards";
    document.querySelector("button").style.animation =
      "opacity 6s linear forwards";
  }
};

// afficher info matiere selected
matier1.addEventListener("click", matierInfo);
function matierInfo() {
  switch (parseInt(matier1.value)) {
    case 0:
      objc.value = tabData[0].objectifMat;
      nbrh.value = tabData[0].nbrhour;
      m3ml.value = tabData[0].Coefficient;
      prix.value = tabData[0].prix;
      break;
    case 1:
      objc.value = tabData[1].objectifMat;
      nbrh.value = tabData[1].nbrhour;
      m3ml.value = tabData[1].Coefficient;
      prix.value = tabData[1].prix;
      break;
    case 2:
      objc.value = tabData[2].objectifMat;
      nbrh.value = tabData[2].nbrhour;
      m3ml.value = tabData[2].Coefficient;
      prix.value = tabData[2].prix;
      break;
    case 3:
      objc.value = tabData[3].objectifMat;
      nbrh.value = tabData[3].nbrhour;
      m3ml.value = tabData[3].Coefficient;
      prix.value = tabData[3].prix;
      break;
    case 4:
      objc.value = tabData[4].objectifMat;
      nbrh.value = tabData[4].nbrhour;
      m3ml.value = tabData[4].Coefficient;
      prix.value = tabData[4].prix;
      break;
    case 5:
      objc.value = tabData[5].objectifMat;
      nbrh.value = tabData[5].nbrhour;
      m3ml.value = tabData[5].Coefficient;
      prix.value = tabData[5].prix;
      break;
    case 6:
      objc.value = tabData[6].objectifMat;
      nbrh.value = tabData[6].nbrhour;
      m3ml.value = tabData[6].Coefficient;
      prix.value = tabData[6].prix;
      break;
    default:
      objc.value = tabData[7].objectifMat;
      nbrh.value = tabData[7].nbrhour;
      m3ml.value = tabData[7].Coefficient;
      prix.value = tabData[7].prix;
      break;
  }
}
//  créer mon cours
container2.classList.add("container-2");
container2creer.style.display = "none";

autre.addEventListener("click", toCreerMat);
function toCreerMat() {
  container2creer.classList.add("container-2");
  container2.style.display = "none";
  container2creer.style.display = "flex";
  document.getElementById("contcreer3").style.display = "flex";
  document.getElementById("conti3").style.display = "none";

  testplace = 2;
}
//  go back to achat page
document.getElementById("contcreer3").style.display = "none";
autre2.addEventListener("click", toAchatMat);
function toAchatMat() {
  document.getElementById("conti3").style.display = "flex";
  document.getElementById("contcreer3").style.display = "none";
  container2.classList.add("container-2");
  container2.style.display = "flex";
  container2creer.style.display = "none";
  testplace = 1;
}

// ajout button
class Matiere {
  constructor(idMat, nomMat, objectifMat, nbrhour, Coefficient, prix) {
    this.id = idMat;
    this.nom = nomMat;
    this.objectif = objectifMat;
    this.nbrhour = nbrhour;
    this.Coefficient = Coefficient;
    this.prix = prix;
  }
}
let id = 1;

let tabUserData = [];
let tabCreerData = [];
var testplace = 1;
function ajout() {
  if (testplace == 1) {
    if (
      objc.value.length > 0 &&
      nbrh.value.length > 0 &&
      m3ml.value.length > 0 &&
      prix.value.length > 0
    ) {
      let matier = new Matiere(
        id,
        tabData[matier1.value].nom,
        objc.value,
        nbrh.value,
        m3ml.value,
        prix.value
      );
      alert(tabData[matier1.value].nom + " a été inséré avec succès .");

      cnt = JSON.stringify(tabUserData);
      localStorage.setItem("vl", cnt);

      matier1.value = "00";
      objc.value = null;
      nbrh.value = null;
      m3ml.value = null;
      prix.value = null;
      tabUserData.push(matier);
      id++;
    } else {
      alert('Veuillez sélectionner l"article que vous souhaitez acheter');
    }
  }
  if (testplace == 2) {
    if (
      /^[\w]{3,20}$/.test(matier2.value) &&
      objc2.value.length > 30 &&
      /^[\d]{1,3}$/.test(nbrh2.value) &&
      /^[\d]{1,3}$/.test(m3ml2.value) &&
      /^[\d]{1,7}$/.test(prix2.value)
    ) {
      let matier = new Matiere(
        id,
        matier2.value,
        objc2.value,
        nbrh2.value,
        m3ml2.value,
        prix2.value
      );
      tabCreerData.push(matier);
      id++;
      alert(matier2.value + " a été inséré avec succès .");
      matier2.value = null;
      objc2.value = null;
      nbrh2.value = null;
      m3ml2.value = null;
      prix2.value = null;
      matier2.style.border = "solid 3.5px transparent";
      objc2.style.border = "solid 3.5px transparent";
      nbrh2.style.border = "solid 3.5px transparent";
      m3ml2.style.border = "solid 3.5px transparent";
      prix2.style.border = "solid 3.5px transparent";
    } else {
      let textErore = " Il y a des erreurs! :\n \n";

      if (/^[\w]{3,20}$/.test(matier2.value) == false) {
        textErore +=
          "       -> Matier : entrez plus de 3 mots et moins de 30 (Sans virgule).\n  ";
        matier2.style.border = "solid 3.5px red";
        matier2.style.borderRadius = " 10px ";
      } else {
        matier2.style.border = "solid 3.5px green";
        matier2.style.borderRadius = " 10px ";
      }
      if (objc2.value.length <= 30) {
        textErore += "     -> Objectif : entrez plus de 30 mots .\n  ";
        objc2.style.border = "solid 3.5px red";
        objc2.style.borderRadius = " 10px ";
      } else {
        objc2.style.border = "solid 3.5px green";
        objc2.style.borderRadius = " 10px ";
      }
      if (/^[\d]{1,3}$/.test(nbrh2.value) == false) {
        textErore +=
          "     -> NumberHeures: Saisir plus de 0 chiffres et moins de 3  chiffres .\n";

        nbrh2.style.border = "solid 3.5px red";
        nbrh2.style.borderRadius = " 10px ";
      } else {
        nbrh2.style.border = "solid 3.5px green";
        nbrh2.style.borderRadius = " 10px ";
      }
      if (/^[\d]{1,3}$/.test(m3ml2.value) == false) {
        textErore +=
          "       -> Coefficient : Saisir plus de 0 chiffres et moins de 3 chiffres .\n";

        m3ml2.style.border = "solid 3.5px red";
        m3ml2.style.borderRadius = " 10px ";
      } else {
        m3ml2.style.border = "solid 3.5px green";
        m3ml2.style.borderRadius = " 10px ";
      }
      if (/^[\d]{1,7}$/.test(prix2.value) == false) {
        textErore +=
          "       -> Prix : Saisir plus de 0 chiffres et moins de 7 chiffres . \n";

        prix2.style.borderRadius = " 10px ";
        prix2.style.border = "solid 3.5px red";
      } else {
        prix2.style.border = "solid 3.5px green";
        prix2.style.borderRadius = " 10px ";
      }
      alert(textErore);
    }
  }
}

console.log(tabUserData);
console.log(tabCreerData);

// buttons style

let i = 0;

let affi = document.getElementById("affi");
let supp = document.getElementById("supp");
let affi2 = document.getElementById("affi2");
let supp2 = document.getElementById("supp2");
buttonsimg.style.mixBlendMode = "lighten";
buttonsimg.style.filter = " hue-rotate(" + 100 + "deg)";
buttonsimg2.style.filter = " hue-rotate(" + 100 + "deg)";
x = setInterval(() => {
  buttonsimg.style.transform = "rotate(" + i + "deg)";
  buttonsimg2.style.transform = "rotate(" + i + "deg)";
  i += 2;
  let val1 = Math.floor(Math.random() * -200);
  let val2 = Math.floor(Math.random() * -120);
  let val3 = Math.floor(Math.random() * 60);
  let val4 = Math.floor(Math.random() * -100);

  affi.style.transform = "translate(" + val1 + "px," + val2 + "px)";
  supp.style.transform = "translate(" + val3 + "px," + val4 + "px)";
  affi2.style.transform = "translate(" + val1 + "px," + val2 + "px)";
  supp2.style.transform = "translate(" + val3 + "px," + val4 + "px)";

  // console.log(i)
}, 100);

// afficher tab

function afficher() {
  clearInterval(x);

  if (testplace == 1) {
    if (tabUserData.length > 0 || suppobject == 1) {
      let thaed =
        "<tr id='tr1'> <th>id</th><th>Nom Matiere</th><th>Nomber dheures</th><th>Coefficient</th><th>Prix</th><th> delete</th></tr>";
      tab = thaed;

      for (let i = 0; i < tabUserData.length; i++) {
        tab +=
          "<tr> <td>" +
          i +
          " </td><td>" +
          tabUserData[i].nom +
          " </td><td>" +
          tabUserData[i].nbrhour +
          " </td><td>" +
          tabUserData[i].Coefficient +
          "</td> <td>" +
          tabUserData[i].prix +
          "</td><td><button onclick='deleteMat(" +
          i +
          ")'>delete</button></td ></td >";
      }
      document.getElementById("table").innerHTML = tab;
    } else if (tabUserData.length == 0) {
      alert("Veuillez ajouter matiere que vous souhaitez acheter !");
    }
  }
  if (testplace == 2) {
    if (tabCreerData.length != 0 || suppobject == 1) {
      tab =
        "<tr id='tr1'> <th>id</th><th>Nom Matiere</th><th>Nomber dheures</th><th>Coefficient</th><th>Prix</th><th>edit</th><th> delete</th></tr>";
      for (let i = 0; i < tabCreerData.length; i++) {
        tab +=
          "<tr> <td>" +
          i +
          " </td><td>" +
          tabCreerData[i].nom +
          " </td><td>" +
          tabCreerData[i].nbrhour +
          " </td><td>" +
          tabCreerData[i].Coefficient +
          "</td> <td>" +
          tabCreerData[i].prix +
          "</td><td><button onclick='editMat(" +
          i +
          ")'>edit</button></td ></td >" +
          "</td><td><button onclick='deleteMat(" +
          i +
          ")'>delete</button></td ></td >";
      }
      document.getElementById("table2").innerHTML = tab;
    } else if (tabCreerData.length == 0) {
      alert("Veuillez ajouter l matiere que vous souhaitez creer !");
    }
  }
}
// Supprimer tab

function SupprimerTout() {
  clearInterval(x);
  if (testplace == 1) {
    if (
      confirm("Voulez-vous vraiment supprimer tous les objets de collection ? ")
    ) {
      tabUserData = [];
      alert("L'opération a réussi.");

      document.getElementById("table").innerHTML = "";
      data = localStorage.getItem("vl");
      tabUserData = JSON.parse(data);
    }
  }
  if (testplace == 2) {
    if (
      confirm(
        "Voulez-vous vraiment  supprimer tout le matiere que vous avez créé ? "
      )
    ) {
      tabCreerData = [];
      alert("L'opération a réussi.");

      document.getElementById("table2").innerHTML = "";
      data = localStorage.getItem('vl')
      tabCreerData = JSON.parse(data)
    }
  }
}
function deleteMat(i) {
  j = i;
  if (
    testplace == 1 &&
    confirm("Voulez-vous vraiment supprimer cette objet ? ")
  ) {
    alert("L'opération a réussi.");
    tabUserData.splice(j, 1);
  } else {
    tabCreerData.splice(j, 1);
  }
  suppobject = 1;
  afficher();
  suppobject = 0;
}
// document.getElementById('savem').style.display='none'
function editMat(i) {
  document.getElementById("savem").style.display = "flex";
  j = i;
  matier2.value = tabCreerData[j].nom;
  objc2.value = tabCreerData[j].objectif;
  nbrh2.value = tabCreerData[j].nbrhour;
  m3ml2.value = tabCreerData[j].Coefficient;
  prix2.value = tabCreerData[j].prix;
}
var suppobject = 0;

function Savemodification() {
  document.getElementById("savem").style.display = "none";
  tabCreerData[j].nom = matier2.value;
  tabCreerData[j].objectif = objc2.value;
  tabCreerData[j].nbrhour = nbrh2.value;
  tabCreerData[j].Coefficient = m3ml2.value;
  tabCreerData[j].prix = prix2.value;

  afficher();
  matier2.value = null;
  objc2.value = null;
  nbrh2.value = null;
  m3ml2.value = null;
  prix2.value = null;
}
//for nice propmet style

// window.alert() = function(message , timeout=null){
//   const alert = document.createDocumentFragment('div');
//   alert.classList.add('alert');
//   alert.innerHTML = message;
//   document.body.appendChild(alert);

// }

// for sign up

if (
  /^[\w]{3,20}$/.test(matier2.value) &&
  objc2.value.length > 30 &&
  /^[\d]{1,3}$/.test(nbrh2.value) &&
  /^[\d]{1,3}$/.test(m3ml2.value) &&
  /^[\d]{1,7}$/.test(prix2.value)
) {
  alert("succès .");
  matier2.value = null;
  objc2.value = null;
  nbrh2.value = null;
  m3ml2.value = null;
  prix2.value = null;
  matier2.style.border = "solid 3.5px transparent";
  objc2.style.border = "solid 3.5px transparent";
  nbrh2.style.border = "solid 3.5px transparent";
  m3ml2.style.border = "solid 3.5px transparent";
  prix2.style.border = "solid 3.5px transparent";
} else {
  let textErore = " Il y a des erreurs! :\n \n";
}

if (/^[\w]{3,20}$/.test(matier2.value) == false) {
  textErore +=
    "       -> Matier : entrez plus de 3 mots et moins de 30 (Sans virgule).\n  ";
  matier2.style.border = "solid 3.5px red";
  matier2.style.borderRadius = " 10px ";
} else {
  matier2.style.border = "solid 3.5px green";
  matier2.style.borderRadius = " 10px ";
}
if (objc2.value.length <= 30) {
  textErore += "     -> Objectif : entrez plus de 30 mots .\n  ";
  objc2.style.border = "solid 3.5px red";
  objc2.style.borderRadius = " 10px ";
} else {
  objc2.style.border = "solid 3.5px green";
  objc2.style.borderRadius = " 10px ";
}
if (/^[\d]{1,3}$/.test(nbrh2.value) == false) {
  textErore +=
    "     -> NumberHeures: Saisir plus de 0 chiffres et moins de 3  chiffres .\n";

  nbrh2.style.border = "solid 3.5px red";
  nbrh2.style.borderRadius = " 10px ";
} else {
  nbrh2.style.border = "solid 3.5px green";
  nbrh2.style.borderRadius = " 10px ";
}
if (/^[\d]{1,3}$/.test(m3ml2.value) == false) {
  textErore +=
    "       -> Coefficient : Saisir plus de 0 chiffres et moins de 3 chiffres .\n";

  m3ml2.style.border = "solid 3.5px red";
  m3ml2.style.borderRadius = " 10px ";
} else {
  m3ml2.style.border = "solid 3.5px green";
  m3ml2.style.borderRadius = " 10px ";
}
if (/^[\d]{1,7}$/.test(prix2.value) == false) {
  textErore +=
    "       -> Prix : Saisir plus de 0 chiffres et moins de 7 chiffres . \n";

  prix2.style.borderRadius = " 10px ";
  prix2.style.border = "solid 3.5px red";
} else {
  prix2.style.border = "solid 3.5px green";
  prix2.style.borderRadius = " 10px ";
}
