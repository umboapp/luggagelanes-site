document.querySelectorAll(".email[data-user]").forEach(function (el) {
  var text = el.querySelector(".email-text");
  text.textContent = el.dataset.user + "@" + el.dataset.domain;
});
