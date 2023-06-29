// find duplicate and same value in two array.
var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];


//An Arrow function for finding the duplicateWords
const duplicateWords = (WordList,Remove) => {

    //taking an empty array as duplicates
    let duplicates = [];

    //first loop will iterate the WrodList Array till its length 
    for(let i = 0; i<WordList.length; i++){

        //second loop will iterate the Remove Array till its length 
        for(let j = 0; j < Remove.length; j++){

            //here we are comparing the element of the WordList array with Remove Array
            if(WordList[i] == Remove[j]){

                //if above condition is true then we will push the element to the duplicates array
                duplicates.push(Remove[j])
            }
        }
    }

    // returning the array which show the duplicates values
    return duplicates;
}

console.log(duplicateWords(fullWordList,wordsToRemove));





// Second Arrow function for finding duplicate in two array
const findDuplicate = (WordList,Remove) => {

    //taking an array as duplicate
    const duplicate = [];

    //for loop for iterating the WordList Array to its length
    for(let i =0; i < WordList.length; i++){

        //here we are finding whether the Remove array includes the element of WordList Array
        if(Remove.includes(WordList[i])){

            //if above condition is true then we push the element of WordList to the duplicate array
            duplicate.push(WordList[i])
        }
    }
    
    // returning the duplicate array which contain the duplicate values
    return duplicate;
}

console.log(findDuplicate(fullWordList,wordsToRemove));



