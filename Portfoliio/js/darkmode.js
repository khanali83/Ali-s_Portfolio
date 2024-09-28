document.addEventListener("DOMContentLoaded", function() {
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
