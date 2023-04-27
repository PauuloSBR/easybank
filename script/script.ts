
const hamburguerButton = document.querySelector("#hamburguer-button") as HTMLButtonElement;
const links = document.querySelector(".myLinks");
hamburguerButton?.addEventListener("click",()=>{
    links?.classList.toggle("show");
})
