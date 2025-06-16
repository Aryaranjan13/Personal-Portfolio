
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

// Elements to animate
const animateElements = document.querySelectorAll('.vertical');
animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.5s ease-in';
    observer.observe(element);
});

// CSS class for animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
    }
`;
document.head.appendChild(style);

// Dark mode 
function createThemeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '🌙';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border-radius: 50%;
        border: none;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        cursor: pointer;
        font-size: 20px;
    `;

    document.body.appendChild(toggleButton);

    let isDarkMode = true;
    toggleButton.addEventListener('click', () => {
        if (isDarkMode) {
            // light mode
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
            document.querySelector('nav').style.backgroundColor = '#f0f0f0';
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.style.color = '#000000';
            });
            toggleButton.innerHTML = '☀️';
        } else {
            // Switch to dark mode
            document.body.style.backgroundColor = 'rgb(3, 3, 49)';
            document.body.style.color = 'white';
            document.querySelector('nav').style.backgroundColor = 'rgb(1, 1, 23)';
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.style.color = 'white';
            });
            toggleButton.innerHTML = '🌙';
        }
        isDarkMode = !isDarkMode;
    });
}

// Initialize 
createThemeToggle(); 