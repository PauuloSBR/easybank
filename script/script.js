var hamburguerButton = document.querySelector("#hamburguer-button");
var links = document.querySelector(".myLinks");
hamburguerButton === null || hamburguerButton === void 0 ? void 0 : hamburguerButton.addEventListener("click", function () {
    links === null || links === void 0 ? void 0 : links.classList.toggle("show");
});
