const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector("nav");
const links = nav.querySelectorAll("a");
const toggle = document.querySelector(".toggle");
const customer = document.querySelectorAll(".customer");
const control = document.querySelectorAll(".control");

const switches = () => {
  ham.classList.toggle("hidden");
  close.classList.toggle("active");
  overlay.classList.toggle("active");
  nav.classList.toggle("active");
};

ham.addEventListener("click", switches);

const page = [close, overlay];

page.forEach((pages) => {
  pages.addEventListener("click", switches);
});

links.forEach((link) => {
  link.addEventListener("click", switches);
});

control.forEach((con, index) => {
  con.addEventListener("click", (e) => {
    const clicked = e.target;
    if (clicked.classList.contains("control")) {
      customer.forEach((cust) => cust.classList.remove("active"));
    }
    customer[index].classList.add("active");
  });
});
