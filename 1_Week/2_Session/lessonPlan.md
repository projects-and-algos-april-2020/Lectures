# Week One: Wednesday

## Arrays/Strings/Objects
- **Arrays Review**
    - Fundamentals
    - Built-in Methods
    - Reverse Array

- **Strings Review**
    - Fundamentals
    - Built-in Methods
    - Reverse String

- **Objects Review**
    - Fundamentals
    - Add keys
    - Check if has key
    - Problem Solver: "map"

- Challenges
```js
function characterCount(word) {
    // return object with the characters as Keys
    var obj = {};
    // and the number of occurrences of that character as values
    // eg.
    // "apple" =>
    // {"a": 1, "p": 2, "l": 1, "e": 1}
    for(var i = 0; i < word.length; i++){
        if(obj[word[i]]){
            obj[word[i]]++;
        } else {
            obj[word[i]] = 1;
        }
    }
    return obj;
}
```
```js
var arr = [1,1,"sheep", "wolf", "apple", "sheep"];
function removeDuplicates(arr) {
    // remove duplicate values from an array
    // should we work in place or create a new array?
    // let's create an object map to count duplicates
    var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      arr.splice(i, 1);
      i--;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return arr;
}
```