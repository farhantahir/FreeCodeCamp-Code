/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  arr
 * @description Falsy Bouncer, freecodecamp basic algorithm challenge
 */
function bouncer(arr) {

    return arr.filter(function (item) {
        if(Boolean(item)) {
            return item;
        }
    });

}