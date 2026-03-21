آه 😎🔥 سؤال ممتاز…
خلينا نشوف شو بصير **لو رجّعنا `setTimeout` جوّا then** بدل ما نرجّع `run()`.

---

## الحالة الغلط ❌

```js
run(title1, 1000)
  .then(() => {
    setTimeout(() => {
      title2.classList.add("show");
    }, 1000);
  })
  .then(() => {
    console.log("Done");
  });
```

### شو بيصير هون؟

* أول `run` بينطر 1 ثانية
* أول `then` بيشتغل
* جوّاه في `setTimeout`
* بس انت **ما رجّعت Promise**

يعني أول `then` خلص فوراً
فـ التانية `.then()` ما بتستنى الـ setTimeout 😬

لأن:

```js
setTimeout(...)
```

بيرجع رقم (ID) مش Promise ❌

---

## ليش السلسلة ما بتستنى؟

لأن:

```js
.then(() => {
  setTimeout(...)
})
```

هاي ما رجّعت شي
يعني implicitly رجّعت:

```js
return undefined;
```

و undefined مش Promise
فالسلسلة بتكمل فوراً.

---

# الحالة الصح ✅

إذا بدك السلسلة تستنى الـ setTimeout
لازم تلفّه بـ Promise:

```js
run(title1, 1000)
  .then(() => {
    return new Promise((res) => {
      setTimeout(() => {
        title2.classList.add("show");
        res();
      }, 1000);
    });
  })
  .then(() => {
    console.log("Done After Title2");
  });
```

هلق شو صار؟

* أول then رجّع Promise
* السلسلة استنتها
* بعد ما تعمل resolve → بينتقل للمرحلة اللي بعدها

---

## القاعدة الذهبية 🧠

داخل `.then()`:

| إذا رجّعت   | السلسلة بتعمل |
| ----------- | ------------- |
| قيمة عادية  | بتكمل فوراً   |
| Promise     | بتستنى        |
| ما رجّعت شي | بتكمل فوراً   |

---

## خلاصة قوية لازم تثبّت براسك 💪

`setTimeout` لحالو ما إلو علاقة بالـ Promise system
هو بس بيحط callback بالـ Event Loop.

إذا بدك تخليه يشتغل مع then / await
لازم تحطه داخل Promise.

---

إذا بدك هلق فيني أفرجيك ليش `await setTimeout()` ما بيشتغل أصلاً 😏🔥
