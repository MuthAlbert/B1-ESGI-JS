# Dev web: js, web api fetch et json <!--'#' équivalant au h1, titre le plus important-->

Avoir un bon ide est important.
Le "fichier.md" sert à la documentation d'un projet IT.

js sert pour le client lourd, des app web, mobile et la réactivité aux pages web.
Cest un langage orienté objet.

par ID:
    let element = document.getElementById("monId");

par Classe:
    let element = document.getElementsByClassName("maClasse");

par Balise:
    let element = document.getElementsByTagName("p");

changer le texte:
    document.getElementById("monId").textContent = "Nouveau texte !";

changer le style:
    document.getElementById("monId").style.color = "red";

ajouter un ecouteur d'évenement:
```sh
    document.getElementById("monBoutton").addEventListener("click", function () {
    alert("Boutton cliqué");
});
```