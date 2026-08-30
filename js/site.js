(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var on = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", on ? "true" : "false");
      toggle.textContent = on ? "Close" : "Menu";
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  function tilt(el, ev, max) {
    var r = el.getBoundingClientRect();
    var x = (ev.clientX - r.left) / r.width - 0.5;
    var y = (ev.clientY - r.top) / r.height - 0.5;
    el.style.transform =
      "rotateY(" + (x * max).toFixed(2) + "deg) rotateX(" + (-y * max).toFixed(2) + "deg)";
  }

  var book = document.querySelector(".buy-art img");
  var stage = document.querySelector(".buy-art");
  if (book && stage) {
    stage.addEventListener("mousemove", function (e) { tilt(book, e, 7); });
    stage.addEventListener("mouseleave", function () { book.style.transform = ""; });
  }
})();
