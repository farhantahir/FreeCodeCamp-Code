/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param str
 * @returns {string}
 * @description Title Case a Sentence, freecodecamp basic algorithm challenge
 */
function titleCase(str) {
    var strWords = str.split(" ");
    var strCapitalWords = strWords.map(function(item) {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });
    return strCapitalWords.join(" ");
}
