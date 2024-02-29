# JS cours 3

## Les promesses suite

### Async/Await

Les mots clés async et await sont des ajouts syntaxiques à la langue. Ils permettent de travailler avec des promesses de manière plus confortable.

### syntaxe de base JSON

#### Bonne pratique

-   Evité les commentaires
-   Utilisé des noms explicites
-   Utilisé les validations json pour evité des erreurs syntaxiques

Exemple:
```js
{
    "nom": "John",
    "age": 30,
    "adresse": {
        "ville": "New York",
    };
    "estEtudiant": false,
    "amis": ["Alice", "Bob", "Charlie"]
}
```

Manipulation d'objet:

```js
const objet = {
    nom: "John",
    age: 30,
    ville: "New York",
    estEtudiant: false,
    amis: ["Alice", "Bob", "Charlie"]
};

const chaineJSON = JSON.stringify(objet);

console.log(chaineJSON);

// Ce que cela affiche
{"nom":"John","age":30,"ville":"New York","estEtudiant":false,"amis":["Alice","Bob","Charlie"]}
```
