import "./index.css";
const itemsMenu = document.querySelectorAll(".sidebar__navigation-item");
const sidebar = document.querySelector(".sidebar");
const breakingBtn = sidebar.querySelector(".sidebar__button-toggle");
const header = document.querySelector(".header");
const content = document.querySelector(".content");
const windowDesktop = window.matchMedia("(min-width: 700px)");

/*боковое раскрывающееся меню*/
itemsMenu.forEach((item) => {
  item.addEventListener("click", () => {
    const arrowItem = item.querySelector(".sidebar__navigation-link--arrow");
    item.classList.toggle("open");
    arrowItem.classList.toggle("open");
  });
});

/*отслеживание ширины экрана, выше 700 - sidebar открыт, если меньше 700, то скрыт */
function handleResize() {
  if (windowDesktop.matches) {
    sidebar.classList.remove("sidebar-toggle");
    header.classList.remove("header-streach");
    content.classList.remove("content-streach");
    breakingBtn.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-toggle");
      header.classList.toggle("header-streach");
      content.classList.toggle("content-streach");
    });
  } else {
    sidebar.classList.add("sidebar-toggle");
    header.classList.add("header-streach");
    content.classList.add("content-streach");
    breakingBtn.addEventListener("click", () => {
      sidebar.classList.toggle("sidebar-toggle-mobile");
    });
  }
}

windowDesktop.addListener(handleResize);
handleResize();
