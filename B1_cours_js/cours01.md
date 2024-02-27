### Projet de développement

Creer un projet simple qui permet de manipuler le DOM afin de faire apparaitre le resultat d'une operation arithmetique.
Pour aller plus loin, creez une veritable calculatrice qui permet d'effectuer les operations de base (addition, soustraction, multiplication, division).

Pour cela vous devez:

- Creer un fichier HTML
- Creer un fichier CSS
- Creer un fichier JS

Le fichier HTML doit contenir un formulaire qui permet de saisir deux nombres et de choisir l'operation a effectuer.

Le fichier JS doit contenir un code qui permet de recuperer les valeurs saisies dans le formulaire, de les convertir en nombre et d'effectuer l'operation choisie.

Le fichier CSS doit contenir un code qui permet de mettre en forme le formulaire et le resultat de l'operation.

Afin de recuperer un element du DOM :

```javascript
const element = document.getElementById("id");
```

Afin de réagir à un evenement sur un element du DOM :

```javascript
element.addEventListener("click", function () {
  // Code a executer lors du click
});
```

Aide:

- En utilisant cette logique et la doc sur mdn, vous devez creer un projet qui respecte les consignes. Tentez de de recuperer le contenu du formulaire et de l'afficher dans la console pour commencer...
- En general le comportement par defaut d'un formulaire est de recharger la page lors de la soumission. Pour eviter cela, vous pouvez utiliser la methode preventDefault() sur l'evenement submit du formulaire...
