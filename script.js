/* Holen der liste bzw Punkte */
const indikatoren = document.getElementsByClassName("indikator");

/* Hängt an die classe side die Aktiv classe dran */
const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");


var aktuellerIndex = 0; 
function umschalter(anzahl) {
    /* Ausrechnen des Neuen Index */
    /* Vermeidung das man auf -1 endet */
    let neuerIndex = aktuellerIndex + anzahl;
    console.log(neuerIndex)
    if (neuerIndex < 0) { 
        neuerIndex = slides.length -1;
    } 
    if(neuerIndex > slides.length -1) { 
        neuerIndex = 0;
    } 

    springZuEintrag(neuerIndex);
} 


/* Function um auf die "Punkte" zu clicken und auf das jeweilge 
Bild zu kommen */
function springZuEintrag(neuerIndex) { 
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex
}