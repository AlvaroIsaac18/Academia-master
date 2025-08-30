// Toggle del menú hamburguesa
document.getElementById('navbarToggle').addEventListener('click', () => {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
});