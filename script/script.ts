
const hamburguerButton = document.querySelector("#hamburguer-button") as HTMLButtonElement;
const iconBurguer = hamburguerButton.querySelector("i");
const links = document.querySelector(".myLinks");
const header = document.querySelector("#header");
hamburguerButton?.addEventListener("click",()=>{
    links?.classList.toggle("show");
    iconBurguer?.classList.toggle("burguer-close");
    header?.classList.toggle("header-active");
})
