



function randomize(length) {
  var randomLetters = "";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou"

  for( var i=0; i < length -1; i++ )
    randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));

    randomLetters += vowels.charAt(Math.floor(Math.random() * vowels.length));
    console.log(randomLetters);
    return randomLetters;
};

function combinations(str) {
   var fn = function(active, rest, a) {
       if (!active && !rest)
           return;
       if (!rest) {
           a.push(active);
       } else {
           fn(active + rest[0], rest.slice(1), a);
           fn(active, rest.slice(1), a);
       }
       return a;
   }
   return fn("", str, []);
}

function permute(input) {
    var permArr = [];
    var usedChars = [];
    return (function main() {
        for (var i = 0; i < input.length; i++) {
            var ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            main();
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        var result = [];
        permArr.forEach(function (p) {
          result.push(p.join(''));
        });

        return result;

    })();


}



function possibleWords(combos) {
  var found = [];

  combos.forEach(function (combo) {
    var permutations = permute(combo.split(''));

    permutations.forEach(function (perm) {
      if (Word_List.isInList(perm) && perm.length >= 3){
        found.push(perm);
      }
    });
  });
    console.log(found);
    return found;
}



$(document).ready(function() {
  var random = randomize(5);
  var combos = combinations(random);
  var found = possibleWords(combos);
  if (found.length >= 5) {
    found.forEach(function (word) {
      $("#words").append("<li>" + word + "</li>");
    });
  }
  $("#random").text(random);
  $("form").submit(function(event) {
  var userWord = $("#user").val();
  this.reset();
  event.preventDefault();
  console.log(userWord)

});


});








// function checkWords(words) {
//   var foundWords = [];
//   words.forEach(function(word) {
//     if (Word_List.isInList(word)) {
//       foundWords.push(word);
//     }
//   });
//   return foundWords;
// };
// --------------------------------------------------
