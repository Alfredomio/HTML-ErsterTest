// rezeptProjekt Version 1.0 Datum 29.07.2021 onclick, showRezept(), 
// rezeptProjekt Version 1.1 Datum 29.07.2021 onclick durch <a href ersetzt, showRezept(), 
// rezeptProjekt Version 1.1 naehrwerte von Startseite raus
// rezeptProjekt Datum 03.08.2021 Version 1.2 Zufallsgenerator

//v1.0 function showRezept(rezeptID){
//v1.0 console.log("showRez");
//v1.0 }



function anzeigeZutatRezepte(zutat) {
  //  const alleZutatenElement = document.getElementById("alleZutaten");
  //const auswahl = alleZutatenElement.value;
  //console.log("anzeigeZutatRezepte()");
  //console.log(alleZutatenObj[zutat]);
  //console.log(zutat);
  eineWeitereZeile = `
  <tr>
  <td>Kennst du JavaScript?</td>
  <td>Nein?</td> 
  <td>Dann frag doch</td>
  <td>die Maus</ul></td>        
  </tr>
`;
  //weitereZeilen += eineWeitereZeile;
  let weitereZutatZeilen = "";
  //console.log(eineWeitereZeile);
  // Eigenschaft : Array (zB. erdbeeren : [ 2, 7, 19])
  for (let indexRezepte = 0; indexRezepte < alleZutatenObj[zutat].length; indexRezepte++) {
    const rezeptID = alleZutatenObj[zutat][indexRezepte] - 1;
    //console.log(rezeptID);
    const name = rezepte[rezeptID].name;
    const zubereitungszeit = rezepte[rezeptID].zubereitungszeit;
    const bild = rezepte[rezeptID].bild;
    const zutaten = rezepte[rezeptID].zutaten;
    let zutatenListe = "";



    //testen, wo bin ich? Ich muss hier alle Zutaten für die rezeptID aus der Datendatei holen
   
    //for (let k = 0; k < alleZutatenObj[zutat].length; k++) {
    for (let k = 0; k < zutaten.length; k++) {
      zutatenListe += `
                <li>
                    ${zutaten[k].wert} ${zutaten[k].masseinheit} ${zutaten[k].zutat}
                </li>
            `;
    }

    //lastVersion#let meineRezepte = document.getElementById("meineRezepte");
    //v1.0 let indexRezepteDatei = indexRezepte.id - 1;
    //v1.0    <tr  onclick="showRezept('${indexRezepteDatei}')">
    //v1.0  <td>Fett: ${naehrwerte.fett}</td>
    //lastVersion#meineRezepte.innerHTML = meineRezepte.innerHTML + `

    weitereZutatZeilen += `
                <tr>
                <td><img src="${bild}" alt="meinBild" width="100"></td>
                <td><a href="rezeptProjektManual.html?id=${rezepte[rezeptID].id}">${name}</a></td> 
                <td>${zubereitungszeit} Minuten</td>
                <td><ul>${zutatenListe}</ul></td>        
                </tr>
        `;

  }

  meineRezepte.innerHTML =  initialListeZeilen + eineWeitereZeile + weitereZutatZeilen;

}

// Funktion geprüft und fehlerfrei befunden
function alleZutatenErmitteln() {
  let zutatenListe = "#";

  //Array und Objekt für alle Zutaten werden ermittelt
  //for (let i = 0; i < rezepte.length; i++) {
  for (let indexRezepte = 0; indexRezepte < rezepte.length; indexRezepte++) {
    const name = rezepte[indexRezepte].name;
    const zubereitungszeit = rezepte[indexRezepte].zubereitungszeit;
    const bild = rezepte[indexRezepte].bild;
    const zutaten = rezepte[indexRezepte].zutaten;



    for (let k = 0; k < zutaten.length; k++) {
      zutatenListe += zutaten[k].zutat + "#";
      let zutat = zutaten[k].zutat.toLowerCase();
      if (alleZutatenBestandteile.includes(zutat)) {
        //console.log("zutat vorhanden" + zutaten[k].zutat);
        alleZutatenObj[zutat].push(rezepte[indexRezepte].id);
      }
      else {
        alleZutatenBestandteile.push(`${zutat}`);
        alleZutatenObj[zutat] = [rezepte[indexRezepte].id];
        //console.log("zutat wird hinzugefügt" + zutaten[k].zutat + "Objekt#" + "#"+ zutat);
        //console.log(alleZutatenObj);
      }
      //console.log("obj11");

      //console.log("obj11");
    }
  }

  console.log(alleZutatenBestandteile);
  console.log(alleZutatenObj);

}


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Start des Programmcodes

let alleZutatenBestandteile = [];
let alleZutatenObj = new Object();
//console.log("#1" +alleZutatenObj);

//console.log("obj1");
//console.log(alleZutatenObj);
//console.log("obj1");



let zufall = parseInt(getRandomArbitrary(1, rezepte.length));
console.log("zufallsRezept" + zufall);
let weitereZeilen = "";

const meineRezepte = document.getElementById("meineRezepte");

// Die erste Zeile nach der Kopfzeile wird in die Tabelle geschrieben
meineRezepte.innerHTML += `
            <tr>
            <td><img src="20210723_161320.jpg" alt="meinBild" width="100"></td>
            <td><a href="rezeptProjektManual.html?id=${zufall}">Was empiehlt denn unser Smutje heute, </br> etwa wieder gebratene Taube oder was?</a></td>
            <td>noch unbekannt</td>
            <td><ul><li><input list="alleZutaten" onchange="anzeigeZutatRezepte(this.value)" id="myBrowser" name="myBrowser" /> 
            </li></ul></td>
            </tr>          
    `; //das linke Zeichen nicht löschen

// alle Zutaten aus der Liste (Datendatei) ermitteln
alleZutatenErmitteln();

// Datalist mit allen Zutaten für Input wird gebaut
for (let bestandteileIndex = 0; bestandteileIndex < alleZutatenBestandteile.length; bestandteileIndex++) {
  const alleZutatenElement = document.getElementById("alleZutaten");
  alleZutatenElement.innerHTML += `
  <option value="${alleZutatenBestandteile[bestandteileIndex]}">   
  `; //das linke Zeichen nicht löschen

}

//Alle Spalten der Tabelle werden gefüllt mit Daten aus der Datendatei
//for (let i = 0; i < rezepte.length; i++) {  
for (let indexRezepte in rezepte) {
  const name = rezepte[indexRezepte].name;
  const zubereitungszeit = rezepte[indexRezepte].zubereitungszeit;
  const bild = rezepte[indexRezepte].bild;
  const zutaten = rezepte[indexRezepte].zutaten;
  let zutatenListe = "";



  for (let k = 0; k < zutaten.length; k++) {
    zutatenListe += `
                <li>
                    ${zutaten[k].wert} ${zutaten[k].masseinheit} ${zutaten[k].zutat}
                </li>
            `;
  }

  weitereZeilen += `
                <tr>
                <td><img src="${bild}" alt="meinBild" width="100"></td>
                <td><a href="rezeptProjektManual.html?id=${rezepte[indexRezepte].id}">${name}</a></td> 
                <td>${zubereitungszeit} Minuten</td>
                <td><ul>${zutatenListe}</ul></td>        
                </tr>
        `;

}
let initialListeZeilen = meineRezepte.innerHTML + weitereZeilen;
meineRezepte.innerHTML = initialListeZeilen;