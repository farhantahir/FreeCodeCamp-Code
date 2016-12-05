/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param  str
 * @description Caesars Cipher, freecodecamp basic algorithm challenge
 */
function rot13(str) { 
  var newStr = "";
  for(var i = 0; i < str.length; i++){
    var newCharacter  = str[i];
    var charCode = str.charCodeAt(i);  
    if(charCode >=65 && charCode <=90 ) {
      newCharacter =  (charCode + 13 > 90) ? String.fromCharCode(charCode - 13) :  String.fromCharCode(charCode + 13);
    }    
    newStr +=newCharacter;
  }  
  return newStr;
}