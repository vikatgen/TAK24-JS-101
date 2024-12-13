const welcomeButton = document.querySelector('#welcome-button');
const fruitListElement = document.querySelector('.fruit-list');
const fruitForm = document.querySelector("#add-new-fruit-form");
const errorMessageSpan = document.querySelector("#error-message");

let fruits = ["Apple", "Banana", "Mango", "Kiwi"];

const olElement = document.createElement('ol');

function renderFruitList() {
    olElement.innerHTML = "";
    for(let i = 0; i < fruits.length; i++) {
        const listElement = document.createElement('li');
        listElement.innerText = fruits[i];
        olElement.appendChild(listElement);
    }
};
fruitListElement.appendChild(olElement);

renderFruitList();



welcomeButton.classList.add('primary-button');
welcomeButton.addEventListener('click', (event) => {
    alert('Tervist!')
    console.log(event);
});

fruitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const value = form.get("fruit");

    if(fruits.includes(value)) {
        errorMessageSpan.innerText = "Value already in list."
        return;
    };

    errorMessageSpan.innerText = "";

    fruits.push(value);
    renderFruitList();

    fruitForm.reset();
});