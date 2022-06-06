function changeClasses() {
    button.classList.toggle(darkModeClasses);
    h1.classList.toggle(darkModeClasses);
    footer.classList.toggle(darkModeClasses);
    body.classList.toggle(darkModeClasses);
}

function changeMode() {
    changeClasses();
    changeText();
}

function changeText() {
    if (body.classList.contains(darkModeClasses)) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }

    button.innerHTML = "Dark Mode";
    h1.innerHTML = "Light Mode ON";
}

const darkModeClasses = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);