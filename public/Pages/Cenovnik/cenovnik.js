
/* DANASNJI DATUM */
const DANASNJI_DAN_SPAN = document.getElementById('popust-dan');
const LANDING = document.getElementById('landing');
let danasnjiDatum = new Date();
let danasnjiDan = danasnjiDatum.getDay();
let popustClass;
let popust = 1;
let daniSaPopustom = [];


/* MANIPULACIJA TABELE I ISPIS */
switch (danasnjiDan) {

    case 1:
        /* PONEDELJAK */
        DANASNJI_DAN_SPAN.innerHTML = 'ponedeljak';
        popustClass = 'popust-pon';

        popust = 0.75;

        iznosPopusta(popust);
        ispisiPopuste(1);
        break;

    case 2:
        /* UTORAK */
        DANASNJI_DAN_SPAN.innerHTML = 'utorak';
        popustClass = 'popust-uto';

        popust = 0.80;

        iznosPopusta(popust);
        ispisiPopuste(2);
        break;

    case 3:
        /* SREDA */
        DANASNJI_DAN_SPAN.innerHTML = 'sreda';
        popustClass = 'popust-sre';

        popust = 0.90;

        iznosPopusta(popust);
        ispisiPopuste(3);
        break;

    case 4:
        /* CETVRTAK */
        DANASNJI_DAN_SPAN.innerHTML = 'četvrtak';
        popustClass = 'popust-cet';

        popust = 0.75;

        iznosPopusta(popust);
        ispisiPopuste(4);
        break;

    case 5:
        /* PETAK */
        DANASNJI_DAN_SPAN.innerHTML = 'petak';
        popustClass = 'popust-pet';

        popust = 0.5;

        iznosPopusta(popust);
        ispisiPopuste(5);
        break;

    case 6:
        /* SUBOTA */
        DANASNJI_DAN_SPAN.innerHTML = 'subota';
        popustClass = 'popust-sub';

        popust = 0.75;

        iznosPopusta(popust);
        ispisiPopuste(6);
        break;

    case 0:
        /* NEDELJA */
        DANASNJI_DAN_SPAN.innerHTML = 'nedelja';
        popustClass = 'popust-ned';

        iznosPopusta(popust);
        ispisiPopuste(0);
        break;

    default:
        break;
}

function iznosPopusta(param) {
    if (param === 1) {
        document.querySelector('#landing h1').innerHTML = 'Danas nema popusta :(';
        document.querySelector('#landing h2').innerHTML = '';
        return;
    }

    let popustProcenat = 100 - (100 * param);
    console.log(popustProcenat);
    document.querySelector('#landing h2 span').innerHTML = popustProcenat;
}

function ispisiPopuste(dan) {

    /* UKOLIKO NEMA POPUSTA */
    if (document.querySelector('#landing h1').innerHTML === 'Danas nema popusta :(') {
        return;
    }
    const LISTA_TRETMANA = document.querySelectorAll(`[id^='tretman-']`);

    /* PROVERA POPUSTA */
    LISTA_TRETMANA.forEach(el => {
        if (el.classList.contains(`${popustClass}`)) {
            daniSaPopustom.push(el);
        }
    });

    /* MANIPULACIJA TABELE I ISPIS POPUSTA NA LANDING-U */
    for (const el of daniSaPopustom) {
        LANDING.innerHTML += '<p>' + el.cells[0].innerHTML + '</p>';

        el.cells[0].style.color = 'red';
        el.cells[1].style.color = 'red';

        let cenaSpan = el.cells[1].childNodes[0];
        cenaSpan.innerHTML = izracunajPopust(parseInt(cenaSpan.innerHTML));
    }
}

function izracunajPopust(cena) {
    cena *= popust;
    return cena;
}




/* UKUPAN IZNOS */
let iznos = 0;
function ukupanIznos(param, paramCena) {

    if (document.querySelector(`${param}`).value === 'DODAJ') {

        /*  DODATO */
        document.querySelector(`${param}`).value = 'ODUZMI';
        document.querySelector(`${param}`).style.backgroundColor = 'var(--color-dark)';
        document.querySelector(`${param}`).style.color = 'var(--color-light)';

        /*  MANIPULACIJA CENE */
        console.log(paramCena);
        if (iznos === 0) {
            dodajRed(iznos);
        }

        /*  MANIPULACIJA TABELE */
        iznos += paramCena;
        document.querySelector('#ukupan-iznos').childNodes[2].childNodes[0].innerHTML = iznos;


    } else {

        /*  ODUZETO */
        document.querySelector(`${param}`).value = 'DODAJ';
        document.querySelector(`${param}`).style.backgroundColor = 'var(--color-contrast)';
        document.querySelector(`${param}`).style.color = 'var(--color-dark)';

        /*  MANIPULACIJA CENE */
        console.log(paramCena);
        iznos -= paramCena;
        if (iznos === 0) {
            izbrisiRed();
        }

        /*  MANIPULACIJA TABELE */
        document.querySelector('#ukupan-iznos').childNodes[2].childNodes[0].innerHTML = iznos;

    }
}

function dodajRed(param) {

    let red = document.createElement('tr');

    /* POPUNJAVANJE CELIJA */
    let celija1 = document.createElement('td');
    celija1.innerText = '';
    red.appendChild(celija1);
    let celija2 = document.createElement('td');
    celija2.innerText = 'Ukupan iznos:';
    red.appendChild(celija2);
    let celija3 = document.createElement('td');
    celija3.innerHTML = '<span>' + param + '</span>' + ' RSD';
    red.appendChild(celija3);

    /* POPUNJAVANJE TABELE */
    document.querySelector('tbody').appendChild(red);
    document.querySelector('tbody').lastChild.id = 'ukupan-iznos';

}

function izbrisiRed() {
    let red = document.querySelector('tbody').lastElementChild;
    document.querySelector('tbody').removeChild(red);
}