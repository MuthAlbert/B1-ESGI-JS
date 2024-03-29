// console.log("Début");

// setTimeout(() => {
//     console.log("Exécution asynchrone après 2 secondes");
// }, 2000)

// console.log(setTimeout)

let promesse = new Promise((resolve, reject) => {
    // Simulation d'une tache asynchrome
    let condition = true;

    if (condition) {
        setTimeout(() => resolve("Opération réussite"), 1000);
    } else {
        reject("Opération échouée");
    }
});