/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  arr
 * @description Mutations, freecodecamp basic algorithm challenge
 */
function mutation(arr) {
    var i = 0, firstParam = arr[0].toLowerCase(), secondParam = arr[1].toLowerCase();
    while (i < arr[1].length) {
        if(firstParam.indexOf(secondParam.charAt(i)) === -1)
            return false;
        i+=1;
    }
    return true;
}