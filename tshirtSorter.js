// Write your solution below:
let string = "slsmmsllsmsmlmsls";

function sorter (str) {
    //let small = "", medium = "", large = "";
    let newArr = str.split("");
    let result = newArr.sort().reverse().join("");
    return result;
    
}

console.log(sorter(string));