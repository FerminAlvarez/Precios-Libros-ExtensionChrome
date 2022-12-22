import {services} from './services.js'
import {createCard} from './card.js'

const currentURL = window.location.search;
const urlParams = new URLSearchParams(currentURL);
const ISBN = urlParams.get("ISBN");
const row = document.getElementById("books");

for (let i = 0; i < services.length; i++) {
  fetch(services[i] + ISBN)
  .then((response) => response.json())
  .then((data) => {
    if (data.libreria !== undefined) row.innerHTML += createCard(data.link, data.link_imagen, data.titulo, data.libreria, data.precio)
  });
}