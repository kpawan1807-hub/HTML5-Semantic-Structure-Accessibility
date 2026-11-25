
// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isExpanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Open navigation menu" : "Close navigation menu"
        );

        navigation.classList.toggle("is-open");

    });

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("is-open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");

        });

    });
}


// AUTOMATIC COPYRIGHT YEAR

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


// CONTACT FORM VALIDATION

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        const status = document.querySelector("#form-status");

        if (!name || !email || !subject || !message) {
            status.textContent = "Please complete all required fields.";
            return;
        }

        if (message.length < 10) {
            status.textContent = "Please enter at least 10 characters.";
            return;
        }

        status.textContent =
            "Thank you, " + name +
            "! Your form has been validated successfully. " +
            "This demonstration form does not send emails.";

        contactForm.reset();

    });

}
