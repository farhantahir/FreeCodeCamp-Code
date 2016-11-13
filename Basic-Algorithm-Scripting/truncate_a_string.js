/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  str
 * @param  num [description]
 * @description Truncate a string, freecodecamp basic algorithm challenge
 */
function truncateString(str, num) {
  if(num<str.length){
    return str.slice(0, (num <= 3 ? num : num-3) ) + "...";
  }
  return str;
}