# JavaScript OOP — ملخص الدروس

---

## 1. `instanceof`

بيتحقق من كل الـ **prototype chain** — مش بس الـ class المباشرة.

```javascript
class Animal {}
class Dog extends Animal {}

let dog = new Dog();

dog instanceof Dog;    // true
dog instanceof Animal; // true  ← لأن Dog وارثة من Animal
dog instanceof Cat;    // false
```

| | `instanceof` | `constructor ===` |
|---|---|---|
| بيتحقق من | كل الـ prototype chain | الـ class بالظبط |
| `dog → Animal` | ✅ true | ❌ false |
| `dog → Dog` | ✅ true | ✅ true |

---

## 2. Default Parameters

أفضل طريقة لتحديد قيمة افتراضية للـ property.

```javascript
constructor(id, username = "Unknown", salary) {
  this.username = username;
}
```

| الطريقة | المشكلة | التقييم |
|---|---|---|
| `\|\|` (OR) | بتأثر على كل falsy values (`""`, `0`, `false`) | ❌ مش الأفضل |
| `??` (Nullish) | بتشتغل بس مع `null` و `undefined` | ✅ جيد |
| **Default Parameter** | نظيفة ومباشرة بدون logic إضافية | ✅✅ الأفضل |

> ⚠️ لو مش حابب تعطي قيمة لـ parameter — استخدم `undefined` مش فراغ
> ```javascript
> new User(1, undefined, 5000); // ✅ بيستخدم الـ default
> new User(1, , 5000);          // ❌ Syntax Error
> ```

---

## 3. Method vs Property

دايماً استخدم **Method** مش Property لما بدك تحط function بالـ class.

```javascript
// ❌ Property — كل object بياخد نسخة جديدة بالميموري
this.msg = function() { ... }

// ✅ Method — بتتحفظ مرة وحدة بالـ prototype
msg() {
  return `Hello ${this.username}`;
}
```

```javascript
// إثبات:
u1.msg === u2.msg; // false  (Property) ❌
u1.msg === u2.msg; // true   (Method)   ✅
```

---

## 4. Private Fields `#`

بتستخدم `#` عشان تخلي الـ property أو الـ method **private**.

```javascript
class User {
  #salary; // Private Field

  constructor(id, username = "Unknown", salary) {
    this.id = id;
    this.username = username;
    this.#salary = this.#setSalary(salary);
  }

  #setSalary(salary) {                          // Private Method
    return salary < 6000 ? salary + 500 : salary;
  }

  getSalary() { return this.#salary; }          // Public getter
  updateSalary(s) { this.#salary = this.#setSalary(s); } // Public setter
}

let user = new User(1, "Omar", 5000);
user.getSalary();    // 5500 ✅
user.#salary;        // ❌ Error - Private!
```

| | Public | Private `#` |
|---|---|---|
| الوصول من برا الـ class | ✅ | ❌ Error |
| الوصول من جوا الـ class | ✅ | ✅ |
| بحتاج getter/setter | ❌ | ✅ |

> ⚠️ **تنبيه:** جوا الـ private method لازم تكتب `this.#salary` مش `this.salary` — غير هيك رح ينشئ public property جديدة!

---

## 5. Static Properties & Methods

الـ `static` بتنتمي للـ **class نفسها** مش للـ instance.

```javascript
class User {
  static count = 0;

  constructor(id, username, salary) {
    User.count++; // ✅ الأوضح جوا الـ constructor
  }

  static countMembers() {
    return `${this.count} Members`; // this = الـ class هون ✅
  }

  regularMethod() {
    console.log(this.count);  // undefined ❌
    console.log(User.count);  // ✅ الصح
  }
}
```

| المكان | `this.count` | `User.count` |
|---|---|---|
| `constructor` | ⚠️ شغال بس مش واضح | ✅ الأفضل |
| `static method` | ✅ شغال | ✅ شغال |
| `regular method` | ❌ undefined | ✅ الصح |

> **القاعدة:** `User.count` شغالة بكل مكان — هي الأأمن دايماً ✅

---

## 6. Encapsulation

بتخبي الـ data والـ logic من برا، وبتوفر methods محددة للتعامل معها — من أهم مبادئ الـ **OOP**.

```
#salary      → private  — ما حدا يوصلها مباشرة
#setSalary   → private  — الـ logic محمية
getSalary    → public   — للقراءة بس
updateSalary → public   — للتعديل عن طريق الـ private method
```

---

## Quick Reference

```javascript
class User {
  static count = 0;  // Static
  #salary;           // Private Field

  constructor(id, username = "Unknown", salary) { // Default Param
    this.id = id;
    this.username = username;
    this.#salary = this.#setSalary(salary);
    User.count++;
  }

  #setSalary(salary) {  // Private Method
    return salary < 6000 ? salary + 500 : salary;
  }

  getSalary() { return this.#salary; }          // Getter
  updateSalary(s) { this.#salary = this.#setSalary(s); } // Setter

  msg() {  // Method (أفضل من Property)
    return `Hello ${this.username}, Salary: ${this.#salary}`;
  }

  static countMembers() {  // Static Method
    return `${this.count} Members`;
  }
}
```
