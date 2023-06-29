let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

// in first line obj1 is initialized with property "greeting" set to "hello"
//in second line obj2 is assigned with the reference of the obj1
//in third line obj1 property "greeting" is set to "bye"
//In fourth line obj1 will print  bye
//In fifth line obj2 will print  bye
// because javascript objects are assigned by reference
// when obj2 assigned obj1 the changes will reflect in both 







