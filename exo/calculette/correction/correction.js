// formulaire
const form = document.getElementById("form");

// Inputs
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const select = document.getElementById("select");

// Result
const result = document.getElementById("result");

// Creation des events
// le parametre event est passe de facon implicite, son nom peut etre change,
// mais il est preferable de le laisser tel quel pour une meilleure comprehension
form.onsubmit = (event) => {
  event.preventDefault();

  // Recuperation de la valeur du select (add, sub, mul, div)
  console.log("Valeur de l'element select: ", select.value);

  // Recuperation de la valeur des inputs
  console.log("Valeur de l'element input1: ", input1.value);
  console.log("Valeur de l'element input2: ", input2.value);

  // Utilisation de la valeur du select pour effectuer l'operation correspondante
  switch (select.value) {
    case "add":
      console.log("calcul choisi addition");
      // Affichage du resultat de l'addition
      result.innerText = Number(input1.value) + Number(input2.value);
      break;
      
    case "mul":
      console.log("calcul choisi multiplication");
      result.innerText = Number(input1.value) * Number(input2.value);
      break;

    case "div":
      console.log("calcul choisi division");
      result.innerText = Number(input1.value) / Number(input2.value);
      break;

    case "sub":
      console.log("calcul choisi soustraction");
      result.innerText = Number(input1.value) - Number(input2.value);
      break;

    default:
      console.log("calcul non géré");
      break;
  }

  // Affichage du resultat
};
