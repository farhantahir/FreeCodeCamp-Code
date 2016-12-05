/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  arr
 * @description Seek and Destroy, freecodecamp basic algorithm challenge
 */
function destroyer(arr) {
  
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  return arr.filter(function(item){
     return args.indexOf(item) === -1;
  });
}