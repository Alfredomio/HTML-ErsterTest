// rezeptProjekt Version 1.0 Datum 29.07.2021 onclick, showRezept(), 
// rezeptProjekt Version 1.1 Datum 29.07.2021 onclick durch <a href ersetzt, showRezept(), 
// rezeptProjekt Version 1.1 naehrwerte von Startseite raus
// rezeptProjekt Datum 03.08.2021 Version 1.2 Zufallsgenerator

//v1.0 function showRezept(rezeptID){
//v1.0 console.log("showRez");
//v1.0 }



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


let zufall = parseInt(getRandomArbitrary(1, rezepte.length));
console.log("zufallsRezept" + zufall);
let weitereZeilen = "";

const meineRezepte = document.getElementById("meineRezepte");

meineRezepte.innerHTML += `
            <tr>
            <td><img src="20210723_161320.jpg" alt="meinBild" width="100">
            <td><a href="rezeptProjektManual.html?id=${zufall}">Was empiehlt denn unser Smutje heute, </br> etwa wieder gebratene Taube oder was?</a></td>
            <td>noch unbekannt</td>
            <td><ul><li> noch unbekannt</li></ul></td>        
            </tr>
    `;


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
                <td><img src="${bild}" alt="meinBild" width="100">
                <td><a href="rezeptProjektManual.html?id=${rezepte[indexRezepte].id}">${name}</a></td> 
                <td>${zubereitungszeit} Minuten</td>
                <td><ul>${zutatenListe}</ul></td>        
                </tr>
        `;

}
meineRezepte.innerHTML += weitereZeilen;