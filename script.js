// Function with parameters and return values
function calculateArea(length, width) {
    return length * width;
}

// Function demonstrating scope
let x = 10;

function outerFunction() {
    let y = 20;
    
    function innerFunction() {
        console.log(x + y);
    }
    
    innerFunction();
}

outerFunction();

// Function to toggle a CSS class
function toggleAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('active');
}
document.getElementById('triggerAnimation').addEventListener('click', () => {
    toggleAnimation('animated-card');
});