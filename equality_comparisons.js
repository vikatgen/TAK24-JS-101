/**
 * Equality Comparison - Võrdlemine
 * == vs === vs Object.is()
 * == võrdleb omavahel väärtusi
 * === ja Object.is() võrdleb omavahel väärtusi ning andmetüüpe
 */

console.log(5 == "5"); // True
console.log(5 === "5"); // False
console.log(1 === true); // False
console.log(Object.is(5, "5"));

/**
 * Type Coersion vs Conversion
 * käsitsi sundimine versus automaatne muutmine
 */

console.log(5 + "5"); // JS runtime automaatselt konverdib number tüübi stringiks
console.log(5 + Number("5")); // Käsitsi sunnime String 5 olema Number 5

/**
 * typeof Operator
 * - tagastab meile antud väärtuse andmetüübi
 */

console.log(typeof "Gen Vikat"); // String
