var menuOpened = false;
document.querySelector(".burger-icon").addEventListener('click', function(event) {
    event.stopPropagation();
    menuOpened = true;
    document.querySelector('#mobile-menu-buttons').classList.add('visible');
});

document.addEventListener('click', function() {
    if(menuOpened) {
        document.querySelector('#mobile-menu-buttons').classList.remove('visible');
    }
})