import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

// 1. feladat
function letrehozTablazat(tomb) {
    let txt ="<table>"
    for (let index = 0; index < tomb.length; index++) {
        txt += "<tr>"
        txt += "<td>"+ FUTOK[index].nev+"</td>"
        txt += "<td>"+ FUTOK[index].nemzetiseg+"</td>"
        txt += "<td>"+ FUTOK[index].versenyIdo+"</td>"
        txt += "<td>"+ FUTOK[index].versenySzam+"</td>"
        txt += "</tr>"
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