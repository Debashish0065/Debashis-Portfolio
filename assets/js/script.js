// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true
});


// ===============================
// Typed Animation
// ===============================

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


// ===============================
// Sticky Header
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(header){

        if(window.scrollY > 40){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    }

});


// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const progressBar = document.getElementById("progress-bar");

    if(progressBar){

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (scrollTop / scrollHeight) * 100;


        progressBar.style.width = progress + "%";

    }

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");


if(topBtn){

    window.addEventListener("scroll",()=>{


        if(window.scrollY > 500){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }


    });


    topBtn.onclick = ()=>{

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    };

}


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const top = section.offsetTop - 150;

        const height = section.offsetHeight;


        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }


    });


    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});



// ===============================
// EmailJS Contact Form
// ===============================


emailjs.init("69IR11gjh9CNjfUMZ");


const contactForm = document.getElementById("contact-form");


if(contactForm){


    contactForm.addEventListener("submit",function(e){


        e.preventDefault();


        emailjs.sendForm(

            "service_m5t36wa",

            "template_khb8jbp",

            this

        )


        .then(()=>{


            alert("Message sent successfully!");

            window.location.href="thankyou.html";


        })


        .catch((error)=>{


            console.log(error);

            alert("Failed to send message");


        });


    });


}
