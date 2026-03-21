لأ، **fetch مش هي اللي بتمنع الـ reload**

---

## شو اللي بيعمل الـ reload؟

الـ reload بيصير لما تعمل أشياء معينة بالـ HTML:

```html
<!-- form بدون preventDefault -->
<form action="/submit">
    <button type="submit">إرسال</button>
</form>

<!-- أو -->
<a href="/page">رابط</a>
```

هاد بيعمل reload تلقائي — **مش علاقته بـ fetch**

---

## شو دور fetch إذاً؟

fetch بتبعت طلب للسيرفر **في الخلفية** — الصفحة شايلة، ما في reload أصلاً

```js
// هاد الكود ما بيعمل reload
// بس بيجيب بيانات من السيرفر
const res = await fetch("/api/employees");
const data = await res.json();
```

---

## المثال الكامل

```js
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // ← هاد هو اللي بيمنع الـ reload

    // هون fetch بتشتغل بدون ما الصفحة تتحمل من جديد
    const res = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ name: "Hamza" })
    });

    const data = await res.json();
    console.log(data);
});
```

---

## خلاصة

```
e.preventDefault()  ←  هو اللي بيمنع الـ reload
fetch               ←  بتجيب/تبعت بيانات بالخلفية
```

> **fetch ما إلها علاقة بالـ reload** — هي بس أداة للتواصل مع السيرفر