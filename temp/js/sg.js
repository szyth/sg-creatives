
window.addEventListener("scroll", function(e) {
  var nav = document.getElementById("mynav");
  if (document.documentElement.scrollTop > 200) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
    document.getElementById("a-center").classList.add("ht");
    document.getElementById("img-center").classList.add("img-scroll-ht");
  } else {
    nav.classList.add("nav-transparent");
    document.getElementById("a-center").classList.remove("ht");
    document.getElementById("img-center").classList.remove("img-scroll-ht");
    nav.classList.remove("nav-colored");
  }
});
