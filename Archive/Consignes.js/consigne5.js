for (let i = 1; i <= 10; i++) {
    console.log("Hello World !! " + i);
}

// -----------------> Explicatif : <-----------------

for : //C'est le mot-clé utilisé pour définir une boucle for en JavaScript. Il est suivi de parenthèses ( ) où nous spécifions trois parties importantes de la boucle : l'initialisation (let i = 1), la condition (i <= 10), et l'incrémentation (i++).

let i = 1: //C'est la partie d'initialisation de la boucle. Nous créons une variable i et lui attribuons une valeur de 1. Cette variable sera utilisée pour suivre le nombre d'itérations de la boucle.

i <= 10: //C'est la condition de la boucle. Tant que cette condition est vraie (c'est-à-dire que i est inférieur ou égal à 10), le corps de la boucle sera exécuté à chaque itération.

i++: //C'est la partie d'incrémentation de la boucle. Après chaque itération du corps de la boucle, la valeur de i sera augmentée de 1.

console.log("Hello World !! " + i);: //C'est le corps de la boucle. À chaque itération, cette instruction est exécutée. Elle affiche "Hello World !!" suivi de la valeur actuelle de i dans la console.

//La boucle for commence avec
 i = 1, 
 //affiche 
 "Hello World !!" 
 //suivi de la valeur de 
 i (dans ce cas, 1), 
 //puis incrémente 
 i de 1. 
 //Elle répète ce processus jusqu'à ce que i atteigne 10. À la 10ème itération, la condition
 i <= 10 
 //devient fausse, et la boucle se termine.

//En conséquence, le code affiche "Hello World !!" suivi de chaque numéro d'itération de 1 à 10 dans la console du navigateur. Le résultat sera :

//dossier .python
Hello World !! 1
Hello World !! 2
Hello World !! 3
...
Hello World !! 10
