(function () {
  var DRUM = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-flap]").forEach(function (host) {
    var text = host.getAttribute("data-flap").toUpperCase();
    var word = null;
    text.split("").forEach(function (ch, i) {
      if (ch === " ") { word = null; return; }
      if (!word) {
        word = document.createElement("span");
        word.className = "flap-word";
        host.appendChild(word);
      }
      var cell = document.createElement("span");
      cell.className = "flap";
      word.appendChild(cell);
      if (still) { cell.textContent = ch; return; }

      var target = DRUM.indexOf(ch);
      var pos = 0;
      cell.textContent = " ";
      setTimeout(function step() {
        pos += 1;
        cell.textContent = DRUM[pos];
        cell.classList.remove("flip");
        void cell.offsetWidth;
        cell.classList.add("flip");
        if (pos < target) setTimeout(step, 55);
      }, 250 + i * 70);
    });
  });
})();
