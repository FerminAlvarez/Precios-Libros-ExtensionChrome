document.getElementById("search").onclick = () => {
  let ISBN = document.getElementById("ISBN").value;
  chrome.tabs.create({
    url: "prices.html?ISBN="+ISBN,
  })
};
