const nums = [2,3,4,5,6,7,8,9];
const part = nums.slice(2,5);

const removed = nums.splice(2,5,11,12,13,14,15);
const join = nums.join(" ")
// console.log(removed);
console.log(join);