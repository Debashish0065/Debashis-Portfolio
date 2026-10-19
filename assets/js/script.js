
AOS.init({
    duration: 1000,
    once: true
});

new Typed("#typing", {
    strings: [
        "Spring Boot Developer",
        "REST API Developer",
        "Microservices Developer",
        "Backend Engineer",
        "Java Backend Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (header) {
        if (window.scrollY > 40) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressBar = document.getElementById("progress-bar");

    if (progressBar && scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + "%";
    }
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    }
});

if (topBtn) {
    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// EmailJS Initialization
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form) {
        console.error("Contact form not found. Check id='contact-form'.");
        return;
    }

    if (typeof emailjs === "undefined") {
        console.error("EmailJS library did not load.");

        if (status) {
            status.className = "error";
            status.textContent =
                "Email service could not load. Please try again later.";
        }

        return;
    }

    // Hide any old status message on page load.
    if (status) {
        status.className = "";
        status.textContent = "";
    }

    emailjs.init({
        publicKey: "69IR11gjh9CNjfUMZ"
    });

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const button = form.querySelector('button[type="submit"]');

        if (!button) {
            console.error("Submit button not found in contact form.");
            return;
        }

        const originalButtonHTML = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "Sending...";

        if (status) {
            status.className = "";
            status.textContent = "";
        }

        try {
            const response = await emailjs.sendForm(
                "service_jtrm5vz",
                "template_khb8jbp",
                form
            );

            console.log(
                "EmailJS success:",
                response.status,
                response.text
            );

            if (status) {
                status.className = "success";
                status.textContent =
                    "✓ Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon.";
            }

            form.reset();

        } catch (error) {
            console.error("EmailJS error:", error);

            if (status) {
                status.className = "error";
                status.textContent =
                    "⚠️ Message couldn't be sent. Please try again, or email me directly at debashissatapathy2003@gmail.com.";
            }

        } finally {
            button.disabled = false;
            button.innerHTML = originalButtonHTML;
        }
    });
});
