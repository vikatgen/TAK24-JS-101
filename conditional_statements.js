/**
 * CONDITIONALS STATEMENTS
 * - if..else
 * - switch statement
 */

/**
 * IF..ELSE
 */

// Too poest piima, kui on saia, too kaks
const isThereBread = true;

// Niimoodi kirjutatakse if..else lauseid pikalt
if (isThereBread) {
    // Kui if on true, siis käivitame selle koodibloki
    console.log("Toon poest 2 piima.")
} else {
    // Kui if oli false, siis käivitame selle koodibloki
    console.log("Toon poest 1 piima.")
}

//Ternary operaator, kuidas kirjutada if..else lauseid lühidalt
// conditional ? true : false
console.log(isThereBread ? "Toon poest 2 piima." : "Toon poest 1 piima.")


/**
 * SWITCH statement
 */

let redbullsDrankToday = 2;

switch(redbullsDrankToday) {
    case 1:
        console.log("Uhh, anna minna.")
        break;
    case 2: 
        console.log("On ruumi, aga hakkab otsa saama.");
        break;
    case 3:
        console.log("Ja ongi kõik. Maht on täis.");
        break;
    default:
        console.log("Palju palju. Mine arsti juurde");
        break;
}