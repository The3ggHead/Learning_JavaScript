// Event handling
document.addEventListener("DOMContentLoaded",
    console.log("Hello world!")
);

// setTimeout(function () {
//     console.log("Aufruf in setTimeout!");
// }, 3000)

// console.log("Aufruf danach!");

// console.log(fetch("https://www.openthesaurus.de/synonyme/​search?q=test&format=application/json"));

// ******************* https://dictionaryapi.dev/
// fetch('https://api.dictionaryapi.dev/api/v2/entries/en/kind')
//   .then(function(response){
//     console.log(response);
//     return response.json();
//   })
//   .then(function(newresponse){
//     newword=newresponse[0].word;
//     console.log(newresponse);
//     console.log(newword);
//   })

  fetch('  https://www.dwds.de/api/wb/snippet/?q=Haus', {mode: "cors"})
  .then(function(response){
    console.log(response);
    return response.json();
  })
  .then(function(newresponse){
    //newword=newresponse[0].word;
    console.log(newresponse);
    //console.log(newword);
  })
