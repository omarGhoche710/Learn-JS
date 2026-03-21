أهلاً! الـ **WeakMap** شي متقدم شوي، بس رح أشرحه بطريقة مبسطة 👇

---

## **شو هي WeakMap؟**

WeakMap هي نوع خاص من Map:
- الـ **key** لازم يكون **object فقط** (مو string, مو number)
- العلاقة بين الـ key والـ value **ضعيفة** (weak)
- لما ما يبقى في references للـ object، الـ **Garbage Collector** يقدر يمسحه من الميموري

---

## **الفرق الأساسي:**

```js
// ❌ Map عادية — تمنع الـ garbage collection
let map = new Map();
let user = { name: "Omar" };
map.set(user, "some data");

user = null; // حذفت المتغير
// لكن الـ object لسه موجود في الـ Map! 🔒
// يعني يضيّع ميموري
```

```js
// ✅ WeakMap — تسمح للـ garbage collection
let wmap = new WeakMap();
let user = { name: "Omar" };
wmap.set(user, "some data");

user = null; // حذفت المتغير
// الـ object بينمسح تلقائياً من الـ WeakMap! 🗑️
// الميموري تتنظف
```

---

## **متى تستخدم WeakMap؟**

### **1. تخزين بيانات إضافية بدون تسريب ميموري**

```js
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { password: "123" }); // بيانات خاصة
    this.name = name;
  }
  
  getPassword() {
    return privateData.get(this).password;
  }
}

let user = new User("Omar");
console.log(user.getPassword()); // "123"

user = null; 
// الـ password راح ينمسح تلقائياً ✅
```

---

### **2. Cache للـ DOM elements**

```js
const cache = new WeakMap();

function processElement(element) {
  if (!cache.has(element)) {
    let result = /* عملية ثقيلة */ element.offsetHeight * 2;
    cache.set(element, result);
  }
  return cache.get(element);
}

let div = document.querySelector("#myDiv");
processElement(div); // يحسب ويحفظ

// لما الـ div ينحذف من الصفحة
div.remove();
// الـ cache تتنظف تلقائياً! ✅
```

---

### **3. Event listeners tracking**

```js
const listeners = new WeakMap();

function addListener(element, callback) {
  listeners.set(element, callback);
  element.addEventListener("click", callback);
}

let btn = document.querySelector("button");
addListener(btn, () => console.log("clicked"));

btn.remove(); 
// الـ WeakMap بتتنظف تلقائياً ✅
```

---

## **القيود:**

```js
let wmap = new WeakMap();

// ❌ ما تقدر تستخدم string او number
wmap.set("key", "value"); // Error!
wmap.set(123, "value");   // Error!

// ✅ لازم object
wmap.set({name: "Omar"}, "value"); // يشتغل

// ❌ ما تقدر تعمل loop
for (let key of wmap) {} // Error!

// ❌ ما في .size
console.log(wmap.size); // undefined

// ❌ ما في .clear()
wmap.clear(); // Error!
```

**ليش؟** لأن الـ Garbage Collector يشتغل بالخفاء، ما تقدر تعرف شو موجود بالضبط.

---

## **مقارنة سريعة:**

| الميزة | Map | WeakMap |
|--------|-----|---------|
| Key type | أي شي | Object فقط |
| Garbage collection | يمنعها | يسمح فيها ✅ |
| `.size` | ✅ | ❌ |
| Loop | ✅ | ❌ |
| `.clear()` | ✅ | ❌ |

---

## **متى تستخدم أي واحدة؟**

- **Map**: لما تبي تحفظ بيانات عادية (strings, numbers, objects...)
- **WeakMap**: لما تبي تربط بيانات بـ objects **مؤقتة** وما تبي memory leaks

---

**مثال عملي أخير:**

```js
// ❌ Map — memory leak
let metadata = new Map();
let elements = [];

for (let i = 0; i < 1000; i++) {
  let div = document.createElement("div");
  metadata.set(div, { id: i });
  elements.push(div);
}

elements = []; // حذفت الـ divs
// لكن لسه موجودة في الـ Map! 💥 1000 object عالق
```

```js
// ✅ WeakMap — no memory leak
let metadata = new WeakMap();
let elements = [];

for (let i = 0; i < 1000; i++) {
  let div = document.createElement("div");
  metadata.set(div, { id: i });
  elements.push(div);
}

elements = []; // حذفت الـ divs
// الـ WeakMap تتنظف تلقائياً ✅
```
---

### Why We Use WeakMap ?

```js
const listeners = new WeakMap();

function addListener(element, callback) {
  listeners.set(element, callback);
  element.addEventListener("click", callback);
}

function removeListener(element) {
  let callback = listeners.get(element); // جيب الـ callback
  if (callback) {
    element.removeEventListener("click", callback); // شيله
    listeners.delete(element);
  }
}

// الاستخدام:
let btn = document.querySelector("button");
addListener(btn, () => console.log("clicked"));

// بعدين لو بدك تشيل الـ listener
removeListener(btn); // ✅ نقدر نوصل للـ callback
```
