let dictionary = [["lots", "1"], ["of", "2"], ["words", "3"], ["from", "4"], 
["vocabulary", "5"], ["picked", "6"], ["by", "7"], ["me", "8"]]
/**
 * The first game function, called when the script is first loaded
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
 * Create divs in base of the number of letters with their respective letters in them.
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

/**
 * This function shows the letter in its position if correct 
 * and call change the function incrementWrongAnswer if wrong
 */
 function keyPressed(event) {
    if (pickedWord.includes(event.key)) { 
      console.log("true");
      for (i = 0; i < pickedWord.length; i++) {   
        if (event.key === pickedWord[i]) { 
        letters[i].style.visibility = "visible";
        letterContainer[i].style.backgroundColor = "yellow"
        }
      } 
    } else {
     incrementWrongAnswer()
      }
  };


    // This function change the image every time the answer is wrong
let doomed = document.getElementById("theman");
var n = 0;
function incrementWrongAnswer() {
    
    if (n < 7) {
        n++;
        doomed.style.backgroundImage = `url(assets/images/img${n}.png)`;
        if (n === 6){
         doomed.style.backgroundColor = "red";
         console.log("wrong");
         }
  
    console.log(n);   
    }
};

   // This function tells the user when the game is won
   function victory(event) {
    let results = [];
      for (i = 0; i < letters.length; i++) {
          
          if (letterContainer[i].style.backgroundColor === "yellow"){
              results.push("true")
          } else { 
              results.push("false")
          }
  
       console.log(results)
              
      if (results.length === letters.length && results[i] === "true") {
          console.log("ok")
          }
        }
      };
