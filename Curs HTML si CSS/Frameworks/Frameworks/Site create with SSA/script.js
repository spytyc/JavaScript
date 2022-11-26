let pages = document.querySelectorAll("article");

// TODO: fix navigation logic

var activeIndex = 0;
// function declarations
function handleLeftClick() {
  pages[activeIndex].dataset.status = "inactive";

  var previousIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : pages.length - 1;

  pages[previousIndex].dataset.status = "active";

  activeIndex = activeIndex - 1;
  activeIndex = previousIndex;
}

function handleRightClick() {
  pages[activeIndex].dataset.status = "inactive";
  var nextIndex = activeIndex + 1 <= pages.length - 1 ? activeIndex + 1 : 0;
  pages[nextIndex].dataset.status = "active";
  activeIndex = activeIndex + 1;
  activeIndex = nextIndex;
  console.log({ activeIndex });
}
