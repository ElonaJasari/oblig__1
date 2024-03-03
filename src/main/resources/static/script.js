const register = [];

function visRegister() {
    let ut = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnummer</th>" +
        "<th>Epost</th>" + "</tr>";

    for (let liste of register) {
        ut += "<tr>";
        ut += "<td>" + liste.film + "</td> <td>" + liste.antall + "</td><td>" + liste.fornavn + "</td>" +
            "<td>" + liste.etternavn + "</td><td>" + liste.telefonnr + "</td><td>" + liste.epost + "</td>";
        ut += "</tr>";
    }
    document.getElementById("register").innerHTML = ut;
}

function registrer() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    // Sjekker alle valideringer før vi registrerer
    if (validerAntall() & validerFornavn() & validerEtternavn() & validerTelefonnr() & validerEpost()) {
        const person = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };
        register.push(person);
        visRegister();

        // Tilbakestiller inputfeltene
        document.getElementById("film").selectedIndex = 0;
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }
}

function validerAntall() {
    let antall = document.getElementById("antall").value;
    if (antall === "") {
        document.getElementById("antallError").innerHTML = "<span style='color: red'>Du må skrive inn et gyldig antall</span>";
        return false;
    } else if (!antall.match(/^\d+$/)) {
        document.getElementById("antallError").innerHTML = "<span style='color: red'>Antall må være et tall</span>";
        return false;
    } else {
        document.getElementById("antallError").innerHTML = "";
        return true;
    }
}

function validerFornavn() {
    let fornavn = document.getElementById("fornavn").value;
    if (fornavn === "") {
        document.getElementById("fornavnError").innerHTML = "<span style='color: red'>Du må skrive inn et gyldig fornavn</span>";
        return false;
    } else {
        document.getElementById("fornavnError").innerHTML = "";
        return true;
    }
}

function validerEtternavn() {
    let etternavn = document.getElementById("etternavn").value;
    if (etternavn === "") {
        document.getElementById("etternavnError").innerHTML = "<span style='color: red'>Du må skrive inn et gyldig etternavn</span>";
        return false;
    } else {
        document.getElementById("etternavnError").innerHTML = "";
        return true;
    }
}

function validerTelefonnr() {
    let telefonnr = document.getElementById("telefonnr").value;
    if (telefonnr === "" || !telefonnr.match(/^\d{8}$/)) {
        document.getElementById("telefonnrError").innerHTML = "<span style='color: red'>Du må skrive inn et gyldig telefonnummer</span>";
        return false;
    } else {
        document.getElementById("telefonnrError").innerHTML = "";
        return true;
    }
}

function validerEpost() {
    let epost = document.getElementById("epost").value;
    if (epost === "" || !epost.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        document.getElementById("epostError").innerHTML = "<span style='color: red'>Du må skrive inn en gyldig epostadresse</span>";
        return false;
    } else {
        document.getElementById("epostError").innerHTML = "";
        return true;
    }
}

function slettBilletterKnapp() {
    register.length = 0;
    visRegister();
}
