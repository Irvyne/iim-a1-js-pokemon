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
let pokemonsBattle = [];

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
    // Savoir si on a cliqué sur un dresseur qu'on avait deja choisi
    // Get a random element from an array
    // Get pokemon

    //console.log(pokemons[0]);

    if (pokemonsBattle.length < 2) {
        pokemonsBattle.push(pokemons[0]);
    } else {
        battlePok();
    }

    console.log(pokemonsBattle);
}

let battle = true;
let attacker = 0;
let defender = 1;

//function battlePok() {
    while (battle) {
        let pokemonAttack = pokemonsBattle[attacker];
        let pokemonDefend = pokemonsBattle[defender];

        console.log(pokemonAttack);

        /*
        { name: "Pikachu", type: "electric", hp: 120, attack: 23 }
        { name: "Dracaufeu", type: "fire", hp: 150, attack: 200 }


        Boucle 1:
            Pika attack 23 Dracaufeu
            Dracaufeu hp = 150 - 23
            if (hp dracau <= 0) (--pas fait--)
                afficher victoire pika
                battle = false

        Boucle 2:
            Dracau attack 200 pika
            Pika hp = 120 - 200
            if (hp pika <= 0) (--fait--)
                afficher victoire dracau
                battle = false
         */





        if (attacker === 0) {
            attacker = 1;
            defender = 0;
        } else {
            attacker = 0;
            defender = 1;
        }

        battle = false;
    }
//}
