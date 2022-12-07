document.getElementById("search").onclick = () => {
  let ISBN = document.getElementById("ISBN").value;
  if(ISBN.length > 0){
    chrome.tabs.create({
      url: "prices.html?ISBN="+ISBN,
    })
  }
};
