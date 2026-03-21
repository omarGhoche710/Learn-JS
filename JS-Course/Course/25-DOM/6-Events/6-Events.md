آه، فهمت! أنت تريد تمارين عملية لتطبيق الأحداث. حسناً، إليك لك **تمارين تدريبية** متدرجة من السهل إلى الصعب:

---

## **تمرين 1: عداد بسيط (Easy)**

أنشئ عداد يزيد برقم واحد عند كل click:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { text-align: center; font-family: Arial; padding: 50px; }
    #counter { font-size: 48px; color: blue; margin: 20px 0; }
    button { padding: 10px 20px; font-size: 20px; cursor: pointer; }
  </style>
</head>
<body>

  <h1>عداد بسيط</h1>
  <div id="counter">0</div>
  <button onclick="increment()">زيادة +</button>
  <button onclick="decrement()">إنقاص -</button>
  <button onclick="reset()">إعادة تعيين</button>

  <script>
    let count = 0;

    function increment() {
      count++;
      document.getElementById('counter').innerText = count;
    }

    function decrement() {
      count--;
      document.getElementById('counter').innerText = count;
    }

    function reset() {
      count = 0;
      document.getElementById('counter').innerText = count;
    }
  </script>

</body>
</html>
```

---

## **تمرين 2: تغيير اللون عند الـ Hover (Easy)**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background: lightblue;
      margin: 20px auto;
      transition: 0.3s;
      text-align: center;
      padding-top: 50px;
      font-size: 24px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>غير اللون بالـ Hover</h1>
  <div class="box" 
    onmouseenter="changeColor('lightcoral')"
    onmouseleave="changeColor('lightblue')">
    مرر الفأرة هنا
  </div>

  <script>
    function changeColor(color) {
      document.querySelector('.box').style.background = color;
    }
  </script>

</body>
</html>
```

---

## **تمرين 3: نموذج التحقق من الإيميل (Medium)**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 40px; max-width: 400px; margin: 0 auto; }
    input { width: 100%; padding: 10px; margin: 10px 0; border: 2px solid gray; }
    .error { border-color: red !important; color: red; }
    .success { border-color: green !important; }
    #message { margin-top: 10px; font-size: 14px; }
  </style>
</head>
<body>

  <h1>التحقق من الإيميل</h1>
  <input 
    type="email" 
    id="emailInput"
    placeholder="أدخل بريدك الإلكتروني"
    onblur="validateEmail()"
  />
  <div id="message"></div>

  <script>
    function validateEmail() {
      const email = document.getElementById('emailInput').value;
      const messageDiv = document.getElementById('message');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === '') {
        messageDiv.innerText = 'حقل مطلوب!';
        messageDiv.style.color = 'red';
        return;
      }

      if (emailRegex.test(email)) {
        messageDiv.innerText = '✅ إيميل صحيح!';
        messageDiv.style.color = 'green';
      } else {
        messageDiv.innerText = '❌ إيميل غير صحيح!';
        messageDiv.style.color = 'red';
      }
    }
  </script>

</body>
</html>
```

---

## **تمرين 4: قائمة مهام (Medium)**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; max-width: 500px; margin: 0 auto; padding: 20px; }
    #taskInput { width: 80%; padding: 10px; }
    button { width: 15%; padding: 10px; cursor: pointer; }
    ul { list-style: none; padding: 0; }
    li { 
      background: lightgray; 
      padding: 10px; 
      margin: 5px 0; 
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
    }
    .delete-btn { background: red; color: white; border: none; cursor: pointer; padding: 5px 10px; }
  </style>
</head>
<body>

  <h1>قائمة المهام</h1>
  <div>
    <input type="text" id="taskInput" placeholder="أضف مهمة جديدة..." onkeydown="addOnEnter(event)"/>
    <button onclick="addTask()">إضافة</button>
  </div>
  <ul id="taskList"></ul>

  <script>
    function addTask() {
      const input = document.getElementById('taskInput');
      const task = input.value.trim();

      if (task === '') {
        alert('الرجاء إدخال مهمة!');
        return;
      }

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">حذف</button>
      `;

      document.getElementById('taskList').appendChild(li);
      input.value = '';
      input.focus();
    }

    function addOnEnter(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    }
  </script>

</body>
</html>
```

---

## **تمرين 5: صور متغيرة (Medium)**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { text-align: center; padding: 30px; }
    img { width: 300px; height: 300px; margin: 20px; border: 2px solid black; }
    button { padding: 10px 20px; margin: 5px; cursor: pointer; font-size: 16px; }
  </style>
</head>
<body>

  <h1>معرض الصور</h1>
  <img id="myImage" src="https://via.placeholder.com/300?text=Image+1" alt="صورة"/>
  
  <div>
    <button onclick="changeImage(1)">صورة 1</button>
    <button onclick="changeImage(2)">صورة 2</button>
    <button onclick="changeImage(3)">صورة 3</button>
  </div>

  <script>
    const images = [
      'https://via.placeholder.com/300?text=Image+1',
      'https://via.placeholder.com/300?text=Image+2',
      'https://via.placeholder.com/300?text=Image+3'
    ];

    function changeImage(num) {
      document.getElementById('myImage').src = images[num - 1];
    }
  </script>

</body>
</html>
```

---

## **تمرين 6: نموذج تسجيل متقدم (Hard)**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; max-width: 400px; margin: 0 auto; padding: 20px; }
    .form-group { margin: 15px 0; }
    label { display: block; margin-bottom: 5px; font-weight: bold; }
    input, select { width: 100%; padding: 8px; }
    .error { color: red; font-size: 12px; }
    .success { color: green; font-size: 12px; }
    button { width: 100%; padding: 10px; background: blue; color: white; border: none; cursor: pointer; font-size: 16px; }
  </style>
</head>
<body>

  <h1>نموذج التسجيل</h1>
  <form onsubmit="handleSubmit(event)">
    
    <div class="form-group">
      <label>الاسم الكامل</label>
      <input type="text" id="name" onfocus="clearError('nameError')" onblur="validateName()"/>
      <div id="nameError" class="error"></div>
    </div>

    <div class="form-group">
      <label>البريد الإلكتروني</label>
      <input type="email" id="email" onfocus="clearError('emailError')" onblur="validateEmail()"/>
      <div id="emailError" class="error"></div>
    </div>

    <div class="form-group">
      <label>كلمة المرور</label>
      <input type="password" id="password" onfocus="clearError('passwordError')" onblur="validatePassword()"/>
      <div id="passwordError" class="error"></div>
    </div>

    <div class="form-group">
      <label>تأكيد كلمة المرور</label>
      <input type="password" id="confirmPassword" onfocus="clearError('confirmError')" onblur="validateConfirm()"/>
      <div id="confirmError" class="error"></div>
    </div>

    <button type="submit">تسجيل</button>
  </form>

  <script>
    function validateName() {
      const name = document.getElementById('name').value;
      if (name.length < 3) {
        document.getElementById('nameError').innerText = 'الاسم يجب أن يكون 3 أحرف على الأقل';
        return false;
      }
      document.getElementById('nameError').innerText = '✅';
      document.getElementById('nameError').className = 'success';
      return true;
    }

    function validateEmail() {
      const email = document.getElementById('email').value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        document.getElementById('emailError').innerText = 'البريد الإلكتروني غير صحيح';
        return false;
      }
      document.getElementById('emailError').innerText = '✅';
      document.getElementById('emailError').className = 'success';
      return true;
    }

    function validatePassword() {
      const password = document.getElementById('password').value;
      if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
        return false;
      }
      document.getElementById('passwordError').innerText = '✅';
      document.getElementById('passwordError').className = 'success';
      return true;
    }

    function validateConfirm() {
      const password = document.getElementById('password').value;
      const confirm = document.getElementById('confirmPassword').value;
      if (password !== confirm) {
        document.getElementById('confirmError').innerText = 'كلمات المرور غير متطابقة';
        return false;
      }
      document.getElementById('confirmError').innerText = '✅';
      document.getElementById('confirmError').className = 'success';
      return true;
    }

    function clearError(id) {
      document.getElementById(id).innerText = '';
    }

    function handleSubmit(event) {
      event.preventDefault();
      
      if (validateName() && validateEmail() && validatePassword() && validateConfirm()) {
        alert('✅ تم التسجيل بنجاح!');
        document.querySelector('form').reset();
      } else {
        alert('❌ يرجى تصحيح الأخطاء');
      }
    }
  </script>

</body>
</html>
```
---
### Validation Form 2
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    /> -->
    <style>
      body {
        font-family: Arial;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
      }
      .form-group {
        margin: 15px 0;
      }
      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      input,
      select {
        width: 100%;
        padding: 8px;
        outline: none;
      }
      .error {
        color: red;
        font-size: 12px;
      }
      .success {
        color: green;
        font-size: 12px;
      }
      button {
        width: 100%;
        padding: 10px;
        background: blue;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
    </style>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <form id="registerForm">
      <input type="text" id="username" placeholder="Username" />
      <small></small>

      <input type="email" id="email" placeholder="Email" />
      <small></small>

      <input type="password" id="password" placeholder="Password" />
      <small></small>

      <button type="button" id="registerBtn">Register</button>
    </form>
    <script>
      document.forms[0].addEventListener(
        "focus",
        function (e) {
          if (e.target.tagName === "INPUT") {
            e.target.style.borderColor = "blue";

            const small = e.target.nextElementSibling;

            small.innerHTML = "You are writing here...";
          }
        },
        true,
      );

      document.forms[0].addEventListener(
        "blur",
        function (e) {
          if (e.target.tagName === "INPUT") {
            switch (e.target.id) {
              case "username":
                validationName();
                break;
              case "password":
                validatePassword();
                break;
              case "email":
                validateEmail();
            }
          }
        },
        true,
      );

      document.forms[0].addEventListener("submit", function(e) {
        if (!validateEmail() || !validatePassword() || !validationName()) {
          e.preventDefault();
        } else {
          alert("Registration completed");
          this.reset();
        }
      })

      function validationName() {
        let username = document.getElementById("username");
        const small = username.nextElementSibling;

        if (username.value === "") {
          small.innerHTML = "Name required";
          username.style.borderColor = "red";
          return false;
        } else {
          small.innerHTML = "Good";
          username.style.borderColor = "green";
          return true;
        }
      }

      function validatePassword() {
        const password = document.getElementById("password");
        const small = password.nextElementSibling;

        if (password.value.length < 6) {
          password.style.borderColor = "red";
          small.innerText = "Password shoud be more than 6 characters";
          return false;
        }
        password.style.borderColor = "green";
        small.innerHTML = "Good";
        return true;
      }

      function validateEmail() {
        const email = document.getElementById("email");
        const small = email.nextElementSibling;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regex.test(email)) {
          email.style.borderColor = "red";
          small.innerText = "Email is not valid";
          return false;
        }
        email.style.borderColor = "green";
        samll.innerText = "Good";
        return true;
      }
    </script>
    <script src="/js/main.js"></script>
  </body>
</html>
```

**اختر التمرين اللي يناسبك وابدأ! أي سؤال في التمارين قول لي** 💪