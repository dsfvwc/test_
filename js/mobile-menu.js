(() => {
    const refs = {
    openMenuBtn: document.querySelector(".icon-menu-open"),
    closeMenuBtn: document.querySelector(".icon-menu-close"),
    menu: document.querySelector(".mob-menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    }
})();