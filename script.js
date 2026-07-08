const formulario = document.getElementById("contacto")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault()

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const mail = document.getElementById("mail").value;
    const nota = document.getElementById("nota").value;
  
    if (nombre.trim() === "") {
        alert("porfavor ingresa tu nombre");
        return false;
    }
    if (apellido.trim() === "") {
        alert("porfavor ingresa tu apellido");
        return false;
    }
    if (telefono.trim() === "") {
        alert("porfavor ingresa tu telefono");
        return false;
    }
    if (mail.trim() === "") {
        alert("porfavor ingresa tu mail");
        return false;
    }
    if (nota.trim() === "") {
        alert("porfavor ingresa tu nota");
        return false;
    }

    this.submit()
})