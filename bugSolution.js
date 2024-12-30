```javascript
function myFunction(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number) 
  if(isNaN(a) || isNaN(b)) {
    return 'Invalid input: Please provide numbers.';
  }

  return a + b; 
}

console.log(myFunction(5, '5')); // Expected output: 10
console.log(myFunction('abc',5)); //Expected output: Invalid input: Please provide numbers.
console.log(myFunction(5, undefined)); //Expected output: Invalid input: Please provide numbers.
```