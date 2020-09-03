const $ = window.$;
$("document").ready(() => {
  if (
    window.location.href.split("#").length > 1 &&
    window.location.href.split("#")[1] !== "books-section"
  )
    window.location.href = window.location.href.split("#")[0];
});
setTimeout(() => {
  // $("body").css("overflow-y", "initial");
  $(".nav-link.books").attr("href", `${window.location.href}#books-section`);
}, 3000);
