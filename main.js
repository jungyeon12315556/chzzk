const navItems = document.querySelectorAll(".nav-item");


navItems.forEach((navItem, i) => {
    navItem.addEventListener("click", () => {
        navItems.forEach((item, j) => {
            item.className = "nav-item";
        });
        navItem.className = "nav-item active";

    });
});



function toggleTab(categoryId) {
    var category = document.getElementById(categoryId);
    var tabs = document.getElementsByClassName('content');

    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] !== category) {
            tabs[i].style.display = 'none';
        }
    }

    category.style.display = 'block';

    category.classList.toggle('active1');
}