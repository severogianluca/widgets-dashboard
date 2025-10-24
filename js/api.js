export async function fetchData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Errore nella risposta della API");
  }

  return res.json();
}
