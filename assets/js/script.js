let dictionary = [
  
  '{words: "absurd", definition: " Extremely unreasonable, incongruous, or inappropriate. Impossible to take seriously."}', 
  '{words: "abyss", definition: "A very deep or unfathomable gorge or chasm. Anything that appears to be endless or immeasurably deep."}',
  '{words: "awkward", definition: "Odd, clumsy; marked by or causing embarrassment or discomfort."}', 
  '{words: "axiom", definition: "self-evident truth; universally accepted principle or rule."}', 
  '{words: "beekeeper", definition: "A person who maintains hives and keeps bees, especially for the production of honey."}', 
  '{words: "blizzard", definition: "A large snowstorm accompanied by strong winds and greatly reduced visibility caused by blowing snow. (Figuratively) A large number of similar things, a superabundance."}', 
  '{words: "buffoon", definition: "One who acts in a silly or ridiculous fashion; a clown or fool."}', 
  '{words: "buzzing", definition: " To make a low droning or vibrating sound like that of a bee."}', , 
  '{words: "cockiness", definition: "Overconfidence, vanity, arrogance, egotism, presumptuousness."}',  
  '{words: "crypt", definition: "An underground vault or chamber, especially one beneath a church that is used as a burial place."}', 
  '{words: "cycle", definition: "An interval of space or time in which one set of events or phenomena is completed. A complete rotation of anything."}', 
  '{words: "disavow", definition: "To disclaim knowledge of, responsibility for, or association with."}', 
  '{words: "dwarves", definition: "Members of a race of beings from (especially Scandinavian and other Germanic) folklore, usually depicted as having some sort of supernatural powers and being skilled in crafting and metalworking, often as short with long beards, and sometimes as clashing with elves."}', 
  '{words: "embezzle", definition: "To steal or misappropriate money that one has been trusted with, especially to steal money from the organisation for which one works."}',
  '{words: "euonymous", definition: "Appropriately or suitably named."}', 
  '{words: "exodus", definition: "A sudden departure of a large number of people."}', 
  '{words: "fixable", definition: "Capable of being fixed, repairable."}', 
  '{words: "fjord", definition: "A long, narrow, deep inlet of the sea between steep slopes, especially one shaped by glacial action."}', 
  '{words: "flop", definition: "To fall heavily due to lack of energy."}', 
  '{words: "fluffiness", definition: "The characteristic or quality of being fluffy."}',
  '{words: "frazzled", definition: "frayed at the edges. Stressed and exhausted either physically or emotionally."}', 
  '{words: "funny", definition: "Amusing; humorous; comical. Strange or unusual, often implying unpleasant."}', 
  '{words: "gabby", definition: "Inclined to talk too much, especially about trivia."}', 
  '{words: "galaxy", definition: " Any of the collections of many millions or billions of stars, galactic dust, black holes, etc. existing as independent and coherent systems, of which there are billions in the known universe."}', 
  '{words: "galvanized", definition: "Of metal, coated with zinc as a form of protection against rust. Having been subjected to galvanism; electrified."}', 
  '{words: "glowworm", definition: "The larva or wingless grub-like female of a beetle from the families Phengodidae or Lampyridae that gives out a green light from its abdomen."}', 
  '{words: "glyph", definition: "A figure carved in relief or incised, especially representing a sound, word, or idea."}',  
  '{words: "grogginess", definition: "The characteristic of being slowed or weakened, as by drink, sleepiness, etc."}', 
  '{words: "haphazard", definition: "Random; chaotic; incomplete; not thorough, constant, or consistent. "}',
  '{words: "ivory", definition: " The hard white form of dentin which forms the tusks of elephants, walruses and other animals."}', 
  '{words: "ivy", definition: "Any of several woody, climbing or trailing evergreen plants of the genus Hedera."}',
  '{words: "jawbreaker", definition: "A large, extremely hard, boiled candy, typically spherical. A long, hard-to-pronounce word."}', 
  '{words: "jaywalker", definition: "A person who violates pedestrian traffic regulations by crossing a street away from a designated crossing or who walks on the part of the street intended for vehicles instead of the part designated for pedestrians."}',
  '{words: "jinx", definition: "A hex; an evil spell. A person or thing supposed to bring bad luck."}', 
  '{words: "jiujitsu", definition: "Japanese martial art that utilizes a large variety of techniques in defense against an opponent."}',
  '{words: "jovial", definition: "Cheerful and good-humoured; jolly, merry."}', 
  '{words: "jukebox", definition: "A coin-operated machine that plays recorded music; it has push-buttons to make selections."}', 
  '{words: "kazoo", definition: "A simple musical instrument consisting of a pipe with a hole in it, producing a buzzing sound when the player hums into it."}', 
  '{words: "keyhole", definition: "The hole in a lock where the key is inserted and turns."}',
  '{words: "lucky", definition:" Favoured by luck; fortunate; having good success or good fortune."}',
  '{words: "luxury", definition: "Something that is pleasant but not necessary in life."}',
  '{words: "mystify", definition: "To thoroughly confuse, befuddle, or bewilder."}',
  '{words: "naphtha", definition: "Any of a wide variety of aliphatic or aromatic liquid hydrocarbon mixtures distilled from petroleum or coal tar, especially as used in solvents or petrol."}',
  '{words: "nymph", definition: "In Greek and Roman mythology, any female nature spirit associated with water, forests, grotto, wind, etc."}',
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
