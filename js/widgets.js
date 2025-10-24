import { fetchData } from "./api.js";
import { showLoader, showError } from "./ui.js";

export async function loadQuoteWidget() {
  const container = document.getElementById("quote-widget");
  showLoader(container);

  try {
    const data = await fetchData("https://dummyjson.com/quotes/random");

    container.innerHTML = `
      <h2>Quote of the Day</h2>
      <p>"${data.quote}"</p>
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
      <h2>Product of the day</h2>
      <p>"${data.title}"</p>
      <small>${data.description}</small> <br>
      <small>${data.price} Euro</small>
    `;

  } catch (error) {
    showError(container, "Errore nel caricamento del prodotto")
  }

}