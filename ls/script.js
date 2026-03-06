document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingForm");
    const message = document.getElementById("message");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            message.textContent = "Дякуємо! Ваша заявка успішно відправлена.";
            message.style.color = "green";
            form.reset();
        });
    }
});