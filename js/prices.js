import {services} from './services.js'

const currentURL = window.location.search;
const urlParams = new URLSearchParams(currentURL);
const ISBN = urlParams.get("ISBN");

let row = document.getElementById("books");

for (let i = 0; i < services.length; i++) {
  fetch(services[i] + ISBN)
  .then((response) => response.json())
  .then((data) => row.innerHTML += `
    <div class="col-3">
        <a href="${data.link}" class="card mx-5 my-3" style="width: 16rem">
            <img src="${data.link_imagen}" class="card-img-top" alt="..." hre/>
            <div class="card-body">
                <p class="card-text h6 text-center">${data.titulo}</p>
                <p class="card-text h6 text-center">${data.libreria}</p>
                <p class="text-success font-weight-bold mb-0 text-center">${data.precio}</p>
            </div>
        </a>
    </div>
  `);
}