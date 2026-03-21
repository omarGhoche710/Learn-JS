إي نعم 👍
**بهذه الحالة بالذات لازم تستخدم `new Promise`** لأن:

👉 `setTimeout` ما بيرجع Promise
👉 و `async` لحالها ما بتحوّل `setTimeout` لشيء قابل للانتظار

يعني عندك خيارين فقط:

---

## ✅ الحل الصح مع setTimeout

تلفّه داخل Promise:

```js
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userID = 1;
      userID ? resolve(userID) : reject('User not found');
    }, 1000);
  });
}
```

---

## 🧠 قاعدة بسيطة تحفظها

إذا العملية async مبنية على:

* setTimeout
* setInterval
* event listener
* callback قديم
* Ajax

➡️ لازم تحولها لـ Promise يدويًا.

---

## 💡 معلومة مهمة

كلمة `async` مفيدة لما يكون عندك:

```js
await fetch(...)
await databaseCall(...)
```

لكن مع `setTimeout` وحده → ما بتكفي.

---
### Why we use them:
*الجزء A*
استخدم Promise.race للحصول على أسرع سيرفر.

*الجزء B*
استخدم Promise.allSettled لمعرفة من نجح ومن فشل.

*الجزء C*
استخدم Promise.all لجلب كل البيانات (يفشل إذا فشل واحد).

### EX: Race
حلو 👌 نبلّش بالجزء A.

## 🔵 الجزء A — الحصول على أسرع سيرفر باستخدام Promise.race

الفكرة: نشغّل طلبات السيرفرات الثلاثة معًا، وأول واحد يرد هو الذي نحصل على نتيجته.

### ✅ الحل

```js
function serverA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Server A');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Server B');
    }, 1000);
  });
}

function serverC() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data from Server C');
    }, 3000);
  });
}

Promise.race([serverA(), serverB(), serverC()])
  .then((result) => {
    console.log('أسرع سيرفر رد:', result);
  })
  .catch((err) => console.log(err));
```

### 💡 النتيجة المتوقعة

السيرفر B رح يفوز لأنه بيرد بعد 1 ثانية:

```
أسرع سيرفر رد: Data from Server B
```

إذا بدك نكمل فورًا على **الجزء B (allSettled)** قلّي 💪
