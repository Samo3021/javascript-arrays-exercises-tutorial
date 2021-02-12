var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let myArray = []
for (let i = 0; i < mix.length; i++) {
    let types = typeof(mix[i]);
    myArray.push(types);
    
}
console.log(myArray);