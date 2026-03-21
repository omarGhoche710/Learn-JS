### التمرين 1: بناء قائمة مهام تفاعلية

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>قائمة المهام</title>
    <style>
      .todo-item {
        padding: 10px;
        margin: 5px;
        background: #f0f0f0;
        border-radius: 5px;
      }
      .completed {
        background: #90ee90;
        text-decoration: line-through;
      }
      button {
        margin: 0 5px;
        padding: 5px 10px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="todoList">
      <div class="todo-item">
        <span>شراء الخضروات</span>
        <button class="complete">✓</button>
        <button class="delete">✗</button>
        <button class="move-up">↑</button>
        <button class="move-down">↓</button>
      </div>
      <!-- أضف المزيد -->
      <div class="todo-item">
        <span>الذهاب للجيم</span>
        <button class="complete">✓</button>
        <button class="delete">✗</button>
        <button class="move-up">↑</button>
        <button class="move-down">↓</button>
      </div>
      <div class="todo-item">
        <span>قراءة كتاب</span>
        <button class="complete">✓</button>
        <button class="delete">✗</button>
        <button class="move-up">↑</button>
        <button class="move-down">↓</button>
      </div>
    </div>

    <script>
      // المطلوب:
      // 1. عند الضغط على زر "تحريك للأعلى"، بدل مكان العنصر مع العنصر السابق
      // 2. عند الضغط على زر "تحريك للأسفل"، بدل مكان العنصر مع العنصر التالي
      // 3. عند الضغط على زر "إكمال"، أضف class completed للعنصر
      // 4. عند الضغط على زر "حذف"، احذف العنصر

      // أكتب الكود هنا
      document
        .getElementById("todoList")
        .addEventListener("click", function (e) {
          // e.stopPropagation();
          switch (e.target.className) {
            case "move-up":
              moveUp(e.target.parentElement);
              break;
            case "move-down":
              moveDown(e.target.parentElement);
              break;
            case "complete":
              e.target.parentElement.classList.toggle("completed");
              break;
            case "delete":
              e.target.parentElement.remove();
          }
        });

      function moveUp(el) {
        // let currentElement = el;
        // let previousElement = el.previousElementSibling ? el.previousElementSibling : currentElement;
        // [previousElement.innerHTML, currentElement.innerHTML] = [currentElement.innerHTML, previousElement.innerHTML];
        const prev = el.previousElementSibling;
        if (prev) {
          el.parentElement.insertBefore(el, prev);
        }
      }

      function moveDown(el) {
        const next = el.nextElementSibling;
        if (next) {
          el.parentElement.insertBefore(next, el);
        }
      }
    </script>
  </body>
</html>
```

---

### التمرين 2: معرض الصور مع التنقل

```html
<!doctype html>
<html>
  <head>
    <style>
      .gallery {
        display: flex;
        gap: 10px;
        padding: 20px;
      }
      .image-card {
        border: 2px solid #ddd;
        padding: 10px;
        text-align: center;
      }
      .image-card img {
        width: 200px;
        height: 150px;
        object-fit: cover;
      }
      .active {
        border-color: blue;
        background: #e3f2fd;
      }
    </style>
  </head>
  <body>
    <div class="gallery">
      <div class="image-card">
        <img src="https://via.placeholder.com/200x150/FF6B6B" alt="صورة 1" />
        <p>صورة 1</p>
      </div>
      <div class="image-card active">
        <img src="https://via.placeholder.com/200x150/4ECDC4" alt="صورة 2" />
        <p>صورة 2</p>
      </div>
      <div class="image-card">
        <img src="https://via.placeholder.com/200x150/45B7D1" alt="صورة 3" />
        <p>صورة 3</p>
      </div>
      <div class="image-card">
        <img src="https://via.placeholder.com/200x150/FFA07A" alt="صورة 4" />
        <p>صورة 4</p>
      </div>
    </div>

    <button id="prev">السابق</button>
    <button id="next">التالي</button>

    <script>
      // المطلوب:
      // 1. عند الضغط على "التالي"، انقل class "active" للعنصر التالي
      // 2. عند الضغط على "السابق"، انقل class "active" للعنصر السابق
      // 3. تأكد من عدم تجاوز الحدود (أول وآخر عنصر)
      // استخدم: nextElementSibling و previousElementSibling
      let buttonPrev = document.querySelector("#prev");
      buttonPrev.addEventListener("click", function () {
        let myActive = document.querySelector(".active");
        let prev = myActive.previousElementSibling;
        if (prev) {
          myActive.classList.remove("active");
          prev.classList.add("active");
        }
      });

      document.querySelector("#next").addEventListener("click", function () {
        const active = document.querySelector(".active");
        const next = active.nextElementSibling;

        if (next) {
          active.classList.remove("active");
          next.classList.add("active");
        }
      });

      // أكتب الكود هنا
    </script>
  </body>
</html>
```

---

### التمرين 3: نموذج متعدد الخطوات

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <style>
      .form-container {
        max-width: 500px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #ccc;
      }
      .step {
        display: none;
        padding: 20px;
        background: #f9f9f9;
      }
      .step.active {
        display: block;
      }
      .step h2 {
        color: #333;
      }
      input,
      select {
        width: 100%;
        padding: 8px;
        margin: 10px 0;
      }
      .buttons {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    </style>
  </head>
  <body>
    <div class="form-container">
      <div class="step active" id="step1">
        <h2>الخطوة 1: المعلومات الشخصية</h2>
        <input type="text" placeholder="الاسم" />
        <input type="email" placeholder="البريد الإلكتروني" />
      </div>

      <div class="step" id="step2">
        <h2>الخطوة 2: العنوان</h2>
        <input type="text" placeholder="المدينة" />
        <input type="text" placeholder="الشارع" />
      </div>

      <div class="step" id="step3">
        <h2>الخطوة 3: التأكيد</h2>
        <p>يرجى مراجعة معلوماتك والضغط على إرسال</p>
      </div>

      <div class="buttons">
        <button id="prevBtn">السابق</button>
        <button id="nextBtn">التالي</button>
      </div>
    </div>

    <script>
      // المطلوب:
      // 1. عند الضغط على "التالي"، أخفي الخطوة الحالية وأظهر التالية
      // 2. عند الضغط على "السابق"، أخفي الخطوة الحالية وأظهر السابقة
      // 3. في آخر خطوة، غيّر نص الزر من "التالي" إلى "إرسال"
      // 4. أخفي زر "السابق" في الخطوة الأولى
      // استخدم: nextElementSibling و previousElementSibling

      // أكتب الكود هنا
      updateButtons();
      document
        .querySelector(".form-container")
        .addEventListener("click", function (e) {
          const active = document.querySelector(".active");
          const ele = e.target;
          if (ele.id === "prevBtn") {
            if (checkBefore(active)) {
              checkBefore(active).classList.add("active");
              active.classList.remove("active");
            }
            updateButtons();
          }
          if (ele.id === "nextBtn") {
            if (checkAfter(active)) {
              checkAfter(active).classList.add("active");
              active.classList.remove("active");
            }
            updateButtons();
          }
        });

      function checkBefore(el) {
        const prev = el?.previousElementSibling;
        return prev;
      }

      function checkAfter(el) {
        const next = el?.nextElementSibling;
        return next;
      }

      function updateButtons() {
        const btnPrev = document.querySelector("#prevBtn");
        const btnNext = document.querySelector("#nextBtn");
        const active = document.querySelector(".step.active");
        active.id === "step1"
          ? (btnPrev.style.display = "none")
          : (btnPrev.style.display = "flex");
        active.id === "step3"
          ? (btnNext.textContent = "ارسال")
          : (btnNext.textContent = "التالي");
      }
    </script>
  </body>
</html>
```

---

### التمرين 4: تبديل الألوان بين العناصر

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .color-box {
        width: 100px;
        height: 100px;
        display: inline-block;
        margin: 10px;
        cursor: pointer;
        border: 3px solid transparent;
      }
      .selected {
        border-color: black;
        transform: scale(1.1);
      }
    </style>
  </head>
  <body>
    <div id="colorContainer">
      <div class="color-box" style="background: red;" data-color="red"></div>
      <!-- Text node here -->
      <div class="color-box" style="background: blue;" data-color="blue"></div>
      <!-- Text node here -->
      <div
        class="color-box"
        style="background: green;"
        data-color="green"
      ></div>
      <!-- Text node here -->
      <div
        class="color-box"
        style="background: yellow;"
        data-color="yellow"
      ></div>
    </div>

    <button id="swapNext">بدّل مع التالي</button>
    <button id="swapPrev">بدّل مع السابق</button>

    <script>
      // المطلوب:
      // 1. عند الضغط على مربع، أضف له class "selected"
      // 2. عند الضغط على "بدّل مع التالي"، بدّل الألوان بين المربع المحدد والتالي
      // 3. عند الضغط على "بدّل مع السابق"، بدّل الألوان بين المربع المحدد والسابق
      // تحدي: لاحظ وجود text nodes بين العناصر!
      // استخدم: nextSibling vs nextElementSibling

      // أكتب الكود هنا
            document
        .getElementById("colorContainer")
        .addEventListener("click", function (e) {
          if (e.target.classList.contains("color-box")) {
            document.querySelector(".selected")?.classList.remove("selected");
            e.target.classList.toggle("selected");
          }
        });

      document
        .getElementById("swapNext")
        .addEventListener("click", function (e) {
          const selected = document.querySelector(".selected");
          const next = selected?.nextElementSibling;
          const parent = next?.closest("#colorContainer");
          if (parent) {
            parent.insertBefore(next, selected);
          }
        });

      document
        .getElementById("swapPrev")
        .addEventListener("click", function (e) {
    </script>
  </body>
</html>
```

---

### التمرين 5: شجرة التعليقات (Thread)

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <style>
      .comment {
        margin: 10px 0;
        padding: 10px;
        background: #f5f5f5;
        border-right: 3px solid #ddd;
      }
      .reply {
        margin-right: 30px;
        border-right-color: #4caf50;
      }
      .actions {
        margin-top: 5px;
      }
      .actions button {
        margin-left: 5px;
        padding: 3px 8px;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div id="comments">
      <div class="comment">
        <p><strong>أحمد:</strong> موضوع رائع!</p>
        <div class="actions">
          <button class="reply-btn">رد</button>
          <button class="delete-btn">حذف</button>
        </div>

        <div class="comment reply">
          <p><strong>سارة:</strong> أوافقك الرأي</p>
          <div class="actions">
            <button class="reply-btn">رد</button>
            <button class="delete-btn">حذف</button>
          </div>
        </div>
      </div>

      <div class="comment">
        <p><strong>محمد:</strong> هل يمكن توضيح أكثر؟</p>
        <div class="actions">
          <button class="reply-btn">رد</button>
          <button class="delete-btn">حذف</button>
        </div>
      </div>
    </div>

    <script>
      // المطلوب:
      // 1. عند الضغط على "حذف"، احذف التعليق
      // 2. إذا كان التعليق المحذوف يحتوي على ردود (replies)، احذفها أيضاً
      // 3. عند حذف تعليق، تحقق إذا كان التعليق السابق أو التالي فارغ واحذفه
      // استخدم: parentElement, nextElementSibling, previousElementSibling

      // أكتب الكود هنا
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
          const comment = e.target.closest(".comment");
          const prev = comment.previousElementSibling;
          const next = comment.nextElementSibling;

          comment.remove();

          if (isEmptyComment(prev)) prev.remove();
          if (isEmptyComment(next)) next.remove();
        }
      });

      function isEmptyComment(el) {
        const p = el?.querySelector("p");
        return p && p.textContent.trim() === "";
      }
    </script>
  </body>
</html>
```
