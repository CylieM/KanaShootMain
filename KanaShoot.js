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
        { kana: "ふ", romaji: "fu" },
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
		{ kana: "さき", romaji: "saki" },
		{ kana: "いえ", romaji: "ie" },
		{ kana: "くも", romaji: "kumo" },
		{ kana: "ひと", romaji: "hito" },
		{ kana: "さか", romaji: "saka" },
		{ kana: "ほし", romaji: "hoshi" },
		{ kana: "けい", romaji: "kei" },
		{ kana: "うみ", romaji: "umi" },
		{ kana: "くう", romaji: "kuu" },
		{ kana: "つき", romaji: "tsuki" },

		{ kana: "やま", romaji: "yama" },
		{ kana: "しお", romaji: "shio" },
		{ kana: "けん", romaji: "ken" },
		{ kana: "つめ", romaji: "tsume" },
		{ kana: "ほう", romaji: "hou" },
		{ kana: "てん", romaji: "ten" },
		{ kana: "すい", romaji: "sui" },
		{ kana: "すけ", romaji: "suke" },
		{ kana: "いえ", romaji: "ie" },
		{ kana: "えん", romaji: "en" },

		{ kana: "まい", romaji: "mai" },
		{ kana: "せい", romaji: "sei" },
		{ kana: "うえ", romaji: "ue" },
		{ kana: "せん", romaji: "sen" },
		{ kana: "うし", romaji: "ushi" },
		{ kana: "こい", romaji: "koi" },
		{ kana: "えき", romaji: "eki" },
		{ kana: "うえ", romaji: "ue" },
		{ kana: "しろ", romaji: "shiro" },
		{ kana: "みせ", romaji: "mise" },

		{ kana: "わた", romaji: "wata" },
		{ kana: "しん", romaji: "shin" },
		{ kana: "きょう", romaji: "kyou" },
		{ kana: "いぬ", romaji: "inu" },
		{ kana: "ゆき", romaji: "yuki" },
		{ kana: "いろ", romaji: "iro" },
		{ kana: "ふう", romaji: "fuu" },
		{ kana: "つる", romaji: "tsuru" },
		{ kana: "くさ", romaji: "kusa" },
		{ kana: "さつ", romaji: "satsu" },
		{ kana: "てき", romaji: "teki" },
		{ kana: "きん", romaji: "kin" },
		{ kana: "ふね", romaji: "fune" },
		{ kana: "こう", romaji: "kou" },
		{ kana: "やく", romaji: "yaku" },
		{ kana: "くも", romaji: "kumo" },
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

    { kana: "ホシ", romaji: "hoshi" },
    { kana: "コウ", romaji: "kou" },
    { kana: "スイ", romaji: "sui" },
    { kana: "ケイ", romaji: "kei" },
    { kana: "ナイ", romaji: "nai" },
    { kana: "セイ", romaji: "sei" },
    { kana: "タイ", romaji: "tai" },
    { kana: "ヒモ", romaji: "himo" },
    { kana: "マイ", romaji: "mai" },
    { kana: "メシ", romaji: "meshi" },

    { kana: "ヤマ", romaji: "yama" },
    { kana: "ソラ", romaji: "sora" },
    { kana: "サイ", romaji: "sai" },
    { kana: "ワカ", romaji: "waka" },
    { kana: "モノ", romaji: "mono" },
    { kana: "タマ", romaji: "tama" },
    { kana: "フネ", romaji: "fune" },
    { kana: "キタ", romaji: "kita" },
    { kana: "セン", romaji: "sen" },
    { kana: "ノイ", romaji: "noi" },

    { kana: "ムシ", romaji: "mushi" },
    { kana: "コイ", romaji: "koi" },
    { kana: "ノリ", romaji: "nori" },
    { kana: "サン", romaji: "san" },
    { kana: "ホネ", romaji: "hone" },
    { kana: "ハシ", romaji: "hashi" },
    { kana: "フク", romaji: "fuku" },
    { kana: "シル", romaji: "shiru" },
    { kana: "カナ", romaji: "kana" },
    { kana: "サク", romaji: "saku" },

    { kana: "ヒツ", romaji: "hitsu" },
    { kana: "テン", romaji: "ten" },
    { kana: "ナシ", romaji: "nashi" },
    { kana: "カタ", romaji: "kata" },
    { kana: "トク", romaji: "toku" },
	{ kana: "ツツ", romaji: "tsutsu" },
],
[
    { kana: "いえ", romaji: "ie" }, // house
    { kana: "いぬ", romaji: "inu" }, // dog
    { kana: "くるま", romaji: "kuruma" }, // car
    { kana: "さかな", romaji: "sakana" }, // fish
    { kana: "しお", romaji: "shio" }, // salt
    { kana: "とり", romaji: "tori" }, // bird
    { kana: "ひと", romaji: "hito" }, // person
    { kana: "ねこ", romaji: "neko" }, // cat
    { kana: "はな", romaji: "hana" }, // flower
    { kana: "まい", romaji: "mai" }, // dance (as in "to dance")
    { kana: "みず", romaji: "mizu" }, // water
    { kana: "やま", romaji: "yama" }, // mountain
    { kana: "よる", romaji: "yoru" }, // night
    { kana: "いち", romaji: "ichi" }, // one
    { kana: "ふね", romaji: "fune" }, // boat
    { kana: "いけ", romaji: "ike" }, // pond
    { kana: "おおきい", romaji: "ookii" }, // big
    { kana: "あさ", romaji: "asa" }, // morning
    { kana: "おかし", romaji: "okashi" }, // sweets
    { kana: "すいか", romaji: "suika" }, // watermelon
    { kana: "ゆき", romaji: "yuki" }, // snow
    { kana: "おかね", romaji: "okane" }, // money
    { kana: "まつ", romaji: "matsu" }, // pine tree
    { kana: "けん", romaji: "ken" }, // sword
    { kana: "つき", romaji: "tsuki" }, // moon
    { kana: "こえ", romaji: "koe" } // voice
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
var waveDataShuffled = []; // Array to hold shuffled wave data

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to start a new wave with shuffled asteroids
function startNewWave() {
    // Shuffle the wave data for the current wave
    waveDataShuffled = [...WAVE_DATA[currentWave]];
    shuffleArray(waveDataShuffled);
    asteroidsDisplayed = 0;
    wordIndex = 0;
    waveDisplayStartTime = millis();
    waveStartTime = millis();
}

// Setup function
function setup() {
    // Set canvas width and height to fit within the mobile screen
    let canvasWidth = window.innerWidth * 0.9; // 90% of the screen width
    let canvasHeight = window.innerHeight * 0.9; // 90% of the screen height
    createCanvas(canvasWidth, canvasHeight);

    // Initialize game elements
    planetCrust = randomColor();
    planetMantle = randomColor();
    ship = randomColor();
    document.getElementById("hiddenInput").addEventListener("keydown", function(event) {
        var keyPressed = event.key;
        console.log("Key pressed:", keyPressed);
        handleInput(keyPressed);
    });
    focus = null;
}

// Ensure the game resizes properly when the window is resized
function windowResized() {
    let canvasWidth = window.innerWidth * 0.9; // 90% of the screen width
    let canvasHeight = window.innerHeight * 0.9; // 90% of the screen height
    resizeCanvas(canvasWidth, canvasHeight);
}


// Start game function
function startGame() {
    gameStarted = true;
    startNewWave(); // Initialize the first wave
}

// Draw function
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

    console.log("Asteroids Displayed:", asteroidsDisplayed);
    console.log("Word Index:", wordIndex);
    console.log("Current Wave Length:", waveDataShuffled.length);

    if (field.length === 0) {
        if (asteroidsDisplayed >= waveDataShuffled.length) {
            currentWave++;
            if (currentWave >= WAVE_DATA.length) {
                textAlign(CENTER);
                textSize(80);
                text("Congrats! You completed the game!", width / 2, height / 2);
                noLoop();
            } else {
                startNewWave(); // Start the next wave with shuffled asteroids
            }
        }
    }

    if (millis() - waveDisplayStartTime < 3000) {
        textAlign(CENTER);
        textSize(80);
        text("WAVE " + (currentWave + 1), width / 2, height / 2);
    }
}

// Handle field function
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

    console.log("Checking Asteroid Creation:");
    console.log("millis() - lastAsteroidTime:", millis() - lastAsteroidTime);
    console.log("millis() - waveStartTime:", millis() - waveStartTime);
    console.log("Current Asteroids Displayed:", asteroidsDisplayed);
    console.log("Current Word Index:", wordIndex);
    console.log("Asteroids to be Created:", waveDataShuffled.length - asteroidsDisplayed);
	const asteroidCreationInterval = 2000;
    if (millis() - lastAsteroidTime > asteroidCreationInterval) {
        if (asteroidsDisplayed < waveDataShuffled.length && wordIndex < waveDataShuffled.length) {
            console.log("Creating New Asteroid");
            field.push(new Asteroid(random(width - 150) + 75, 0, waveDataShuffled[wordIndex], randomColor(), endGame));
            wordIndex++;
            asteroidsDisplayed++;
            lastAsteroidTime = millis();
        }

        // Check if the wave is completed
        if (asteroidsDisplayed >= waveDataShuffled.length && field.length === 0) {
            currentWave++;
            wordIndex = 0;
            asteroidsDisplayed = 0;
            waveDisplayStartTime = millis();
            if (currentWave >= WAVE_DATA.length) {
                textAlign(CENTER);
                textSize(80);
                text("Congrats! You completed the game!", width / 2, height / 2);
                noLoop();
            } else {
                startNewWave(); // Start the next wave with shuffled asteroids
            }
        }
    }

    if (millis() - waveDisplayStartTime < 3000) {
        textAlign(CENTER);
        textSize(80);
        text("WAVE " + (currentWave + 1), width / 2, height / 2);
    }
}

// Handle input function
function handleInput(event) {
    var key = event.data;
    if (!gameStarted) return;
    playPopSound();
    if (focus) {
        focus.erode(key.charCodeAt(0));
    } else {
        focus = findAsteroid(key.charCodeAt(0), field);
        if (focus) {
            focus.erode(key.charCodeAt(0));
        }
    }
}

// Draw base function
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

// Draw lazer function
function drawLazer() {
    if (!focus) { stopLazerSound(); return; }
    playLazerSound();
    stroke(randomColor());
    strokeWeight(focus.completedText.length);
    line(width / 2, height - 50, focus.position.x, focus.position.y);
    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(30);
    text(focus.completedText, 10, height - 40);
}

// Draw score function
function drawScore() {
    textAlign(RIGHT);
    noStroke();
    textSize(30);
    fill(255);
    text(score, 50, height / 2);
}

function randomColor() {
    // Generate a color with high lightness to ensure it is light
    return color(random(128, 255), random(128, 255), random(128, 255)); // RGB values between 128 and 255 for lighter colors
}



function endGame() {
    noLoop();
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(19);
    text("Game Over! You reached wave " + currentWave + " with a score of " + score, width / 2, height / 2);
    document.getElementById('playAgainButton').style.display = 'block';
    document.getElementById('quitButton').style.display = 'block';
    Android.onGameEnded(currentWave, score);
}

function quitGame() {
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('quitButton').style.display = 'none';
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(19);
    text("Thank you for playing!", width / 2, height / 2 + 40);
}

var popSound = document.getElementById("popSound");

function playPopSound() {
    popSound.currentTime = 0;
    popSound.play();
}

var lazerSound = document.getElementById("lazerSound");

function playLazerSound() {
    lazerSound.currentTime = 0;
    lazerSound.play();
}

function stopLazerSound() {
    lazerSound.pause();
    lazerSound.currentTime = 0;
}
