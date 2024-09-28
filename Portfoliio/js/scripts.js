document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const prefersDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Apply dark mode on load if enabled
    if (prefersDarkMode) {
        enableDarkMode();
    }

    toggleButton.addEventListener('click', function() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
