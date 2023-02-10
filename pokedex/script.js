async function buscar(pokeName) {

    var pokeName = document.getElementById('pesquisar').value; //Armazena o nome do pokemon

    var minusculas = pokeName.toLowerCase() //Vai pesquisar em minúsculas pra não dar erro

    let fetchRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${minusculas}`) //Pesquisa pelo pokemon
    let pokemon = await fetchRes.json() //Traduz estrutura pra JSON

    pokemonAtual = pokemon

    document.getElementById('name').innerHTML = pokeName.toUpperCase()

    let fetchImg = await fetch(pokemon.sprites.front_default) //Fotinha do pokemon
    document.getElementById('imagem').src = pokemon.sprites.front_default

    let fetchEspecie = await fetch(pokemon.species.url) //Espécie (pokemon em si)
    let especie = await fetchEspecie.json()

    let fetchChain = await fetch(especie.evolution_chain.url) //Cadeia de evolução
    let cadeia = await fetchChain.json()

    let fetchEvo = await fetch(cadeia.chain.evolves_to[0].species.url)
    let evo = await fetchEvo.json()

    let fetchEvo_nomeEvo = await fetch(evo.varieties[0].pokemon.url)
    nomeEvo = await fetchEvo_nomeEvo.json()

    document.getElementById('imagem2').src = nomeEvo.sprites.front_default

    console.log(cadeia.chain.evolves_to[0].species.name) //Mostra evolução (ou a última forma, se não houver)

}

var pokemonAtual;


function clicou() {

    var stats = pokemonAtual.stats //Gostaria de ter implementado um for ou while

    var hp = stats[0].base_stat
    stats[0].stat.name

    document.getElementById('hp').innerHTML = `HP: ${hp}`

    var atk = stats[1].base_stat
    stats[1].stat.name

    document.getElementById('atk').innerHTML = `ATK: ${atk}`

    var def = stats[2].base_stat
    stats[2].stat.name

    document.getElementById('def').innerHTML = `DEF: ${def}`

    var spatk = stats[3].base_stat
    stats[3].stat.name

    document.getElementById('sp-atk').innerHTML = `SP-ATK: ${spatk}`
    var spdef = stats[4].base_stat
    stats[4].stat.name

    document.getElementById('sp-def').innerHTML = `SP-DEF: ${spdef}`

    var speed = stats[5].base_stat
    stats[5].stat.name

    document.getElementById('speed').innerHTML = `SPEED: ${speed}`

}

/*
function evolucao(evo) {
    var evo = cadeia.chain.evolves_to[0].species.name
    if (evo === minusculas) {
        cadeia.chain.evolves_to[0].evolves_to[0].species.name
    } 
}
*/
