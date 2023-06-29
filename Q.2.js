//longest-chain-of-letters-in-word-javascript
const word = '00000111110101001111100001001'


//finding the longest chain of the character 1
const findLongestChain =(word) => {

    // taking two emplty string
    let firstChain = '';
    let secondChain = '';


    //Iterating the each character of the  words here
    for(let i = 0; i < word.length; i++){

        // assigning the each char to the firstChar fromt the word
        let firstChar = word[i];

        // comparing the value of first char whether it is 1 or not
        if(firstChar === '1'){

            // if the value is 1 then it will assign to the firstChain
            firstChain += firstChar;
        }else{

            //if the value is not 1 then here we are comparing the length of the firstChain with the secondChain
            if(firstChain.length > secondChain.length){

                // if the value of the length of the firstChain is greater than the secondChani then we will assign firstChain into secondChain
                secondChain = firstChain;
            }

            // here we are assigning the firstChain as empty string again
            firstChain = '';
        }
    }

    // returning the secondChanin as the longestChain
    return secondChain;
}

console.log(findLongestChain(word));