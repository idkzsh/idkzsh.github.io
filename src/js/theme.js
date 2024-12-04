// Check for saved theme preference, otherwise use system preference
const getPreferredTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
        return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Update theme
const setTheme = (theme) => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    updateIcon(theme);
};

// Update icon visibility with animations
const updateIcon = (theme) => {
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    if (moonIcon && sunIcon) {
        if (theme === 'dark') {
            // Animate moon out
            moonIcon.style.transform = 'rotate(-90deg) scale(0)';
            setTimeout(() => {
                moonIcon.style.display = 'none';
                // Animate sun in
                sunIcon.style.display = 'block';
                sunIcon.style.transform = 'rotate(0) scale(0)';
                setTimeout(() => {
                    sunIcon.style.transform = 'rotate(-180deg) scale(1)';
                }, 50);
            }, 200);
        } else {
            // Animate sun out
            sunIcon.style.transform = 'rotate(90deg) scale(0)';
            setTimeout(() => {
                sunIcon.style.display = 'none';
                // Animate moon in
                moonIcon.style.display = 'block';
                moonIcon.style.transform = 'rotate(-180deg) scale(0)';
                setTimeout(() => {
                    moonIcon.style.transform = 'rotate(0) scale(1)';
                }, 50);
            }, 200);
        }
    }
};

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const theme = getPreferredTheme();
    setTheme(theme);
    
    // Add click handler to toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }
});
