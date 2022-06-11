let dictionary = [["lots", "1"], ["of", "2"], ["words", "3"], ["from", "4"], 
["vocabulary", "5"], ["picked", "6"], ["by", "7"], ["me", "8"]]
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function pickWord () {
    let ind1 = Math.floor(Math.random() * 7) ;
    return dictionary[ind1][0]
}
let pickedWord = pickWord();
pickWord();

console.log(pickedWord);

/**
 * create divs in base of the number of letters with their respective letters in them.
 */
 let boxes = '';
 for (let i = 0; i < pickedWord.length; i++) {
     boxes += `
     <div class="letters ${i}">
     <h2>${pickedWord[i]}</h2>
     </div>
     `;
   
 }
 console.log(boxes);
document.getElementById("game-area").innerHTML = boxes;


// Function show the letter in its position if correct, change the image if wrong
function keyPressed(event) {
    for (i = 0; i < pickedWord.length; i++) 
    if (event.key === pickedWord[i]) { 
        let letter = document.getElementsByTagName("h2")[i];
        letter.style.visibility = "visible";
    } else {
        incrementWrongAnswer()
    }
}
function incrementWrongAnswer() {
    console.log("no")
}

   
