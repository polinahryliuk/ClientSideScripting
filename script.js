(function() {
    // Event listeners for existing buttons
    const button1 = document.getElementById('button1');
    button1.addEventListener('click', changeStyle1);

    const input1 = document.getElementById('input1');
    input1.addEventListener('keyup', changeStyle2);

    const button2 = document.getElementById('button2');
    button2.addEventListener('mouseover', changeStyle3);

    // Event listeners for new buttons
    const button3 = document.getElementById('button3');
    button3.addEventListener('click', changeStyle4);  // Fixed the event listener for button3

    const button4 = document.getElementById('button4');
    button4.addEventListener('click', changeHeading);  // Fixed the event listener for button4
})();

function changeStyle1() {
    const element1 = document.getElementById('element1');
    element1.style.color = 'pink';
    element1.style.fontSize = '30px';
}

function changeStyle2() {
    const element2 = document.getElementById('element2');
    element2.style.backgroundColor = 'pink';
    element2.style.border = '2px solid purple';
}

function changeStyle3() {
    const element3 = document.getElementById('element3');
    element3.style.color = 'red';
    element3.style.fontWeight = 'bold';
}

function changeStyle4() {
    const element2 = document.getElementById('element2');
    element2.style.padding = '30px';  // Updated to apply padding to element2
    element2.style.border = '2px solid pink';  // Added style for element2
}

function changeHeading() {
    const heading = document.getElementById('heading');
    heading.style.letterSpacing = '5px';  // Apply letter spacing to heading
    heading.style.textTransform = 'uppercase';  // Apply uppercase transform
}
