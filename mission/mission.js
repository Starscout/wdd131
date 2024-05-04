const themeSelector = document.getElementById('select_theme')
function changeTheme() {
    const body = document.body;
    const image = document.querySelector('.logo');
    if (themeSelector.value == 'Dark') {
        body.classList.add('dark');
        image.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        image.src = 'byui-logo_blue.webp';
}
};
themeSelector.addEventListener('click', changeTheme);