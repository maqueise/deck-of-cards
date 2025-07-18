import "./style.css"
import { comprarCarta, consultarBaralho, criarBaralho } from "./api/deck-of-cards"
import { Coins, createIcons, Dices, Layers } from "lucide"
import { UI } from "./ui"
createIcons({
    icons: {
        Dices,
        Layers,
        Coins
    }
})

const btnNovoBaralho = document.querySelector("#btnNovoBaralho")
const btnResetarMesa = document.querySelector("#btnResetarMesa")
const displayBaralhoId = document.querySelector("#baralhoId")
const displayCartasRestantes = document.querySelector("#cartasRestantes")
const mesaBaralho = document.querySelector("#mesaBaralho")
const mesaCartas = document.querySelector("#mesaCartas")

btnNovoBaralho.addEventListener("click", async function (event) {
    let baralho = null
    let storageBaralhoId = localStorage.getItem("baralhoId")
    if(storageBaralhoId){
        baralho = await  consultarBaralho(storageBaralhoId)
    }else{
        baralho = await criarBaralho()
        localStorage.setItem("baralhoId", baralho.deck_id)
    }
    const btn = event.target
    btn.setAttribute("disabled", true)
    displayBaralhoId.textContent = baralho.deck_id
    displayCartasRestantes.textContent = baralho.remaining
    UI.renderizarBaralhoMesa()
})
mesaBaralho.addEventListener("click", async function () {
    const baralho = await comprarCarta(
        localStorage.getItem("baralhoId")
    )
    displayCartasRestantes.textContent = baralho.remaining
    for(let card of baralho.cards){
        let cartaImg = document.createElement('img')
        cartaImg.src=card.image
        cartaImg.classList.add('w-24')
        mesaCartas.appendChild(cartaImg)
    }

})

