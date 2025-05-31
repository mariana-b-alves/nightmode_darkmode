const container = document.querySelector('.container');

function infoText() {
    container.textContent = 'Click on the button below to switch screen modes.';
}

function returnText(){
    container.textContent = 'Mouse over me.';
}

container.addEventListener('mouseenter', infoText, false);

container.addEventListener('mouseout', returnText, false);
