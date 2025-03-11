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
