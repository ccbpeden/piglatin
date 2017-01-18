var trigraph = ['que','squ','str','str','thr','spr','sph','shr','scr','sch']

var digraph = ['bl','br','ch','cl','cr','dr','fl','fr','gl','gr','pl','pr','sc','sh','sk','sl','sm','sn','sp','st','sw','th','tr','tw','wh','wr']

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

var trigraphTest = function(punctTest){

};

var digraphTest = function(punctTest){

}

var vowelTest = function(punctTest){

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
      console.log(finalPunct);
      $("#result").text(result);
    } else alert('please enter text');
  });
});
