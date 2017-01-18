var testVowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U"]

// var filterFunction = function() {
//   return value === testVowels[index];
// }

var stringSplitter = function(inputString) {
  return inputString.split("");
}


// var isEqualto = function(currentVowel){
  // return value === currentVowel;
// }

var vowelCounter = function(splitStrings) {
 var currentLetters = splitStrings.map(function(splitString){
   console.log("splitString is " + splitString);
    for(var index = 0; index < testVowels.length; index += 1) {
      console.log("testVowels at " + testVowels[index]);
      var currentVowel = testVowels[index];
      if (splitString === currentVowel )
      return splitString;
    };
  });
  currentLetters = currentLetters.filter(function(currentLetter){
    return currentLetter;
  });
    console.log("currentLetters is " + currentLetters);
  return currentLetters.length;
};


$(document).ready(function() {
  $("form#vowelFinder").submit(function(event) {
    event.preventDefault();
    var inputString = ($("input#inputString").val());
    var splitStrings = stringSplitter(inputString);
    console.log("splitStrings set to " + splitStrings);
    var vowelCount = vowelCounter(splitStrings);
    console.log("vowelCount set to " + vowelCount)
    $("#result").text(vowelCount);
  });
});
