export function showLoader(container) {
  container.innerHTML = 'Caricamento...';
}

export function showError(container, message) {
  container.innerHTML = `<p style="color: red;">${message}</p>`;
}
