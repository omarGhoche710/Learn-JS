حلو — هون الوضع مختلف شوي لأنك **ربطت `then()` مباشرة مع إنشاء الـ Promise**.
خلّينا نمشي التنفيذ خطوة خطوة 👇

الكود (مفهوم بشكل مرتب):

```js
const promise = new Promise((resolve, reject) => {
  let connect = false;

  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection failed"));
  }
}).then(
  (resolveMsg) => console.log(`Good ${resolveMsg}`),
  (rejectMsg) => console.log(`Bad ${rejectMsg}`),
);

console.log(promise);
```

---

## 🧭 ترتيب التنفيذ الحقيقي

### 1️⃣ إنشاء الـ Promise الأصلي

JavaScript تنفّذ الكود داخل `new Promise` فورًا.

بما إن:

```
connect = false
```

فبيصير:

```
reject(Error("Connection failed"))
```

👉 الوعد الأصلي صار **rejected**

---

### 2️⃣ تنفيذ `then()`

أنت ما خزّنت الوعد الأصلي…
أنت خزّنت **الوعد الجديد الناتج من `then()`**

وهون أهم نقطة:

داخل `then` أنت بس عملت:

```
console.log(...)
```

و `console.log` ما بيرجع قيمة
يعني بيرجع `undefined`

فشو صار؟

👉 الوعد الجديد صار **fulfilled بقيمة undefined**

ليش fulfilled؟
لأن ما صار خطأ داخل then.

---

### 3️⃣ تنفيذ console.log

لما توصل JavaScript لهون:

```js
console.log(promise);
```

أنت عم تطبع:
👉 الوعد الجديد الناتج من then

فغالبًا رح تشوف:

```
Promise { fulfilled: undefined }
```

---

### 4️⃣ طباعة رسالة الرفض

بعد انتهاء الكود المتزامن، JavaScript تنفّذ callback الرفض:

```
Bad Error: Connection failed
```

---

## 💥 الخلاصة المهمة جدًا

هذا السطر:

```js
const promise = new Promise(...).then(...)
```

يعني:

❌ promise ≠ الوعد الأصلي
✅ promise = الوعد الناتج من then

وقيمة الوعد الجديد = القيمة اللي بترجعها من then
وبما إنك ما رجّعت شي → undefined

---

## 🎯 إذا بدك PromiseResult يحتوي الرسالة

لازم ترجع القيمة:

```js
const promise = new Promise((resolve, reject) => {
  let connect = false;

  if (connect) {
    resolve("Connection Established");
  } else {
    reject("Connection failed");
  }
}).then(
  (msg) => {
    console.log("Good", msg);
    return msg;
  },
  (err) => {
    console.log("Bad", err);
    return err;
  },
);

console.log(promise);
```

---

## قاعدة ذهبية تحفظها

Promise.then()
➡️ بيرجع Promise جديد
➡️ حالته تعتمد على return داخل then

---

### Solutin2:

```js
const promise = new Promise((resolve, reject) => {
  let connect = false;

  if (connect) {
    resolve("Connection Established");
  } else {
    reject("Connection Failed");
  }
});

promise.then(
  (msg) => console.log("Good", msg),
  (err) => console.log("Bad", err),
);

console.log(promise);
```

### 1️⃣ إنشاء الـ Promise
```js
const promise = new Promise(...)
```

الكود داخل الـ Promise **ينفّذ فورًا** (synchronous)
يعني يتحدد إذا resolve أو reject مباشرة حسب `connect`.

بس… تنفيذ دوال `then` ما بيصير فورًا.

---

### 2️⃣ `console.log(promise)` يشتغل قبل `then`

JavaScript ما بتنتظر `then`، فبتكمل السطور بالترتيب:

```js
console.log(promise);
```

لهيك غالبًا رح تشوف في الكونسول:

```
Promise { <pending> }
```

أو أحيانًا rejected / fulfilled حسب توقيت العرض.

---

### 3️⃣ بعد ذلك تُنفَّذ `then`

الـ callbacks داخل `then` بتنحط في **Microtask Queue**
وبتنفّذ بعد ما يخلص الكود المتزامن كله.

فبعدها بتشوف:

```
Bad Connection Failed
```

(لأن `connect = false`)

---

## 💡 الترتيب النهائي للتنفيذ

1️⃣ ينشأ الـ Promise ويتحدد مصيره
2️⃣ ينطبع الـ Promise في الكونسول
3️⃣ تُنفّذ دالة `then` وتطبع النتيجة

---

## إذا بدك تشوف الحالة بعد ما تستقر فعليًا

جرّب:

```js
setTimeout(() => console.log(promise), 0);
```

هون الطباعة بتصير بعد تنفيذ `then`
فبتشوف الحالة النهائية أكيد.

---
