## FUNDAMENTALS
store anything in arrays (strings, objects, functions)

var arr = []; // assigning variable an empty array

arr = ["hello", "blah blah", "shenanigans", true, 42, "banana"]

array items are indexed starting at 0, NOT 1
BUT the length or count of the total # of items in an array starts at 1 , ie arr.length = 6, but the last index position stops at 5

arr.length -1 is last index position

console.log(arr[2]) // this will print the value at index position 2

**ARRAYS ARE MUTABLE**

arr[2] = "herpa derp"; // you can change the value at a specific index position to a new value

arr.length += 3; // this extends the length of an array without "pushing". Same can be done w/ shortening


## BUILT-IN METHODS

- pop() - removes last item and RETURNS it
- push(val) - adds item to array at the end
- splice(start,end) - take out a chunk of the array and return it to you
- slice(start,end) - remove items in array and return new array wthout items
- map() - ??? go check it out!
- insert() - ??? go check it out!
- join(str) - ??? go check it out!


## REVERSE ARRAY
``` js
arr = ["hello", "blah blah", "shenanigans", true, 42, "banana"]
function reverse(arr){
  // make temp arr
  var temp;
  var j = 0;
  // starting from back, replace items
  for(var i = arr.length-1; i >= 0; i--){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  // return new array
  return
}
```