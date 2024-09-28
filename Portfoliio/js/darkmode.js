// darkmode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check local storage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');

        // Save preference in local storagedocument.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const prefersDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Apply dark mode on load if enabled
    if (prefersDarkMode) {
        enableDarkMode();
        toggleSwitch.checked = true; // Set the slider to "checked" if dark mode is enabled
    }

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
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
const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    const footer = document.querySelector(".footer");
    footer.classList.toggle("dark-mode");
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("dark-mode");
});

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
