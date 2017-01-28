var trigraphs = ['squ','str','str','thr','spr','sph','shr','scr','sch']

var digraphs = ['bl','br','ch','cl','cr','dr','fl','fr','gl','gr','pl','pr','sc','sh','sk','sl','sm','sn','sp','st','sw','th','tr','tw','wh','wr','qu']

var vowels = ["a", "e", "i", "o", "u", "y"]

var consonants = ["b","c","d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]

var firstChar;
var punct;


var stringSplitter = function(inputString) {
  return inputString.split(" ");
}

var punctTest = function(inputString){
  var isPunct = inputString.slice(-1);
  if (isPunct.match(/[a-z]/i)) {
    return inputString;
    console.log("is a letter");
  } else {
    console.log("not a letter");
    inputString = inputString.slice(0,-1);
    console.log(inputString);
    punct = isPunct;
    return inputString;
  };
};


var vowelTest = function(inputString){
  firstChar = inputString.slice(0,1);
  console.log("firstChar is " + firstChar)
  for(var i = 0; i < vowels.length; i++){
    if (vowels[i] === firstChar)
    {
    return firstChar;
    };
  } return false;
}

var trigraphTest = function(inputString){
  firstChar = inputString.slice(0,3);
  console.log("first3 characters are " + firstChar)
  for(var i = 0; i < trigraphs.length; i++){
    if (trigraphs[i] === firstChar)
     {
    return firstChar;
    };
  } return false;
}


var digraphTest = function(inputString){
  firstChar = inputString.slice(0,2);
  console.log("first2 characters are " + firstChar)
  for(var i = 0; i < digraphs.length; i++){
    if (digraphs[i] === firstChar)
    {
    return firstChar;
    };
  } return false;
}


var compileTests = function(input){
  for(i=0;i<input.length;i++){
    punct = null;
    input[i] = punctTest(input[i]);
    console.log(input[i]);
    console.log(punct);
    if ((trigraphTest(input[i])===false)){
      console.log("trigraph false");
      if((digraphTest(input[i]))===false){
        console.log("digraph false");
        if((vowelTest(input[i]))===false){
          console.log("vowel false");
          firstChar = input[i].slice(0,1);
          console.log(firstChar);
          input[i] = input[i].slice(1);
          console.log(input);
          input[i] = input[i] + firstChar + "ay";
          console.log(input)
        } else {
          console.log(input);
          input[i] = input[i] + "way";
          console.log(input);
        };
      } else {
        firstChar = input[i].slice(0,2);
        input[i] = input[i].slice(2);
        input[i] = input[i] + firstChar + "ay";
      };
    } else {
      firstChar = input[i].slice(0,3);
      input[i] = input[i].slice(3);
      input[i] = input[i] + firstChar + "ay";
    };
    console.log("now for punctuation")
    if (punct){
    console.log("punct is a thing")
      input[i] = input[i] + punct;
    };
  };
  var outputString = input.join(' ');
  return outputString;
}
//stringSplitter, punctTest, if trigraph yes { final logic} else if digraph yes { final logic} else if consonant yes {final logic} else if vowel yes {vowelfinallogic} else errorcondition.



$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();
    var inputString = ($("input#inputString").val());
    if (inputString){
//      console.log('inputString set to ' + inputString);
     var splitStrings = stringSplitter(inputString);
     var result = compileTests(splitStrings);
     console.log(result);
//      console.log('splitStrings set to ' + splitStrings);
        //  var finalPunct = punctTest(inputString);
    //   var result = vowelTest(splitStrings);
    //   var result = trigraphTest(splitStrings);
    //   var result = digraphTest(splitStrings);
      // console.log(result);
      $("#result").text(result);
    } else alert('please enter text');
  });
});
