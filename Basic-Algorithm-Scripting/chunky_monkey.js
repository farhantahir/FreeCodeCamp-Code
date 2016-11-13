/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  arr
 * @param  size
 * @description Chunky Monkey, freecodecamp basic algorithm challenge
 */
function chunkArrayInGroups(arr, size) {
  var arrayChunks = [];
  var i =0;
  while (i < arr.length) {
    var chunk = arr.slice(i, i + size);
    arrayChunks.push(chunk);
    i += size;
  }
  return arrayChunks;
}