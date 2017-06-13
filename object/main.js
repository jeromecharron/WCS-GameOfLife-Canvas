var GameOfLife = function(params) {

  // Paramètres utilisateur
  var nbCellsY = params["initCells"].length;
  var nbCellsX = params["initCells"][0].length;
  var cellHeight = params["cellHeight"] || 10;
  var cellWidth = params["cellWidth"] || 10;
  var initCells  = params["initCells"]  || [];
  var canvasId   = params["canvasId"]   || "life";
  var colourful   = params["colourful"] || params["colorful"] || false;

  var cellsArray = [];
  var display    = new GameDisplay(nbCellsX, nbCellsY, cellWidth, cellHeight, canvasId, colourful);
  var interval   = null;


  // Initialisation du jeu
  var init = function() {
    // ..
  };

  
  // Fonction pour calculer les cellules de la génération suivante
  // à partir des règles du Jeu de la Vie de Conway
  var nextGenCells = function() {
    // Implémentation des règles du Jeu de la Vie
    // Algorithme simplifié :
    //   - Pour chaque cellule :
    //     - Vérifie chacune de ses voisines
    //     - À partir des règles fixe l'état de la cellule
    //       de prochaine génération à vivant (alive) ou mort (dead)

    // Nouveau tableau pour stocker la prochaine génération
    var nextGen = [];

    // ..

    return nextGen;
  };

  init();
  return {
    // Retourne le tableau contenant la prochaine génération de cellules
    step: function() {
      var nextGen = nextGenCells();
      // Affecte la prochaine génération à la génération courante
      cellsArray = nextGen;
      // Mise à jour de l'affichage du monde
      display.update(cellsArray);
    },
    // Retourne le tableau de cellules de la génération actuelle
    getCurrentGenCells: function() {
      return cellsArray;
    },
    setTheInterval: function(theInterval) {
      interval = theInterval;
    },
    getInterval: function() {
      return interval;
    }
  };
};

// L'objet GameDisplay a pour charge toutes les fonctionnalités relatives à l'affichage.
var GameDisplay = function(nbCellsX, nbCellsY, cellWidth, cellHeight, canvasId, colourful) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext && canvas.getContext('2d');
  var widthPixels = nbCellsX * cellWidth;
  var heightPixels = nbCellsY * cellHeight;
  var drawGridLines = function() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.beginPath();
    // Pour chaque colonne
    for (var i = 0; i <= nbCellsX; i++) {
      ctx.moveTo(i*cellWidth, 0);
      ctx.lineTo(i*cellWidth, heightPixels);
    }
    // Pour chaque ligne
    for (var j = 0; j <= nbCellsY; j++) {
      ctx.moveTo(0, j*cellHeight);
      ctx.lineTo(widthPixels, j*cellHeight);
    }
    ctx.stroke();
  };
  
  // Méthode de mise à jour de l'affichage 
  // de l'ensemble du "monde" du jeu de la vie
  var updateCells = function(cellsArray) {
    // ..
  };
  
  // Méthode de mise à jour de l'affichage d'une cellule
  var drawCell = function(cell) {
      // ...
      // ctx.fillRect(startX, startY, cellWidth, cellHeight);
      // ctx.clearRect(startX, startY, cellWidth, cellHeight);
      // ...
    }
  };
  var init = function() {
    // Initialise le Canvas à la bonne taille
    canvas.width = widthPixels;
    canvas.height = heightPixels;
  };
  init();
  return {
    update: function(cellsArray) {
      updateCells(cellsArray);
    }
  };
};

var Cell = function(xPos, yPos, state) {
  // ...
};

