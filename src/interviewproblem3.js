console.log(false || null || "Hello");
console.log(false && null && "Hello");
// In first line it is OR operator is used it returns first truthy value.
// In AND operator it will return first falsy value
//output:
//1.Hello
//2.false
