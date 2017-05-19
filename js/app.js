const trainers = [
    {
        name: "Sacha",
        pokemons: [
            { name: "Pikachu", type: "electric", hp: 120, attack: 23 },
            { name: "Dracaufeu", type: "fire", hp: 150, attack: 35 },
            { name: "Magicarpe", type: "water", hp: 100, attack: 2 }
        ]
    },
    {
        name: "Pierre",
        pokemons: [
            { name: "Racaillou", type: "electric", hp: 120, attack: 23 },
            { name: "Dracaufeu", type: "fire", hp: 150, attack: 35 },
            { name: "Magicarpe", type: "water", hp: 100, attack: 2 }
        ]
    },
    {
        name: "Regis",
        pokemons: [
            { name: "Pikachu", type: "electric", hp: 120, attack: 23 },
            { name: "Dracaufeu", type: "fire", hp: 150, attack: 35 },
            { name: "Magicarpe", type: "water", hp: 100, attack: 2 }
        ]
    }
];

let game = document.getElementById("trainers");

game.innerHTML = `
    ${trainers.map((t, i) => `
        <div onclick="selectTrainer(this)" data-index="${i}">
            <h2>${t.name}</h2>
            <ul>
                ${t.pokemons.map(p => `<li>${p.name} with ${p.attack} attack and ${p.hp}hp</li>`).join('')}
            </ul>
        </div>
    `).join('')}
`;

function selectTrainer(element) {
    let pokemons = trainers[element.getAttribute("data-index")].pokemons;
    // Get a random element from an array
}

/*
for (let i = 0; i < trainers.length; i++) {
    let trainer = trainers[i];
    let pokemons = trainer.pokemons;

    let trainerHtml = document.createElement("div");

    let trainerName = document.createElement("h2");
    trainerName.textContent = trainer.name;

    trainerHtml.appendChild(trainerName);

    let listPokemons = document.createElement("ul");

    for (let j = 0; j < pokemons.length; j++) {
        let pokemon = pokemons[j];

        let pokemonLi = document.createElement("li");
        pokemonLi.textContent = pokemon.name + " hp:" + pokemon.hp;

        listPokemons.appendChild(pokemonLi);
    }

    trainerHtml.appendChild(listPokemons);
    game.appendChild(trainerHtml);
}
*/
