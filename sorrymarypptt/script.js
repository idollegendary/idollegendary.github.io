window.onload = function () {
  "use strict";
  // scroll filter
  let height = 0;
  document.addEventListener("scroll", function () {
    height = document.body.clientHeight;
    height -= window.innerHeight;
    let scrollAmount = window.pageYOffset;
    scrollAmount = scrollAmount / height;
    /*    document.documentElement.style.setProperty(
      "--animBlur-variable",
      scrollAmount * 3 + 0 + "px"
    );
*/ document.documentElement.style.setProperty(
      "--animGray-variable",
      scrollAmount
    );
    document.documentElement.style.setProperty(
      "--animColor-variable",
      scrollAmount * -360 + "deg"
    );
    document.documentElement.style.setProperty(
      "--animGradient-variable",
      (1 - scrollAmount) * 100 + "%"
    );
  });
  window.addEventListener("resize", function () {
    height = document.body.clientHeight;
    height -= window.innerHeight;
  });
};