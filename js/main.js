const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("registration-button");

    if (!btn) return; // safety check

    btn.addEventListener("click", () => {
        window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSdbdWNfW3WW4NIeLnLwCqIMHVDKEabNyrnSghDF_H__MoO5Mw/viewform?usp=header',
            '_blank'
        );
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("volunteer-button");

    if (!btn) return; // safety check

    btn.addEventListener("click", () => {
        window.open(
            'https://docs.google.com/spreadsheets/d/1i7yVzqt6HfvgDZ_ZLic8kfcPCtvnKzrCA2WWCbxg4mc/edit?usp=sharing',
            '_blank'
        );
    });
});

// document.getElementById('registration-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Thank you for registering! We will contact you within 24 hours to confirm your registration.');
//     e.target.reset();
// });

// document.getElementById('contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will respond within 2 business days.');
//     e.target.reset();
// });