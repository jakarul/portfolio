const burgerFun = () => {
  const navbar = document.querySelector(".nav-item");
  const burger = document.querySelector(".hamburger");

  burger.addEventListener("click", () => {
      navbar.classList.toggle("burger-active");
  });
};
burgerFun();

window.onscroll = function () {
  scrollFunction();
};

scrollFunction = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("back-to-top").style.display = "block";
  } else {
      document.getElementById("back-to-top").style.display = "none";
  }
};
scrollFunction();
