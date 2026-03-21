```js
async function getData() {
  let users = [];

  if (users.length === 0) {
    throw new Error("Users Not Found");
  }

  return "Users Found";
}

async function run(promise) {
  try {
    console.log("Before Promise");
    const myData = await promise();
    console.log(myData);
    console.log("After Promise");
  } catch (err) {
    console.log(err.message);
  }
}

run(getData);
```

تمام خلينا نمشي التنفيذ خطوة خطوة كأنو عم نشوفه slow motion 👀

---

## 1️⃣ تعريف الدوال

### `getData`

```js
async function getData() {
  let users = ["Omar"];

  if (users.length === 0) {
    throw new Error("Users Not Found");
  }

  return "Users Found";
}
```

* دالة `async` → دايمًا بترجع Promise.
* لأن المصفوفة فيها عنصر → ما في throw.
* بتعمل `return "Users Found"`
  👉 يعني Promise **resolved** بالقيمة `"Users Found"`.

---

### `run`

```js
async function run(data) {
  try {
    console.log("Before Promise");
    const myData = await data();
    console.log(myData);
    console.log("After Promise");
  } catch (err) {
    console.log(err.message);
  }
}
```

لاحظ إنو `run` بتستقبل **دالة** اسمها `data` مو قيمة.

---

## 2️⃣ الاستدعاء

```js
run(getData);
```

هون مرّرت الدالة نفسها، مو نتيجة تنفيذها.

يعني داخل `run`:

```js
data === getData
```

---

## 3️⃣ شو بصير وقت التنفيذ

### ✅ الخطوة 1

```js
console.log("Before Promise");
```

يطبع:

```
Before Promise
```

---

### ✅ الخطوة 2

```js
const myData = await data();
```

* `data()` يعني `getData()`
* `getData()` بترجع Promise resolved بقيمة `"Users Found"`
* `await` بينتظر النتيجة وبيحطها بـ `myData`

صار:

```js
myData = "Users Found"
```

---

### ✅ الخطوة 3

```js
console.log(myData);
```

يطبع:

```
Users Found
```

---

### ✅ الخطوة 4

```js
console.log("After Promise");
```

يطبع:

```
After Promise
```

---

## ✅ الناتج النهائي بالترتيب

```
Before Promise
Users Found
After Promise
```

---

## 💡 نقطة مهمة جدًا

لو كانت المصفوفة فاضية:

```js
let users = [];
```

ساعتها:

* `getData()` بتعمل `throw`
* `await` بيحوّلها لخطأ
* التنفيذ بيروح مباشرة على `catch`

والناتج بيكون:

```
Before Promise
Users Not Found
```

(وما رح يطبع "After Promise")

---

## الفكرة الأساسية من المثال

إنت عم تمرر دالة ترجع Promise
و `await` بيوقف التنفيذ لحد ما النتيجة توصل
و `try/catch` بيمسك أي reject

---

إذا بدك أشرحلك ليش مرّرنا `getData` بدون أقواس وليش هاد أسلوب شائع بالـ async patterns بقلك 👌


