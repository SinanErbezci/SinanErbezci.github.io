console.log("yes");

document.addEventListener('DOMContentLoaded', () => {
    homeBtn = document.querySelector('#home-btn');
    contactBtn = document.querySelector('#contact-btn');
    homeDiv = document.querySelector('.home');
    contactDiv = document.querySelector('.contact');
    console.log("yes")
    homeBtn.addEventListener('click', () => {
        homeDiv.style.display = "block";
        contactDiv.style.display = "none";
        homeBtn.className = "nav-link active";
        contactBtn.className = "nav-link";
    });

    contactBtn.addEventListener('click', () => {
        homeDiv.style.display = "none";
        contactDiv.style.display = "block";
        homeBtn.className = "nav-link";
        contactBtn.className = "nav-link active";
    });
});