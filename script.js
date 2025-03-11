// Function to change background color
function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Show greeting based on time of day
document.addEventListener('DOMContentLoaded', function () {
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    
    if (hours < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }
    
    document.body.appendChild(greeting);
});
