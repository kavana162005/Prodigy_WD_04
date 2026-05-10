// 1. Initialize AOS Animations
AOS.init({ 
    duration: 1000, 
    once: true,
    offset: 100,
    easing: 'ease-out-cubic' // Smoother transition for your new cards
});

// 2. Navbar Background Toggle on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(2, 6, 23, 0.95)";
        nav.style.padding = "15px 0";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "20px 0";
        nav.style.boxShadow = "none";
    }
});

// 3. Contact Form Submission Logic
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Visual feedback on button
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.style.opacity = "0.7";

        const nameValue = document.getElementById('form-name').value;

        // Simulate a small delay for a premium feel
        setTimeout(() => {
            alert("Enquiry submitted successfully! Thank you, " + nameValue);
            
            // Reset Form
            contactForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.style.opacity = "1";

            // Smooth scroll back to home
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    });
}

// 4. Custom Cursor Movement (Optimized)
const cursor = document.querySelector('.cursor');
if (cursor && window.innerWidth > 1024) { // Only run on desktop for performance
    document.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Add scaling effect when hovering over links/cards
    const interactiveElements = document.querySelectorAll('a, .skill-card, .project-card, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-active'));
    });
} else if (cursor) {
    cursor.style.display = 'none'; // Hide on mobile
}

// 5. Active Link Highlight (Bonus feature)
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.style.color = "var(--primary)";
        } else {
            link.style.color = "#94a3b8";
        }
    });
});