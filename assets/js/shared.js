let urlPaths = window.location.href.split("/");
urlPaths.pop();
urlPaths.push("index.html");
$("a.nav-link.books").attr("href", `${urlPaths.join("/")}#books-section`);
$("body").on("touchstart", function (evt) {});
$("body").on("touchend", function (evt) {});
