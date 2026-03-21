أكيد 💪 خليك حافظها هيك كنوتة سريعة:

---

## 📝 Generator — أهم القواعد

### 1️⃣ استدعاء الـ generator ما بيشغّل الكود

```js
function* test() {
  console.log("A");
  yield 1;
}

const g = test(); // ما بينفّذ شي
```

👉 فقط بينشئ generator object

---

### 2️⃣ التنفيذ يبدأ فقط عند `.next()`

```js
g.next();
```

اللي بصير بالترتيب:

1. يبدأ تنفيذ الدالة
2. ينفّذ الكود لحد أول `yield`
3. يوقف التنفيذ ويحفظ مكانه

---

### 3️⃣ `yield` = نقطة توقّف مؤقت

* توقف تنفيذ الدالة
* ترجع قيمة
* بتكمل من نفس المكان عند next التالية

---

### 4️⃣ كل `.next()` يكمل من آخر توقف

```js
function* test() {
  console.log("A");
  yield 1;
  console.log("B");
  yield 2;
}

const g = test();

g.next(); // يطبع A
g.next(); // يطبع B
```

---

### 🎯 قاعدة ذهبية

✅ generator = تنفيذ عند الطلب
✅ `yield` = pause
✅ `.next()` = play ▶️

---

حلو 😄 هاي نوتة سريعة وواضحة:

---

## 📝 الفرق بين `yield` و `return` داخل Generator

### 1️⃣ `yield` — توقّف مؤقت ويرجع قيمة

* يوقف التنفيذ مؤقتًا
* يرجّع قيمة للمكان اللي استدعى `.next()`
* يقدر يكمل بعدين من نفس المكان

```js
function* demo() {
  yield 1;
  yield 2;
  yield 3;
}

const g = demo();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
```

👉 الدالة لسه “عايشة” وعم تكمل

---

### 2️⃣ `return` — إنهاء نهائي للدالة

* ينهي الـ generator فورًا
* أي كود بعده ما بينفّذ
* بيرجع قيمة أخيرة مع `done: true`

```js
function* demo() {
  yield 1;
  return 99;
  yield 2; // ما رح تشتغل
}

const g = demo();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 99, done: true }
console.log(g.next()); // { value: undefined, done: true }
```

👉 انتهى التنفيذ وما في رجعة

---

### 3️⃣ شو بصير مع `for...of`

اللوب بياخد فقط القيم من `yield`
وقيمة `return` ما بتنطبع

```js
function* demo() {
  yield 1;
  yield 2;
  return 99;
}

for (let v of demo()) {
  console.log(v);
}
// 1
// 2
```

---

### 🎯 الخلاصة الذهبية

* `yield` → pause + continue
* `return` → stop نهائي
* `for...of` → يقرأ yield فقط

إذا بدك تمارين صغيرة تتدرّب عليهم متل freeCodeCamp style قولي 💪


