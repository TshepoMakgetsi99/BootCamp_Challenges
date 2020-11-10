
    // Task 10
    // Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.
  function get(string3, string4) {
    
    let string3ToArray = Array.from(string3);
    let string4ToArray = Array.from(string4);

    let vowels = string4ToArray.filter(value => {
    return string3ToArray.indexOf(value) != -1;
    });

    console.log(`vowels: ${vowels}`);
    }


    get('TshepoEnestinahMakgetsi', 'aeiouAEIOU');

