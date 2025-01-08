let parallax = document.getElementById("title-section");

let revealElements = document.querySelectorAll(".reveal");

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
})

hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

window.addEventListener("scroll", function() {
    for (let i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let revealElemTop = revealElements[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if (revealElemTop < windowHeight - revealPoint) {
            revealElements[i].classList.add("active");
        } else {
            revealElements[i].classList.remove("active");
        }
    }
})