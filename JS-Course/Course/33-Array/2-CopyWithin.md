````md
# 📘 Array.copyWithin مع عناصر DOM

## 🧩 تعريف الدالة

```js
Array.copyWithin(target, start, end)
````

تقوم بنسخ جزء من عناصر الـ array إلى موقع آخر **داخل نفس الـ array**.

### القواعد

* أي رقم سالب يُحسب من نهاية الـ array.
* التغيير يتم على نفس الـ array (بدون إنشاء array جديدة).

### المعاملات

#### Target

* الفهرس الذي سيتم النسخ إليه.
* إذا كان ≥ طول الـ array → لا يحدث شيء.

#### Start (اختياري)

* الفهرس الذي يبدأ منه النسخ.
* إذا لم يُحدد → يبدأ من 0.

#### End (اختياري)

* الفهرس الذي ينتهي عنده النسخ.
* غير شامل.
* إذا لم يُحدد → حتى نهاية الـ array.

---

## 🧪 أمثلة

```js
myArray.copyWithin(4, -1);
// [10, 20, 30, 40, 'B', 'A', 'B']

myArray.copyWithin(1, -2);
// [10, 'A', 'B', 40, 50, 'A', 'B']

myArray.copyWithin(1, -2, -1);
// [10, 'A', 30, 40, 50, 'A', 'B']
```

---

## 🌐 مثال مع DOM

### HTML

```html
<ul id="list">
  <li>A</li>
  <li>B</li>
  <li>C</li>
  <li>D</li>
  <li>E</li>
</ul>
```

### JavaScript

```js
const list = document.getElementById("list");
let items = Array.from(list.children); // [A, B, C, D, E]

// نسخ من index 2 إلى النهاية ووضعها من index 0
items.copyWithin(0, 2);
// النتيجة داخل الـ array:
items = [C, D, E, D, E]

// إعادة ترتيب العناصر داخل DOM
list.innerHTML = "";
items.forEach((item) => list.appendChild(item));
```

---

## ⚠️ المشكلة

`copyWithin` ينسخ **references** فقط، وليس عناصر DOM جديدة.

```js
items = [C, D, E, D, E]
//       ↑        ↑
//    نفس الـ node في الذاكرة
```

يعني:

```js
items[0] === items[3] // true
```

---

## ❌ ماذا يحدث عند appendChild؟

عنصر DOM لا يمكن أن يوجد في مكانين بنفس الوقت.

عند تنفيذ:

```
appendChild(C) → [C]
appendChild(D) → [C, D]
appendChild(E) → [C, D, E]
appendChild(D) → يتم نقل D → [C, E, D]
appendChild(E) → يتم نقل E → [C, D, E]
```

### النتيجة النهائية

```
C, D, E
```

لا يوجد تكرار فعلي.

---

## ✅ الحل الصحيح

إنشاء نسخة حقيقية من العنصر باستخدام:

```js
list.appendChild(item.cloneNode(true));
```

### معنى `true`

نسخ عميق يشمل:

* العنصر نفسه
* كل العناصر داخله

---

## 🧠 الخلاصة

* `copyWithin` يكرر references فقط.
* DOM لا يسمح بوجود نفس العنصر مرتين.
* التكرار الحقيقي يتطلب:

```
cloneNode(true)
```

```
```
