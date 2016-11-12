/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param arr
 * @description Return Largest Numbers in Arrays, freecodecamp basic algorithm challenge
 */
function largestOfFour(arr) {
  var largestNumbers = [];
  var largestNum = 0; 
  for (i = 0; i < arr.length; i++) {
  	
  	largestNum = arr[i].reduce(function (prevNumber, currentNumber){
  		return (currentNumber > prevNumber) ? currentNumber : prevNumber;
  	},0);

  	largestNumbers.push(largestNum);

  }
  return largestNumbers;
}