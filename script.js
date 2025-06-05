document.getElementById("enviar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const apellidoP = document.getElementById("apellidoP").value;
    const apellidoM = document.getElementById("apellidoM").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const telefono = document.getElementById("telefono").value;
    const localidad = document.getElementById("localidad").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    // Obtener el sexo seleccionado
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value || "No especificado";

    // Obtener los pasatiempos seleccionados
    const pasatiempos = Array.from(document.querySelectorAll('input[name="pasatiempos"]:checked'))
                            .map(checkbox => checkbox.value);

    // Crear un objeto con la información
    const datosFormulario = {
        Nombre: nombre,
        "Apellido Paterno": apellidoP,
        "Apellido Materno": apellidoM,
        Sexo: sexo,
        "Correo Electrónico": email,
        "Fecha de Nacimiento": fechaNacimiento,
        Teléfono: telefono,
        Localidad: localidad,
        "Código Postal": codigoPostal,
        Usuario: usuario,
        Contraseña: contrasena,
        Pasatiempos: pasatiempos.length > 0 ? pasatiempos : "Ninguno"
    };

    console.log("Datos del formulario:", datosFormulario);
});
