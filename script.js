function toggleMenu() {
    var menu = document.querySelector(".menu-button");
    var spans = document.querySelectorAll(".menu-button span");
    var menuList = document.querySelector(".menu-list");

    menu.classList.toggle("open");
    menuList.classList.toggle("open");

    spans.forEach(function(span, index) {
        if (span.style.animation) {
            span.style.animation = "";
        } else {
            span.style.animation = `slideIn 0.5s ease forwards ${index / 7}s`;
        }
    });
}
