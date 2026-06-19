document.addEventListener('DOMContentLoaded', () => {
    console.log("Luxwynne Animation System Activated.");

    // 1. SCROLL INTERSECTION OBSERVER
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .hero, .gallery-item').forEach(element => {
        observer.observe(element);
    });

    // 2. PREMIUM GOLD SPARKLE TRAILS
    document.querySelectorAll('.card, .hero, .gallery-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            for(let i = 0; i < 6; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                particle.style.left = Math.random() * 80 + 10 + '%';
                particle.style.top = Math.random() * 80 + 10 + '%';
                
                const size = Math.random() * 6 + 4 + 'px';
                particle.style.width = size;
                particle.style.height = size;
                
                element.appendChild(particle);
                setTimeout(() => particle.remove(), 1500);
            }
        });
    });

    // 3. ENQUIRY / CONTACT FORM ASYNCHRONOUS HANDLING
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const responseDiv = document.getElementById('responseMessage');
            if(responseDiv) {
                responseDiv.style.color = "#e5e5e5";
                responseDiv.innerText = "Securing private ledger entry...";
                
                setTimeout(() => {
                    responseDiv.style.color = "#d4af37";
                    responseDiv.innerText = "Transmission confirmed. An agent will verify allocation availability shortly.";
                    form.reset();
                }, 1200);
            }
        });
    });
});