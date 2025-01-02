// Simple jQuery form submission handler (for demonstration)
$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        alert("Your message has been sent. We will get back to you shortly.");
        // Optionally, reset form after submission
        $('#contact-form')[0].reset();
    });
});
