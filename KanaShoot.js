function Asteroid(x, y, word, color) {
	this.position = createVector(x, y);
	this.color = color;
	this.word = word;
	this.size = word.kana.length * 30;
	this.completedText = "";
	this.intact = true;
  }
  
  Asteroid.prototype.update = function() {
	this.position.y += map(score, 0, 1000, 1, 15);
	if (this.position.y > height) {
	  endGame();
	}
  };
  
  Asteroid.prototype.erode = function(keyCode) {
	var inputChar = String.fromCharCode(keyCode).toLowerCase();
	var length = this.completedText.length + 1;
	if (this.word.romaji.substring(0, length) === this.completedText + inputChar) {
	  this.completedText += inputChar;
	}
	this.intact = (this.completedText !== this.word.romaji);
  };
  
  Asteroid.prototype.draw = function() {
	fill(this.color);
	stroke(0);
	strokeWeight(3);
	ellipse(this.position.x, this.position.y, this.size);
	noStroke();
	textAlign(CENTER);
	textSize(this.size/2);
	fill(0);
	text(this.word.kana, this.position.x, this.position.y + this.size / 6);
  };
  
  function findAsteroid(code, field) {
	var char = String.fromCharCode(code).toLowerCase();
	for (var i = 0; i < field.length; i++) {
	  if (field[i].word.romaji.startsWith(char)) {
		return field[i];
	  }
	}
	return null;
  }
