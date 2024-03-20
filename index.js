import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat(tomb) {
    let txt ="<table>"
    for (let index = 0; index < tomb.length; index++) {
        const element =tomb[index];
        console.log(element)

        txt += `<tr><td>"${element.nev}${element.}${element.nev}${element.nev}"</tr>`
    }
    txt +="</table>"
    console.log(txt)

    return txt

}
const ELEM=document.querySelector("#feladat_1")
ELEM.innerHTML+=letrehozTablazat(FUTOK)

// 2. feladat
function osszesit() {


}

// 3. feladat
function befutott(sor, adatok) {

    
}

// 4. feladat
function torolEsemeny() {

}

// 5. feladat
function ellenoriz(){
  
}