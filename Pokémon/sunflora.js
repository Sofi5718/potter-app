"use script";

const sunFlora = {
    name: "Sunflora",
    description: "Sunflora is a plant Pokémon with a sunflower-like design, having a green trunk and limbs",
    image: "https://archives.bulbagarden.net/media/upload/0/0d/0192Sunflora.png",
    footprint: "https://archives.bulbagarden.net/media/upload/f/f8/F0192.png",
    dexindex:192,
    type: "Sun",
    subtype: "Grass",
    weaknesses: "Fire, Ice, Poison, Bug, Flying",
    gender: "Uni sex",
    weight: 8500,
    height: 80,
    generation: "Gen. II-IV",
    spilversion: "1 version",
    canEvolve: "boolean",
    statsHP:0,
    statsAttack: 0,
    statsDefence: 0,
    statsSpecialAttack: 2,
    statsSpecialDefence: 0,
    statsSpeed: 0,
}
function showPokemon(pokemon) {
    document.querySelector("#firstName").textContent = student.firstName
    document.querySelector("#middelName").textContent = student.middelName
    document.querySelector("#lastName").textContent = student.lastName
}
function addPokemons(pokemon) {
    const myHtml = /*html*/ `
    <li>name ${pokemon.name}</li> 
    <li>description ${pokemon.description}</li>
    <li>image ${pokemon.image}</li>
    <li>footprint ${pokemon.footprint}</li>
    <li>dexindex ${pokemon.dexindex}</li>
    <li>type ${pokemon.type}</li>
    <li>subtype ${pokemon.subtype}</li>
    <li>gender ${pokemon.gender}</li>
    <li>weaknesse ${pokemon.weaknesses}</li>
    <li>height ${pokemon.height}</li>
    <li> weight ${pokemon.weight}</li>
    <li>spilversion ${pokemon.spilversion}</li>
    <li>canEvolve ${pokemon.canEvolve}</li>
    <li>generation ${pokemon.generation}</li>
    <li>statsAttack ${pokemon.statsAttack}</li>
    <li>statsHP ${pokemon.statsHP}</li>
    <li>statsSpecialAttack ${pokemon.statsSpecialAttack}</li>
    <li>statsDefence ${pokemon.statsDefence}</li>
    <li>statsSpeed ${pokemon.statsSpeed}</li>
    <li>statsSpecialDefence ${pokemon.statsSpecialDefence}</li>
    `;
    document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHtml);
}
