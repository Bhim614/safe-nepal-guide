console.log("Safe Nepal Guide is live!");

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("Welcome to Safe Nepal Guide!");
    });
  }
});
