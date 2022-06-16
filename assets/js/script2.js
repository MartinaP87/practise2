let list = document.getElementsByTagName("li");
let wordsList = [];
for (i = 0; i < list.length; i++) {
    wordsList.push(`{word: ${list(i).textContent},}`);
}
console.log(wordsList)