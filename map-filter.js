const numbers = [5,6,7,8,9,10,56,100,800]; 
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);    
// }
// console.log(output);

// const result = numbers.map(function(Element){
//     return Element*Element;
// })
// console.log(result);

// const square(element)
// {
//     return element * element;
// }
// const square = element>= element*element;
// const square = x>= x*x;
const square = numbers.map(x => x * x)
console.log(square);

const bigger = numbers.filter(x=> x>10);

const inThere = numbers.find(x=> x>10);
console.log(inThere);
console.log(bigger);

// for each and reduce,find. NEED TO LEARN