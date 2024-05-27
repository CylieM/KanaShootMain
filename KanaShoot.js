const WAVE_DATA = [
	[
	  { kana: "あ", romaji: "a" },
	  { kana: "い", romaji: "i" },
	  { kana: "う", romaji: "u" },
	  { kana: "え", romaji: "e" },
	  { kana: "お", romaji: "o" },
	  { kana: "か", romaji: "ka" },
	  { kana: "き", romaji: "ki" },
	  { kana: "く", romaji: "ku" },
	  { kana: "け", romaji: "ke" },
	  { kana: "こ", romaji: "ko" },
	  // ... add more hiragana characters here ...
	],
	[
	  { kana: "ア", romaji: "a" },
	  { kana: "イ", romaji: "i" },
	  { kana: "ウ", romaji: "u" },
	  { kana: "エ", romaji: "e" },
	  { kana: "オ", romaji: "o" },
	  { kana: "カ", romaji: "ka" },
	  { kana: "キ", romaji: "ki" },
	  { kana: "ク", romaji: "ku" },
	  { kana: "ケ", romaji: "ke" },
	  { kana: "コ", romaji: "ko" },
	  // ... add more katakana characters here ...
	],
	[
	  { kana: "かい", romaji: "kai" },
	  { kana: "ひと", romaji: "hito" },
	  { kana: "つき", romaji: "tsuki" },
	  { kana: "ねこ", romaji: "neko" },
	  { kana: "いぬ", romaji: "inu" },
	  { kana: "さか", romaji: "saka" },
	  { kana: "みず", romaji: "mizu" },
	  { kana: "はな", romaji: "hana" },
	  { kana: "ゆき", romaji: "yuki" },
	  { kana: "くも", romaji: "kumo" },
	  // ... add more two-character hiragana words here ...
	],
	[
	  { kana: "カイ", romaji: "kai" },
	  { kana: "ヒト", romaji: "hito" },
	  { kana: "ツキ", romaji: "tsuki" },
	  { kana: "ネコ", romaji: "neko" },
	  { kana: "イヌ", romaji: "inu" },
	  { kana: "サカ", romaji: "saka" },
	  { kana: "ミズ", romaji: "mizu" },
	  { kana: "ハナ", romaji: "hana" },
	  { kana: "ユキ", romaji: "yuki" },
	  { kana: "クモ", romaji: "kumo" },
	  // ... add more two-character katakana words here ...
	]
  ];
  
var focus; // Asteroid the player is currently typing out
var field = [];
var score = 0;
var currentWave = 0;
var lastAsteroidTime = 0;
var waveStartTime = 0;
var waveDisplayStartTime = 0;
var planetCrust; // color of crust
var planetMantle; // color of mantle
var ship; // color of ship
var asteroidsDisplayed = 0;
var gameStarted = false;
var wordIndex = 0;

function setup() {

  createCanvas(500, 500);
  planetCrust = randomColor();
  planetMantle = randomColor();
  ship = randomColor();
	  // Add event listener to hidden input field for keydown event
  document.getElementById("hiddenInput").addEventListener("keydown", function(event) {
    // Extract the pressed key from the event
    var keyPressed = event.key;

    // Log the key press for debugging
    console.log("Key pressed:", keyPressed);

    // Call handleInput function to process the key press
    handleInput(keyPressed);
  });
  wordIndex++;
  asteroidsDisplayed++;
  focus = null;


}


function startGame() {
    gameStarted = true;
}

function draw() {
    if (!gameStarted) {
        background(0); // Display a blank screen or instructions
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text('Press "Start" to begin', width / 2, height / 4);
        text('make sure your screen fits properly', width / 2, height / 2);
        return; // Exit the draw loop early
    }

    background(51);
    drawBase();
    drawLazer();
    drawScore();
    handleField();
    if (field.length === 0) {
        if (asteroidsDisplayed >= WAVE_DATA[currentWave].length) {
            // Move to the next wave if all asteroids have been displayed and destroyed
            currentWave++;
            asteroidsDisplayed = 1;
            wordIndex = 0; // Reset word index for the next wave
            waveDisplayStartTime = millis();
            if (currentWave >= WAVE_DATA.length) {
                // End the game if all waves are completed
                textAlign(CENTER);
                textSize(80);
                text("Congrats! You completed the game!", width / 2, height / 2);
                noLoop();
            } else {
                // Start the next wave
                waveStartTime = millis();
            }
        }
    }

    if (millis() - waveDisplayStartTime < 3000) {
        textAlign(CENTER);
        textSize(80);
        text("WAVE " + (currentWave + 1), width / 2, height / 2);
    }
}

function handleField() {
    for (var i = field.length - 1; i >= 0; i--) {
        field[i].update();
        if (!field[i].intact) {
            score += field[i].word.romaji.length;
            field.splice(i, 1);
            focus = null;
        } else {
            field[i].draw();
        }
    }
    if (millis() - lastAsteroidTime > 2000 && millis() - waveStartTime < 20000) {
        lastAsteroidTime = millis();
        if (asteroidsDisplayed <= WAVE_DATA[currentWave].length) {
            field.push(new Asteroid(random(width - 150) + 75, 0, WAVE_DATA[currentWave][wordIndex], randomColor(), endGame));
            wordIndex++;
            asteroidsDisplayed++;
        }
    }
}
function handleInput(event) {
  var key = event.data; // Get the last character entered
  if (!gameStarted) return; // Add this line to prevent key handling before the game starts

  if (focus) {
    focus.erode(key.charCodeAt(0)); // Convert the character to a key code
  } else {
    focus = findAsteroid(key.charCodeAt(0), field); // Convert the character to a key code
    if (focus) {
      focus.erode(key.charCodeAt(0)); // Convert the character to a key code
    }
  }
}


  
  
  function drawBase() {
	fill(planetMantle);
	stroke(planetCrust);
	strokeWeight(5);
	rect(0, height - 15, width, height);
	fill(ship);
	stroke(255);
	beginShape();
	vertex(width / 2 - 20, height);
	vertex(width / 2, height - 50);
	vertex(width / 2 + 20, height);
	endShape(CLOSE);
  }
  
  function drawLazer() {
	if (!focus) return;
	stroke(randomColor());
	strokeWeight(focus.completedText.length);
	line(width / 2, height - 50, focus.position.x, focus.position.y);
	fill(255);
	noStroke();
	textAlign(LEFT);
	textSize(30);
	text(focus.completedText, 10, height - 40);
  }
  
  function drawScore() {
	textAlign(RIGHT);
	noStroke();
	textSize(30);
	fill(255);
	text(score, 50, height / 2);
  }
  
  function randomColor() {
	return color(random(255), random(255), random(255));
  }
  
  function endGame() {
    noLoop();
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(19);
    text("Game Over! You reached wave " + currentWave + " with a score of " + score, width / 2, height / 2);
    

        Android.onGameEnded(currentWave, score);
}
