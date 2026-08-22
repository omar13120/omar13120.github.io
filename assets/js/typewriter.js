document.addEventListener("DOMContentLoaded", function () {
  const text = "Hey, I'm Omar";
  const el = document.getElementById("typewriter");
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }

  type();
});