## 📝 Note 1: insertBefore()

### شو هي؟

`insertBefore()`
هي **method** بتسمحلك تحط عنصر **قبل عنصر تاني** داخل نفس الـ parent

---

### الصيغة (Syntax)

```js
parent.insertBefore(newElement, referenceElement);
```

| الجزء            | معناه                          |
| ---------------- | ------------------------------ |
| parent           | العنصر الأب                    |
| newElement       | العنصر يلي بدك تحرّكه أو تضيفه |
| referenceElement | العنصر يلي بدك تحط الجديد قبله |

---

### مثال بسيط

```html
<div id="parent">
  <p id="one">One</p>
  <p id="two">Two</p>
</div>
```

```js
parent.insertBefore(two, one);
```

🔁 النتيجة:

```
Two
One
```

---

### مثال من يلي حكينا عنه

```js
el.parentElement.insertBefore(el, prev);
```

### شو صار هون؟

* `el.parentElement` → الـ div الأب
* `el` → العنصر يلي عم نحرّكه
* `prev` → العنصر السابق

👉 يعني:
**رجّع `el` قبل `prev` داخل نفس الـ parent**

⚠️ `insertBefore` ما بينسخ العنصر
**بينقله من مكانه**

---

### استخدام شائع

* ترتيب عناصر
* drag & drop
* تحريك comments
* إعادة تنظيم list

---

## 🧠 الخلاصة السريعة

* `?.` = حماية من errors
* `insertBefore()` = تحريك عنصر قبل عنصر تاني
* الاثنين مهمّين كتير بالـ DOM

إذا بدك:

* **cheat sheet مختصرة أكتر**
* أو **تمرين صغير عليهم**
  قلي وبحضّرلك واحد 🔥
