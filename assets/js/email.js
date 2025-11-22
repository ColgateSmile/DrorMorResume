// EmailJS v4 setup with public key
emailjs.init({ publicKey: "uVA9lLJbV9sklerMa" });

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const responseEl = document.getElementById("form-response");
    const submitBtn = form.querySelector(".contact-btn");

    // Optimistic UI: show immediate sending state
    responseEl.innerText = "Sending...";
    responseEl.style.color = "#555";
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add("is-loading");
        submitBtn.dataset.originalText = submitBtn.innerText;
        submitBtn.innerText = "Sending...";
    }

    const resetButtonState = () => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("is-loading");
            if (submitBtn.dataset.originalText) {
                submitBtn.innerText = submitBtn.dataset.originalText;
            }
        }
    };

    const success = () => {
        responseEl.innerText = "Message sent successfully!";
        responseEl.style.color = "green";
        form.reset();
        resetButtonState();
    };

    const fail = (error) => {
        const reason = error?.text || "Unknown error";
        responseEl.innerText = `Failed to send message: ${reason}`;
        responseEl.style.color = "red";
        resetButtonState();
    };

    emailjs.sendForm("service_v8rdwkt", "template_e05qu4c", form).then(success).catch(fail);
});
