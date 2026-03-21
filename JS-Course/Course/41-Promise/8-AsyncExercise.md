```js
function fetchEmployees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const employees = ["Omar", "Hamza", "Oussama", "Saleh"];
      employees.length === 4
        ? resolve(employees)
        : reject(new Error("Employees count is wrong"));
    }, 1000);
  });
}

function fetchDepartments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["IT", "HR", "Sales"]);
    }, 800);
  });
}

function pickEmployee(list) {
  return new Promise((resolve) => {
    setTimeout(() => {
      list.length = 1; // نختار أول موظف
      resolve(list[0]);
    }, 500);
  });
}
```
---
```js
async function run() {
  try {
    console.log("Start");

    // تشغيل متوازي
    const [employees, departments] = await Promise.all([
      fetchEmployees(),
      fetchDepartments()
    ]);

    console.log("Employees:", employees);
    console.log("Departments:", departments);

    // عملية لاحقة تعتمد على نتيجة سابقة
    const chosen = await pickEmployee(employees);

    console.log(`Chosen Employee is ${chosen}`);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Operation Finished");
  }
}

run();
```
---
```js
Promise.all([getEmployees(), getDepartments()])
  .then(([employees, departments]) => {
    console.log("Employees:", employees);
    console.log("Departments:", departments);

    return pickEmployee(employees);
  })
  .then((employee) => {
    console.log("Picked Employee:", employee);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```
---
### allSettled
```js
async function run() {
  try {
    const [employees, departments] = await Promise.allSettled([getEmployees(), getDepartments()]);

    if (departments.status === "fulfilled") {
      console.log(`Departments:`, departments.value);
    } else {
      console.log("Departments Error:", departments.reason);
    }

    if (employees.status === "fulfilled") {
      const employee = await pickEmployee(employees.value);
      console.log(`Picked Employee: ${employee}`);
    } else {
      console.log("Employees Error:", employees.reason);
    }
  } catch (err) {
    console.log(err);
  }
}

run()
```





آه فهمت قصدك 😄
سؤالك: **ليش استخدمنا `setTimeout` من الأساس؟**

الجواب المختصر المفيد:

👉 استخدمناه **بس لشرح الفكرة**
مو لأنه لازم نستخدمه مع Promise.

---

## ليش حطّيناه بالمثال؟

لحتى نخلق حالة اسمها:

⏳ Promise لسا ما خلصت (pending)
➡️ في انتظار فعلي
➡️ `await` بيكون إلو معنى واضح

بدون تأخير… كل شي بيخلص فورًا وما بتحس بالـ async.

---

## شبّهها بالحياة الواقعية

### بدون setTimeout

كأنك سألت سؤال وجاك الجواب فورًا.

### مع setTimeout

كأنك طلبت أكل:

* الطلب انبعت
* بدك تنتظر
* لما يجهز بتاخده

Promise = الطلب
await = الانتظار
setTimeout = وقت التحضير

---

## بالحياة الحقيقية شو بدل setTimeout؟

نادر جدًا تستخدمه هيك.
بداله بيكون في:

✔ طلب API
✔ قراءة ملف
✔ قاعدة بيانات
✔ تحميل صورة
✔ أي عملية I/O

هاي كلها بتاخد وقت طبيعي.

---

## خلاصة الفكرة

نحنا استخدمنا `setTimeout` **كمحاكاة لعملية حقيقية بطيئة**
بس لحتى نشوف كيف Promise و `await` بيتصرفوا.

---

إذا بدك مثال “واقعي 100%” بدون `setTimeout` بس فيه async حقيقي، بفرجيك واحد بسيط 👌
