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
        <a href="${data.Link}" class="card mx-5 my-3" style="width: 16rem">
            <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/315/129/products/9788484456810-5f0ddb89d65b7feed916704183554353-640-0.webp" class="card-img-top" alt="..." hre/>
            <div class="card-body">
                <p class="card-text h6 text-center">${data.Librería}</p>
                <p class="text-success font-weight-bold mb-0 text-center">${data.Precio}</p>
            </div>
        </a>
    </div>
  `);
}