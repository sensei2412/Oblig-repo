//henter id fra html-doc
let kinobiletter = document.getElementById("kinobiletterEl");
let resultat = document.getElementById("filmResEl");
let antall = document.getElementById("antallEl");
let antallRes = document.getElementById("antallResEl");
let fornavn = document.getElementById("fornavnEl");
let fornavnRes = document.getElementById("fornavnResEl");
let etternavn = document.getElementById("etternavnEl");
let etternavnRes = document.getElementById("etternavnResEl");
let telfon = document.getElementById("telfonnrEl");
let telefonRes = document.getElementById("telefonnrResEl");
let epost = document.getElementById("epostEl");
let epostRes = document.getElementById("epostResEl");
let knapp = document.getElementById("knappEl");
let slett = document.getElementById("slettEl");
let array = [];

//bruker en addeventlistener for å lytte etter endring i selecten
kinobiletter.addEventListener("change", function () {
    if(kinobiletter.value == "yupp2") {
        console.log('funker');
    }
})

// samme her for click istedet
//if setning for å skjekke om det er tomt input felt
knapp.addEventListener("click", function (){
    if(kinobiletter.value == "") {
        console.log('ingen film');
        resultat.innerHTML = "ingen film valgt";
        resultat.style.color = "red";
    } else {

        if(antall.value == "") {
            antallRes.innerHTML = "ingen antall";
            antallRes.style.color = "red";
            console.log('ingen antall');
        }

        if(fornavn.value == "") {
            console.log('ingen fornavn');
            fornavnRes.innerHTML = "ingen fornavn";
            fornavnRes.style.color = "red";
        }

        if(etternavn.value == "") {
            console.log('ingen etternavn');
            etternavnRes.innerHTML = "ingen etternavn";
            etternavnRes.style.color = "red";
        }
        if(telfon.value == "") {
            console.log('ingen telefon');
            telefonRes.innerHTML = "ingen telefonnr";
            telefonRes.style.color = "red";
        }
        if(epost.value == "") {
            console.log('ingen epost');
            epostRes.innerHTML = "ingen epost";
            epostRes.style.color = "red";
        }

        //bruker push komando for å dytte inn input verdiene
        if(antall.value != "" && fornavn.value != "" && etternavn.value != "" && telfon.value != "" && epost.value != "") {
            array.push(etternavn.value);
            array.push(antall.value);
            array.push(fornavn.value);
            array.push(telfon.value);
            array.push(epost.value);

            slett.innerHTML = "<br/>" + " " + array;
        }

    }
})

// Regex mønster for å validere et norsk telefonnummer
let telefonPattern = /^\d{8}$/;

// Regex mønster for å validere en e-postadresse
let epostPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valideringsfunksjon for telefonnummer
function validateTelefon(telefon) {
    return telefonPattern.test(telefon);
}

// Valideringsfunksjon for e-postadresse
function validateEpost(epost) {
    return epostPattern.test(epost);
}

// Bruk av valideringsfunksjoner:
knapp.addEventListener("click", function () {
    // Validere telefonnummer
    if (!validateTelefon(telfon.value)) {
        console.log('ugyldig telefonnummer');
        telefonRes.innerHTML = "Ugyldig telefonnummer";
        telefonRes.style.color = "red";
    } else {
        console.log('gyldig telefonnummer');
        telefonRes.innerHTML = "";
    }

    // Validere e-postadresse
    if (!validateEpost(epost.value)) {
        console.log('ugyldig e-postadresse');
        epostRes.innerHTML = "Ugyldig e-postadresse";
        epostRes.style.color = "red";
    } else {
        console.log('gyldig e-postadresse');
        epostRes.innerHTML = "";
    }

    // Fortsett med resten av valideringen og behandlingen av dataene...
});


//bare endrer array til en tom en
slett.addEventListener("click", function () {
    array = [];
})





