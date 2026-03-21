

```js
(...myArray)
```

اسمها **spread** لأنّها “بتفرد” عناصر الـ array.

### شو بتعمل؟

بتحوّل الـ array لعناصر منفصلة.

### مثال بسيط:

```js
let myArray = [1, 2, 3];

console.log(...myArray);
// 1 2 3
```

بدل ما يطبع `[1,2,3]`، بطبع كل عنصر لحاله.

### استخدامات شائعة 👇

**1️⃣ نسخ Array**

```js
let copy = [...myArray];
```

**2️⃣ دمج Arrays**

```js
let a = [1, 2];
let b = [3, 4];

let all = [...a, ...b];
// [1,2,3,4]
```

**3️⃣ مع functions**

```js
function sum(a, b, c) {
  return a + b + c;
}

sum(...myArray); // 6
```

### 🟢 الفرق بينها وبين Rest

* **Spread** → تفرد القيم
* **Rest** → تجمع القيم

```js
function test(...args) {
  console.log(args);
}
```

إذا بدك مقارنة سريعة أو مثال يخلّط Spread + Destructuring قولي 😉
Vآه 👍 هيدي **Spread Operator** بالجافاسكريبت.

```js
(...myArray)
```

اسمها **spread** لأنّها “بتفرد” عناصر الـ array.

### شو بتعمل؟

بتحوّل الـ array لعناصر منفصلة.

### مثال بسيط:

```js
let myArray = [1, 2, 3];

console.log(...myArray);
// 1 2 3
```

بدل ما يطبع `[1,2,3]`، بطبع كل عنصر لحاله.

### استخدامات شائعة 👇

**1️⃣ نسخ Array**

```js
let copy = [...myArray];
```

**2️⃣ دمج Arrays**

```js
let a = [1, 2];
let b = [3, 4];

let all = [...a, ...b];
// [1,2,3,4]
```

**3️⃣ مع functions**

```js
function sum(a, b, c) {
  return a + b + c;
}

sum(...myArray); // 6
```

### الفرق بينها وبين Rest

* **Spread** → تفرد القيم
* **Rest** → تجمع القيم

```js
function test(...args) {
  console.log(args);
}
```
إي نعم 👍 **100% صح**
هيدي **Rest Parameter**.

```js
function test(...args) {
  console.log(args);
}
```

### ليش اسمها Rest؟

لأنها بتجمع **باقي (rest)** القيم يلي بينبعتوا للـ function وتحطّن **بـ array واحد**.

### مثال:

```js
test(1, 2, 3, 4);
```

النتيجة:

```js
[1, 2, 3, 4]
```

### قارنها مع Spread بسرعة ⚡

**Rest (يجمّع):**

```js
function test(...args) {
  console.log(args);
}
```

**Spread (يفرّق):**

```js
let arr = [1, 2, 3];
test(...arr);
```

### قاعدة ذهبية 🧠

> **نفس الثلاث نقط `...`
> بس المكان هو يلي بغيّر المعنى**

* داخل **parameter** → Rest
* داخل **call / array / object** → Spread


