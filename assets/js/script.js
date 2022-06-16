let dictionary = [
  ["lots", "1"],
  ["of", "2"],
  ["words", "3"],
  ["from", "4"],
  ["vocabulary", "5"],
  ["picked", "6"],
  ["by", "7"],
  ["me", "8"]
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