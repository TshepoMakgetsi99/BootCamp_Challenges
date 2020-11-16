

// Task 11
// Make a function that takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)

function find(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let common = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${common}`);
}

find('Enestinah', 'Makgetsi');

