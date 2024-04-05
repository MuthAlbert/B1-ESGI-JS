![alt text](img/image.png)

Ce projet est une application Pokémon basée sur l'API fournie par https://pokeapi.co/.

### 1- Comment structurer une page HTML pour afficher une liste de Pokémon et un formulaire de recherche ? 
Pour le formulaire de recherche j'ai utilisé le getElementById pour recupéré les données et ensuite les utilisés avec id en html.
Pour afficher la liste de pokemon c'est casiment de la meme maniere mais la manipulations des données est differents :
```js
const pokemonDiv = document.createElement('div');
pokemonDiv.classList.add('pokemon');
```

### 2- Comment récupérer et afficher une liste initiale de Pokémon avec l'API PokeAPI ?

La fonction displayPokemon().  Elle récupère une liste de Pokémon via l'API PokeAPI et affiche les détails de chaque Pokémon dans :
```js
<div id="pokedex"></div>.
```

### 3-Comment explorer l'API PokeAPI pour trouver les informations nécessaires ?
La documentation de l'API PokeAPI pour comprendre les différentes filtres disponibles et les données qu'elles retournent.

### 4- Comment implémenter une fonctionnalité de recherche pour trouver des Pokémon par leur numéro ?
La fonction pokemonData(), on récupére le nom du Pokémon à rechercher à partir de l'input avec l'ID pokemonName. Ensuite on utilise l'inplut pour rechercher un Pokémon par son nom ou son ID.

### 5- Comment gérer les erreurs, comme une recherche qui ne retourne aucun résultat ?
Dans la gestion d'erreur catch(), on peux afficher un message à l'utilisateur pour l'informer que la recherche n'a retourné aucun résultat.

### 6- Comment manipuler les objets et tableaux retournés par l'API pour afficher les informations des Pokémon ?
```js
 const pokedexDiv = document.getElementById('pokedex');
        for (const pokemon of allPokemon) {
            const response = await fetch(pokemon.url);
            const data = await response.json();
```
### 7-  Comment utiliser fetch pour faire des requêtes asynchrones et traiter les données retournées ? EX :
```js
async function pokemonData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
```

### 8- Comment travailler avec le format JSON pour extraire les données retournées par l'API ?
La méthode response.json() permet d'extraire les données JSON retournées par l'API. On peut ensuite manipuler les objets comme on le souhaite.