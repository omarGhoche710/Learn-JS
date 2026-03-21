حلو… هيدا قلب JavaScript فعلياً 🔥
خلّيك معي دقيقة وبتصير واضحة.

---

## 🧠 شو هو Event Loop؟

**Event Loop هو المنظّم**
اللي بيدير مين بينفّذ ومتى.

وظيفته:
👉 يراقب إذا في كود جاهز للتنفيذ
👉 ينتظر يفضى الـ Call Stack
👉 يبعث الكود من الطوابير للتنفيذ

---

## 🧱 العناصر الثلاثة

### 1️⃣ Call Stack

مكان تنفيذ الكود حالياً.

تخيّله:
📚 كومة أوامر عم تنفّذ وحدة ورا التانية.

---

### 2️⃣ Callback Queue

طابور انتظار للكود الجاهز للتنفيذ.

بيوصل عليه:

* setTimeout
* events (click)
* async callbacks

---

### 3️⃣ Event Loop

الحارس بيناتهم 👀

يسأل دائماً:
👉 هل الـ Call Stack فاضي؟
✔ نعم → خد أول callback ونفّذ
❌ لا → استنى

---

## 🎬 سيناريو حقيقي

```js
console.log("Start");

setTimeout(() => {
  console.log("Async");
}, 1000);

console.log("End");
```

### شو بصير فعلياً

1️⃣ "Start" تنفّذ
2️⃣ setTimeout يروح للمتصفح يعدّ الوقت
3️⃣ "End" تنفّذ
4️⃣ بعد 1 ثانية → callback تروح عالـ queue
5️⃣ Event Loop يشوف stack فاضي
6️⃣ ينفّذ "Async"

---

## 💡 ليش هالمفهوم مهم إلك؟

لأنك عم تتعلّم:
🎮 Canvas
🎨 Animation
⏱ async code

فلازم تفهم ليش:

* setTimeout ما بينفّذ فوراً
* الصفحة بتجمّد مع loops
* requestAnimationFrame أنعم

---

## 🧠 تشبيه سريع

تخيّل مطبخ 🍳

👨‍🍳 الطباخ = Call Stack
📋 طلبات الانتظار = Callback Queue
🧑‍💼 المدير = Event Loop

المدير بيقول:
"إذا الطباخ فاضي… جيب الطلب الجاي"

بس هيك 👌

---

