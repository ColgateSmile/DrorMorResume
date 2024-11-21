// Initialize EmailJS
emailjs.init("uVA9lLJbV9sklerMa"); // Replace with your EmailJS public key

// Form Submission Handler
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;

    emailjs
        .sendForm("service_v8rdwkt", "template_e05qu4c", form)
        .then(
            function () {
                document.getElementById("form-response").innerText = "Message sent successfully!";
                document.getElementById("form-response").style.color = "green";
                form.reset();
            },
            function (error) {
                document.getElementById("form-response").innerText = `Failed to send message: ${error.text}`;
                document.getElementById("form-response").style.color = "red";
            }
        );
});
