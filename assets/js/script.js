AOS.init({
    duration:1000,
    once:true
});

new Typed("#typing",{

    strings:[
        "Spring Boot Developer",
        "REST API Developer",
        "Microservices Developer",
        "Backend Engineer",
        "Java Backend Developer"
    ],

    typeSpeed:70,
    backSpeed:40,
    backDelay:1500,
    loop:true

});

window.addEventListener("scroll",()=>{

    const header=document.querySelector(".header");

    if(window.scrollY>40){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.offsetHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// EmailJS Initialization
emailjs.init("YOUR_PUBLIC_KEY");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        window.location.href = "thankyou.html";
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
    });
});

// EmailJS Initialization
emailjs.init("69IR11gjh9CNjfUMZ");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_m5t36wa",
        "template_khb8jbp",
        this
    )
    .then(() => {
        alert("Message sent successfully!");
        window.location.href = "thankyou.html";
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
    });
});
