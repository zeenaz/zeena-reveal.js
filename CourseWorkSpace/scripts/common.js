// Progress bar functionality
function initProgressBar() {
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progressBar').style.width = scrolled + "%";
    });
}

// Navigation outline functionality
function initNavOutline() {
    const nav = document.getElementById('navOutline');
    if (!nav) return;

    let timer;
    
    function showNav() {
        nav.classList.add('visible');
        if (timer) clearTimeout(timer);
    }

    // Show nav when cursor is near the right edge
    document.addEventListener('mousemove', function(e) {
        if (e.clientX > window.innerWidth - 50) {
            showNav();
        }
    });

    nav.addEventListener('mouseenter', function() {
        if (timer) clearTimeout(timer);
    });

    nav.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
            nav.classList.remove('visible');
        }, 50);
    });
}

// Smooth scroll functionality
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-outline a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const offset = target.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active section highlighting
function initActiveSection() {
    const navLinks = document.querySelectorAll('.nav-outline a');
    const sections = Array.from(navLinks).map(link => 
        document.querySelector(link.getAttribute('href'))
    );

    window.addEventListener('scroll', () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        sections.forEach((sec, idx) => {
            if (sec && sec.offsetTop <= scrollPos + 500 && 
                (sec.offsetTop + sec.offsetHeight) > scrollPos + 500) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[idx].classList.add('active');
                
                // Add shine effect to section header
                const header = sec.querySelector('.section-header') || sec.querySelector('h3');
                if (header) {
                    header.classList.add('shine');
                    setTimeout(() => header.classList.remove('shine'), 300);
                }
            }
        });
    });
}

// Initialize all common functionalities
function initCommon() {
    initProgressBar();
    initNavOutline();
    initSmoothScroll();
    initActiveSection();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initCommon); 