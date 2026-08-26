(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(pointer: coarse)").matches) return;

  function tilt(el, ev, max) {
    var r = el.getBoundingClientRect();
    var x = (ev.clientX - r.left) / r.width - 0.5;
    var y = (ev.clientY - r.top) / r.height - 0.5;
    el.style.transform =
      "rotateY(" + (x * max).toFixed(2) + "deg) rotateX(" + (-y * max).toFixed(2) + "deg)";
  }

  var hero = document.querySelector(".hero");
  var rig = document.getElementById("loop-rig");
  if (hero && rig) {
        var sculp = rig.querySelector(".sculp");
        hero.addEventListener("mousemove", function (e) {
          rig.style.animation = "none";
          if (sculp) sculp.style.animationPlayState = "paused";
          tilt(rig, e, 12);
        });
        hero.addEventListener("mouseleave", function () {
          rig.style.transform = "";
          rig.style.animation = "";
          if (sculp) sculp.style.animationPlayState = "";
        });
  }

  var book = document.querySelector(".buy-art img");
  var stage = document.querySelector(".buy-art");
  if (book && stage) {
    stage.addEventListener("mousemove", function (e) { tilt(book, e, 7); });
    stage.addEventListener("mouseleave", function () { book.style.transform = ""; });
  }
})();
