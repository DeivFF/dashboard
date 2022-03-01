
let asideEsquerdo = document.querySelector("#esquerda")
document.querySelector("#menu").onclick = () => {
    asideEsquerdo.classList.toggle("active")
}
document.querySelector("#fechar").onclick = () => {
    asideEsquerdo.classList.remove("active")
}


let asideDireito = document.querySelector("#direita")
document.querySelector("#menu-btn").onclick = () => {
    asideDireito.classList.toggle("active")
}
document.querySelector("#voltar").onclick = () => {
    asideDireito.classList.remove("active")
}