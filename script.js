document.getElementById('raffleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Genera el mensaje de agradecimiento
    const message = `
        <p>Gracias por participar, <strong>${name}</strong>!</p>
        <p>Para completar tu compra, dirígete al siguiente enlace:</p>
        <p><a href="https://wa.link/etjn9d" target="_blank">https://wa.link/etjn9d</a></p>
    `;

    // Muestra el mensaje
    document.getElementById('message').innerHTML = message;

    // Opcional: Limpia el formulario después de mostrar el mensaje
    document.getElementById('raffleForm').reset();
});
