var hamburguerButton = document.querySelector("#hamburguer-button");
var iconBurguer = hamburguerButton.querySelector("i");
var links = document.querySelector(".myLinks");
var header = document.querySelector("#header");
hamburguerButton === null || hamburguerButton === void 0 ? void 0 : hamburguerButton.addEventListener("click", function () {
    links === null || links === void 0 ? void 0 : links.classList.toggle("show");
    iconBurguer === null || iconBurguer === void 0 ? void 0 : iconBurguer.classList.toggle("burguer-close");
    header === null || header === void 0 ? void 0 : header.classList.toggle("header-active");
});
