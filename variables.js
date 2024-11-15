/**
 * VARIABLE - muutuja
 * - muutujat saab kasutada väärtuse salvestamiseks, et seda kasutada hiljem programmi töötamise käigus
 * - muutuja programmeerimises on nagu nimeline konteiner, mis hoiab andmeid, mida me vajame oma programmi sees.
 * - Näiteks: kujuta ette, et sul on kast, millele paned nime näiteks vanus, ning sellesse kasti saad panna mingi väärtuse (numbrina 25).
 * - Hiljem saad seda muutuja nime (vanus) kasutada, et selle väärtusega midagi teha, näiteks arvutada.
 * - muutujat saame teha kahe võtmesõnaga (const, let)
 * - on olemas ka kolmas, var, vanakool.
 * 
 */


/**
 * CONST
 * - võtmesõna muutujate tegemiseks
 * - konstantne - jääv, muutumatu
 * - muutujat ei saa muuta, üle kirjutada.
 */

const teacherName = "Gen Vikat";


/**
 * LET
 * - võtmesõna muutujate tegemiseks
 * - ta on muutuja, mida saab muuta ning üle kirjutada
 * - näiteks kui kasutame muutujat vanuse salvestamiseks, siis vanus muutub iga aasta.
 */

let teacherAge = 30;
teacherAge = "35";


/**
 * Muutujate nimetamine
 * - muutujate nimetamisel kasutame alati camelCase viisi.
 */

/**
 * VARIABLE SCOPE
 * - skoobi tekitab koodiplokk, mida tähistab {} märgid. Kõik, mis on nende märkide vahel, on automaatselt skoop.
 * - Function scope => Väljaspool funktsiooni koodiplokki funktsiooni sees tehtud muutujaid kasutada ei saa.
 * - Global scope => Muutujad, mis on tehtud väljaspool funktsiooni ning teisi koodiblokke. Saame kasutada IGAL POOL.
 * - Block scope
 */


//Global scope
// Seda muutujat saame kasutada igalpool, ka. funktsioonides ja koodiplokkides.
const myDogName = "Terminaator";

// Function scope
function testFunction() {
    // Seda muutujat saab kasutada ainult selle sama funktiooni sees.
    const functionScopedVariable = null;
    // myDogName on globaalses skoobis määratud muutuja, ehk me saame seda siin funktsioonis skoobis kasutada.
    console.log(myDogName);
    return functionScopedVariable;
}