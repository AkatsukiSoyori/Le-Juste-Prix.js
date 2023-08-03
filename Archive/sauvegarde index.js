// Déclaration de la variable contenant le texte "Hello World !!"
let message = "Hello World !!";

// Affichage du contenu de la variable dans la console
console.log(message);

// Ajout de "2023" à la variable pour obtenir "Hello World 2023"
message += " 2023";

// index.js
function sayHello() {
    console.log("Hello World");
}

// Appel de la fonction pour afficher "Hello World" dans la console
sayHello();

// Afficher "Hello World" dans le h1 avec l'id "hello"
const helloElement = document.getElementById("hello");
helloElement.innerText = message; // Utilisation de la variable pour afficher "Hello World 2023" dans le h1

// Déclaration et initialisation des variables a et b
let a = 10;
let b = 20;

console.log("Avant l'échange :");
console.log("a =", a); // Affiche la valeur de a avant l'échange
console.log("b =", b); // Affiche la valeur de b avant l'échange

// Échange des valeurs en utilisant une variable temporaire
let temp = a;
a = b;
b = temp;

console.log("Après l'échange :");
console.log("a =", a); // Affiche la valeur de a après l'échange (ancienne valeur de b)
console.log("b =", b); // Affiche la valeur de b après l'échange (ancienne valeur de a)

for (let i = 1; i <= 10; i++) {
    console.log("Hello World !! " + i);
}