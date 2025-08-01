function enviarWhatsApp() {
  const mensaje = document.getElementById("mensaje").value.trim();

  if (mensaje === "") {
      alert("Por favor escribí un mensaje antes de enviar.");
      return;
  }

  const numero = "5491127537296"; // Tu número en formato internacional
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}