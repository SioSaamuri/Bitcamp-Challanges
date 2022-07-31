function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

let bin = dec2bin(123456789);
bin = bin.split("");
let numArr = bin.map(Number);

let sum = numArr.reduce((acc, cur) => acc + cur);

console.log(sum);
