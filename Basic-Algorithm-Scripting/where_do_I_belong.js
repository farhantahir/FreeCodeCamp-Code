/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  arr
 * @param  num
 * @description Where do I belong, freecodecamp basic algorithm challenge
 */
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){
    return a -b;
  });
  return arr.indexOf(num);
}