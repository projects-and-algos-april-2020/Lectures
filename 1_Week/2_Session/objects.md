## FUNDAMENTALS
collects items together
var obj = {"name": "Claire", "age": 31, "hasPets": false} 
         // key      value, together they are calld a key-value pair

console.log(obj.age || obj["age"]) // prints out the value of the specific key

## ADD KEYS
daysAtHome and 15

obj["daysAtHome"] = 15; // create a new key and value
object["daysAtHome"] += 1; // change value of a key

## BRACKET vs DOT NOTATION
**try this and see what happens**
``` js
var arr = ["name", "age", "hasPets"]
var name = "Greg"
console.log(obj.arr[1])
console.log(obj.name)
console.log(obj[arr[1]])
```

### CHECK THE KEY
does the key already exist?
``` js
if(!obj.name){
  console.log("I haven't been made!!");
}
```