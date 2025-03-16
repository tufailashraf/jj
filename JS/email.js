emailjs.init('Amo5GBjS_00-An44w')

const btn = document.getElementById('button');
const btn2 = document.getElementById('button2');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Suscribing...';

    const serviceID = 'default_service';
    const templateID = 'template_inofmni';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Suscribed';
            formSubmitted = true; // Marcar como enviado
            hideExitModal();
            showThankYou(); // Mostrar mensaje de agradecimiento
            this.reset(); // Opcional: resetear el formulario
        }, (err) => {
            btn.value = 'Suscribed';
            alert(JSON.stringify(err));
        });
});

document.getElementById('form2').addEventListener('submit', function (event) {
    event.preventDefault();

    btn2.value = 'Suscribing...';

    const serviceID = 'default_service';
    const templateID = 'template_1n53v5q';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn2.value = 'Suscribed';
            formSubmitted = true; // Marcar como enviado
            hideExitModal();
            showThankYou(); // Mostrar mensaje de agradecimiento
            this.reset(); // Opcional: resetear el formulario
        }, (err) => {
            btn2.value = 'Suscribed';
            alert(JSON.stringify(err));
        });
});

// El resto del código permanece igual...