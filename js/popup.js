import {isValidISBN} from './utils/ISBNValidator.js'

let wrong_container = document.getElementById("wrong-container");

document.getElementById("search").onclick = () => {
  let input = document.getElementById("ISBN").value;

  if(isValidISBN(input)){
    createTab(input);
  }else{
    setMessageError();
  }

};

function createTab(ISBN){
  chrome.tabs.create({
    url: "prices.html?ISBN="+ISBN,
  })
}

function setMessageError(){
  wrong_container.innerHTML = `<p class="wrong">*Revise que sea un ISBN válido</p>`;
}
