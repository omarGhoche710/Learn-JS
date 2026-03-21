أكيد 👌 هاي **مذكرة سريعة** تلخّص كل اللي تعلمناه من التمرين:

---

# 🧠 Notes — AJAX + Promise + Errors

## 1️⃣ أين نكتب resolve و reject؟

لازم يكونوا داخل الحدث اللي يخبرك إن الطلب خلص.

✔ صح:

```js
req.onload = function () {
  if (req.status === 200) resolve(data);
  else reject("Server Error");
};
```

❌ غلط:

```js
req.send();
if (state) resolve(); // هذا قبل ما يخلص الطلب
```

---

## 2️⃣ ليش نحط XMLHttpRequest داخل Promise؟

لأن Promise لازم تدير العملية كاملة:

✔ إرسال الطلب
✔ انتظار النتيجة
✔ تحديد النجاح أو الفشل

هذا اسمه encapsulation (عزل المسؤولية).

---

## 3️⃣ الفرق بين onload و onerror

### ✔ onload

الاتصال نجح ووصل رد من السيرفر
حتى لو الرد خطأ (404 — 500)

لازم نتحقق من:

```js
req.status
```

---

### ✔ onerror

مشكلة بالشبكة نفسها
ما وصل رد حقيقي من السيرفر

أمثلة:

* ما في إنترنت
* السيرفر مطفأ
* الدومين غلط
* الاتصال انقطع

---

## 4️⃣ readyState === 4 يعني ماذا؟

يعني الطلب انتهى تقنيًا
لكن لا يعني النجاح.

لازم نتحقق من status.

---

## 5️⃣ القاعدة الذهبية للتعامل مع AJAX

```js
req.onload = function () {
  if (req.status === 200) {
    resolve(data);
  } else {
    reject("Server Error");
  }
};

req.onerror = function () {
  reject("Network Error");
};
```

---

## 6️⃣ الفرق بين Server Error و Network Error

| الحالة        | المعنى                     |
| ------------- | -------------------------- |
| Server Error  | وصلنا للسيرفر لكن الرد خطأ |
| Network Error | ما قدرنا نوصل للسيرفر      |

---

## 7️⃣ ترتيب التنفيذ في العمليات غير المتزامنة

JavaScript ما بتنتظر الطلب.
الكود يكمل… والنتيجة تجي لاحقًا.

لذلك نستخدم:
✔ Promise
✔ then
✔ catch

---

## 🎯 الخلاصة الكبيرة

AJAX عملية غير متزامنة
Promise تنتظر النتيجة
resolve عند النجاح
reject عند الفشل
onload للرد
onerror للشبكة

---

إذا بدك أعملك ملخص بصري صغير (خريطة تدفّق request → response)، بجهزه لك 👌
