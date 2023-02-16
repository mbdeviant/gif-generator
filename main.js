import { SECRET_KEY } from "./codes-needed-to-take-over-the-world.js";

const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const keyword = searchBar.value;
  fetchData(keyword);
});

const button = document.getElementById("refresh-button");
const img = document.querySelector("img");

function fetchData(keyword = "cats") {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${SECRET_KEY}&s=${keyword}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const imgData = response.data.images.original.url;
      img.src = imgData;
    });
}
window.onload = fetchData;
button.addEventListener("click", () => {
  fetchData();
});
