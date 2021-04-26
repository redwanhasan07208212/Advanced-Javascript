const students = [
{ID:87, Name: 'Redwan Hasan'},
{ID:89, Name: 'Toslima'},
{ID:90, Name: 'Kolima'},
{ID:99, Name: 'Sabana'}
];

// const result = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const read = element.Name;  
//     result.push(read);
// }
const findName = students.map(x=> x.Name);
const findId = students.map(x=> x.ID);
console.log(findId);
console.log(findName);