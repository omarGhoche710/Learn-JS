تمام 👌 خلّينا نعمل مثال بسيط جداً بدون async ولا React… أشياء من اللي بتستعملها كل يوم.

## مثال: قياس وقت حلقة `for`

### باستخدام `performance.now()`

```javascript
const start = performance.now();

for (let i = 0; i < 1_000_000; i++) {
  Math.sqrt(i);
}

const end = performance.now();

console.log("Time:", end - start, "ms");
```

👉 هيك بتعرف قديش أخذت العملية كلها.

---

### نفس الشي باستخدام `performance.mark()`

```javascript
performance.mark("loop-start");

for (let i = 0; i < 1_000_000; i++) {
  Math.sqrt(i);
}

performance.mark("loop-end");

performance.measure("loop-duration", "loop-start", "loop-end");

const result = performance.getEntriesByName("loop-duration")[0];
console.log("Time:", result.duration, "ms");
```

👉 الفرق إنك سميت العملية وصار عندك سجل محفوظ.

---

## مثال أقرب للي بتعمله عادة

بدك تعرف أي دالة أسرع 👇

```javascript
function test1() {
  for (let i = 0; i < 100000; i++) {}
}

function test2() {
  let i = 0;
  while (i < 100000) i++;
}

const t1 = performance.now();
test1();
const t2 = performance.now();

const t3 = performance.now();
test2();
const t4 = performance.now();

console.log("for loop:", t2 - t1);
console.log("while loop:", t4 - t3);
```

هاي أشهر طريقة استخدام بالحياة اليومية.

---

## الخلاصة اللي بتهمك فعلياً

إذا عم تتعلم أو عم تختبر كود:
👉 استعمل `performance.now()` وخلاص.

إذا صار عندك مشروع كبير وبدك تتبع مراحل:
👉 وقتها بتروح على `mark` و `measure`.

إذا بدك، فيني أعطيك مثال يقيس وقت event click أو وقت تشغيل function زر — أشياء من شغل الواجهة العادي 👍

---
إي نعم 👍 ممكن يكون في **أكتر من entry بنفس الاسم**.

`performance.getEntriesByName("loop-duration")`
بترجع **Array** بكل القياسات اللي اسمها `"loop-duration"` — مش واحد بس.

يعني السطر تبعك:

```javascript
const result = performance.getEntriesByName("loop-duration")[0];
```

بياخد **أول قياس** انضاف… مو بالضرورة آخر واحد.

---

## مثال يوضح الفكرة

لو شغّلت القياس مرتين:

```javascript
performance.mark("start");
for (let i = 0; i < 100000; i++) {}
performance.mark("end");
performance.measure("loop-duration", "start", "end");

performance.mark("start");
for (let i = 0; i < 200000; i++) {}
performance.mark("end");
performance.measure("loop-duration", "start", "end");

const all = performance.getEntriesByName("loop-duration");
console.log(all.length); // 2
console.log(all[0].duration);
console.log(all[1].duration);
```

👉 صار عندك قياسين بنفس الاسم.

---

## إذا بدك آخر قياس

```javascript
const entries = performance.getEntriesByName("loop-duration");
const last = entries[entries.length - 1];
console.log(last.duration);
```

---

## نصيحة مهمة (كتير ناس بتغلط فيها)

لو ما بدك التراكم، امسح القياسات بعد ما تخلص:

```javascript
performance.clearMeasures("loop-duration");
performance.clearMarks("start");
performance.clearMarks("end");
```

هيك بتبقى النتائج نظيفة وما بتتكدّس.

إذا بدك أشرح كيف DevTools بيفرجوك هالقياسات بصرياً قولي 👀

---

سؤال بمحلو 👌
هون أهم أماكن **فعلاً مفيدة** تستخدم فيها القياس داخل أي مشروع عادي (بدون تعقيد):

---

## 🚀 1) قبل ما تعمل تحسين (optimization)

أكبر غلطة بالعالم البرمجي: نحسّن بدون ما نقيس.

مثلاً:

* عندك function تقيلة
* حاسس الصفحة عم تتأخر
* بدك تعرف وين المشكلة بالضبط

👉 قِس قبل وبعد التعديل

```javascript id="3u3zv9"
const t1 = performance.now();
processData();
const t2 = performance.now();

console.log("Before optimization:", t2 - t1);
```

بعد ما تعدّل الكود… قِس مرة تانية وشوف الفرق.

---

## ⚡ 2) مقارنة طريقتين لحل نفس المشكلة

مثلاً:

* loop vs map
* خوارزميتين
* طريقتين لمعالجة data

```javascript id="c1t7t8"
const t1 = performance.now();
methodA();
const t2 = performance.now();

const t3 = performance.now();
methodB();
const t4 = performance.now();

console.log("A:", t2 - t1);
console.log("B:", t4 - t3);
```

هيك بتاخد قرار مبني على أرقام مش إحساس.

---

## 🧩 3) العمليات اللي المستخدم بينطرها

أي شيء المستخدم بيستناه مهم تقيسه:

أمثلة حقيقية:

* فلترة قائمة كبيرة
* ترتيب جدول
* توليد عناصر بالواجهة
* معالجة input كبير

```javascript id="7q0l2x"
button.addEventListener("click", () => {
  const start = performance.now();

  generateList();

  const end = performance.now();
  console.log("UI update took:", end - start);
});
```

إذا الرقم كبير → هون مكان التحسين.

---

## 🛠️ 4) أثناء debugging لما في بطء غريب

لما تقول:
"ليش هاد السطر بطيء؟"

قس أجزاء صغيرة من الكود لتكتشف السبب الحقيقي.

---

## 🧠 قاعدة ذهبية بالمشاريع

استعمل القياس لما يكون في واحد من هدول:
✅ في بطء ملحوظ
✅ في مقارنة بين حلول
✅ قبل optimization
✅ المستخدم ناطر النتيجة

غير هيك… ما في داعي تقيس كل شي.

---

إذا بتحب فيني أعطيك سيناريو مشروع صغير (مثلاً فلترة search أو rendering list) ونحط القياس فيه خطوة خطوة 👀
