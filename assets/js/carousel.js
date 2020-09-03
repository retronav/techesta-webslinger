$(document).ready(() => {
  $("#carouselInfoModal #start-btn").click(() => {
    // Start carousel
    $("#hero-carousel").carousel({
      interval: 8600,
      keyboard: false,
      ride: false,
      pause: false,
      touch: false,
    });
    $("#hero-carousel").carousel("cycle");
    $("#carouselAudio")[0].play();
    setTimeout(() => {
      $("#carouselAudio")[0].pause();
      $("#hero-carousel").carousel(11);
      $("#hero-carousel").carousel("dispose");
    }, 93000);
  });
  $("#carouselInfoModal").modal("toggle");
  // Every slide of the slideshow has a "data-src" attribute
  // Which has the location of the image stored.
  // This block iterates over all of the slides and
  // Sets the background-image
  $(".carousel-item .carousel-img").each((i) => {
    const item = $(".carousel-item .carousel-img")[i];
    item.style.backgroundBlendMode = "overlay";
    if (item.dataset.img)
      item.style.background = `url(./assets/media/${item.dataset.img}) center`;
    // Vignette effect for the image
    item.style.backgroundColor = "rgb(0, 0, 0, 0.2)";
  });
});
