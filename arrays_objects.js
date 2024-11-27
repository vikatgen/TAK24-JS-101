/**
 * INDEXED COLLECTION
 * Array (Jada)
 */

// Tegime array viljadest.
let fruits = ["Apple", "Orange", "Kiwi", "Lemon"];

console.log(fruits[2]); // Saame ligi väärtusele, mis on jadas indeksil 2.
console.log(fruits.length) // Tagastab Array sees olevate elementide arvu

/**
 * Array methods
 * 
 * push
 * pop
 * shift
 * unshift
 */

fruits.push("Mango"); // Lisame arraysse uue elemendi (viimaseks)
console.log(fruits); // [ 'Apple', 'Orange', 'Kiwi', 'Lemon', 'Mango' ]

fruits.pop(); // Viskab välja viimase elemendi ja tagastab uue array
console.log(fruits); // [ 'Apple', 'Orange', 'Kiwi', 'Lemon' ]

fruits.shift(); // Viskab välja esimese elemendi ning tagastab uue array
console.log(fruits); // [ 'Orange', 'Kiwi', 'Lemon' ]

fruits.unshift("Pear"); // Lisab antud elemendi arraysse esimeseks
console.log(fruits); // [ 'Pear', 'Orange', 'Kiwi', 'Lemon' ]

// ÜL1. Kustutame ära Kiwi arrayst.
const KiwiPositionIndex = fruits.indexOf("Kiwi");
console.log(KiwiPositionIndex);

fruits.splice(KiwiPositionIndex, 1);
console.log(fruits);

/**
 * OBJECTS
 * koosneb key: value paaridest
 */

const student = {
    firstName: "Gen",
    lastName: "Vikat",
    age: 66,
    courses: ["Loodusõpetus", "Puutöö"],
    grades: [5, 4, 5, 2],
    averageGrade: function() {}
};

console.log(student.age); // Kutsume välja kasutades dot notationit.
console.log(student.averageGrade);

student.behaviour = "Bad"; // Lisan uue property
delete student.behaviour; // Kustutan property
console.log(student);

/**
 * Object loop
 */

for (const key in student) {
    console.log(key);
}

/**
 * Array looping
 */

for(let i = 0; i < fruits.length; i++) {
    // Koodiblokk, mis jookseb iga korduse korral.
    console.log(fruits[i].toUpperCase());
}

