import {isValidISBN} from './utils/ISBNValidator.js'

const wrong_container = document.getElementById("wrong-container");

document.getElementById("search").onclick = () => {
  let ISBN = document.getElementById("ISBN").value;

  isValidISBN(ISBN) ? createTab(ISBN) : setMessageError();
};

function createTab(ISBN){
  chrome.tabs.create({
    url: "prices.html?ISBN="+ISBN,
  })
}

function setMessageError(){
  wrong_container.innerHTML = `<p class="wrong">*Revise que sea un ISBN válido</p>`;
}
