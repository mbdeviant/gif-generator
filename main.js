import { SECRET_KEY } from "./codes-needed-to-take-over-the-world.js";

const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");
const button = document.getElementById("refresh-button");
const img = document.querySelector("img");

window.onload = fetchData;

searchButton.addEventListener("click", () => {
  const keyword = searchBar.value;
  fetchData(keyword);
});

button.addEventListener("click", () => {
  fetchData();
});

async function fetchData(keyword = "cats") {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${SECRET_KEY}&s=${keyword}`,
    { mode: "cors" }
  );
  response.json().then(function (response) {
    const imgData = response.data.images.original.url;
    img.src = imgData;
  });
}
