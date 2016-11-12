/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param arr
 * @description Repeat a string repeat a string, freecodecamp basic algorithm challenge
 */
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatedStr= "";
  for(i=num; i>0; i--) {
    repeatedStr += str;
  }
  
  return repeatedStr;
}