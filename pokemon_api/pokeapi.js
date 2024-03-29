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
        document.getElementById("pokemonWeight").innerHTML = pokemonWeight;

        const pokemonTypes = data.types.map(type => type.type.name).join(' / ');
        document.getElementById("pokemonTypes").innerHTML = pokemonTypes;

        const pokemonHeight = data.height;
        document.getElementById("pokemonHeight").innerHTML = pokemonHeight;

        const pokemonId = data.id;
        document.getElementById("pokemonId").innerHTML = pokemonId;

        const pokemonAbi = data.abilities.map(ability => ability.ability.name).join(' / ');
        document.getElementById("pokemonAbi").innerHTML = pokemonAbi;

        const pokemonStatsHp = data.stats.find(stat => stat.stat.name === 'hp');
        let hp = '';
        if (pokemonStatsHp) {
            hp = pokemonStatsHp.base_stat;
        }
        document.getElementById("pokemonStatsHp").innerHTML = `${hp}`;
        const hpBar = document.getElementById("hpProgressBar");
        hpBar.value = hp;
        hpBar.max = 255;
            
        const pokemonStatsAtk = data.stats.find(stat => stat.stat.name === 'attack');
        let atk = '';
        if (pokemonStatsAtk) {
            atk = pokemonStatsAtk.base_stat;
        }
        document.getElementById("pokemonStatsAtk").innerHTML = `${atk}`;
        const atkBar = document.getElementById("atkProgressBar");
        atkBar.value = atk;
        atkBar.max = 190;

        const pokemonStatsDef = data.stats.find(stat => stat.stat.name === 'defense');
        let def = '';
        if (pokemonStatsDef) {
            def = pokemonStatsDef.base_stat;
        }
        document.getElementById("pokemonStatsDef").innerHTML = `${def}`;
        const defBar = document.getElementById("defProgressBar");
        defBar.value = def;
        defBar.max = 230;

        const pokemonStatsSpAtk = data.stats.find(stat => stat.stat.name === 'special-attack');
        let spAtk = '';
        if (pokemonStatsSpAtk) {
            spAtk = pokemonStatsSpAtk.base_stat;
        }
        document.getElementById("pokemonStatsSpAtk").innerHTML = `${spAtk}`;
        const spAtkBar = document.getElementById("spAtkProgressBar");
        spAtkBar.value = spAtk;
        spAtkBar.max = 194;

        const pokemonStatsSpDef = data.stats.find(stat => stat.stat.name === 'special-defense');
        let spDef = '';
        if (pokemonStatsSpDef) {
            spDef = pokemonStatsSpDef.base_stat;
        }
        document.getElementById("pokemonStatsSpDef").innerHTML = `${spDef}`;
        const spDefBar = document.getElementById("spDefProgressBar");
        spDefBar.value = spDef;
        spDefBar.max = 230;

        const pokemonStatsSpeed = data.stats.find(stat => stat.stat.name === 'speed');
        let speed = '';
        if (pokemonStatsSpeed) {
            speed = pokemonStatsSpeed.base_stat;
        }
        document.getElementById("pokemonStatsSpeed").innerHTML = `${speed}`;
        const speedBar = document.getElementById("speedProgressBar");
        speedBar.value = speed;
        speedBar.max = 200;
    }
    catch(error) {
        console.log(error);
    }
}