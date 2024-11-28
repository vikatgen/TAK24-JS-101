const welcomeButton = document.querySelector('#welcome-button');
const fruitListElement = document.querySelector('.fruit-list');

const fruits = ["Apple", "Banana", "Mango", "Kiwi"];
const olElement = document.createElement('ol');
for(let i = 0; i < fruits.length; i++) {
    const listElement = document.createElement('li');
    listElement.innerText = fruits[i];
    olElement.appendChild(listElement);
}
fruitListElement.appendChild(olElement);



welcomeButton.classList.add('primary-button');
welcomeButton.addEventListener('click', (event) => {
    alert('Tervist!')
    console.log(event);
});
