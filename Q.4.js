console.log("7" > 7)
console.log("2">"21")
console.log("KL">"S")

/*
First line of code will return false because in javascript 
when comparing the different types, javascripts convert one of the
values to match the other type.
In this case "7" will be converted to number and 7 is not greater than 7
*/


/*
Second line of code will return false because javaScript performs
 a character-by-character comparison based on their unicode values.
*/

/*
Third line of code will return false because as in second line we have seen
the javascript compare the character on their unicode value.
*/