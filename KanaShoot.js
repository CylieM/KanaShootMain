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

        { kana: "は", romaji: "ha" },
        { kana: "ひ", romaji: "hi" },
        { kana: "ふ", romaji: "hu" },
        { kana: "へ", romaji: "he" },
        { kana: "ほ", romaji: "ho" },
        
        { kana: "ま", romaji: "ma" },
        { kana: "み", romaji: "mi" },
        { kana: "む", romaji: "mu" },
        { kana: "め", romaji: "me" },
        { kana: "も", romaji: "mo" },
        
        { kana: "な", romaji: "na" },
        { kana: "に", romaji: "ni" },
        { kana: "ぬ", romaji: "nu" },
        { kana: "ね", romaji: "ne" },
        { kana: "の", romaji: "no" },
        
        { kana: "ら", romaji: "ra" },
        { kana: "り", romaji: "ri" },
        { kana: "る", romaji: "ru" },
        { kana: "れ", romaji: "re" },
        { kana: "ろ", romaji: "ro" },
        
        { kana: "さ", romaji: "sa" },
        { kana: "し", romaji: "shi" },
        { kana: "す", romaji: "su" },
        { kana: "せ", romaji: "se" },
        { kana: "そ", romaji: "so" },
        
        { kana: "た", romaji: "ta" },
        { kana: "ち", romaji: "chi" },
        { kana: "つ", romaji: "tsu" },
        { kana: "て", romaji: "te" },
        { kana: "と", romaji: "to" },
        
        { kana: "や", romaji: "ya" },
        { kana: "ゆ", romaji: "yu" },
        { kana: "よ", romaji: "yo" },
        { kana: "わ", romaji: "wa" },
        { kana: "を", romaji: "wo" },
        
        { kana: "ん", romaji: "n" },
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

        { kana: "サ", romaji: "sa" },
        { kana: "シ", romaji: "shi" },
        { kana: "ス", romaji: "su" },
        { kana: "セ", romaji: "se" },
        { kana: "ソ", romaji: "so" },

        { kana: "タ", romaji: "ta" },
        { kana: "チ", romaji: "chi" },
        { kana: "ツ", romaji: "tsu" },
        { kana: "テ", romaji: "te" },
        { kana: "ト", romaji: "to" },

        { kana: "ナ", romaji: "na" },
        { kana: "ニ", romaji: "ni" },
        { kana: "ヌ", romaji: "nu" },
        { kana: "ネ", romaji: "ne" },
        { kana: "ノ", romaji: "no" },

        { kana: "ハ", romaji: "ha" },
        { kana: "ヒ", romaji: "hi" },
        { kana: "フ", romaji: "fu" },
        { kana: "ヘ", romaji: "he" },
        { kana: "ホ", romaji: "ho" },

        { kana: "マ", romaji: "ma" },
        { kana: "ミ", romaji: "mi" },
        { kana: "ム", romaji: "mu" },
        { kana: "メ", romaji: "me" },
        { kana: "モ", romaji: "mo" },

        { kana: "ヤ", romaji: "ya" },
        { kana: "ユ", romaji: "yu" },
        { kana: "ヨ", romaji: "yo" },
        { kana: "ワ", romaji: "wa" },
        { kana: "ヲ", romaji: "wo" },

        { kana: "ラ", romaji: "ra" },
        { kana: "リ", romaji: "ri" },
        { kana: "ル", romaji: "ru" },
        { kana: "レ", romaji: "re" },
        { kana: "ロ", romaji: "ro" },

        { kana: "ン", romaji: "n" },
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
    document.getElementById("hiddenInput").addEventListener("keydown", function(event) {
        var keyPressed = event.key;
        console.log("Key pressed:", keyPressed);
        handleInput(keyPressed);
    });
}

function startGame() {
    gameStarted = true;
    waveStartTime = millis();
    waveDisplayStartTime = millis();
}

function draw() {
    if (!gameStarted) {
        background(0); 
        fill(255);
        textAlign(CENTER);
        textSize(32);
        text('Press "Start" to begin', width / 2, height / 4);
        text('make sure your screen fits properly', width / 2, height / 2);
        return; 
    }

    background(51);
    drawBase();
    drawLazer();
    drawScore();
    handleField();

    if (field.length === 0 && asteroidsDisplayed >= WAVE_DATA[currentWave].length) {
        currentWave++;
        asteroidsDisplayed = 0;
        wordIndex = 0;
        waveDisplayStartTime = millis();
        if (currentWave >= WAVE_DATA.length) {
            textAlign(CENTER);
            textSize(80);
            text("Congrats! You completed the game!", width / 2, height / 2);
            noLoop();
        } else {
            waveStartTime = millis();
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
        if (asteroidsDisplayed < WAVE_DATA[currentWave].length) {
            field.push(new Asteroid(random(width - 150) + 75, 0, WAVE_DATA[currentWave][wordIndex], randomColor(), endGame));
            wordIndex++;
            asteroidsDisplayed++;
        }
    }
}

function handleInput(event) {
    var key = event.data;
    if (!gameStarted) return;
    if (focus) {
        focus.erode(key.charCodeAt(0));
    } else {
        focus = findAsteroid(key.charCodeAt(0), field);
        if (focus) {
            focus.erode(key.charCodeAt(0));
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
    
    // Display the Play Again and Quit buttons
    document.getElementById('playAgainButton').style.display = 'block';
    document.getElementById('quitButton').style.display = 'block';

    Android.onGameEnded(currentWave, score);
}

function quitGame() {
    // Hide buttons
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('quitButton').style.display = 'none';

    // Show a quit message or redirect to another page if needed
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(19);
    text("Thank you for playing!", width / 2, height / 2 + 40);
}
