const sign_in_btn = document.querySelector("#login_btn");
const sign_up_btn = document.querySelector("#register_btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("register_mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("register_mode");
});
