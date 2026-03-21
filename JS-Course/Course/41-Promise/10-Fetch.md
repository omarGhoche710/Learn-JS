حاضر 😄 خلّينا نمشي سطر سطر ونفهم شو عم يصير فعليًا:

---

## 1️⃣ جلب الملف

```js
fetch('articles.json')
```

* `fetch` بيرجع **Promise**
* هذا الـ Promise يحتوي على **Response object** (مش البيانات نفسها)

---

## 2️⃣ تحويل الـ Response إلى JSON

```js
.then((result) => {
  const myData = result.json();
  return myData;
})
```

### شو مهم تعرف هون؟

* `result.json()` نفسها **بترجع Promise**
* لذلك `myData` مو بيانات… بل Promise يحتوي البيانات لاحقًا
* لما ترجع `myData` → أنت تنقل الـ Promise للـ then اللي بعده

يعني السلسلة صارت:
Promise → Promise → بيانات

---

## 3️⃣ التعديل على البيانات

```js
.then((data) => {
  data.length = 5;
  return data;
})
```

هون وصلتنا البيانات الحقيقية 👇
`data` = Array فيه المقالات

### شو عملنا؟

قصّينا المصفوفة لأول 5 عناصر
(نفس تأثير `slice(0, 5)` لكن بطريقة مباشرة)

وبعدين رجّعنا البيانات للمرحلة التالية.

---

## 4️⃣ استخدام البيانات

```js
.then((data) => {
  console.log(data[0].userId);
})
```

هون:

* أخذنا أول مقال
* طبعنا `userId`

---

## 🧠 الفكرة العامة للسلسلة

كل `.then()`:

1. يستقبل نتيجة المرحلة السابقة
2. يرجّع قيمة أو Promise
3. النتيجة تنتقل للـ then التالي

يعني التدفق:

fetch
⬇
تحويل إلى JSON
⬇
تعديل البيانات
⬇
استخدام البيانات

---

## ⚡ ملاحظة احترافية

بدل:

```js
data.length = 5;
```

الأفضل:

```js
return data.slice(0, 5);
```

لأنها ما تغيّر البيانات الأصلية.

---

## نفس الكود بأسلوب async/await (للفهم فقط)

```js
async function run() {
  const response = await fetch("articles.json");
  const data = await response.json();
  const firstFive = data.slice(0, 5);

  console.log(firstFive[0].userId);
}
```
---
# Catch Error
سؤال مهم 👌 لأن `fetch` ما بيرمي error لوحده في بعض الحالات.

## ⚠️ أهم نقطة

`fetch` يرمي error فقط إذا:
❌ ما في اتصال إنترنت
❌ السيرفر ما ردّ

لكن إذا السيرفر رجّع:
404
500
أي خطأ HTTP

👉 `fetch` يعتبرها **نجاح**
ولازم أنت تفحصها يدويًا.

---

## الطريقة الصح لاكتشاف الخطأ

### باستخدام async / await

```js
async function run() {
  try {
    const response = await fetch("articles.json");

    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("صار خطأ:", error.message);
  }
}

run();
```

### شو يعني response.ok؟

* true → الطلب نجح (200 — 299)
* false → في خطأ HTTP

---

## نفس الفكرة باستخدام then

```js
fetch("articles.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log("صار خطأ:", error.message));
```

---

## ملخص سريع تحفظه 💡

fetch عنده نوعين أخطاء:

1️⃣ خطأ شبكة → catch مباشرة
2️⃣ خطأ HTTP → لازم تفحص response.ok

---

إذا بدك أعطيك تمرين صغير يخليك تشوف الخطأ بنفسك بخطوتين بس قُلّي 💪


