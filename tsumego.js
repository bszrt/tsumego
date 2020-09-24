function drawBoard() {
        // Setup
        var canvas = document.getElementById('board');
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d');

          // Board colour:
          ctx.fillStyle = "#b5662d";
          ctx.fillRect(0, 0, canvas.width, canvas.height);


          // Draw the lines:
 	    	  var i = 0  
 		      while(i < 19) {
             	ctx.moveTo(15, 15+i*30);
          	   ctx.lineTo(555, 15+i*30);
          	   i++;
 		      }

 		      var i = 0 		  
 		      while(i < 19) {
          	   ctx.moveTo(15+i*30, 15);
          	   ctx.lineTo(15+i*30, 555);
          	   i++;
 		      }

 		      ctx.strokeStyle = "black";
              ctx.stroke();         


          // Draw the star points:
          x = y = 105
          
          var i = j = 0
          for(j = 0; j < 3; j++) {
          	for(i = 0; i < 3; i++) {
          		ctx.moveTo(x+i*180, y+j*180);
    	  		ctx.fillStyle = "black";
          		ctx.arc(x+i*180, y+j*180, 4, 0, Math.PI*2);
          		ctx.fill();
          		};
          };

          drawTsumego(3);
        };
}

function drawTsumego(size) {

  // Setup
  var canvas = document.getElementById('board');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');    
    
    var shapes = [[[1, 2], [2, 2]], [[1, 2], [2, 1]]];

    // coords = [[2, 4], [3, 4], [4, 3], [4, 2]];
    coords = shapes[Math.floor(Math.random() * shapes.length)];

    coords = transform(coords, size);
    
    for(var i=0; i<coords.length; i++) {
      blackStone(coords[i][0], coords[i][1]);
      };
    
    var xCoords = [];
    var yCoords = [];

    for (var i = 0; i < coords.length; i++) {
      xCoords.push(coords[i][0]);;
    }

    for (var i = 0; i < coords.length; i++) {
      yCoords.push(coords[i][1]);
    }

    for(var i = 2; i < Math.max(...yCoords) + 2; i++) {
      if(Math.random() < 1) {
        whiteStone(Math.max(...xCoords) + 1, i);
      }
    };

    for(var i = 2; i < Math.max(...xCoords) + 2; i++) {
      if(Math.random() < 1) {
        whiteStone(i, Math.max(...yCoords) + 1);
      }
    };
  };
};
    
    
function transform(coords, number) {     
 
    var relationships = [[0, 2], [2, 0], [1, 2], [2, 1], [1, 1]];    

    for(var i=0; i<number; i++) {
      var rel = relationships[Math.floor(Math.random() * relationships.length)];
      var seedCoord = coords[Math.floor(Math.random() * coords.length)];

      coords.push([seedCoord[0] + rel[0], seedCoord[1] + rel[1]]);

      if(Math.random() < 0.3) {
        var mover = Math.floor(Math.random()*coords.length);
        var rel = relationships[Math.floor(Math.random() * relationships.length)];
        
        coords[mover][0] += rel[0];
        coords[mover][1] += rel[1];
      }
                
    }





    return coords;
}


function blackStone(x, y) {
  var canvas = document.getElementById('board');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(x*30-15, y*30-15);
    ctx.arc(x*30-15, y*30-15, 15, 0, Math.PI*2);
    ctx.fill();
  };
};

function whiteStone(x, y) {
  var canvas = document.getElementById('board');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    ctx.arc(x*30-15, y*30-15, 15, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
  };
};