// ===================================
// ZINNY - Contact Form with EmailJS
// ===================================

// Initialize EmailJS with your Public Key
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
emailjs.init('Fs4_ON4OHh17nbJw3');

// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        to_email: 'Zinnyderechoinmobiliario@gmail.com'
    };

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Send email using EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
    emailjs.send('service_rs5thie', 'template_vkuiqf8', formData)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);

            // Show success message
            showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');

            // Reset form
            e.target.reset();

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, function (error) {
            console.log('FAILED...', error);

            // Show error message
            showNotification('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', 'error');

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// Notification function
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add to body
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}
