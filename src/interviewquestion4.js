const x = [1,3,6];
const y = [2,4];
// It uses basically javascript cohersion concept
// Internally it uses [].toString method and concat the two arrays 
// '1' + '2' = '12'
console.log(x+y);