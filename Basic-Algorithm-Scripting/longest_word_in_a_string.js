/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param str
 * @returns {*}
 * @description Find the Longest Word in a String, freecodecamp basic algorithm challenge
 */
/*
 Return the length of the longest word in the provided sentence.

 Your response should be a number.

 Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */
function findLongestWord(str) {
    var  strWords = str.split(" ");
    var longestWordLength = strWords.reduce(function(wordLength,currentWord){
        return (currentWord.length > wordLength ) ? currentWord.length : wordLength;
    },0);

    return longestWordLength;
}

