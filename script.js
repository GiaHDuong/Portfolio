function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => { 
    faq.addEventListener("click", () => { 
        faq. classList.toggle("active"); 
    });
});