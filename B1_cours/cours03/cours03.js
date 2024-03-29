document.addEventListener("DOMContentLoaded", function () { 
    fetch("https://swapi.dev/api/films/1/") 
      .then((response) => response.json()) 
      .then((film) => { 
        document.getElementById("title").textContent = film.title; 
        document.getElementById("opening-crawl").textContent = film.opening_crawl; 
        document.getElementById("release-date").textContent = film.release_date; 
        document.getElementById("director").textContent = film.director; 
        document.getElementById("producers").textContent = film.producer; 
      }) 
      .catch((error) => console.error("Erreur lors de la récupération des détails du film:", error)); 

    fetch("https://swapi.dev/api/films/2/") 
      .then((response) => response.json()) 
      .then((film) => { 
        document.getElementById("title1").textContent = film.title; 
        document.getElementById("opening-crawl1").textContent = film.opening_crawl; 
        document.getElementById("release-date1").textContent = film.release_date; 
        document.getElementById("director1").textContent = film.director; 
        document.getElementById("producers1").textContent = film.producer; 
      }) 
      .catch((error) => console.error("Erreur lors de la récupération des détails du film:", error));
    
    fetch("https://swapi.dev/api/films/3/") 
      .then((response) => response.json()) 
      .then((film) => { 
        document.getElementById("title2").textContent = film.title; 
        document.getElementById("opening-crawl2").textContent = film.opening_crawl; 
        document.getElementById("release-date2").textContent = film.release_date; 
        document.getElementById("director2").textContent = film.director; 
        document.getElementById("producers2").textContent = film.producer; 
      }) 
      .catch((error) => console.error("Erreur lors de la récupération des détails du film:", error)); 
    
    fetch("https://swapi.dev/api/films/6/") 
      .then((response) => response.json()) 
      .then((film) => { 
        document.getElementById("title3").textContent = film.title; 
        document.getElementById("opening-crawl3").textContent = film.opening_crawl; 
        document.getElementById("release-date3").textContent = film.release_date; 
        document.getElementById("director3").textContent = film.director; 
        document.getElementById("producers3").textContent = film.producer; 
      }) 
      .catch((error) => console.error("Erreur lors de la récupération des détails du film:", error)); 
}); 

let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
});

togg2.addEventListener("click", () => {
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
});

togg3.addEventListener("click", () => {
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
});

togg4.addEventListener("click", () => {
  if(getComputedStyle(d4).display != "none"){
    d4.style.display = "none";
  } else {
    d4.style.display = "block";
  }
});
  