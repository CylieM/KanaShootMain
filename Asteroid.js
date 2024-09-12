function Asteroid(x, y, word, color) {
    this.position = createVector(x, y);
    this.color = color;
    this.word = word;
    // Calculate size with a smaller minimum size for single kana characters and a larger size for multi-character kana
    this.size = Math.max(30, word.kana.length * 15); // Adjust size based on kana length with a minimum size
    this.completedText = "";
    this.intact = true;
}
  
Asteroid.prototype.update = function() {
    let speed;
    // Adjust speed for waves 3 and 4 amd
    if (currentWave === 2 || currentWave === 3 || currentWave === 4) {
        speed = map(score, 0, 1000, 1, 10); // Slower speed for waves 3 and 4
    } else {
        speed = map(score, 0, 1000, 1, 15); // Normal speed for other waves
    }
    this.position.y += speed;
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
    textSize(this.size / 2);
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
