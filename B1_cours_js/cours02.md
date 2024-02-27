# JS cours 2

Une fonction peux etre appellé plusieurs fois avec un nombre de parametres differents

Exemple:
````
function(param1);
function(param1, param2);
function(param1, param2, param3);
````
#### Création d'un Timeout:
```js
console.log("Début");

setTimeout(() => {
     console.log("Exécution asynchrone après 2 secondes");
}, 2000)

console.log(setTimeout)
```

## Les promesses
Les promesses sont un moyen de gérer les opérations asynchrones en JS. Elles représentes une valeur qui peux etre disponible maintenant, dans le futur ou jamais.

#### Création et utilisation d'une promesse:
```js
let promesse = new Promise((resolve, reject) => {
    // Simulation d'une tache asynchrome
    let condition = true;

    if (condition) {
        setTimeout(() => resolve("Opération réussite"), 1000);
    } else {
        reject("Opération échouée");
    }
});
```

#### Syntaxe de base d'une promesse: .then(), .catch() , .finnaly()
-   then() : S'éxécute si la promesse est tenue. La valeur de retour de cette fonction devient la valeur de réussite de la promesse.
-   catch() : Une fonction à exécuter de façon asynchrone quand la promesse est rompue. Sa valeur de retour devient la valeur de réussite de la promesse.
-   finnaly() : La valeur avec laquelle la promesse a été rompue. Si cet argument n'est pas une fonction, il est remplacé en interne par une fonction de rejet.
```js
promesse.then((valeur) => {
    console.log(valeur); // Affiche "Opération réussite"
}).catch((raison) => {
    console.error(raison); // Affiche "Opération échouée" si la promesse est rejetée
}).finally(() => {
    console.log("Fin de l'opération"); // Exécute toujours, que la promesse soit résolue ou rejetée
});
```

## Résumer 
L'API fetch est utilisée pour récupérer des données à partir d'une source externe qui utilise le protocole sécurisé HTTPS. Cette opération est asynchrone, ce qui signifie qu'elle ne bloque pas l'exécution du code suivant. fetch retourne une promesse, qui est une représentation d'une valeur qui peut être disponible maintenant, dans le futur ou jamais. Pour gérer cette promesse et obtenir le résultat de la requête, on utilise la méthode .then(). Cela permet d'exécuter une fonction lorsque la promesse est résolue, c'est-à-dire lorsque les données sont récupérées avec succès depuis la source externe.