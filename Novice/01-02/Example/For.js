const arr = [3, 5, 7];
arr.for = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "for"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}