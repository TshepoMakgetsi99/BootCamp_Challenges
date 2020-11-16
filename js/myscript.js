
  // Task 10
    // Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.
    function getVowels(word) {

        let vowels = /[aeiouAEIOU]/g;
    //global search with regular expression for vowels
        console.log(word.match(vowels));
        }
    
    
        getVowels('TshepoEnestinahMakgetsi');

