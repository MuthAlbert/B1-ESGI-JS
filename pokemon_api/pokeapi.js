async function pokemonData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error('Could not fetch resource');
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const pokemonN = data.name;
        document.getElementById("pokemonN").innerHTML = pokemonN;

        const pokemonWeight = data.weight;
        document.getElementById("pokemonWeight").innerHTML = pokemonWeight/10;

        const pokemonTypes = data.types.map(type => type.type.name).join(' / ');
        document.getElementById("pokemonTypes").innerHTML = pokemonTypes;

        const pokemonHeight = data.height;
        document.getElementById("pokemonHeight").innerHTML = pokemonHeight/10;

        const pokemonId = data.id;
        document.getElementById("pokemonId").innerHTML = pokemonId;

        const pokemonAbi = data.abilities.map(ability => ability.ability.name).join(' / ');
        document.getElementById("pokemonAbi").innerHTML = pokemonAbi;

        updateStat('hp', data, 'pokemonStatsHp', 'hpProgressBar', 255);
        updateStat('attack', data, 'pokemonStatsAtk', 'atkProgressBar', 190);
        updateStat('defense', data, 'pokemonStatsDef', 'defProgressBar', 230);
        updateStat('special-attack', data, 'pokemonStatsSpAtk', 'spAtkProgressBar', 194);
        updateStat('special-defense', data, 'pokemonStatsSpDef', 'spDefProgressBar', 230);
        updateStat('speed', data, 'pokemonStatsSpeed', 'speedProgressBar', 200);
    }
    catch(error) {
        console.log(error);
    }
}

function updateStat(statName, data, statElementId, progressBarId, maxStatValue) {   // Cette fonction prend 5 paramètres pour ensuite pouvoir les ressortir plus tard.
    const stat = data.stats.find(stat => stat.stat.name === statName);  // "Stat" va chercher dans le filtre 'stat' les noms des statistiques.
    const value = stat ? stat.base_stat : '';   // Ici, "value" n'a pas de valeur statique, elle changera en fonction des statistiques trouvées au moment donné.
    document.getElementById(statElementId).innerHTML = value;
    const progressBar = document.getElementById(progressBarId);
    progressBar.value = value;
    progressBar.max = maxStatValue;
}

async function displayPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1030');
        if (!response.ok) {
            throw new Error('Could not fetch Pokemon data');
        }
        const data = await response.json();
        const allPokemon = data.results;

        const pokedexDiv = document.getElementById('pokedex');
        for (const pokemon of allPokemon) {
            const response = await fetch(pokemon.url);
            const data = await response.json();

            // const pokemonN = data.name;
            // document.getElementById("pokemonN").innerHTML = pokemonN;

            // const pokemonId = data.id;
            // document.getElementById("pokemonId").innerHTML = pokemonId;

            // const pokemonSprite = data.sprites.front_default;
            // const imgElement = document.getElementById("pokemonSprite")
            // imgElement.src = pokemonSprite;
            // imgElement.style.display = "block";

            const pokemonDiv = document.createElement('div');
            pokemonDiv.classList.add('pokemon');
            pokemonDiv.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>ID: ${data.id}</p>
            `;
            pokedexDiv.appendChild(pokemonDiv);
        }
    } catch (error) {
        console.error(error);
    }
}

displayPokemon();