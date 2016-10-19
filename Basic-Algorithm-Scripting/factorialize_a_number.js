/**
 * @author Farhan Tahir <mf.tahir@outlook.com>
 * @param num
 * @returns {number}
 * @description Factorialize a number, freecodecamp basic algorithm challenge
 */

/*
 Return the factorial of the provided integer.

 If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

 Factorials are often represented with the shorthand notation n!

 For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

 Remember to use Read-Search-Ask if you get stuck. Write your own code.

 */
function factorialize(num) {

    var factorialResult=1;
    for(i=1; i<=num; i++) {
        factorialResult *= i;
    }

    return factorialResult;
}