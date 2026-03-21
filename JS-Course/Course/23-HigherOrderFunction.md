# Higher Order Functions — JavaScript Notes

---

## What is a Higher Order Function?

> A function that **accepts functions as parameters** and/or **returns a function**.

---

## map()

Creates a **new array** populated with the results of calling a provided function on every element.

```
Syntax: map(callBackFunction(Element, Index, Array) { }, thisArg)
```

| Parameter | Required | Description |
|-----------|----------|-------------|
| Element   | ✅ Yes   | Current element being processed |
| Index     | ❌ No    | Index of current element |
| Array     | ❌ No    | The current array |

> **Note:** Map returns a new array. If you want to work on the same array, don't use map.

### Examples

```js
let myNums = [1, 2, 3, 4, 5, 6];

// Ex1 — no return => undefined
let addSelf1 = myNums.map(function(element, index, arr) {
  console.log(`Element(${index}): ${element}`);
}); // [undefined, undefined, ...]

// Ex2 — with return
let addSelf2 = myNums.map(function(element) {
  return element + element;
}); // [2, 4, 6, 8, 10, 12]

// Ex3 — arrow function
let addSelf3 = myNums.map((element) => element + element);

// Ex4 — named function
function addition(element) {
  return element + element;
}
let addSelf4 = myNums.map(addition);
```

### Practice

```js
// Swap Cases
let sw = "elZERo"
  .split("")
  .map((el) => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase())
  .join("");

// Invert Numbers
let inv = [1, -10, -20, 15, 100, -30].map((el) => -el);

// Ignore Numbers
let ign = "Elz123er4o"
  .split("")
  .map((el) => (isNaN(parseInt(el)) ? el : ""))
  .join("");
```

---

## filter()

Creates a **new array** with all elements that **pass the test** implemented by the provided function.

```
Syntax: filter(callBackFunction(Element, Index, Array) { }, thisArg)
```

### Examples

```js
// Get friends starting with "A"
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filtered = friends.filter((ele) => ele.startsWith("A"));

// Get even numbers only
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter((ele) => ele % 2 === 0);

// Filter words <= 4 characters
let smallWords = "I Love Foood Code Too Playing Much"
  .split(" ")
  .filter((ele) => ele.length <= 4)
  .join(" ");

// Filter strings + multiply (chaining)
let mix = "A13BS2ZX";
let result = mix
  .split("")
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => ele * ele)
  .join("");
```

---

## reduce()

Executes a reducer function on each element, resulting in a **single output value**.

```
Syntax: reduce(callBackFunc(Accumulator, CurrentVal, Index, Array) { }, initialValue)
```

| Parameter   | Description |
|-------------|-------------|
| Accumulator | Accumulated value from previous call |
| CurrentVal  | Current element being processed |
| Index       | Starts at 0 if initialValue provided, otherwise 1 |
| Array       | The current array |

### Examples

```js
let nums = [10, 20, 15, 30];

// Sum all numbers
let total = nums.reduce((acc, current) => acc + current, 0); // 75

// Longest word
let theBiggest = ["Bla", "Propaganda", "Other", "Battery", "Propaganda_Two"];
let longest = theBiggest.reduce((acc, current) =>
  acc.length > current.length ? acc : current
);

// Remove characters + reduce
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
  .filter((ele) => ele !== "@")
  .reduce((acc, current) => `${acc}${current}`);
```

---

## forEach()

Executes a provided function **once for each array element**.

```
Syntax: forEach(callBackFunction(Element, Index, Array) { }, thisArg)
```

> **Notes:**
> - Does **not** return anything → `undefined`
> - `break` will **not** break the loop

### Example — Tab System

```js
let allList = document.querySelectorAll("ul li");
let allDiv  = document.querySelectorAll(".content div");

allList.forEach(function(ele) {
  ele.onclick = function() {
    // Remove active from all
    allList.forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active");

    // Hide all divs
    allDiv.forEach((ele) => ele.style.display = "none");

    // Show target div
    document.getElementById(this.dataset.content).style.display = "block";
  };
});
```

---

## flatMap()

Returns a **new array** formed by mapping each element then **flattening the result by one level**.

> `flatMap` = `map` + `flat` in one step.

```
Syntax: flatMap(callBackFunction(Element, Index, Array) { })
```

> **Notes:**
> - Only flattens **one level** deep
> - Returns a new array

### The Problem with map() alone

```js
let data = [
  { name: "Ahmed", hobbies: ["reading", "coding"] },
  { name: "Sara",  hobbies: ["gaming", "cooking", "coding"] },
];

// map alone => array of arrays 😕
let withMap = data.map(({ hobbies }) => hobbies);
// [ ["reading","coding"], ["gaming","cooking","coding"] ]

// flatMap => flat single array ✅
let withFlatMap = data.flatMap(({ hobbies }) => hobbies);
// ["reading", "coding", "gaming", "cooking", "coding"]

// flatMap + Set => unique values only 🎯
let unique = new Set(data.flatMap(({ hobbies }) => hobbies));
// Set { "reading", "coding", "gaming", "cooking" }
```

### The 3 Steps

```
map alone    →  [ [..], [..], [..] ]        // array of arrays
flatMap      →  [ "a", "b", "a", "c" ]     // flat but has duplicates
Set(flatMap) →  { "a", "b", "c" }          // flat + unique ✅
```

---

## every()

Tests whether **all elements** in the array pass the test. Returns a **Boolean**.

```
Syntax: every(callBackFunction(Element, Index, Array) { })
```

> **Notes:**
> - Returns `true` only if **ALL** elements pass
> - Stops and returns `false` as soon as **ONE** element fails
> - Does **not** return a new array → returns Boolean

### Examples

```js
let nums = [4, 8, 12, 6];

// All > 2 ? => true ✅
let allBig    = nums.every((ele) => ele > 2);  // true

// All > 5 ? => false ❌ (4 fails)
let allBigger = nums.every((ele) => ele > 5);  // false
```

### every() vs some()

```js
nums.some((ele)  => ele > 10);  // true  — at least ONE passes (12)
nums.every((ele) => ele > 10);  // false — NOT all pass
```

| Method    | Returns `true` when...            |
|-----------|-----------------------------------|
| `every()` | **ALL** elements pass the test    |
| `some()`  | **At least one** element passes   |

---

*Higher Order Functions — JavaScript Notes*