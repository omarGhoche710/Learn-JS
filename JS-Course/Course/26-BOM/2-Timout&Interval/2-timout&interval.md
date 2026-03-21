### Exercise 1: Auto-Save Feature

Build an auto-save system that saves form data every 30 seconds, similar to what Google Docs does.
Challenge:

Use setInterval to trigger saves automatically
Display "Saving..." then "Saved" messages
Stop auto-saving when the user submits the form
Bonus: Only save if the content has actually changed

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: Arial;
        padding: 20px;
      }
      textarea {
        width: 100%;
        height: 150px;
      }
      #status {
        margin-top: 10px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h3>Auto-Save Demo</h3>

    <textarea id="content" placeholder="اكتب هنا..."></textarea>

    <div id="status"></div>

    <br />
    <button id="submitBtn">Submit</button>
    <script>
      const textarea = document.getElementById("content");
      const status = document.getElementById("status");
      const submitBtn = document.getElementById("submitBtn");

      let lastSavedContent = "";
      let autoSaveInterval = setInterval(autoSave, 5000); // 30 seconds

      function autoSave() {
        const currentContent = textarea.value;

        if (currentContent !== lastSavedContent) {
          status.textContent = "Saving...";

          setTimeout(() => {
            lastSavedContent = currentContent;
            status.textContent = "Saved";
          }, 1000);
        }
      }

      submitBtn.addEventListener("click", function () {
        clearInterval(autoSaveInterval);
        status.textContent = "Form submitted. Auto-save stopped.";
      });
    </script>
  </body>
</html>
```
---

###  Exercice 2: Typing Speed Test

Create a typing test that gives the user 60 seconds to type as much as they can, then calculates their words per minute (WPM).
Challenge:

Start a 60-second timer when the user begins typing
Display remaining time (updating every second)
When time runs out, disable the input field
Calculate and display WPM and accuracy
Add a "Restart" button to try again

```html 
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: Arial;
        padding: 20px;
      }
      textarea {
        width: 100%;
        height: 150px;
      }
      #status {
        margin-top: 10px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h3>Auto-Save Demo</h3>

    <textarea id="content" placeholder="اكتب هنا..."></textarea>

    <div id="remainingTime">10</div>
    <div id="wpn"></div>

    <br />
    <button id="restartBtn">Restart</button>
    <script>
      const textarea = document.getElementById("content");
      const remainingTime = document.getElementById("remainingTime");
      const restartBtn = document.getElementById("restartBtn");
      let wpn = document.getElementById('wpn');
      let id;
      let intervalId;

      setTimeoutFunction();

      function setTimeoutFunction() {
        intervalId = setInterval(function() {
          remainingTime.innerHTML -= 1;
          if (remainingTime.innerHTML == "0") {
            clearInterval(intervalId);
          }
        }, 1000)
        id = setTimeout(wordCount, 10000); // 60 seconds
      }

      function wordCount() {
        const currentContent = textarea.value;
        let wordsCount = currentContent.trim().split(" ").filter(word => word != "").length;

        textarea.disabled = true;
        wpn.innerHTML = wordsCount;
      }

      restartBtn.addEventListener("click", function () {
        wpn.innerHTML = "";
        remainingTime.innerHTML = "10";
        textarea.disabled = false;
        textarea.value = "";
        clearInterval(intervalId);
        clearTimeout(id);
        setTimeoutFunction();
      });
    </script>
  </body>
</html>
```
