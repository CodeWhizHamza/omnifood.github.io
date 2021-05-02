$(document).ready(function () {
  // Sticky Navigation
  $("#fooddelivery").waypoint(
    function (direction) {
      if (direction === "down") $("nav").addClass("sticky");
      if (direction === "up") $("nav").removeClass("sticky");
    },
    { offset: "0%" }
  );

  // Scroll into view
  $(".scrollTo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $(this.getAttribute("href")).offset().top },
      1000
    );
  });
  // Scroll animation
  animate(".slideIn", "slideInUp");
  animate(".fadeIn", "fadeIn");
  animate(".bounceIn", "bounceIn");
});
function animate(el, animationName) {
  $(el).waypoint(
    function () {
      $(this.element).addClass(`animate__animated animate__${animationName}`);
    },
    { offset: "50%" }
  );
}
