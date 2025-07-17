function renderizarBaralhoMesa() {
    const mesaBaralho = document.querySelector("#mesaBaralho")
    mesaBaralho.innerHTML = ""; // Limpa o conteúdo anterior
    const baralho = document.createElement("div")
    baralho.id = "baralho"
    baralho.classList.add('w-24', 'stack')
    for (let i = 1; i <= 20; i++) {
        const carta = document.createElement("img")
        carta.classList.add('carta', 'slide-in-left')
        carta.src = 'https://www.deckofcardsapi.com/static/img/back.png'
        carta.style.animationDelay = `${0.5 - i * 0.1}s`; // Ajusta o atraso da animação
        baralho.appendChild(carta);
    }
    mesaBaralho.appendChild(baralho);
    baralho.firstChild?.classList.add('hover:scale-110', 'transition-transform', 'duration-300', 'ease-in-out', 'cursor-pointer');
    mesaBaralho.appendChild(baralho);
}
export const UI = {
    renderizarBaralhoMesa,
};
