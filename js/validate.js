
var validar = function(event) {
    event.preventDefault();

    
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    if (nombre.value === "") {
      alert("Por favor, escribe tu nombre.");
      nombre.focus();
      return false;
    }
    if (email.value === "") {
      alert("Por favor, escribe tu correo electrónico");
      email.focus();
      return false;
    }
    if (mensaje.value === "") {
        alert("Por favor, escribe tu mensaje");
        mensaje.focus();
        return false;
      }    
    alert("Enviaremos tu mensaje y en breve te responderemos");
};

// your form
var form = document.getElementById("form");

// attach event listener
form.addEventListener("submit", validar, true);
