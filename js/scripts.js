var initClusters = ["trigraph", "digraph", "consonant", "vowel"]

var clusterCounter = ["2", "1", "0", "0"]

var trigraphs = ['squ','str','str','thr','spr','sph','shr','scr','sch']

var digraphs = ['bl','br','ch','cl','cr','dr','fl','fr','gl','gr','pl','pr','sc','sh','sk','sl','sm','sn','sp','st','sw','th','tr','tw','wh','wr','qu']

var vowels = ["a", "e", "i", "o", "u", "y"]

var consonants = ["b","c","d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
var finalPunct

var stringSplitter = function(inputString) {
  return inputString.split(" ");
}

var punctTest = function(splitStrings){
  var lastChar = splitStrings[0].slice(-1);
  if (lastChar.match(/[a-z]/i)) {
    return true;
  console.log("is a letter");
  } else {
    return false;
  console.log("not a letter");
  };
};

// var trigraphTest = function(splitStrings){
  // var firstChar = splitStrings[0].slice(0,2)
 // for(var wordIndex = 0, wordIndex<splitStrings.length, WordIndex+=1){
  //  for(var clusterIndex = 0, initSound!=null, clusterIndex+=1){
    //  var initCluster = splitStrings[wordIndex].slice(0,[clusterIndex])

//      if initClust
//    }
//  }
//  var initSound = splitStrings[index]

//  var trigraph = splitStrings[0].slice(0,2)
//  console.log("trigraph is equal to " + trigraph)
// };

var digraphTest = function(punctTest){

}

var vowelTest = function(splitStrings){
  var firstChar = splitStrings[0].slice(0,1);
  for(var index = 0; index < vowels.length; index+=1)
  console.log("firstChar is " + firstChar)
  if (firstChar === vowels[index]) {
    console.log("vowel match")
    splitStrings[index] = splitStrings[index] + "way";
    return splitStrings[index];
  } else {
    var firstThree = splitStrings[0].slice(0,2);
    for(var index = 0; index < trigraphs.length; index+=1)
    if (firstThree === trigraphs[index]){
      console.log("trigraph match")
      var string = trigraphs[index];
      trigraphs[index] = string.substr(3) + string.substr(0,3) + "ay";
      var newString = trigraphs[index];
      return newString;
      console.log(newString);
    };
  };
}

var consonantTest = function(punctTest){

}



//stringSplitter, punctTest, if trigraph yes { final logic} else if digraph yes { final logic} else if consonant yes {final logic} else if vowel yes {vowelfinallogic} else errorcondition.



$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var inputString = ($("input#inputString").val());
    if (inputString){
//      console.log('inputString set to ' + inputString);
      var splitStrings = stringSplitter(inputString);
//      console.log('splitStrings set to ' + splitStrings);
     finalPunct = punctTest(splitStrings);
      var result = vowelTest(splitStrings);
      console.log(result);
      $("#result").text(result);
    } else alert('please enter text');
  });
});
