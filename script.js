document.addEventListener('DOMContentLoaded', function() {
    // Function to change the color scheme
    function changeColorScheme() {
        const body = document.body;
        const currentScheme = body.classList;

        if (currentScheme.contains('light-scheme')) {
            body.classList.remove('light-scheme');
            body.classList.add('dark-scheme');
        } else if (currentScheme.contains('dark-scheme')) {
            body.classList.remove('dark-scheme');
            body.classList.add('blue-scheme');
        } else if (currentScheme.contains('blue-scheme')) {
            body.classList.remove('blue-scheme');
            body.classList.add('light-scheme');
        } else {
            body.classList.add('light-scheme');
        }
    }

    // Adding event listener to the button (only if the button exists on the page)
    const button = document.getElementById('colorSchemeButton');
    if (button) {
        button.addEventListener('click', changeColorScheme);
    }
});
// Function to display a greeting message based on the time of day
    function displayGreeting() {
        const now = new Date();
        const hour = now.getHours();
        let greetingMessage = '';

        // Determine the time of day and set the appropriate greeting
        if (hour < 12) {
            greetingMessage = 'Good Morning!';
        } else if (hour < 18) {
            greetingMessage = 'Good Afternoon!';
        } else {
            greetingMessage = 'Good Evening!';
        }

        // Display the greeting message on the page
        const greetingElement = document.getElementById('greetingMessage');
        if (greetingElement) {
            greetingElement.textContent = greetingMessage;
        }
    }

    // Call the displayGreeting function when the page loads
    displayGreeting();
});
