// var randomNumber = Math.floor(Math.random() * 1000) + 1;
// console.log(randomNumber);
var lives = 10;
var gameActive = false; // Changement ici pour désactiver le jeu au chargement de la page
var rounds = 0;
var wins = 0;
var losses = 0;
var startTime;

function guessNumber() {
  if (!gameActive) {
    startGame(); // Ajout ici pour démarrer le jeu uniquement lorsqu'un joueur clique sur "Vérifier"
    return;
  }

  var userInput = parseInt(document.getElementById('userInput').value);

  if (isNaN(userInput)) {
    document.getElementById('result').textContent = "Veuillez entrer un nombre valide.";
  } else if (userInput === randomNumber) {
    document.getElementById('result').textContent = "Félicitations ! Vous avez trouvé le juste prix.";
    endGame(true);
  } else if (userInput < randomNumber) {
    document.getElementById('result').textContent = "C'est plus.";
    loseLife();
  } else {
    document.getElementById('result').textContent = "C'est moins.";
    loseLife();
  }
}

function loseLife() {
  lives--;
  updateHearts();
  if (lives === 0) {
    document.getElementById('but').style.display = 'true';
    document.getElementById('result').textContent = "Dommage, vous avez épuisé toutes vos vies.";
    endGame(false);
  }
}

function endGame(isWin) {
  gameActive = false;
  rounds++;
  if (isWin) {
    wins++;
  } else {
    losses++;
  }

  updateLeaderboard();
  var restartButton = document.createElement('button');
  restartButton.textContent = "Actualiser le jeu";
  restartButton.addEventListener('click', restartGame);
  document.getElementById('result').appendChild(restartButton);
}

function restartGame() {
  gameActive = false; // Changement ici pour désactiver le jeu au redémarrage
  randomNumber = Math.floor(Math.random() * 1000) + 1;
  lives = 10; // Remettre le nombre de vies à 10
  document.getElementById('userInput').value = ''; // Réinitialiser la saisie de l'utilisateur
  document.getElementById('result').textContent = ''; // Effacer le message de résultat
  document.getElementById('but').style.display = 'static'; // Réactiver le bouton "Vérifier"
  
  
  //permet avec la ligne du dessous de désactiver le boutons vérifier.

  // document.getElementById('but').style.display = 'block'; // Réactiver le bouton "Vérifier"
  

  updateHearts();
  // updateLeaderboard(); // Mettre à jour le leaderboard après le redémarrage
}


function updateHearts() {
  var hearts = "";
  for (var i = 0; i < lives; i++) {
    hearts += "❤️";
  }
  document.getElementById('lives').textContent = hearts;
}

function updateLeaderboard() {
  var table = document.querySelector('.leaderboard table');
  var newRow = table.insertRow(1);
  var roundCell = newRow.insertCell(0);
  var resultCell = newRow.insertCell(1);
  var timerCell = newRow.insertCell(2); // Ajout d'une cellule pour le chronomètre

  roundCell.textContent = rounds;
  console.log(wins+'/'+rounds);
  resultCell.textContent = (wins === rounds) ? "Gagné" : "Perdu";
  timerCell.textContent = document.getElementById('timer').textContent; // Afficher le contenu du chronomètre dans la cellule du leaderboard
}

function startGame() {
  randomNumber = Math.floor(Math.random() * 1000) + 1;
  console.log(randomNumber);
  gameActive = true;
  startTime = Date.now(); // Démarrer le chronomètre au début du jeu
  setInterval(updateTimer, 10); // Mettre à jour le chronomètre toutes les 10 millisecondes
  guessNumber(); // Appeler guessNumber() pour vérifier le nombre après le démarrage du jeu
}

function updateTimer() {
  if (!gameActive) return;

  var currentTime = Date.now();
  var elapsedTime = currentTime - startTime;
  var minutes = Math.floor(elapsedTime / 60000);
  var seconds = Math.floor((elapsedTime % 60000) / 1000);
  var milliseconds = elapsedTime % 1000;

  var timerText = padZero(minutes) + ":" + padZero(seconds) + ":" + padZero(milliseconds, 3);
  document.getElementById('timer').textContent = timerText;
}

function padZero(num, size = 2) {
  var numString = num.toString();
  while (numString.length < size) numString = "0" + numString;
  return numString;
}

// Affichage initial des cœurs et leaderboard au chargement de la page
updateHearts();
updateLeaderboard();

// Fonction pour générer le contenu aléatoire du tableau
function generateRandomTable(rows, columns) {
  var table = document.querySelector('.random-table');
  for (var i = 0; i < rows; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < columns; j++) {
      var cell = row.insertCell(j);
      // Générer un contenu aléatoire pour chaque cellule du tableau
      cell.textContent = getRandomContent();
    }
  }
}

// Fonction pour générer un contenu aléatoire
function getRandomContent() {
  var randomContent = ['10', '20', '30', '40', '50', '60', '70'];
  var randomIndex = Math.floor(Math.random() * randomContent.length);
  return randomContent[randomIndex];
}


