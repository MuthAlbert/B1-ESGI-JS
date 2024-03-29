async function pokedex() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/1000`);

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
}