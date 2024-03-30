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

function updateStat(statName, data, statElementId, progressBarId, maxStatValue) {   // cette fonction prend 5 paramètres pour ensuite pouvoir les ressortirent plus tard 
    const stat = data.stats.find(stat => stat.stat.name === statName);  // stat vas chercher dans le filtre 'stat' les noms des stats
    const value = stat ? stat.base_stat : '';   // ici value n'a pas de valeur static, elle changera en fonction des stats trouvé au moment donnée
    document.getElementById(statElementId).innerHTML = value;
    const progressBar = document.getElementById(progressBarId);
    progressBar.value = value;
    progressBar.max = maxStatValue;
}
