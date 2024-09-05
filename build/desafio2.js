"use strict";
function haveLetterA(str) {
    let count = 0;
    for (const letter of str) {
        if (letter === 'a' || letter === 'A') {
            count++;
        }
        ;
    }
    return `Na string ${str} a letra 'a' aparece ${count}x.`;
}
;
const str = 'BananA';
console.log(haveLetterA(str));
