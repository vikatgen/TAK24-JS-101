/**
 * Functions
 * Parameters (default, rest) -> placeholder
 * return statement
 */

function square(number) {
    return number * number;
}

square(16);
square(4);

function myName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log(myName("Gen", "Vikat")); // "Gen Vikat"

 /**
  * Arrow function => noolefunktsioon
  */

const square = (number) => {
    return number * number;
}


const myName = (firstName, lastName) => {
    // Template literals
    return `Minu nimi on ${firstName} ${lastName}`;
}