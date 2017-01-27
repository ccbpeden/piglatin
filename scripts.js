var trigraphs = ['squ','str','str','thr','spr','sph','shr','scr','sch']

var digraphs = ['bl','br','ch','cl','cr','dr','fl','fr','gl','gr','pl','pr','sc','sh','sk','sl','sm','sn','sp','st','sw','th','tr','tw','wh','wr','qu']

var vowels = ["a", "e", "i", "o", "u", "y"]

var consonants = ["b","c","d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]

var firstChar

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


var vowelTest = function(input){
  firstChar = input.slice(0,1);
  console.log("firstChar is " + firstChar)
  for(var i = 0; i < vowels.length; i++)
    if (vowels[i] == firstChar)
    {
    return firstChar;
  } else {
    return false;
  };
}

var trigraphTest = function(input){
  firstChar = input.slice(0,3);
  console.log("first3 characters are " + firstChar)
  for(var i = 0; i < trigraphs.length; i++)
    if (trigraphs[i] == firstChar)
    {
    return firstChar;
  } else
  {
    return false;
  };
}

var digraphTest = function(input){
  firstChar = input.slice(0,2);
  console.log("first2 characters are " + firstChar)
  for(var i = 0; i < digraphs.length; i++)
    if (digraphs[i] == firstChar)
    {
    return firstChar;
  } else {
    return false;
  };
}

var compileTests = function(input){
  for(i=0;i<input.length;i++){
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
  };
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
//      console.log('splitStrings set to ' + splitStrings);
    //  var finalPunct = punctTest(splitStrings);
    //   var result = vowelTest(splitStrings);
    //   var result = trigraphTest(splitStrings);
    //   var result = digraphTest(splitStrings);
      // console.log(result);
      // $("#result").text(result);
    } else alert('please enter text');
  });
});
