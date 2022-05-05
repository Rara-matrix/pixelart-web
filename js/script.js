document.getElementById("icon-menu").addEventListener("click", display_menu);

function display_menu() {
    document.getElementById("display-menu").classList.toggle("show-menu-mobile")
    document.getElementById("display-menu").classList.toggle("show-menu-mobile-pages")
}