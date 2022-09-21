/*3.2

Complete the code in the function, so that it will return the length
of the longest name given in the array.
For example, with these name, the log in the end should print '8'.


const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
  //your code here
}

console.log(longestName(names));

*/



const names = ["Lily", "Aurelius", "Peter"];
var longest;


function longestName(names) {
    let i = 0;

    while (i < names.length) {
        console.log(names[i]);
        i++;
    }
        console.log(names.length)

}

console.log(longestName(names));

