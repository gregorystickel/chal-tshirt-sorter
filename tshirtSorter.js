// Write your solution below:
let string = "slsmmsllsmsmlmsls";

function sorter(str) {
  console.log(string);
  let newArr = str.split("");
  let result = newArr.sort().reverse().join("");
  return result;
}

console.log(sorter(string));
