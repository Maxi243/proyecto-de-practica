function enviarWhatsApp() {
  const textarea = document.getElementById("mensaje");
  const mensaje = textarea.value.trim();

  if (mensaje === "") {
    alert("Por favor escribí un mensaje antes de enviar.");
    textarea.focus();
    return;
  }

  // Cierra el teclado en móvil si está abierto
  textarea.blur();

  const numero = "5491127537296"; // Tu número en formato internacional
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

 