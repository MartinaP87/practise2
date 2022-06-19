window.onload = function() {
  let wordsList = [
    {word: "absurd", "definition": " Extremely unreasonable, incongruous, or inappropriate. Impossible to take seriously."}, 
    {word: "abyss", definition: "A very deep or unfathomable gorge or chasm. Anything that appears to be endless or immeasurably deep."},
    {word: "awkward", definition: "Odd, clumsy; marked by or causing embarrassment or discomfort."}, 
    {word: "axiom", definition: "self-evident truth; universally accepted principle or rule."}, 
    {word: "beekeeper", definition: "A person who maintains hives and keeps bees, especially for the production of honey."}, 
    {word: "blizzard", definition: "A large snowstorm accompanied by strong winds and greatly reduced visibility caused by blowing snow. (Figuratively) A large number of similar things, a superabundance."}, 
    {word: "buffoon", definition: "One who acts in a silly or ridiculous fashion; a clown or fool."}, 
    {word: "buzzing", definition: " To make a low droning or vibrating sound like that of a bee."}, 
    {word: "cockiness", definition: "Overconfidence, vanity, arrogance, egotism, presumptuousness."},  
    {word: "crypt", definition: "An underground vault or chamber, especially one beneath a church that is used as a burial place."}, 
    {word: "cycle", definition: "An interval of space or time in which one set of events or phenomena is completed. A complete rotation of anything."}, 
    {word: "disavow", definition: "To disclaim knowledge of, responsibility for, or association with."}, 
    {word: "dwarves", definition: "Members of a race of beings from (especially Scandinavian and other Germanic) folklore, usually depicted as having some sort of supernatural powers and being skilled in crafting and metalworking, often as short with long beards, and sometimes as clashing with elves."}, 
    {word: "embezzle", definition: "To steal or misappropriate money that one has been trusted with, especially to steal money from the organisation for which one works."},
    {word: "euonymous", definition: "Appropriately or suitably named."}, 
    {word: "exodus", definition: "A sudden departure of a large number of people."}, 
    {word: "fixable", definition: "Capable of being fixed, repairable."}, 
    {word: "fjord", definition: "A long, narrow, deep inlet of the sea between steep slopes, especially one shaped by glacial action."}, 
    {word: "flop", definition: "To fall heavily due to lack of energy."}, 
    {word: "fluffiness", definition: "The characteristic or quality of being fluffy."},
    {word: "frazzled", definition: "frayed at the edges. Stressed and exhausted either physically or emotionally."}, 
    {word: "funny", definition: "Amusing; humorous; comical. Strange or unusual, often implying unpleasant."}, 
    {word: "gabby", definition: "Inclined to talk too much, especially about trivia."}, 
    {word: "galaxy", definition: " Any of the collections of many millions or billions of stars, galactic dust, black holes, etc. existing as independent and coherent systems, of which there are billions in the known universe."}, 
    {word: "galvanized", definition: "Of metal, coated with zinc as a form of protection against rust. Having been subjected to galvanism; electrified."}, 
    {word: "glowworm", definition: "The larva or wingless grub-like female of a beetle from the families Phengodidae or Lampyridae that gives out a green light from its abdomen."}, 
    {word: "glyph", definition: "A figure carved in relief or incised, especially representing a sound, word, or idea."},  
    {word: "grogginess", definition: "The characteristic of being slowed or weakened, as by drink, sleepiness, etc."}, 
    {word: "haphazard", definition: "Random; chaotic; incomplete; not thorough, constant, or consistent. "},
    {word: "ivory", definition: " The hard white form of dentin which forms the tusks of elephants, walruses and other animals."}, 
    {word: "ivy", definition: "Any of several woody, climbing or trailing evergreen plants of the genus Hedera."},
    {word: "jawbreaker", definition: "A large, extremely hard, boiled candy, typically spherical. A long, hard-to-pronounce word."}, 
    {word: "jaywalker", definition: "A person who violates pedestrian traffic regulations by crossing a street away from a designated crossing or who walks on the part of the street intended for vehicles instead of the part designated for pedestrians."},
    {word: "jinx", definition: "A hex; an evil spell. A person or thing supposed to bring bad luck."}, 
    {word: "jiujitsu", definition: "Japanese martial art that utilizes a large variety of techniques in defense against an opponent."},
    {word: "jovial", definition: "Cheerful and good-humoured; jolly, merry."}, 
    {word: "jukebox", definition: "A coin-operated machine that plays recorded music; it has push-buttons to make selections."}, 
    {word: "kazoo", definition: "A simple musical instrument consisting of a pipe with a hole in it, producing a buzzing sound when the player hums into it."}, 
    {word: "keyhole", definition: "The hole in a lock where the key is inserted and turns."},
    {word: "lucky", definition:" Favoured by luck; fortunate; having good success or good fortune."},
    {word: "luxury", definition: "Something that is pleasant but not necessary in life."},
    {word: "mystify", definition: "To thoroughly confuse, befuddle, or bewilder."},
    {word: "naphtha", definition: "Any of a wide variety of aliphatic or aromatic liquid hydrocarbon mixtures distilled from petroleum or coal tar, especially as used in solvents or petrol."},
    {word: "nymph", definition: "In Greek and Roman mythology, any female nature spirit associated with water, forests, grotto, wind, etc."},
    {word: "onyx", definition: "A banded variety of chalcedony, a cryptocrystalline form of quartz."},
    {word: "pajamas", definition: "Clothes for wearing to bed and sleeping in, usually consisting of a loose-fitting shirt and pants/trousers."},
    {word: "peekaboo", definition: "A game for amusing a small child in which one covers one\'s face, then suddenly reveals it."},
    {word: "phlegm", definition: "Viscid mucus produced by the body, later especially mucus expelled from the bronchial passages by coughing."},
    {word: "psyche", definition: "The human mind as the central force in thought, emotion, and behavior of an individual."},
    {word: "puppy", definition: "A young dog"},
    {word: "puzzling", definition: "Difficult to understand or explain; enigmatic or confusing; perplexing."},
    {word: "quartz", definition: "The most abundant mineral on the earth\'s surface, of chemical composition silicon dioxide, SiO2. It occurs in a variety of forms, both crystalline and amorphous. Found in every environment. "},
    {word: "rhythm", definition: "The variation of strong and weak elements (such as duration, accent) of sounds, notably in speech or music, over time; a beat or meter."},
    {word: "rickshaw", definition: "A two-wheeled carriage pulled along by a person."},
    {word: "runaway", definition: "A person or animal that runs away or has run away; a person, animal, or organization that escapes captivity or restrictions."},
    {word: "sphinx", definition: " A creature with the head of a person and the body of an animal (commonly a lion)."},
    {word: "strength", definition: "The quality or degree of being strong."},
    {word: "stronghold", definition: "A place built to withstand attack; a fortress."},
    {word: "thriftless", definition: "Wastefully reckless in the use of money or resources."},
    {word: "transgress", definition: "To exceed or overstep some limit or boundary."},
    {word: "unknown", definition: "Any thing, place, or situation about which nothing is known; an unknown fact or piece of information."},
    {word: "unworthy", definition: "Not worthy; lacking value or merit; worthless."},
    {word: "vaporize", definition: "To turn into vapor."},
    {word: "voodoo", definition: "Any of a group of related religious practices found chiefly in and around the Caribbean, particularly in Haiti and Louisiana."},
    {word: "vortex", definition: "A whirlwind, whirlpool, or similarly moving matter in the form of a spiral or column."},
    {word: "walkway", definition: "A clearly defined path for pedestrians."},
    {word: "wheezy", definition: "That breathe hard, and with an audible piping or whistling sound, as persons affected with asthma."},
    {word: "wimp", definition: " someone who lacks confidence or courage, is weak, ineffectual, irresolute and wishy-washy"},
    {word: "witchcraft", definition: "The practice of witches; magic, sorcery or the use of supernatural powers to influence or predict events."},
    {word: "wizard", definition: "Someone, usually male, who uses (or has skill with) magic, mystic items, and magical and mystical practices."},
    {word: "wristwatch", definition:"A watch that is worn on a strap or band fastened around the wrist"},
    {word: "wyvern", definition: "A draconian creature possessing wings, only two legs and usually a barbed tail."}
  ];
  //Declare all global variables
  let chosenObject = pickObject();
  let pickedWord = chosenObject.word;
  let pickedWordMeaning = chosenObject.definition;
  let inputBox = document.getElementById("input-box");
  let inputLettersList = [];
  let manBox = document.getElementById("theman");
  let letters = document.getElementsByClassName("word-letters");
  let finalMessageBox = document.getElementById("final-message");
  let lastWindow = document.getElementById("last-window");
  let playAgain = document.getElementById("restart");
  let n = 0;
  // Add event listener to the body
  document.body.addEventListener("keypress", keyPressed); 
  //Add event listener to button
  playAgain.addEventListener("click", restart);
  
  /**
   * Function that picks a random object from the wordsList array.
   */
  function pickObject() {
    let ind1 = Math.floor(Math.random() * wordsList.length);
    return wordsList[ind1];
  }
  /**
   * Main function: it creates divs based on how many letters are in the word of the chosen object;
   * each box has the respective letter in it.
   */
  function buildBoxes() {
    let boxes = '';
    for (let i = 0; i < pickedWord.length; i++) {
      boxes += `
       <div class="letter-container">
       <h2 class="word-letters">${pickedWord[i]}</h2>
       </div>
       `;
    }
    document.getElementById("boxes-area").innerHTML = boxes;
  }
  buildBoxes();
  /**
   * Function to check if the key pressed is included in the picked word; 
   * if it is, it reveals it and trigger the victory function,  
   * otherwise it starts to build the hangman;
   */
  function keyPressed(event) {
    // Add key pressed in the input box. 
    inputLettersList.push(`  ${event.key}`);
    inputBox.innerHTML = `
          <h2>Letters tried:</h2>
          <h3> ${inputLettersList}</h3>
          `;
    if (pickedWord.includes(event.key)) {
      for (let i = 0; i < pickedWord.length; i++) {
        if (event.key === pickedWord[i]) {
          letters[i].style.visibility = "visible";
        }
      }
      victory();
    } else {
      buildHangman();
    }
  } 
  /**
   * The function changes the image every time the answer is wrong;
   * the last image ends the game, resulting in the user's failure.
   */
  function buildHangman() {
    if (n < 7) {
      n++;
      manBox.style.backgroundImage = `url(assets/images/img${n}.png)`;
    }
    if (n === 7) {
      incrementLost();
      changeStyles();
      finalMessageBox.innerHTML = `
         <h3>Oh nooo!</h3>
         <h3>You haven't found the word this time... but, if you learn from a loss you have not lost!</h3>
         <h3>The word was:</h3>
         <h4><strong>${pickedWord}:</strong></h4>  
         <p><em>${pickedWordMeaning}</em></p>
          `;
      document.body.removeEventListener("keypress", keyPressed);
    }
  }
  
  // Function that defines when the user wins 
  function victory() {
    let results = [];
    for (let i = 0; i < letters.length; i++) {
      if (letters[i].style.visibility === "visible") {
        results.push("true");
      } else {
        results.push("false");
      }
        if (results.length === letters.length && results[i] === "true" && results.includes("false") === false) {
        incrementWon();
        changeStyles();
        manBox.style.backgroundImage = "url(assets/images/imgvic.png)";
        finalMessageBox.innerHTML = `
          <h3>Congratulations! You found the word!</h3>
          <h4><strong>${pickedWord}</strong>:</h4> 
          <p><em>${pickedWordMeaning}</em></p>
          `;
          document.body.removeEventListener("keypress", keyPressed);
      }      
    }
  }
  /**
   * Sets new styling properties when the game is over
   */
  function changeStyles() {
    manBox.style.margin = "70px 0px 0px 15%";
    inputBox.style.display = "none";
    lastWindow.style.display = "inline";
  }
  /**
   * Gets the current score of won games and increments it by 1
   */
  function incrementWon() {
    let wonScore = parseInt(document.getElementById("won").innerText);
    document.getElementById("won").innerText = ++wonScore;
  }
  /**
  * Gets the current score of lost games and increments it by 1
  */
  function incrementLost() {
    let lostScore = parseInt(document.getElementById("lost").innerText);
    document.getElementById("lost").innerText = ++lostScore;
  }
  /**
   * Restarts the game 
   * resetting the screen to the initial set up,
   * calling the buildBoxes function (in which is called the pickWord function),
   * setting new values to the global variables,
   * and adding the event listener to the body.
   */
   function restart () {
    lastWindow.style.display = "none";
    manBox.style.backgroundImage = "url(assets/images/img0.png)";
    manBox.style.margin = "2rem 0 0 0";
    inputBox.style.display = "inline";
    inputBox.innerHTML = "<h2>Letters tried:</h2>";
    let newChosenObject = pickObject();
    pickedWord = newChosenObject.word;
    pickedWordMeaning = newChosenObject.definition;
    buildBoxes();
    inputLettersList = [];
    n = 0;
    document.body.addEventListener("keypress", keyPressed);
  }
};