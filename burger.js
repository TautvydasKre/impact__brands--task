//////////////////////////////////
///<-- Burger code -->///
//////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".main__nav-list");

  if (burger) {
    burger.addEventListener("click", function () {
      if (navList) {
        navList.classList.toggle("active");
        console.log("Nav list toggled");
      } else {
        console.error("Navigation list not found");
      }
    });
  } else {
    console.error("Burger button not found");
  }
});
