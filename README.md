# Unexpected String Concatenation in Javascript Addition

This repo demonstrates a common but sometimes unexpected behavior in JavaScript: type coercion during addition.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition. This can lead to unexpected results and bugs if not handled carefully.

## Bug
The `bug.js` file contains a simple function that adds two values.  However, if one of the inputs is a string, the output will be the string concatenation of the inputs.

## Solution
The `bugSolution.js` file shows how to avoid this issue by explicitly converting inputs to numbers using `parseInt()` or `Number()` before performing addition.