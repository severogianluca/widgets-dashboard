import { fetchData } from "./api.js";
import { showLoader, showError } from "./ui.js";

export async function loadQuoteWidget() {
  const container = document.getElementById("quote-widget");
  showLoader(container);

  try {
    const data = await fetchData("https://dummyjson.com/quotes/random");

    container.innerHTML = `
      <h2>Quote of the Day</h2> <br>
      <p>"${data.quote}"</p> <br>
      <small>${data.author}</small>
    `;
  } catch (error) {
    showError(container, "Errore nel caricamento della citazione");
  }
}



export async function loadProductWidget() {
  const container = document.getElementById("product-widget");
  showLoader(container);

  try {
    const data = await fetchData("https://dummyjson.com/products/8")
    container.innerHTML = `
      <h2>Product of the day</h2> <br>
      <p>"${data.title}"</p> <br>
      <small>${data.description}</small> <br>
      <small>${data.price} Euro</small>
    `;

  } catch (error) {
    showError(container, "Errore nel caricamento del prodotto")
  }

}

export async function loadRecipeWidget() {

  const containers = document.querySelectorAll(".recipe-widget");

  containers.forEach(async (container) => {
    showLoader(container);
    try {
      const data = await fetchData("https://dummyjson.com/recipes")
      const totalRicette = data.recipes.length;
      const ricettaRandom = Math.floor(Math.random() * totalRicette);
      const recipe = data.recipes[ricettaRandom]


      container.innerHTML = `
    <h2>Ricetta del giorno</h2> <br>
    <p>${recipe.name}</p> <br>
    <small>${recipe.ingredients}</small>
    `
    } catch (error) {
      showError(container, "Errore nel caricare la ricetta")
    }
  })
}