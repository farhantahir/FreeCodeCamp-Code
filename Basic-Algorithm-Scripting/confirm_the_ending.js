/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param arr
 * @description Confirm the Endin, freecodecamp basic algorithm challenge
 */
function confirmEnding(str, target) {
  
  return str.substr( -(target.length) ) === target;
  
}