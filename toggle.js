const body = document.body;
const lightButton = document.getElementById('lightmode');
const darkButton = document.getElementById('darkmode');

lightButton.addEventListener("click", () => SetTheme('light'));
darkButton.addEventListener("click", () => SetTheme('dark'));

const SetTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark');
    }
    else{
        body.classList.remove('dark');
    }
}
