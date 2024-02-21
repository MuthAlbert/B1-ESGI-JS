# Les tableaux en JS

Prendre l'habitude d'utiliser le debugger!

## exemple

```js
let fruits = ["Apple", "Banana"];

console.log(fruits.length);
```

commande array:

- push() : ajouter un élément à la fin du tableau.
```js
let newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]
```

- pop() : enlève un élement du tableau et on peux enlever l'index que l'on veux.
```js
let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
```

- 