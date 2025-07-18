 export async function criarBaralho(){
    const response = await
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const baralho = await response.json()
    return baralho
}
 export async function comprarCarta(baralhoId){
    const response = await
    fetch(`https://www.deckofcardsapi.com/api/deck/${baralhoId}/draw/?count=1`)    
    const cartasCompradas = await response.json()
    return cartasCompradas
}

export async function consultarBaralho(id){
    const response = await
    fetch(`https://www.deckofcardsapi.com/api/deck/${id}`)
    const baralho = await response.json()
    return baralho
}