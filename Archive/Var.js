/// -----------------> Archive Variables message <-----------------


// --------------> Exemple 1 : <-------------- 

// 'message' : Cette variable peut être utilisée pour stocker le texte "Hello World !!" dans votre programme. Elle peut être affichée dans la console et également utilisée pour modifier le contenu d'un élément HTML (par exemple, un <h1>).

let message = "Hello World !!";
console.log(message); // Affiche "Hello World !!" dans la console



// --------------> Exemple 2 : <-------------- 



// 'year' : Vous pouvez utiliser cette variable pour stocker l'année "2023" dans votre programme. Elle peut être ajoutée à la variable message pour obtenir "Hello World 2023".

let year = 2023;
message += " " + year; // Ajoute " 2023" à la variable message
console.log(message); // Affiche "Hello World !! 2023" dans la console



// --------------> Exemple 3 : <-------------- 



// 'helloElement' : Cette variable peut être utilisée pour accéder à un élément HTML dans votre page, par exemple, un élément avec l'id "hello". Vous pouvez utiliser cette variable pour modifier le texte à l'intérieur de cet élément.

const helloElement = document.getElementById("hello");
helloElement.innerText = message; // Modifie le contenu de l'élément avec l'id "hello" avec la valeur de la variable message


// -----------------> Explicatif : <-----------------

// Ces variables peuvent être adaptées à vos besoins spécifiques. Par exemple, si vous souhaitez afficher différents messages ou utiliser d'autres éléments HTML, vous pouvez simplement ajuster le contenu des variables en conséquence. Les variables permettent de stocker des données et de les réutiliser à plusieurs endroits dans votre code, ce qui rend votre code plus flexible, maintenable et facile à comprendre.