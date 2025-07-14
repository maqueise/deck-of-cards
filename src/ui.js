export function criarBaralhoUI() {
    const mesaBaralho = document.querySelector("#mesaBaralho");
    mesaBaralho.innerHTML = ""; // Limpa o conteúdo anterior
    const baralho = document.createElement("div");
    baralho.id = "baralho";
    baralho.className = "stack w-24";

    for (let i = 0; i < 10; i++) {
        const img = document.createElement("img");
        img.src = "https://deckofcardsapi.com/static/img/back.png";
        img.className = "w-24 slide-in-left";
        img.style.animationDelay = `${0.5 - i * 0.1}s`; // Ajusta o atraso da animação
        baralho.appendChild(img);
    }

    mesaBaralho.appendChild(baralho);
}
