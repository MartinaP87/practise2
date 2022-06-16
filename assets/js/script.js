let dictionary = [
  
  '{words: "absurd", definition: " Extremely unreasonable, incongruous, or inappropriate. Impossible to take seriously."}', 
  '{words: "abyss", definition:}', 
  '{words: "awkward", definition:}', 
  '{words: "axiom", definition:}', 
  '{words: "beekeeper", definition:}', 
  '{words: "blizzard", definition:}', 
  '{words: "boggle", definition:}', 
  '{words: "buffoon", definition:}', 
  '{words: "buzzing", definition:}', 
  '{words: "buzzwords", definition:}', 
  '{words: "caliph", definition:}', 
  '{words: "cobweb", definition:}', 
  '{words: "cockiness", definition:}',  
  '{words: "crypt", definition:}', 
  '{words: "cycle", definition:}', 
  '{words: "disavow", definition:}', 
  '{words: "dizzying", definition:}', 
  '{words: "dwarves", definition:}', 
  '{words: "embezzle", definition:}',
  '{words: "euouae", definition:}', 
  '{words: "exodus", definition:}', 
  '{words: "faking", definition:}', 
  '{words: "fixable", definition:}', 
  '{words: "fjord", definition:}', 
  '{words: "flopping", definition:}', 
  '{words: "fluffiness", definition:}',
  '{words: "frazzled", definition:}', 
  '{words: "frizzled", definition:}', 
  '{words: "funny", definition:}', 
  '{words: "gabby", definition:}', 
  '{words: "galaxy", definition:}', 
  '{words: "galvanize", definition:}', 
  '{words: "glowworm", definition:}', 
  '{words: "glyph", definition:}', 
  '{words: "gnostic", definition:}', 
  '{words: "grogginess", definition:}', 
  '{words: "haiku", definition:}', 
  '{words: "haphazard", definition:}',
  '{words: "iatrogenic", definition:}',
  '{words: "ivory", definition:}', 
  '{words: "ivy", definition:}',
  '{words: "jaundice", definition:}', 
  '{words: "jawbreaker", definition:}', 
  '{words: "jaywalk", definition:}',
  '{words: "jigsaw", definition:}', 
  '{words: "jinx", definition:}', 
  '{words: "jiujitsu", definition:}',
  '{words: "jovial", definition:}', 
  '{words: "jukebox", definition:}', 
  '{words: "kazoo", definition:}', 
  '{words: "keyhole", definition:}',
  '{words: "lucky", definition:}',
  '{words: "luxury", definition:}',
  '{words: "lymph", definition:}',
  '{words: "matrix", definition:}',
  '{words: "mystify", definition:}',
  '{words: "naphtha", definition:}',
  '{words: "nymph", definition:}',
'{words: "onyx", definition:}',
'{words: "pajama", definition:}',
'{words: "peekaboo", definition:}',
'{words: "phlegm", definition:}',
'{words: "psyche", definition:}',
'{words: "puppy", definition:}',
'{words: "puzzling", definition:}',
'{words: "quartz", definition:}',
'{words: "rhythm", definition:}',
'{words: "rickshaw", definition:}',
'{words: "runaway", definition:}',
'{words: "schnapps", definition:}',
'{words: "sphinx", definition:}',
'{words: "spritz", definition:}',
'{words: "strength", definition:}',
'{words: "stretch", definition:}',
'{words: "stronghold", definition:}',
'{words: "thriftless", definition:}',
'{words: "thumbscrew", definition:}',
'{words: "topaz", definition:}',
'{words: "transgress", definition:}',
'{words: "unknown", definition:}',
'{words: "unworthy", definition:}',
'{words: "vaporize", definition:}',
'{words: "vixen", definition:}',
'{words: "voodoo", definition:}',
'{words: "vortex", definition:}',
'{words: "voyeurism", definition:}',
'{words: "walkway", definition:}',
'{words: "waltz", definition:}',
'{words: "wheezy", definition:}',
'{words: "whiskey", definition:}',
'{words: "whizzing", definition:}',
'{words: "wimpy", definition:}',
'{words: "witchcraft", definition:}',
'{words: "wizard", definition:}',
'{words: "woozy", definition:}',
'{words: "wristwatch", definition:}',
'{words: "wyvern", definition:}'
]

/**
 * The first game function, called when the script is first loaded
 * and after the user's answer has been processed
 */
function pickWord() {
  let ind1 = Math.floor(Math.random() * dictionary.length);
  return dictionary[ind1];
};
let pickedWord = pickWord()[0];
let pickedWordMeaning = pickWord()[1];

pickWord();

console.log(pickedWord);
console.log(pickedWordMeaning);

/**
 * Create divs in base of the number of letters with their respective letters in them.
 */
let boxes = '';
for (let i = 0; i < pickedWord.length; i++) {
  boxes += `
     <div class="letter-container">
     <h2 class="word-letter">${pickedWord[i]}</h2>
     </div>
     `;
}
document.getElementById("boxes-area").innerHTML = boxes;

/**
 * This function shows the letter in its position if correct 
 * and call change the function incrementWrongAnswer if wrong
 */
let inputBox = document.getElementById("input-box");
var inputLettersList = [];
let manBox = document.getElementById("theman");
let letterContainer = document.getElementsByClassName("letter-container");
let letter = document.getElementsByClassName("word-letter");
let FinalMessage = document.getElementById("final-message");

document.body.addEventListener("keypress", keyPressed);

function keyPressed(event) {

  // Add key pressed in the input box. 
  inputLettersList.push(`  ${event.key}`);
  inputBox.innerHTML = `
        <h2>Letters tried:</h2>
        <h3> ${inputLettersList}</h3>
        `;

  //Check if the key pressed is included in the picked word; 
  //if it is reveal it and trigger the victory fuction otherwise start to build the hangman;
  if (pickedWord.includes(event.key)) {
    console.log("true");
    for (i = 0; i < pickedWord.length; i++) {
      if (event.key === pickedWord[i]) {
        letter[i].style.visibility = "visible";
      }
    }
    victory();
  } else {
    incrementWrongLetter();
  };
  if ( FinalMessage.innerHTML) {
    document.body.removeEventListener("keypress", keyPressed);
    console.log("bastaaaa");
  }
};

// This function change the image every time the answer is wrong 
var n = 0;

function incrementWrongLetter() {
  if (n < 7) {
    n++;
    manBox.style.backgroundImage = `url(assets/images/img${n}.png)`;
  }
  if (n === 7) {
    console.log("wrong");
    changeStyles();
    FinalMessage.innerHTML = `
        <h3>Oh nooo!</h3>
        <h3>You haven't found the word this time... but, if you learn from a loss you have not lost!</h3>
        <h3>The word was:</h3>
        <h4><strong>${pickedWord}</strong>:</h4> 
        <p><em>${pickedWordMeaning}</em></p>
        <div class="restart">
          <a href="index.html">Try Again!</a>
        </div>
        `;
  }
};

// Define when the user wins 

function victory() {
  let results = [];
  for (i = 0; i < letter.length; i++) {
    if (letter[i].style.visibility === "visible") {
      results.push("true")
    } else {
      results.push("false")
    }
    if (results.length === letter.length && results[i] === "true") {
      console.log("ok");
      manBox.style.backgroundImage = "url(assets/images/imgvic.png)";
      changeStyles();
      FinalMessage.innerHTML = `
        <h3>Congratulations!</h3>
        <h3>You found the word!</h3>
        <h4><strong>${pickedWord}</strong>:</h4> 
        <p><em>${pickedWordMeaning}</em></p>
        <div class="restart">
          <a href="index.html">Try Again!</a>
        </div>
        `;
    }
  }
};
function changeStyles() {
  manBox.style.margin = "70px 0px 0px 15%";
  inputBox.style.display = "none";
  FinalMessage.style.display = "inline";
  FinalMessage.style.backgroundImage = "url(assets/images/piece.png)";
}


let booo = document.getElementsByTagName("li");

let listadiparole = [];
for (i = 0; i < 200; i++) {

    listadiparole.push(`{words: ${booo[i].textContent}, definition:}`);
   
}
console.log(listadiparole);
