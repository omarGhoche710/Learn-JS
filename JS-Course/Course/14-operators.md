تمام 👌 فهمتك
بدك **note وحدة مرتّبة ونظيفة** تجمع كل هالمواضيع، متل ملخّص دراسة جاهز ✔️
خلّيك معي:

---

# 📝 JavaScript Operators – Notes

---

## 1️⃣ Comparison Operators (Operators المقارنة)

### 🔹 With Type Coercion (بيعمل تحويل نوع)

```js
==   // Equal Value
!=   // Not Equal Value
```

### أمثلة:

```js
console.log(10 == "10");      // true
console.log(-100 == "-100"); // true
console.log(10 != "10");     // false
```

⚠️ JavaScript بتحوّل الأنواع تلقائياً
(`"10"` → 10)

---

### 🔹 Without Type Coercion (بدون تحويل نوع)

```js
===  // Equal Value AND Equal Type
!==  // Not Equal Value OR Not Equal Type
```

### أمثلة:

```js
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
```

✔️ **أفضل ممارسة**: استخدم `===` و `!==` دايماً

---

### 🔹 Comparison Numbers

```js
>   // Greater Than
>=  // Greater Than Or Equal
<   // Less Than
<=  // Less Than Or Equal
```

---

### 🔹 Example with typeof

```js
console.log(typeof "Omar" === typeof "Ahmad"); // true
```

---

## 2️⃣ Logical Operators (Operators منطقية)

```js
&&  // AND  → كل الشروط لازم تكون true
||  // OR   → شرط واحد true بكفي
!   // NOT  → عكس القيمة
```

### أمثلة:

```js
true && false  // false
true || false  // true
!true          // false
```

---

## 3️⃣ Optional Chaining Operator `?.`

### شو هو؟

`?.` هو **operator** بيسمحلك توصل لعنصر أو خاصية
👉 **من دون ما يصير error إذا العنصر مش موجود**

---

### ليش نستخدمه؟

لأن JavaScript بتعمل crash إذا حاولت توصل لـ `null` أو `undefined`

❌ بدون `?.`

```js
el.querySelector('p'); // error إذا el = null
```

✅ مع `?.`

```js
el?.querySelector('p'); // آمن
```

---

### كيف بيشتغل؟

```js
el?.querySelector('p');
```

يعني:

* إذا `el` موجود → كمّل
* إذا `el` مش موجود → رجّع `undefined` ووقف

---

### مثال عملي

```js
const p = comment?.querySelector('p');
```

* `comment` موجود → يجيب `<p>`
* `comment` مش موجود → no error

---

### ملاحظة مهمة ⚠️

`?.`:

* ❌ ما بيصلّح الغلط
* ✅ بس **بيمنع الـ error**

---

## ✅ خلاصة سريعة

* `==` ❌ قد يسبب bugs
* `===` ✅ الأفضل دائماً
* `&&` / `||` للتحقق من الشروط
* `?.` لحماية الكود من crashes

إذا بدك:

* **PDF notes**
* **تمرين صغير مع الحل**
* أو **ملخّص أقصر للحفظ**

قلي وبجهزلك فوراً 🔥
