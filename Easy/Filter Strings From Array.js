let filterArray = [1, 2, 3, "a", "b", 4];

filterArray = filterArray.filter((x) => typeof x !== "string");

console.log(filterArray);



// filterArray = filterArray.filter(function (num) {
//   if (typeof num !== "string") {
//     return true;
//   }
// });
