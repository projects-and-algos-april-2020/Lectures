## FUNDAMENTALS
they are characters, numbers
**they are immutable**

var str = "hello there";
str += " Cory" // a shallow copy of str ("hello there") is created, then re-assigned to the original variable name
console.log(str) => "Hello there Cory"

var str = "hello there";
str[2] = "E" // CANNOT DO THIS!!

## BUILT-IN METHODS
split() - takes a string and returns an array of characters
toLower() - changes characters to lowercase
toUpper() - changes characters to uppercase

## REVERSE STRING
``` js
function reverse(str) {
  // we can't work in place
  var temp = "";
  for (var i = arr.length; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
}
```