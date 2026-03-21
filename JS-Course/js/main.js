/* 
  Output To Screen (
    - Window.alert: - Bad using Because it Stopping the Page Until User Click OK
                    - Making When the page is loaded
    - Document.write: - Bad Using 
                      - New Using: document.CreateElement
    - console.log
  )
*/

/*
  Console (
    Methods:
      - log
      - error => For Errors
      - table => (
          // table OF Array
          console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

          // table OF Array OF Objects
          let students = [
            {name: "Omar", age: 20},
            {name: "Hamza", age: 22},
            {name: "Saleh", age: 25},
          ];
          console.table(students);

          // table OF Objects
          let student = {
            name: "Omar",
            age: 20,
            country: "Lebanon"
          };
          console.table(student);
        )
      - group => (
          Example: 
                console.group("Group 1");
                console.log("Message One");
                console.log("Message Two");
                console.group("Child Group");
                console.log("Message One");
                console.log("Message Two");
                console.group("Grand Child Group");
                console.log("Message One");
                console.log("Message Two");
                console.groupEnd();
                console.groupEnd();
                console.groupEnd();
                console.group("Group 2");
                console.log("Message One");
                console.log("Message Two");
        )

    Styling:
      - Syntax: ("Hello from %cJs File", "color: red");
      - If we don't put %c it will take the styl as a text

    Web API: The console is not a process include in JS
              it is from WEB API (Application Programming interface)
              that provides services and methods, then we use it 
              by JS.
  )
  

*/

/*
  ES6 (
    - Bref OF: EcmaSrcipt 6
    - Work: It's a company that put all the rules
            related to a language like JS.
            The all developers should follow these rules.
    - EcmaSrcipt 6 - New Features: To see the new upates
    - Example:
      new(
          let name = "omar"
          console.log(`Hello ${name}`);
      ) 
      old(
          var name = "omar"
          console.log("Hello " + name);
      )
  )

*/

/*
  Data Types Intro (
    - String => console(typeof "Omar");
    - Number => console(typeof 5000.44);
    - Array(the type is Object but we call it Array) => console(typeof [10, 15, 17]);
    - Object => null
    - Object => console.log(typeof {
                  name: "Omar",
                  age: 20,
                  country: "Lebanon"
                  });
    - Boolean => true Or false
    - Undefined => undefined
    - Big Int
    - Symbol
  )

*/

/*
  Variables Intro (
    - var => Old Way To Declare Variable
    - let => New Way To Declare Variable
    - const => New Way To Declare Constant Variable (We Can't Change Its Value)

    - Naming Rules: (
        - Can't Start With Number
        - Can't Contain Spaces
        - Can't Be Reserved Keywords
        - Can Start With: Letter - _ - $
      )

    - If we have <div id="hello">Hello</div>, the id is as a variable name, we can:
      console.log(hello);// Accessing to the element directly by its id name
      console.log(hello.textContent);// Getting the text content of the element
      hello.innerHTML = "Omar";// Changing the text content of the element

  )

*/

/*
  Var (
    - Redeclare (Yes) => That will make many Declares Of a One Variable
    - Access Before Declare (Undefined) => You cannot Know what the error
    - Variable Scope Drama [Added To Window] (Yes) => Each variable created can we access with the object window
    - Block or Functiom Scope
  )

  Let (
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama (No)
    - Block or Functiom Scope

  Const (
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama (No)
    - Block or Functiom Scope
  )
)
*/

/*
  Variable Scope Drama (
    - Global Scope (
      var x = 1;    // Global scope
      let y = 2;    // Global scope
      const z = 3;  // Global scope

      Example:
        let carName = "Volvo";
        // code here can use carName

        function myFunction() {
        // code here can also use carName
        }
    )

    - Function Scope (
      function myFunction1() {
        var carName = "Volvo";  // Function Scope
      }

      function myFunction2() {
        let carName = "Volvo";  // Function Scope
      }

      function myFunction3() {
        const carName = "Volvo";  // Function Scope
      }
      Example: 
         // code here can NOT use carName
        function myFunction() {
          let carName = "Volvo";
          // code here CAN use carName
        }
        // code here can NOT use carName
      )

    - Block Scope (
      If We have Block the variable defined inside it shoud not
      be accessed outside it.The [var] allow that but not in 
      [let] and [const]
      Example:
        {
          let x = 2;
        }
        // x can NOT be used here

        {
          var x = 2;
        }
        // x CAN be used here
    )
  )

*/

/*
String Syntax And Character Escape Sequences (
  \ : Escape(Ignore) + Line Continue
  \n: new Line
  \t: tab Space
  \\: Backslash
  \': Single Quote
  \": Double Quote
)
*/

/*
  Concatenation (
    let a = "We Love";
    let b = "JavaScript";

    document.write(a + " " + b);
    document.write(a, b); => make concatenation with space
  )
*/

/*
  Template Literals (Template Strings) (
    let a = "We Love";
    let b = "JavaScript";
    let c = "And";
    let d = "Programming";
    document.write(`${a} ${b} ${c} ${d}`);
    - We can put "", '', \\ inside it

    Example:
      let title = "Elzero";
      let desc = "Elzero Web Shcool";
      let markUp = `
        <div class="card">
          <div class="child">
            <h1>${title}</h1>
            <p>${desc}</p>
          </div>
        </div>
      `;
      document.write(markUp.repeat(5));
      repeat:
        we can't make repeat for a number or undefined
        or array
  ) 
*/

/*
  Arithmetic Oprators(
    - : Subtraction
    * : Multiplication
    / : Division
    % : Modulus (Remainder)
    ** : Exponentiation (Power)
    + : Addition    
    ++ : Increment [posfix & prefix] => postfix: x++ , prefix: ++x
    -- : Decrement [posfix & prefix] => postfix: x-- , prefix: --x
    The Postfix Increment/Decrement operators return the value before incrementing/decrementing
    Example:
      let a = 10;
      console.log(a++); // 10
      console.log(a);   // 11
    The Prefix Increment/Decrement operators return the value after incrementing/decrementing
    Example:
      let a = 10; 
      console.log(++a); // 11

    note: 
      console.log(10 - "omar"); // NaN(typeOf is number)
      We can't use ++ before or after a value that is not a variable
      Ex:
        (
          let a = 10;
          ++(10);
          ++"20";
          ++(a + b);
          ++-a; // we can't because -a is not a variable, the solution is to put it between parenthesis
          ex: ++(-a)
        ) => All will give Error
  )
*/

/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It] 
  - Number() [function that converse string to a Number]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true

  Ex:
    console.log(+100); // 100
    console.log(+"100");
    console.log(+"-100");
    console.log(+"osama"); // NaN
    console.log(+"15.5");
    console.log(+0xFF); // 255
    console.log(+null); // 0
    console.log(+true); // 1
    console.log(+false); // 0
*/

/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
  - ++/--

  Ex:
  let a = "10";
  let b = 20;
  let c = true;

  console.log(a + b); // 1020 [because + will be concatention]
  console.log(+a + b); // 30 [because + will be sum]
  console.log(a - b); // -10 [because the 10 here will be a number by casting
                              But If a = "jswxh" => NaN]
  console.log("" - 2); // -2 [because +"" = 0, then by casting the "" will be 0 if the
                              the operator is -]
  console.log(false - true); // -1
  console.log(b + c); // 21
  console.log(a + b + c); // 1020true
  console.log(+a + b + c); // 31

  let a = "-10";
  console.log(-(++a)); // 9 [automatic casting in ++a to number then negation -9]

*/

/*
  Assignment Operators(
      let a = 10;
      a += 20;
      a /= 20;
      a -= 20;
      a %= 20;
  )
*/

/*
  Number( 
    - Double Precision
    - Syntactic Sugar "_" => the JS ignore the underscore between the numbers
    - e => console.log(1e6); // 1 * 10^6
    - ** => Exposant
    - Number + BigInt  
    - Number Max Number => Number.MAX_VALUE
    - Number Min Number => Number.MIN_VALUE
    - Number Safe Integer Max => Number.MAX_SAFE_INTEGER
    - Number Safe Integer Min => Number.MIN_SAFE_INTEGER

    note: - Number => It's a function that has caracteristiques
            ex: Number.MAX_VALUE, Number.MIN_VALUE
          - Number safe integer => It's the integer that can be
            accurately represented and compared in JS
            ex: if we compared between two numbers that exceed
                the safe integer limit it will give wrong result
                because that we have to use BigInt for that
          - BigInt => It's a special type of number that can
                      represent integers with arbitrary precision.

  )
*/

/*
  Number AS A Function(
    let x = Number("123");
    console.log(x); // 123
  )

  Number As An Object (
    let y = new Number("123");
    console.log(y); // Number {123}
  )
*/

/*
  Number Methods(
    - toString() => Convert Number To String
    - toFixed() => Format Number To Specific Decimal Places and convert it to String
    - parseInt() => Convert String To Integer Number
    - parseFloat() => Convert String To Float Number
    - isInteger() => Check If The Number Is Integer or Not (Return Boolean)
    - isNaN() => Check If The Value Is NaN or Not (Return Boolean)
                [value is NaN when we do an invalid mathematical operation]
      
    Ex:
      console.log((100).toString());
      console.log(100..toString());
      console.log(100.55555.toFixed(2)); // If the next number is > than 4 we
                                            increase the current value a one
      console.log(parseInt("100 Osama")); // 100[just if the number is the fisrt], but if we use number or +, it will
                                            return NaN
      console.log(Number.isInteger(100));
      console.log(Number.isNaN("osama" / 2)); // true

    EX:
    function addition(a, b) {
      if(Number.isNaN(+a) || Number.isNaN(+b)) {
        return "youl will be enter numbers";
      }
      return +a + +b;
    }

    let result = addition("omar", 7);
    console.log(result);

    Difference Between Number.isNaN() And Global isNaN():
      - Number.isNaN() => It Doesn't Perform Type Coercion
      - Global isNaN() => It Perform Type Coercion

      console.log(Number.isNaN("Hello")); // false
      console.log(isNaN("Hello")); // true

      if we want to make the first like the second we have to do:
      console.log(Number.isNaN(+ "Hello")); // true

  )
*/

/*
  Math Object (
    - round() => Rounds To The Nearest Integer
    - ceil() => Rounds Up To The Nearest Integer
    - floor() => Rounds Down To The Nearest Integer
    - min() => Returns The Smallest Of Zero Or More Numbers
    - max() => Returns The Largest Of Zero Or More Numbers
    - pow() => Returns The Base to The Exponent Power
    - random() => Returns A Random Number Between 0 And 1
    - trunc() => Removes The Decimal Part Of The Number

    Ex: 
      console.log(Math.round(99.2)); // 99
      console.log(Math.round(99.5)); // 100

      console.log(Math.ceil(99.2)); // 100
      console.log(Math.ceil(99.9)); // 99

      console.log(Math.min(10, -2, 34, 44, -1));
      console.log(Math.max(10, -2, 34, 44, -1));

      console.log(Math.pow(2, 4)); // 16

      console.log(Math.random());

      console.log(Math.trunc(99.5)); // 99
  )
*/

/*
  String Methods (
    - Access With Index
    - Access With charAt()
    - length
    - trim()
    - toUpperCase
    - toLowerCase()
    - Chain Methodsv
    Ex:
      let my_name = "  omar";
      my_name = my_name.trim();
      console.log(my_name.length)
      console.log(my_name[0])
      console.log(my_name.charAt(0))
      console.log(my_name.toUpperCase())
      console.log(my_name.toLowerCase())
      console.log(my_name.toLowerCase())

      console.log(my_name.charAt(2).toUpperCase())

      // IF I want to return the letter m [uppercase] with trim the name
      console.log(theName.trim().charAt(2).toUpperCase());

      Example Of Using charAt:
        let username = document.getElementById("username").value;

        // بدنا أول حرف
        let first = username.charAt(0);

        if (first.toLowerCase() !== "a") {
          console.log("الاسم لازم يبدأ بحرف A");
        }
        /// If we using here [] and the user don't get anything
        the index 0 will return undefined and there is not a method
        with undefined, otherwise if we use charAt it will return "".

  )
*/

/*
  String Methods Part 2 (
    - indexOf(Value [Mandatory], Start [Optional] 0)
    - lastIndexOf(Value [Mandatory], Start [Optional] length - 1)
    - slice(Start [Mandatory], End{not include} [Optional] length)
    - repeat(Number Of Repetition [Mandatory])
    - split(Separator [Optional], Limit [Optional])

    let a = "Elzero Web School";

    EX:
      console.log(a.indexOf("web")); // 7
      console.log(a.indexOf("web", 8)); // -1

      console.log(a.indexOf("o")); // 5
      console.log(a.lastIndexOf("o")); // 15
      console.log(a.lastIndexOf("o", 6)); // 5[Because it research from the end to the start]

      console.log(a.slice(0)); // Elzero Web School
      console.log(a.slice(2, 6)); // zero

      console.log(a.slice(-5, -3)) // ch

      console.log(a.repeat(4));

      console.log(a.split()); // [Elzero Web School]
      console.log(a.split("")); // ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
      console.log(a.split(" ")); // ['Elzero', 'Web', 'School']

      console.log(a.split(" ", 2)); // ['Elzero', 'Web']

*/

/*
  String Methods Part 3 (
    - substring (Start [Mand], End [Opt] Not Including End) (
      - Start > End will Swap
      - Start < 0 It Start from 0
      - Use Length To Get Last Character  
    ) 
    - substr (Start [Mand], Characters To Extract) (
      - Start >= Length = ""
      - Negative Start From End
    )
    ===== Return TRUE Or FALSE ====
    - includes (Value [Mand], Start [Opt] Default 0) [ES6] 
    - startsWith (Value [Mand], Start [Opt] Default 0) [ES6]
    - endsWith (Value [Mand], length [Opt] Default Full length) [ES6]
  )

  EX:
  let a = "Elzero Web School";

  console.log(a.substring(2, 6)); // zero
  console.log(a.substring(6, 2)); // --> swap --> zero
  console.log(a.substring(-10, 6)); // 0 --> 6
  console.log(a.substring(a.length - 1)); // Last Character
  console.log(a.substring(a.length - 5)); // chool
  console.log(a.substring(a.length - 5, a.length - 3)); // ch

  console.log(a.substr(0, 6)); // Elzero
  console.log(a.substr(17)); // ""
  console.log(a.substr(-5, 2)); // ch

  console.log(a.includes("Web")); // true
  console.log(a.includes("Web", 8)); // false

  console.log(a.startsWith("E")); // true
  console.log(a.startsWith("E", 2)); // false
  console.log(a.startsWith("z", 2)); // true

  console.log(a.endsWith("l")); // true
  console.log(a.endsWith("l", 6)); // false
  console.log(a.endsWith("o", 6)); // true
*/

/*
  Comparison Operators (
    - == => Equal Value (With Type Coercion)
    - != => Not Equal Value (With Type Coercion)

    - === => Equal Value And Equal Type (Without Type Coercion)
    - !== => Not Equal Value Or Not Equal Type (Without Type Coercion)

    - >   =>   Greater Than
    - >=  =>   Greater Than Or Equal
    - <   =>   Less Than
    - <=  =>   Less Than Or Equal

    EX:
      console.log(10 == "10"); // true
      console.log(-100 == '-100'); // true
      console.log(10 != "10"); // false

      console.log(10 === "10"); // false
      console.log(10 !== "10"); // true

      console.log(typeof "Omar" === typeof "Ahmad");
  )
*/

/*
  Logical Operators (
    - && => And => All Conditions Should Be True
    - || => Or  => One Condition Should Be True
    - !  => Not => Negation
  )  
*/

/*
  Control Flow (
    - if
    - else if
    - else

    EX:
      let price = 100;
      let discount = false;
      let discountAmount = 30;
      // let country = "Egypt";
      // let country = "Syria";
      let country = "KSA";

      if (discount === true) {
        price -= discountAmount;
      } else if (country === "Egypt") {
        price -= 40;
      } else if (country === "Syria") {
        price -= 50;
      } else {
        price -= 10;
      }

      console.log(price);
*/

/*
  Nested If Condition(
      let price = 100;
      let discount = false;
      let discountAmount = 30;
      let country = "Egypt";
      // let country = "Syria";
      // let country = "KSA";
      let student = true;

      if (discount === true) {
        price -= discountAmount;
      } else if (country === "Egypt") {
        if (student) {
          price -= discountAmount + 30;
        } else {
          price -= discountAmount + 10;
        }
      } else if (country === "Syria") {
        price -= 50;
      } else {
        price -= 10;
      }

      console.log(price);
  )
*/

/*
  Conditional (Ternary) Operator (
    condition ? IF  true : IF false
  )
*/

/*
  Conditional Ternary Operator (
      let theName = "Ahmed";
      let theGender = "Male";
      let theAge = 60;

      let result = theGender === "Male" ? "Mr" : "Mrs";

      console.log(`Hello ${result} ${theName}`);

      let result2 =
        theAge < 20
          ? "Less than 20"
          : theAge >= 20 && theAge <= 60
          ? "20 To 60"
          : theAge > 60
          ? "greater than 60"
          : "Unknown";

      console.log(result2);
  )
*/

/*
  Logical Or || (
    - NUll
    - Undefined
    - Any Falsy Value

    How to know The Falsy Value?
      We use The Constructor Boolean
      EX: 
        console.log(Boolean(100)); // true
        console.log(Boolean(-100)); // true
        console.log(Boolean(0)); // false
        console.log(Boolean("")); // false
    
    EX:
      console.log(`The price is ${price}`); // null if price = null;
      console.log(`The price is ${price}`); // undefined if price;
      console.log(`The price is ${price}`); // 0 if price = 0;
      console.log(`The price is ${price || 200}`); // 200

  )

  Nullish Coalescing Operator ?? (
    - Null
    - Undefined

    Ex:
      let price = 0;
      console.log(`The price is ${price ?? 200}`); // 0
  )
*/

/*
  Switch Statement (
    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }
    - Default Ordering
    - Multiple Matches
    - ===

    EX:
      let day = 0;
      switch(day) {
        case 0: 
          console.log("Saturday");
          break;
        // case 0: console.log("Sunday");
        //         break;
        case 1:
          console.log("Sunday");
          break;
        case 2: 
        // case 3:
          console.log("Monday");
          break;
        default:
          console.log('Unknown Day');
      }
)
*/

/*
  Arrays (
    - Definition: It's A Container That Can Hold More Than One Value
    - Creation: (
        - let myArray = [];
        - let myArray = new Array();
      )
    - Accessing Elements: (
        - let myArray = [10, 20, 30, 40, 50];
        - myArray[0]; // 10
    - Nested Arrays: (
        - let myArray = [10, 20, [30, 40], 50];
        - myArray[2][0]; // 30
      )
    - changing Elements: (
        - let myArray = [10, 20, 30, 40, 50];
        - myArray[0] = 100; // myArray is now [100, 20, 30, 40, 50]
      )
    - check For Array: (
        - Array.isArray(myArray); // true
      )

  EX:
    let myFriends = ["Ahmed", "Nabil", "Mohamed", ["karim", "Saleh"]];

    console.log(`Hello ${myFriends[0]}`);
    console.log(`Hello ${myFriends[2]}`);
    console.log(`Hello ${myFriends[1][2]}`); // I want to get the third char of Nabil

    console.log(`Hello ${myFriends[3][0][3]}`); // The fourth Element Of Karim

    console.log(myFriends);
    myFriends[0] = "Gamal";
    // myFriends[3] = "Sameh";
    myFriends[3] = ["omar", 'Oussama'];
    console.log(myFriends);

    console.log(Array.isArray(myFriends)); // true

  Note:
    The console take the reference of the array on each updating
    for example if i put in the first console.log(array) and then
    array[0] = value the console take the new array and print it
  )
*/

/*
  Arrays Methods (
    - length

        EX:
          let myFriends = ["Ahmed", "Nabil", "Mohamed", "Karim"];

          console.log(myFriends.length); // 4

          // myFriends[6] = "Gamal"; // he will put 2 case empty then the new value

          myFriends[myFriends.length - 1] = "Talal"; // Update the last Element
          myFriends[myFriends.length] = "Gamal"; // New Element

          myFriends.length = 3; // Make the length

          console.log(myFriends);

          // console.log(myFriends.length); // 7

    - unshift() => Add New Element(s) To The Beginning Of The Array
    - push() => Add New Element(s) To The End Of The Array
    - shift() => Remove The First Element From The Array and return the element deleted
    - pop() => Remove The Last Element From The Array 
  
      Ex:
        let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

        console.log(myFriends);

        myFriends.unshift("Oussama", "Nabil");

        console.log(myFriends);

        myFriends.push("Samah", "Iman");

        console.log(myFriends);

        let first = myFriends.shift(); // Return the value deleted in a variable fisrt then 
                                      // and remove it from the fisrt

        console.log(myFriends);

        console.log(first);

        let last = myFriends.pop(); // Return the value deleted in a variable last then 
                                      // and remove it from the last

        console.log(myFriends);

        console.log(last);
  
  - indexOf(search Element, From Index [Opt]) => Return The Index Of The Element
  - lastIndexOf(search Element, From Index [Opt]) => Return The Last Index Of The Element
  - includes(search Element, From Index [Opt]) => Return True Or False If The Element Found

      Ex:
        let myFriends = [" Ahmed  ", "Mohamed", "Sayed", "Alaa", " Ahmed"];

        console.log(myFriends.indexOf("Ahmed"));
        console.log(myFriends.indexOf("Ahmed", 2));

        console.log(myFriends.lastIndexOf("Ahmed"));
        console.log(myFriends.lastIndexOf("Ahmed", -2));

        for (let i = 0; i < myFriends.length; i++) {
          myFriends[i] = myFriends[i].trim();
          // console.log(myFriends[i]);
        }
        console.log(myFriends);

        if (myFriends.includes("Ahmed")) {
            console.log("Ahmed is included");
        } else {
          console.log("Ahmed is not included"); 
        }

        if (myFriends.indexOf("Ahed") === -1) {
          console.log("Not Found");
        }

        if (myFriends.indexOf("Ahed") === -1) {
          console.log("Not Found");
        }
  
  - sort() => Sort The Array Elements As Strings In Ascending Order
  - reverse() => Reverse The Array Elements Order

  EX:
    let mom = [10, -10, 20, "omar", 90, 20, -23, 23, 100, "wafi2"];
    mom.sort().reverse();
    console.log(mom);

  note : the sort doesn't make the array from the lower to the higher
        it just make the order reference the alphabet order

  - slice
  - splice (Start [Mant], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt] )
  -- If Negative => Start From The End

  EX:
      let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
      console.log(myFriends);
      console.log(myFriends.slice());
      console.log(myFriends.slice(1, 3));
      console.log(myFriends.slice(-3, -1));
      console.log(myFriends);

      myFriends.splice(0, 1, "Sameer", "Samara");

      console.log(myFriends);
    
  - concat (array, array, item, array defined) => Return A New Array
  - join (Seprator)

  EX:
    let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
    let myNewFriends = ["Samar", "Sameh"];
    let schoolFriends = ["Haytham", "Shady"];


    let allFriends = myFriends.concat(myFriends, schoolFriends, "Gameel", [1, 2]);
    console.log(allFriends);

    console.log(allFriends.join()); // sep = ,
    console.log(allFriends.join("")); // sep =
    console.log(allFriends.join(" @ "));
    console.log(allFriends.join("|"));
    console.log(allFriends.join("|").toUpperCase());
*/

/*
  Loop
  - For (
    - ([1] Initial Expression; [2] Condition; [3] Increment Expression) {
        // code block to be executed
      }
    
    Example:
    let myFriends = [1, 2, "Osama", "Ahmed", "Ali", "Amira"];
    let onlyName = [];
    for (let i = 0; i <= myFriends.length; i++) {
      if (typeof myFriends[i] === "string") {
        onlyName.push(myFriends[i]);
      }
    }
    console.log(onlyName);
    
  )
  EX:
    let array = ['omar', 1, 2, "Omar", 4, 5, "Omal"];

    let j = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "number") {
        continue;
      }
      array[j] = array[i];
      j++;
    }
    console.log(j);
    array.splice(j, array.length - j);
    console.log(array);
*/

/*
  Loop
  - Nested Loops

  Ex:
    let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
    let colors = ["Red", "Green", "Black"];
    let models = [2020, 2021];
    for (let i = 0; i < products.length; i++) {
      console.log("#".repeat(15));
      console.log(`# ${products[i]}`);
      console.log("#".repeat(15));
      console.log("Colors: ");
      for(let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
      }
      console.log("Models: ");
      for(let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
      }
    }

*/

/*
  Loop Control
  - Break
  - Continue
  - Label

// let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad",30, 40, "Monitor"];
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  if (products[i] === "Pen") break;
}

for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") continue;
  console.log(products[i]);
}
this method will everything but no number

for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "string") {
    console.log(products[i]);
  }
}
This method will print just the string

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j <= colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
*/

/*
Practice – Add Products To Page:
    let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
    let colors = ["Red", "Green", "Black"];
    let showCount = 3;

    document.write(`<h1>Show ${showCount} Products</h1>`);

    for (let i = 0; i < showCount; i++) {
      document.write("<div>");
      document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
      for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
      }
      document.write(`<p>${colors.join(' | ')}`);
      document.write("</div>");
    }
*/

/* 
  While (condition) {
  }
  Ex:
    let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

    let i = 0;
    while (i < products.length) {
      console.log(products[i]);
      if (products[i] === "Pad") {
        break;
      }
      i++;
    }
*/

/*
  do {
  } while (condition)

  EX:
    let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

    let i = 0;
    do {
      console.log(products[i]);
      if (products[i] === "Pad") {
        break;
      }
      i++;
    } while(false);

*/

/*
  Function (
    - we have: User-Defined and Built In
  )

  EX:
    console.log(typeof console.log); // function

    function sayHello(userName) {
      console.log(`Hello ${userName}`);
    }

    sayHello("Omar");
*/

/*
  Advanced Example (
    function sayHello(userName, age) {
      if (age < 20) {
        console.log('App is Not Suitable For You');
      } else {
        console.log(`Hello ${userName}, Your Age is ${age}`);
      }
    }

    sayHello("Omar", 20);
    sayHello("Oussama", 16);

    function generateYears(start, end, exclude) {
      let tmp;
      if (start > end) {
        tmp = start;
        start = end;
        end = tmp;
      }
      for (let i = start; i <= end; i++) {
        if (i === exclude) continue;
        console.log(i);
      }
    }
    generateYears(2030, 2013, 2012);
  ) 
*/

/* 
  Function (
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed]
    - Interrupting
  )

  Ex:
  function calc(num1, num2) {
    return; // it will put semicolon automated
    // num1 + num2; // Error We can make line terminator
    //let x = 1; // Unreadable
  }

  let result = calc(10, 20);

  console.log(result); // Undefined

  Ex:
  function generate(start, end) {
    for (let i = start; i <= end; i++) {
      if (i === 15) return "Interrupting";
      console.log(i);
    }
  }
  console.log(generate(10, 20));
*/

/*
  Function ( 
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategies [condition + Logical Or]
    - ES6 Method

    EX:
    function sayHello(username, age = "Unknown") {
      // if (age === undefined) {
      //   age = "Unknown";
      // }
      // age = age || "Unknown";
      return `Hello ${username} Your Age Is ${age}`;
    }
    console.log(sayHello("Osama"));
  )
*/

/*
  Function
  - Rest Parameters
  - Only One Allowed => we can't define many rest parameters
  - Must Be Last Element

  Ex: 
  function calc(...numbers) {
    // console.log(Array.isArray(numbers)); \\true
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return `The result is ${result}`;
  }
  console.log(calc(10, 20, 10, 30, 50));
*/

/*
  Big Example:
      function showInfo(un = "Un", age = "Un", rate = 0, show = "Yes", ...skills) {
        document.write(`<div>`);
        document.write(`<h2>Welcome, ${un}</h2>`);
        document.write(`<p>Age: ${age}</p>`);
        document.write(`<p>Hour Rate: $${rate}</p>`);
        if (show === "Yes") {
          if (skills.length > 0) {
            document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
          } else {
            document.write(`<p>Skills: No Skills</p>`);
          }
        } else {
          if (skills.length > 0) {
            document.write(`<p>Skills Is Hidden</p>`);
          } else {
            document.write(`<p>Skills: No Skills</p>`);
          }
        }
        document.write(`</div>`);
      }
      // showInfo(undefined, 20, 10, "Yes", "HTML", "CSS");
      showInfo("Omar", 20, 10, "No");
*/

/*
  Function (
  
    - Anonymous Function
    - Calling Named Function VS Anonymous Function
    - Argument To Other Function
    - Task without Name
    - SetTimeout
    
    Using: We use it when we make an event
  )
  Ex:
      console.log(calc(10, 20)); // No Error

      function calc(num1, num2) {
        return num1 + num2;
      }
      // ------------------------------------
      // console.log(calculator(10, 20)); // Uncaught ReferenceError: Cannot access 'calculator' before initialization

      let calculator = function (num1, num2) {
        return num1 + num2;
      };

      console.log(calculator(10, 20));
      // ------------------------------------

      document.getElementById("show").onclick = function () {
        console.log("Show");
      };

      // ------------------------------------

      setTimeout( function() {
        console.log("Good");
      }, 1000);

      // ------------ Use A Function In Event ----------------
      function sayHello() {
        console.log("Hello");
      }
      document.getElementById("show").onclick = sayHello;
*/

/*
Return Nested Function
/// Example 1
// function sayMessage(fName, lName) {

//   let message = `Hello`;

//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }

//   return message;
// }

// console.log(sayMessage("omar", "ghoch"));

/// Example 2
// function sayMessage(fName, lName) {

//   let message = `Hello`;

//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }

//   return concatMsg();
// }

/// Example 3
// function sayMessage(fName, lName) {
//   let message = `Hello`;

//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }

//   return concatMsg();
// }
*/

/*
  Function (
    - Arrow Function
    - Regular VS Arrow [Param + No Param]
    - Multiple Lines
  )

// let print = function() {
//   return 10;
// };

// let print = () => {
//   return 10;
// };

///-- IF ONE STATEMENT --
// let print = () => 10;
// let print = _ => 10;

/// -- One Parameter
// let print = function(num) {
//   return num;
// };

// let print = (num) => num;
// let print = num => num; // Just IF One Parameter

/// -- Two Paramteres
// let print = function(num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));
*/

/*
  Scope (
    - Global And Local Scope
  )
  EX:
    var a = 1;
    let b = 2;
    // If we delete these variables
    // we can't access them from the Function

    function showText() {
      var a = 10;
      let b = 20;
      console.log(`Function - From Local ${a}`);
      console.log(`Function - From Local ${b}`);
      // main.js:1368 Uncaught ReferenceError: Cannot access 'b' before initialization
      // at showText
      // Because The Function find the nearst variables declared
      // If these variables exists but after the calling, an error
      // message will be t
    }

    console.log(`From Global ${a}`);
    console.log(`From Global ${b}`);

    showText();

  EX 2:
    var a = 1;
    let b = 2;
    // If we delete these variables
    // we can't access them from the Function

    function showText() {
      a = 10;
      b = 20;
      console.log(`Function - From Local ${a}`);
      console.log(`Function - From Local ${b}`);
      // If we reassign the globl value it will reassigned
    }

    showText();
    console.log(`From Global ${a}`); // 10
    console.log(`From Global ${b}`); // 20

    Ex:
      
*/

/* 
  Scope (
    - Block Scope [IF, Switch, For]
  )

/// Case 1
// var x = 10;

// if (10 === 10) {
//   var x = 50;
// }
// console.log(x); // 50 Because the Var Is Not A BLock Scope

/// Case 2
// let x = 10;

// if (10 === 10) {
//   var x = 50; // Cannot redeclare block-scoped variable 'x
// }// [Illegal Shadowing]
// console.log(x);

/// Case 3
// var x = 10;

// if (10 === 10) {
//   let x = 50; 
//   console.log(`From If Scope: ${x}`); // 50
// }
// console.log(`From Global: ${x}`); // 10 Because the Let is A Global Scope

/// Case 4
// var x = 10;

// if (10 === 10) {
//   console.log(`From If Scope: ${x}`); // 10
// }
// console.log(`From Global: ${x}`); // 10 Because the Let is A Global Scope

/// Case 5
// var x = 10;

// if (10 === 10) {
//   console.log(`From If Scope: ${x}`); //  Cannot access 'x' before initialization
//   let x = 50;
// }
// console.log(`From Global: ${x}`); // 10 Because the Let is A Global Scope

/// Case 6
// var x = 10;

// if (10 === 10) {
//   console.log(`From If Scope: ${x}`); // 10
//   var x = 50;
// }
// console.log(`From Global: ${x}`); // 50
*/

/*
  Scope(
    - Lexcical Scope
  )

  Search (
    - Execution Context
    - Lexical Environment
  )
  EX:
    function parent() {
      let a = 10;

      function child() {
        console.log(a);
        console.log(`From Child: ${b}`);// main.js:1477 Uncaught ReferenceError: b is not defined

        function grand() {
          let b = 100;
          console.log(`From Grand: ${a}`);
          console.log(`From Grand: ${b}`);
        }
        grand();
      }
      child();
    }

    parent();
*/

/*
  Currying Function Technique OR Function Chine (
  )
  EX:   
    // function sum() {
    //   let x = 10;
    //   return function() {
    //     console.log(x);
    //   }
    // }
    // sum(); // 
    // console.log(sum());     // ƒ () {
    //                         //   console.log(x);
    //                         // } 
    // sum()();// 10
  EX:
    function sum(a) {
      return function(b) {
        return function(c) {
          return function(d) {
            return a + b + c + d;
          }
        }
      }
    }

    console.log(sum()()()()); // NaN
    console.log(sum(10)(20)(30)(40)); // 100
    console.dir(sum()); // Important to see the closure
    // Closure:
    // When we have a global variable or parameters
    // and after it we have return, they will be deleted
    // but In JavaScript these variable or parameters will be
    // stocked in the Closure[just if we are using them in the last return]
    // Ex:
    // console.dir(sum()()());
    // 0: Closure {c: undefined}
    // 1: Closure {b: undefined}
    // 2: Closure (sum) {a: undefined}
  Ex:
    function test() {
      let x = 10;
      let y = 20;
      return function() {
        console.log(x);
      }
    }

    let sum = test();

    console.dir(sum); // y is not in the closer because we don't use it
*/

/*
  EX OF Block And Function Scope:
      // let a = 10;

      // function x() {
      //   var a = 20; // No Error
      //   console.log(a);
      // }

      // let a = 10;

      // {
      //   var a =20; // Error
      // }

      const a = 20;
      {
        const a = 100;
        console.log(a);
        {
          const a = 200;
          console.log(a);
        }
      }
      console.log(a); 
*/

/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.[Required]
  - Index => The index of the current element being processed in the array.[Npt Required]
  - Array => The Current Array.[Not Required]

  Notes
  - Map Return A New Array[If i want To Make My work On the same Array
                          we shouldn't use Map]

  Examples
  - Anonymous Function
  - Named Function

    let myNums = [1, 2, 3, 4, 5, 6];

    let newArray = [];

    for (let i = 0; i < myNums.length; i++) {
      newArray.push(myNums[i] + myNums[i]);
    }

    console.log(newArray);

    // Same Idea With Map

    // Ex1
    let addSelf1 = myNums.map(function(element, index, arr) {
      console.log(`Element(${index}): ${element}`);
      console.log(arr); 
      console.log(`This => ${this}`);
    }, 10);

    console.log(addSelf1); // [undefined, undefined, undefined, undefined, undefined, undefined]

    // Ex2
    let addSelf2 = myNums.map(function(element, index, arr) {
      return element + element;
    }, 10);

    console.log(addSelf2); // [2, 4, 6, 8, 10, 12]

    // Ex3
    let addSelf3 = myNums.map(function(element, index, arr) {
      return arr;
    }, 10);

    console.log(addSelf3); // [Array(6), Array(6), Array(6), Array(6), Array(6), Array(6)]

    // EX4: Arrow Function
    let addSelf4 = myNums.map((element) => element + element);

    console.log(addSelf4);

    // Ex5: Addition Function
    function addition(element) {
      return element + element;
    }
    let addSelf5 = myNums.map(addition);

    console.log(addSelf4);
*/

/* 
  Higher Order Function - Practice

    Ex1: SWap Cases
      let swappingCases = "elZERo";

      // let sw = swappingCases
      //   .split("")
      //   .map(function (element) {
      //     return element === element.toUpperCase()
      //       ? element.toLowerCase()
      //       : element.toUpperCase();
      //   })
      //   .join("");

      let sw = swappingCases
        .split("")
        .map((element) =>
          element === element.toUpperCase()
            ? element.toLowerCase()
            : element.toUpperCase()
        )
        .join("");

      console.log(sw);

    Ex2:
      let invertedNumbers = [1, -10, -20, 15, 100, -30];

      // let inv = invertedNumbers.map(function (element) {
      //   return -element;
      // });

      let inv = invertedNumbers.map((element) => -element);

      console.log(inv);

    Ex3:
      let ignoreNumbers = "Elz123er4o";

      // let ign = ignoreNumbers
      //   .split("")
      //   .map(function (element) {
      //     // if (Number.isNaN(+element)) return element;
      //     return isNaN(parseInt(element)) ? element : "";
      //   })
      //   .join("");

      let ign = ignoreNumbers
        .split("")
        .map((element) => (isNaN(parseInt(element)) ? element : ""))
        .join("");

      console.log(ign);

*/

/*
  Higher Order Functions (
    - Assign Function To Variable
    - Use Function As Parameter
    - Return Function From Function
    - Assign Function To Object
  )
  
  // Use Function As Parameter
  function isUseFunc(func) {
  return func();
  }

  console.log(isUseFunc(returnFunc));

  function returnFunc() {
  return 5;
  }

  // Return Function From Function
  function nums() {
  return function num() {
    return 10;
  }
  }

  console.log(nums()());


  // Assign Function To Object
  let person = {
  eat: function() {
    console.log('Pizza');
  }
  }

  person.eat();

  // Example

  let arr = [10, 2, 40, 60];

  // Map
  arr.map((arr) => arr + arr);

  // Filter
  arr.map((arr) => arr > 16);

  // ForEach
  arr.forEach(arr => arr);

*/

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  EX:
      // Get Friends With Name Starts With A
      let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

      let filteredFriends = friends.filter(function(ele) {
        return ele.startsWith("A"); // Put the element that it have true
      });

      console.log(filteredFriends);

      // Get Even Numbers Only
      let numbers = [11, 20, 2, 5, 17, 10];

      let evenNumber = numbers.filter(function(ele) {
        return ele % 2 === 0;
      });

      console.log(evenNumber);

      // Test Map Vs Filter
      let addMap = numbers.map(function(el) {
        return el + el;
      });

      console.log(addMap);

      let addFilter = numbers.filter(function(el) {
        return el + el; // true in all numbers sauf 0
      });

      console.log(addFilter);
*/

/*
  Filter
  - Filter Longest Word By Number

  Ex:
        // Filter Words More Than 4 Characters
        let sentence = "I Love Foood Code Too Playing Much";

        let smallWords = sentence
          .split(" ")
          .filter(function (ele) {
            return ele.length <= 4;
          })
          .join(" ");

        console.log(smallWords);

        // Ignore Numbers
        let ignoreNumbers = "Elz123er4o";

        let ign = ignoreNumbers
          .split("")
          .filter(function (element) {
            // if (Number.isNaN(+element)) return element;
            return isNaN(parseInt(element));
          })
          .join("");

        console.log(ign);

        // Filter Strings + Multiply
        let mix = "A13BS2ZX";

        let mixedContent = mix
          .split("")
          .filter(function (ele) {
            return !isNaN(parseInt(ele));
          })
          .map(function (ele) {
            return ele * ele;
          })
          .join("");

        // let number = mix
        //   .split("")
        //   .map(function (ele) {
        //     return !isNaN(parseInt(ele)) ? +ele * +ele : ele;
        //   })
        //   .filter(function (ele) {
        //     return Number.isInteger(ele);
        //   })
        //   .join("");

        console.log(mixedContent);
*/

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
  Ex:
    // let nums = [10, 20, 15, 30];

    // let add = nums.reduce(function(acc, current, index, arr) {
    //   return acc;
    // });

    // console.log(add); // 10 => Because the accumalator is the Beginning VAlUE OF Array

    // let nums = [10, 20, 15, 30];

    // let add = nums.reduce(function(acc, current, index, arr) {
    //   return acc;
    // }, 0);

    // console.log(add); // 0 => Because the accumalator have an Initial Value

    // let nums = [10, 20, 15, 30];

    // let add = nums.reduce(function(acc, current, index, arr) {
    //   console.log(acc + current);
    //   return acc + current;
    // }, 0);

    // console.log(add); // 75 => Because the accumalator is the sum of all numbers
*/

/*
Reduce
- Longest Word
- Remove Characters + Use Reduce
  EX:
      // Longest Word
      let theBiggest = [
      "Bla",
      "Propaganda",
      "Other",
      "AAA",
      "Battery",
      "Test",
      "Propaganda_Two",
      ];

      let chek = theBiggest.reduce(function (acc, current) {
      return acc.length > current.length ? acc : current;
      });

      console.log(chek);

      // Remove Characters + Use Reduce
      let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

      let finalString = removeChars
      .filter((ele) => ele !== "@")
      .reduce((acc, current) => `${acc}${current}`);

      console.log(finalString);
*/

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// Ex 1
// <ul>
//   <li class="active">One</li>
//   <li>Two</li>
//   <li>Three</li>
// </ul>
// <div class="content">
//   <div>Div One</div>
//   <div>Div Two</div>
//   <div>Div Three</div>
// </div>
// let allList = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allList.forEach(function (ele) {
//   // console.log(ele);
//   ele.onclick = function () {
//     // console.log(this);
//     // Remove acive class from All elmenents
//     allList.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add acive class from This elmenents
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// when we put a function onclick inside the foreach
// that mean we related this event on each element
// in the array allList, and when we call this event
// we don't call the foreach again, because the foreach is
// maked on time

// Ex2: from Chatgbt

// <ul>
//   <li class="active" data-content="one">One</li>
//   <li data-content="two">Two</li>
//   <li data-content="three">Three</li>
// </ul>
// <div class="content">
//   <div id="one">Div One</div>
//   <div id="two">Div Two</div>
//   <div id="three">Div Three</div>
// </div>
// ul {
//   list-style: none;
//   padding: 0;
//   display: flex;
//   justify-content: space-around;
// }

// ul li {
//   padding: 10px;
//   background-color: rgb(238 238 238 / 0.4);
// }

// .active {
//   background-color: #eee;
// }

// let allList = document.querySelectorAll("ul li");
// let allDiv = document.querySelectorAll(".content div");

// allList.forEach(function (ele) {
//   ele.onclick = function () {
//     allList.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     this.classList.add("active");

//     allDiv.forEach(function(ele) {
//       ele.style.display = "none";
//     });

//     let target = this.dataset.content;

//     document.getElementById(target).style.display = "block";
//   };
// });

/*
  Object_1(
  - Intro and What Is Object
  - Testing Window object
  - Accessing Object
  )
  
  Ex:
    window => object 
    window.location => nested object
    window.location.href => propertie
    window.location.assign => method

  Ex:
    let user = {
      // Properties
      theName: "Omar",
      theAge: 20,
      // Methods
      sayHello: function() {
        return "Hello";
      }
    };

    console.log(user.theName);
    console.log(user.theAge);
    console.log(user.sayHello());
*/

/*
  Object_2(
    - Big Deeper
    - Dot Notation Vs Bracket Notation
    - Dynamic Property Name
  )
  EX:
    let user = {
      "theName": "Omar",
      "country of": "Lebanon",
    }

    // console.log(user.country of); // Error
    console.log(user["country of"]); // Lebanon
    console.log(user.theName); // Omar
    console.log(user["theName"]); // Omar


    let user2 = {
      theName: "Omar",
      "country of": "Lebanon",
    }

    console.log(user2["theName"]); // Omar
    console.log(user2.theName); // Omar

    let user3 = {
      theName: "Omar",
      100: "Number"
    }

    console.log(user3[100]); // Number

    // Dynamic Property Name
    let myVar = "country";

    let user4 = {
      theName: "Omar",
      country: "Lebanon"
    }

    console.log(user4.myVar); // Undefined
    console.log(user4[myVar]); // Lebanon
*/

/* 
  Object
  - Nested Object And Trainings
  EX:
      let user = {
        name: "Osama",
        age: 38,
        skills: ["HTML", "CSS", "JS"],
        available: false,
        adresses: {
          ksa: "Riyadh",
          egypt: {
            one: "Cairo",
            two: "Giza",
          },
        },
        checkAv: function() {
          if (this.available === true) {
            // We should Put this because it's not a global varible
            return 'Free For Work';
          } else {
            return 'Not Free';
          }
        },
      };

      console.log(user.name);
      console.log(user.age);
      console.log(user.skills.join(" | "));
      console.log(user.adresses);
      console.log(user.adresses.ksa);
      console.log(user.adresses.egypt.one);
      console.log(user.adresses.egypt.two);
      console.log(user['adresses'].egypt.one);
      console.log(user['adresses']["egypt"]);
      console.log(user['adresses']["egypt"]["one"]);
      console.log(user.checkAv());
*/

/*
  Question1: what is the difference between Function, Method, CallBack Function And Event?
  ---> Function: do not belong for anything (Indepedence)
      EX:
      function sayHi() {
      return 'hi';
      }

  ---> Method: is a function that belong to an object
      EX:
      let obj = {
        myMethod: function() {
          return 'Hello From Method';
        }
      };
  
  ---> Callback Function is used when an event maked, It's called
        From the Browser
      Ex: btn.onclick = func;

  ---> Event (onload, onclick...)
*/

/*
  Question2: Why we don't use the name Of the object instead of [this]
            when we want to use a propertie in the Method Of this Object?
  first, If we write --> checkAv: function () {
                                  return user.available ? "Free For Work" : "Not Free";
                                  }
  This Function is just for this Object, we can't reuse it
  Ex:
    let user = {
      available: true,
      checkAv: function() {
        return user.available ? "Free For Work" : "Not Free";
      },
    };

    let admin = {
      available: false,
      checkAv: user.checkAv,
    };

    console.log(admin.checkAv()); // Free for Work, instead Of Not Free

    If We want to solve this Problem we should use this
*/

/*
  Question3: Why we don't use this For Arrow Function
  fisrt, we can speak on The Diffrence between the arrow 
  function and standard function:
  - Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
  - Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
  - Arrow functions cannot use yield within their body and cannot be created as generator functions.

  1- Returning object literals using the expression body syntax (params) => { object: literal } does not work as expected:
  const func = () => { foo: 1 };
  // Calling func() returns undefined!

  const func2 = () => { foo: function () {} };
  // SyntaxError: function statement requires a name

  const func3 = () => { foo() {} };
  // SyntaxError: Unexpected token '{'

  To fix this, wrap the object literal in parentheses:
  const func = () => ({ foo: 1 });

  2- Arrow function expressions should only be used for non-method
  functions because they do not have their own this. Let's see what happens
  when we try to use them as methods:
    let user = {
    name: "Omar",
    b: () => {
      console.log(this.name, this);
    },
    c() {
      console.log(this.name, this);
    },
  };

  user.b();  // logs undefined, Window { … }
  user.c();  // logs 10, Object { … }

  Ex2:
    let user = {
      name: "Omar",
      b: {
        age: 30,
        a: () => console.log(this.name, this),
        f() {
          console.log(this.age, this);
        },
      },
      c() {
        console.log(this.name, this);
      },
    };

    user.b.a(); // undefined, object window
    user.b.f(); // 30, object b
*/

/*
  Object(
    - Create With New Keyword new Object();
  )
  EX:
    let user = {
      age: 20, // If I Have A property here it will be updated
    };

    console.log(user);

    user.age = 30;
    user["country"] = "Lebanon";

    user.sayHello = function() {
      return `Hello`;
    }

    console.log(user);


    let admin = new Object({
      age: 20,
    }); // new Method

    console.log(admin.age);

*/

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context
  
  - Alone, this refers to the global object.
  - In a function, this refers to the global object.
  - In a function, in strict mode, this is undefined.
  - In an object method, this refers to the object.
  - In an event, this refers to the element that received the event.
  - Methods like call(), apply(), and bind() can refer this to any object.
  EX1:
    console.log(this); // window { .. }

    myVar = 100;
    console.log(window.myVar);

    function sayHello() {
      console.log(this); // window { .. }
    }

    document.getElementById("show").onclick = function() {
      console.log(this); // <button id="show">show</button>
      // The owner of This Function is the btn
    };

  EX2:
    const a = function() {
    console.log(this); // Window
    const b = function() {
      console.log(this); // Window
      const c = {
        name: "Shadow",
        showThis() {
          console.log(this);// c Object
        }
      };
      c.showThis();
    };
    b();
  };

  a();

  Global This:
  console.log(globalThis); // window { .. }
  Search
  - Strict Mode
*/

/*
  call() Method(
    With the call() method, you can write
    a method that can be used on different objects.
    EX1:
      const person = {
        fullName: function() {
          return `${this.firstName} ${this.lastName}`;
        },
      };

      const person1 = {
        firstName: "Omar",
        lastName: "Ghoch",
      };

      const person2 = {
        firstName: "Ahmad",
        lastName: "Damaj",
      };

      // Now I Want use the Function fullName on the two Objects
      console.log(person.fullName.call(person1));
      console.log(person.fullName.call(person2));

    Ex2:
    const person = {
      fullName: function (city, country) {
        return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
      },
    };

    const person1 = {
      firstName: "Omar",
      lastName: "Ghoch",
    };

    console.log(person.fullName.call(person1, 'Barja', 'Lebanon'));
  )
*/

/*
  Apply Method(
    - The apply() method is similar to the call() method (previous chapter).
  )
  EX1:
    const person = {
      fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
      }
    }
    const person1 = {
      firstName:"John",
      lastName: "Doe"
    }
    console.log(person.fullName.apply(person1, ["Barja", "Lebanon"]));

    EX2:
      console.log(Math.max.apply(null, [0, 1, 9])); // 9
      console.log(Math.max.apply(" ", [0, 1, 9])); // 9
      console.log(Math.max.apply(0, [0, 1, 9])); // 9
      // The first argument (null) does not matter. It is not used in this example.
      // These examples will give the same result:
*/

/*
  The Difference Between call() and apply():
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
*/

/*
  Strict Mode And This Keyword(
    - What Is Strict Mode
    - Enable Strict Mode
    - this In Strict Mode
  )
  
      1️⃣ What is Strict Mode in JavaScript?

      Strict Mode is a mode in JavaScript that changes some language rules to avoid common mistakes and helps you write safer code.
      It’s like “strict rules” for your code.

      To enable it:

      "use strict";

      Place this at the top of your file or at the beginning of a function. The code after it will run in strict mode.

      Example:

      // Without strict mode
      x = 10; // No error, even if x was not declared
      console.log(x); // 10

      // With strict mode
      "use strict";
      y = 20; // ❌ Error: y is not defined

      > In strict mode, you must declare variables (let, const, var) before using them. This helps prevent mistakes.

      2️⃣ Difference between strict and non-strict with apply()

      Example:

      function showThis() {
        console.log(this);
      }

      Without strict mode:

      showThis.apply(5); // 5 is not an object
      // Output: window (in browser) or global object (in Node.js)

      > Reason: In non-strict mode, any primitive value (number, string, boolean) is automatically converted to the global object.

      With strict mode:

      "use strict";
      showThis.apply(5);
      // Output: 5

      > Reason: In strict mode, the value stays as it is and is not converted to an object or the global object.

      ✅ Summary

      Mode	Behavior of this

      Strict mode	Keeps the value as is, does not convert primitives to objects
      Non-strict mode	Converts primitives to object or global object when using apply() or call()
  EX: 
        // function returnOb() {
      //   console.log(this, typeof this); 
      // }

      // returnOb.apply(5); // Number {} 'Object'
      // returnOb.apply("HI"); // String {} 'Object'
      // returnOb.apply(true); // Boolean {} 'Object'
      // returnOb.apply(null); // Window {} 'Object'
      // returnOb.apply(undefined); // Window {} 'Object'

      // "use strict";
      function returnOb() {
        console.log(this, typeof this); 
      }

      returnOb.apply(5); // 5 'number'
      returnOb.apply("HI"); // "Hi" 'String'
      returnOb.apply(true); // true 'Boolean'
      returnOb.apply(null); // null 'object'
      returnOb.apply(undefined); // Undefined 'undefined'
*/

/*
  Question1: Why we use Strict Method ?
  // If we set a value for a primitive type
  // and we use strict method 
  "use strict";// "use strict" ===> the number is stay 5
  function setvalue(val) {
    this.value = val;
  }
  let x = 5;
  setvalue.call(x, 100);// main.js:2467 Uncaught TypeError: Cannot create property 'value' on number '5'
  // console.log(x);
*/

/* Bind Method(
  - The bind() method creates a new function that,
  - when called, has its this keyword set to the provided value,
  - with a given sequence of arguments preceding any provided when the new function is called.
  EX:
        const charOne = {
          name: "mostata",
          health: 90,
          fullHealth(num1, num2) {
            return this.health = num1 + num2;
          },
        };

        const charTwo = {
          name: "mostata",
          health: 70,
        };

        // console.log(charTwo.health);
        // charOne.fullHealth.bind(charTwo, 60, 50); // Nothing happen because bind return a function
        // console.log(charTwo.health);

        console.log(charTwo.health);
        const binFunc = charOne.fullHealth.bind(charTwo, 60, 50); // We also put the parameters like call
        binFunc(); // Now We call the function
        console.log(charTwo.health);
*/

/*
  Dynamic Scope And Legacy Scope(
    - This has A Dynamic Scope.
  )
  EX:
      // const user = {
      //   name: "mostafa",
      //   age: 20,
      //   showUser() {
      //     console.log(this); // user Object
      //     var anotherFuntion = function() {
      //       console.log(this); // Window Object
      //     };
      //     anotherFuntion();
      //   }
      // };
      
      /// The Solution:
      // user.showUser();
      // const user = {
      //   name: "mostafa",
      //   age: 20,
      //   showUser() {
      //     console.log(this); // user Object
      //     var self = this;
      //     var anotherFuntion = function() {
      //       console.log(self); // user Object
      //     };
      //     anotherFuntion();
      //   }
      // };

      //Or (Convert the anonyous Function To Arrow Function)
      // const user = {
      //   name: "mostafa",
      //   age: 20,
      //   showUser() {
      //     console.log(this); // user Object
      //     var anotherFuntion = () => {
      //       console.log(this); // user Object
      //     };
      //     anotherFuntion();
      //   }
      // };
      // user.showUser();

      // Or (Use Bind Method)
      // The Bind Method Return A Function That below to And Object
      // const user = {
      //   name: "mostafa",
      //   age: 20,
      //   showUser() {
      //     console.log(this); // user Object
      //     var anotherFuntion = function() {
      //       console.log(this); // user Object
      //     }.bind(this);
      //     anotherFuntion();
      //   }
      // };
      // user.showUser();

      // EX ON Bind
      function sayName() {
        return this.name;
      }

      let user = {
        name: "Omar",
      };

      const boundFn = sayName.bind(user);

      console.log(boundFn());
*/

/*
  Object(
    - Create Object with create Method
    - The parameter of create is used as A Prototype for the new Object(نموذج)
    - It can be empty ==> {}
    - The properties and methods for the new Oject are for 
    the object prototype
    - The new Object is related by the prototype, that mean if i change in
    the prototype the new Object will be upated
    - If i declare a property present in the prototype, it will 
    override the property in the prototype
  )
    EX2:
      let user = {
        age: 20,
        doubleAge: function() {
          return this.age * 2;
        },
      };

      console.log(user);
      console.log(user.age);
      console.log(user.doubleAge());

      let obj = Object.create({});

      obj.a = 100;

      console.log(obj);

      let copyObj = Object.create(user);

      copyObj.age = 30; // It is not update for the value age in the prototype

      console.log(copyObj);
      console.log(copyObj.age); // From Prototype iF it is not a property
                              // like it in the newObject
      console.log(copyObj.doubleAge()); // From Prototype if we don't put this
  
    EX:2
    const person = {
      isHuman: false,
      printIntroduction() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      },
    };

    const me = Object.create(person);

    me.name = "Omar"; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // Inherited properties can be overwritten

    me.printIntroduction();
    // Expected output: "My name is Matthew. Am I human? true"
*/

/*
  Object.create(proto, propertiesObject)(
  - propertiesObject give you all the Controll on the property:
  name: { 
    value: "Omar",
    writable: true, // Can i change the value or no
    enumerable: true, // Can i access it by for...in
    configurable: true, // Can i delete it?
  }

  => By Default they are false, that mean if i don't write them
  they are false
  )
  EX1:
      const proto = {
      type: "human",
    };

    const me = Object.create(proto, {
      name: {
        value: "Omar",
        writable: true,
        enumerable: true,
        configurable: false,
      },
      age: {
        value: 20,
        writable: false,
        enumerable: false,
        configurable: true,
      }
    })

    me.age = 30;

    console.log(me.age); // Not change
    console.log(me.name); // Omar
    console.log(me.type); // human

    for (let key in me) {
      console.log(`${key} => ${me[key]}`);
    }
    // name => Omar
    // type => human

    delete me.age;
    delete me.name;
    console.log(me.age); // undefined
    console.log(me.name); // "Omar"
  
  EX2:
      /*
      Ex: 2
      const user = Object.create({}, {
      id: {
        value: 123,
        writable: false,
        enumerable: true,
        configurable: false
      },
      name: {
        value: "Omar",
        writable: true,
        enumerable: true,
        configurable: true
      }
    });
*/

/*
  Object
  - Create Object With Assign Method
  - assign(target, ...sources) => The Target is the Obeject
  That i want to Copy the properties from the sources for it.
  Ex:
      let obj1 = {
        prop1: 1,
        meth1: function () {
          return this.prop1;
        },
      };

      let obj2 = {
        prop2: 2,
        meth2: function () {
          return this.prop2;
        },
      };


      let targetObject = {
        prop1: 100,
        prop3: 3,
      };

      let finalObject = Object.assign(targetObject, obj1, obj2);
      // the same property will be overrided

      finalObject.prop1 = 200;
      finalObject.prop4 = 4;

      console.log(finalObject);

      let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

      console.log(newObject);
*/

/* 
  Difference Between Create And Assign(
    const proto = { x: 1 };
    
    const a = Object.create(proto);
    const b = Object.assign({}, proto);
    
    proto.x = 99; // Change The Value Of x in the Prototype
    
    console.log(a.x); // 99 (Inheritance)
    console.log(b.x); // 1 (Copy)
  )
*/

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors // WE can write everyting on it
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links

  EX:

      <span class="my-span special">My Span 1</span>
      <span class="my-span">My Span 2</span>
      <p>Hello Paragraph 1</p>
      <p>Hello Paragraph 2</p>
      <div id="my-div">Hello Div</div>
      <form action="">
        <input type="text" name="one" value="Hello" />
      </form>
      <form action="">
        <input type="text" name="two" value="Hello" />
      </form>
      <a href="https://google.com">Google</a>
      <a href="https://facebook.com">Facebook</a>
    ----------------------------------------------------
    let myIdElement = document.getElementById("my-div");
    let myTagElements = document.getElementsByTagName("p");
    let myClassElements = document.getElementsByClassName("my-span");
    let myQueryElement = document.querySelector(".my-span"); // just The first Element
    let myQueryElements = document.querySelectorAll(".my-span"); // All The Elements

    console.log(myIdElement);
    console.log(myTagElements[1]);
    myTagElements[1].innerHTML = "Test";
    console.log(myClassElements[1]);
    console.log(myQueryElement);
    console.log(myQueryElements[1]);

    console.log(document.title);
    console.log(document.body);
    console.log(document.forms[0]); // Access the first Form
    console.log(document.forms[0].one); // Access the input has name "one"
    console.log(document.forms[0].one.value); // Access Value
    console.log(document.links[1].href); // Access the Href
*/

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText

  EX:
    <div class="js">JavaScript <span>Div</span> &lt;span&gt;</div>
    <img src="" alt="" />
    <a class="link" href="#">Google</a>
    --------------------------------------------------------
    let myElement = document.querySelector(".js");

    console.log(myElement.innerHTML); // JavaScript <span>Div</span> &lt;span&gt;
    console.log(myElement.textContent); // JavaScript Div <span>

    myElement.innerHTML = "Text From <span>Main.js</span> File";
    myElement.textContent = "Text From <span>Main.js</span> File";

    document.images[0].src = "/images/1.jpg";
    // document.images[0].style = "width: 100px";
    document.images[0].style.width = "100px";
    document.images[0].alt = "Laptop-HP";
    document.images[0].title = "Laptop";
    document.images[0].id = "lap_pic";
    document.images[0].className = "img";

    let myLink = document.querySelector(".link");

    console.log(myLink.getAttribute("class"));
    // console.log(myLink.className);
    console.log(myLink.getAttribute("href"));

    myLink.setAttribute("href", "https://twitter.com");
    myLink.setAttribute("title", "twitter");
    myLink.setAttribute("data-id", 5);// We can't use the first method to set an attribut
    //like that
*/

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute

  EX:
    <div>Div</div>
    <p class="para" title="Paragraph" data-src="yy">Paragraph</p>
    -----------------------------------------------------------
    console.log(document.getElementsByTagName("p")[0].attributes);

    let myP = document.getElementsByTagName("p")[0];

    // if (myP.hasAttribute("data-src")) {
    //   console.log("Found");
    //   if (myP.getAttribute("data-src") === "") {
    //     console.log("Found And Empty");

    //     myP.dataset.src = "Elzero";
    //   }
    // } else {
    //   console.log("Not Found");
    //   myP.setAttribute("data-src", "Elzero");
    // }

    if (myP.hasAttribute("data-src")) {
      if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
      } else {
        myP.setAttribute("data-src", "New value");
      }
    } else {
      console.log("Not Found");
    }

    let myDiv = document.getElementsByTagName("div")[0];
    console.log(myDiv);
    if (myDiv.hasAttributes()) {
      console.log("Has Attributes");
    } else {
      console.log("Has No Attributes");
    }
*/

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild => 
  EX:
    let myElement = document.createElement("div"); // Element Node
    let myAttr = document.createAttribute("data-custom");
    // The Create Attribut return an Object
    // So to add A Value we nedd to make myAttr.value = ..
    // This Method is unusable, we often use the set Method
    let myText = document.createTextNode("Product One"); // Text Node
    let myComment = document.createComment("This Is Div");

    myElement.className = "product";

    myAttr.value = "custom";
    myElement.setAttributeNode(myAttr);

    myElement.setAttribute("data-test", "testing");

    // console.log(myText); // "Product One"
    // document.write(myText); // [object Text], we should link it with a tag

    // Append Text To Element
    myElement.appendChild(myText);

    // Append Comment To Element
    // myElement.appendChild(`<!-- omar -->`);// Error, It should the type is node
    myElement.appendChild(myComment);

    // Append Element To Body
    document.body.appendChild(myElement);

    console.log(myElement);

*/

/*
  Important Note:
  - If an element has not an attribut specific for it we can't add
  it by the method => myDiv.href =...  [because the div has not an href]
  - In this case we should use the setAttribute Method, because it work
  for all the elements
*/

/*
  Important Note:
  1️⃣ Node
  👉 The general concept:
  Everything in the DOM is a Node.
  
  2️⃣ Element
  👉 A special type of Node
  It represents HTML tags.
  <div></div>   <!-- Element Node -->
  ---> document.createElement("p");
  
  3️⃣ Text
  👉 The text inside HTML elements.
  <div>Hello</div>
  Hello = a Text Node
  ---> document.createTextNode("Hello");

  3️⃣ Comment
  ---> document.createComment("This is A Div");

  --------
  Why we use them?
  Because the function appendChild don't accept a type
  different that node
*/

/*
  Wich is the best?
  btn.onclick = function () {
    sayHello();
  };// If i want to write a condition or put Parameters

  btn.onclick = sayHello;
*/

/* 
  Practice:
  EX:
    let myContainer = document.createElement("div");
    myContainer.style.display = "grid";
    myContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";

    for (let i = 1; i <= 10; i++) {
      let myMainElement = document.createElement("div");
      let myHeading = document.createElement("h2");
      let myParagraph = document.createElement("p");

      let myHeadingText = document.createTextNode(`Product Title ${i}`);
      let myParagraphText = document.createTextNode("Product Description");

      // Add Heading Text
      myHeading.appendChild(myHeadingText);

      // Add Heading To Main Element
      myMainElement.appendChild(myHeading);

      // Add Paragraph Text
      myParagraph.appendChild(myParagraphText);

      // Add Paragraph To Main Element
      myMainElement.appendChild(myParagraph);

      myMainElement.className = "product";

      myContainer.appendChild(myMainElement);
    }

    document.body.appendChild(myContainer);
*/

/*
  DOM [Deal With Childrens]
  - children => Just the Elements
  - childNodes => Everything (Elements, Text, Comments)
  - firstChild => Everything (Elements, Text, Comments)
  - lastChild => Everything (Elements, Text, Comments)
  - firstElementChild  => Just the Elements
  - lastElementChild => Just the Elements

  EX: 
    <div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>
    ---------------------------------------------
    let myElement = document.querySelector("div");

    console.log(myElement);
    console.log(myElement.children);
    console.log(myElement.children[0]);
    console.log(myElement.childNodes);
    console.log(myElement.childNodes[0]); }

    console.log(myElement.firstChild);
    console.log(myElement.lastChild);

    console.log(myElement.firstElementChild)
    console.log(myElement.lastElementChild)
*/

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu => when we make right click on an element
  --- onmouseenter => when we hover
  --- onmouseleave => when we leave the hover

  --- onload
  --- onscroll => when we make scroll
  --- onresize => when we resize the window

  --- onfocus => when we focus on the input
  --- onblur =>when we leave the input
  --- onsubmit => we can make verification on the submit
  before the information will be send to server

  EX:
      <body>
    <button id="btn">Button</button>
    <hr />
    <form action="">
      <input type="text" name="" id="" />
      <input type="submit" value="Submit Data" />
    </form>
    --------------------------------------
        <style>
      body {
        height: 5000px;
      }
    </style>
    ------------------------------------
      let myBtn = document.getElementById("btn");

    myBtn.onmouseleave = function () {
      console.log("clicked");
    };

    window.onscroll = function () {
      console.log("scroll");
    };

    window.onresize = function () {
      console.log("resize");
    };

    let input = document.querySelector("input");

    input.onfocus = function () {
      console.log("password should be 8 Characters");
    };

    input.onblur = function () {
      console.log("Error, please enter a valid password");
    };
*/

/* 
  DOM [Events]
  - Validate Form Practice
  - Prevent Defauslt
  EX:
    document.links[0].onclick = function(e) {
      e.preventDefault();
    }

    let userInput = document.querySelector("[name='username']");
    let ageInput = document.querySelector("[name = 'age']");
    let span1 = document.getElementById("error1");
    let span2 = document.getElementById("error2");

    document.forms[0].onsubmit = function(e) {
      let error1 = "Name should be Less Than 10 Chatacters";
      let error2 = "Please enter a password";
      let userValid = false;
      let ageValid = false;
      
      if (userInput.value !== "" && userInput.value.length <= 10) {
        span1.innerHTML = "";
        userValid = true;
      }
      
      if (ageInput.value !== "") {
        span2.innerHTML = "";
        ageValid = true;
      }

      if (!userValid || !ageValid) {
        if (!userValid) {
          span1.innerHTML = error1;
        }
        if (!ageValid) {
          span2.innerHTML = error2;
        }
        e.preventDefault();
      }
    }
*/

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
   
  EX:
     <form action="">
      <input class="one" type="text">
      <input class="two" type="text">
      <input type="submit" value="Submit Data">
    </form>
    <a href="https://google.com" target="_blank">Google</a>
    ---------------------------------
      let two = document.querySelector(".two");
      let one = document.querySelector(".one");

      window.onload = function(){
        one.focus();
      };

      // one.onblur = function() {
      //   document.links[0].click();
      // };

      one.onkeyup = function() {
        two.focus();
      }
*/

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
  
  EX:
    <div id="my-div" class="one two show test">Div With Many Classes</div>
    <button id="btn">Show</button>

      let element = document.getElementById("my-div");

      console.log(element.classList);
      console.log(typeof element.classList); // Object
      console.log(element.classList.contains("osama"));// false
      console.log(element.classList.contains("show"));// true
      console.log(element.classList.item("0"));
      console.log(element.classList.item("3"));

      element.onclick = function() {
        // this.classList.add("add-one", "add-two"); // Many Parameters
        // this.classList.remove("one", "two"); // Many Parameters
        this.classList.toggle("one");// One Parameter
      }
*/

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)

  EX:
  <div id="my-div">Elzero Web shcool</div>

      let element = document.getElementById("my-div");

      element.style.color = "red";
      element.style.fontWeight = "bold";

      element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

      element.style.removeProperty("color");
      element.style.setProperty("font-size", "40px", "important");

      // rules => the code css
      document.styleSheets[0].rules[0].style.removeProperty("line-height");
      document.styleSheets[0].rules[0].style.setProperty("background", "red", "important");

*/

/*
  DOM [Deal With Elements]
  - before [Node || String]
  - after [Node || String]
  - append [Node || String]
  - prepend [Node || String]
  - remove => remove from DOM, it's important
  if you want to remove an element that you don't 
  want to user to know it, otherwise the display none
  in css the user can remove it and see the content

  EX:
  <div id="my-div">Div has <span>Span</span></div>
  ---------------------------------
      let element = document.getElementById("my-div");
      let createdP = document.createElement("p");

      // element.before("<h1>Hello From Js</h1>"); // No Work with tag
      // element.after("Hello From Js"); 
      // element.before(createdP);
      // element.after(createdP);

      // element.append("Hello From Js");
      // element.prepend("Hello From Js");
      element.append(createdP);
      element.prepend(createdP);

      element.remove();

*/

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement

  EX:
      let one = document.getElementById("one");

      console.log(one.nextElementSibling);

      // let btn = document.getElementById("btn");

      // btn.onclick = function () {
      //   let myElement = document.createElement("div");
      //   let myHeader = document.createElement("h1");
      //   let myEvent = document.createElement("button");

      //   myElement.style.cssText = "color: #ddd; padding: 20px;";

      //   myHeader.innerHTML = "Hello";

      //   myEvent.id = "btn_cancel";
      //   myEvent.innerHTML = "Cancel";

      //   myEvent.onclick = function () {
      //     this.parentElement.remove();
      //   };

      //   myElement.append(myHeader);
      //   myElement.append(myEvent);

      //   document.body.append(myElement);
      // };
*/

/*
  DOM [Cloning]
  - cloneNode(Deep) => copy an element
  Deep: true or false
  - true: with the content of Element
  - false: jsut the Element
*/

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener


  let myP = document.querySelector(".my-p");

  myP.onclick = one;
  myP.onclick = two; // this will override the first one

  function one() {
    console.log("Message 1");
  }
  function two() {
    console.log("Message 2");
  }

  window.onload = 'string'; // No error

  myP.addEventListener('click', one);
  myP.addEventListener('click', two);// the two will work
  myP.addEventListener('click', 'string'); // Error

      EX1:
      let i = 0;

      myP.addEventListener('click', function() {
        let myNewP = myP.cloneNode(true);
        myNewP.id = `${myP.id}-${i}`;

        myNewP.addEventListener('click', function() {
          console.log("Clone Paragraph")
        });

        myP.after(myNewP);
        i++;
      })

      // Ex2

      myP.onclick = function () {
        let newP = myP.cloneNode(true);
        newP.className = "clone";
        document.body.appendChild(newP);
      };

      document.querySelector('.clone').onclick = function() {
        console.log("I am cloned");
        // Cannot set properties of null (setting 'onclick')
      }

      // the solution
      document.addEventListener("click", function (e) {
        if (e.target.className === "clone") {
          console.log("I am clone");
        }
      });

      // Use this Method is more professional
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.dataset.role === "clone") {
          console.log("I am clone");
          return;
        }

        if (el.classList.contains("content")) {
          // ...
          return;
        } // contains is better than className

        if (el.classList.contains("cancel")) {
          // ...
          return;
        }

        if (el.classList.contains("key")) {
          // ...
          return;
        }
      });

*/

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data

  EX:
      // alert("Test");
      // console.log("Test");

      // let confirmMsg = confirm("Are You Sure?");

      // console.log(confirmMsg);

      // if (confirmMsg === true) {
      //   console.log("Item Deleted");
      // } else {
      //   console.log("Item Not Deleted");
      // }

      // let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

      // console.log(promptMsg);

*/

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)

// 1)
  // setTimeout(function() {
  //   console.log("Msg");
  // }, 3000);

// 2)
  // setTimeout(sayMsg, 3000);

  // function sayMsg() {
  //   console.log("I am Message");
  // }

// 3)
  // setTimeout(function(user, age) {
  //   console.log(`I am Message For ${user}, his age is ${age}`);
  // }, 3000, 'Omar', 20);

// 4)
  // setTimeout(sayMsg, 3000, "Omar", 20);

  // function sayMsg(user, age) {
  //   console.log(`I am Message For ${user}, his age is ${age}`);
  // }


// 5)
  // let id = setTimeout(function() {
  //   console.log("Msg");
  // }, 3000);

  // let btn = document.getElementById('btn');

  // btn.addEventListener('click', function() {
  //   clearTimeout(id);
  // });

*/

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)

  EX: SAME EXAMPLES OF SETTIMEOUT BUT THE DIFFENCE 
  BETWEEN THEM THAT THE SETINTERVAL IS COUNTINOUS

    // EX:
      // let div = document.querySelector('div');

      // function countdown() {
      //   div.innerHTML -= 1;

      //   if (div.innerHTML === '0') {
      //     clearInterval(id);
      //   }
      // }

      // let id = setInterval(countdown, 1000);
*/

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace() => delete the replaced url from the history
  --- assign()

  EX:
      // location.href = "https://google.com";
      // location.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#function_properties';

      // console.log(location.host); // 127.0.0.1:5500
      // console.log(location.hostname); // 127.0.0.1

      // console.log(location.protocol); // http:

      // console.log(location.hash); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement
      // => #increment_and_decrement

*/

/*
  Capturing & Bubbling:

      // Capturing
      // parent.addEventListener("click", () => {
      //   console.log("Parent - capturing");
      // }, true); // 👈 true = capturing

      // child.addEventListener("click", () => {
      //   console.log("Child - capturing");
      // });

      // Output: if (child.cliked) => Parent - capturing \n Child - capturing

      //------------------------------------------------

      // Bubbling
      // parent.addEventListener("click", () => {
      //   console.log("Parent - bubbling");
      // });

      // child.addEventListener("click", () => {
      //   console.log("Child - bubbling");
      // }); 

      //  Output: if (child.cliked) => Child - bubbling \n Parent - bubbling

      // -------------------------------------

      // 🚫 Stop bubbling or capturing
      // parent.addEventListener("click", () => {
      //   console.log("Parent - bubbling");
      // });

      // child.addEventListener("click", (e) => {
      //   e.stopPropagation();
      //   console.log("Child - bubbling");
      // });

      // The best using to put a function in many buttons
      document.getElementById('list').addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
          console.log('This is Button');
        }
      }); 
*/

/*
  RemoveEventListnner

  EX:
    function handleClick() {
        console.log('clicked');
    }

    document.querySelector("button").addEventListener('click', handleClick);
    document.querySelector("button").removeEventListener('click', handleClick); // the same
*/

/*  
  Structure Of addEventListenner

  SYA => element.addEventListener(type, handler, options);

  el.addEventListener("click", handler, {
    capture: false, => capture
    once: false,
    passive: false => the preventDefault will not working
  });
*/

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

/*
  pushState() + replaceState()

  - History API Methods To Manipulate The Browser History Without
  Reloading The Page
  - pushState(state, title, url)
  - replaceState(state, title, url)

  {
    state: data sended [Object],
    title: Not recommend [we can use document.title],
    url: url [we can't change the domain(protocol, hostname)]
  }

  - To Bring The State Data
  EX:
    console.log(history.state);
*/

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)

  EX:
      window.scrollTo(500, 500); // Begin from the Start
      window.scrollBy(500, 500); // Begin from the current place

      window.scrollBy({
        left: 1500,
        top: 1200,
        behavior: "smooth"
      });

*/

/* 
  Practice : [Browser Object Model]

  EX:
    let btn = document.querySelector("button");

    window.addEventListener("scroll", function () {
      if (this.scrollY >= 600) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    btn.addEventListener('click', function() {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      })
    })
*/

/*  
  JavaScript Asynchronous Programming

  - setTimout:
  EX:
      setTimeout(() => {
        console.log("خلصت");
      }, 5000);

      console.log("مرحبا");

  - FETCH:
  EX:

      fetch('/api/data')
        .then(res => res.json())
        .then(data => console.log(data));

  - Camera And Mike
  EX:
    
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          video.srcObject = stream;
      });

  - Choose Files
  EX:

    const files = await window.showOpenFilePicker();


  => MORE ADVANCED TOPICS:
  - Callbacks => [setTimout]
  - Promises => [Fetch]
  - Async / Await [await]

  - EX: (Promises)
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

  - EX: (Async / Await)
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();  
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
*/

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab

  EX:
      // Get The Length
      console.log(window.localStorage.length);

      // Set Item
      window.localStorage.setItem('color', 'red'); 

      // Get key
      console.log(window.localStorage.key(0));

      // Get Item
      console.log( window.localStorage.getItem('color'));
      console.log( window.localStorage.color);
      console.log( window.localStorage['color']);

      // Remove Item
      window.localStorage.removeItem('color'); 

      // Use the Item
      document.body.style.backgroundColor = window.localStorage.getItem('color');

      // Clear all Items
      window.localStorage.setItem('fontWeight', '20px');
      window.localStorage['fontSize'] = "20px";
      window.localStorage.padding = '20px';

      window.localStorage.clear();
*/

/*
  Practice localStorage (set Color)

  - Important Note:
    element.addEventListener('click', (e) => {
      // use e.currentTarget
    });

    element.addEventListener('click', function (e) {
      // use this
    });

  EX: LocalStorage.html

  - Important Note
  => target = وين صابت الطلقة
  => currentTarget = مين ماسك السلاح

*/

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session

  EX:
      let input = document.querySelector("input");

      input.onblur = function() {
        window.sessionStorage.setItem('name', this.value);
      }
*/

/*

  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array

  EX:
        let a = 1;
        let b = 2;
        let c = 3;
        let d = 4;
        let f = 6;

        let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

        [a, b, c, d = "karim", e = "Omar", f] = myFriends;

        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d); // Ignore The Default Value
        console.log(e); // Default Value => Omar
        console.log(f); // undefined Because it is reassigned with a new Value
        IF the value is undefined it will take the default value (By default the default value is undefined)

        // --- How Can I Ignore An Element In The Array ---

        [a, b, , d] = myFriends;

        console.log(a);
        console.log(b);
        console.log(d);

*/

/*
  Destructuring
  - Destructuring Array Advanced Examples

  EX:
    let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

    let [ , , , [a, , [ , b]]] =  myFriends;

    console.log(a); // Shady
    console.log(b); // Gamal
*/

/*
  Destructuring
  - Destructuring Array => Swapping Variables
  - we replace the temp Method with By This Method

  EX:
      let book = "Video";
      let video = "Book";

      [video, book] = [book, video];

      console.log(video);
      console.log(book);

*/

/*
  Destructuring
  - Destructuring Object

  EX:
      const user = {
        theName: "Osama",
        theAge: 39,
        theTitle: "Developer",
        theCountry: "Egypt",
        pay: function() {
          console.log("50$");
        }
      };

      const {theName, theAge, theCountry, pay} = user;

      // --- We Should use the same name In object

      console.log(theName);
      console.log(theAge);
      // console.log(theTitle);
      console.log(theCountry);
      pay();
*/

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only

  Note: 
  If the name is redefined we cannot use the main name

  EX:
      const user = {
        theName: "Osama",
        theAge: 39,
        theTitle: "Developer",
        theCountry: "Egypt",
        skills: {
          html: 70,
          css: 80,
        },
      };

      const {
        theName: name,
        theAge: age,
        theCountry,
        theColor: co = "Red",
        skills: { html },
      } = user;

      console.log(name);
      console.log(age);
      // console.log(theColor); // undefined without default value
      // console.log(theColor); // Red
      console.log(co);

      console.log(`My html skill progress in ${html}`);

      const { html: skillOne, css: skillTwo} = user.skills;

      console.log(skillOne);
      console.log(skillTwo);

*/

/*
  Destructuring
  - Destructuring Function Parameters

  EX:

    const user = {
      theName: "Osama",
      theAge: 39,
      theTitle: "Developer",
      theCountry: "Egypt",
      skills: {
        html: 70,
        css: 80,
      },
    };

    showDetails(user);

    function showDetails({ theName: name, theAge: age, skills: { css }}) {
      console.log(name);
      console.log(age);
      console.log(css);
    }
*/

/*
  Destructuring
  - Destructuring Mixed Content

  EX:
      const user = {
        theName: "Osama",
        theAge: 39,
        skills: ["HTML", "CSS", "JavaScript"],
        addresses: {
          egypt: "Cairo",
          ksa: "Riyadh",
        },
      };

      const {
        theName: name,
        theAge:  age,
        skills: sk, // [ html, , js],
        addresses: { egypt }
      } = user;

      console.log(name);
      console.log(age);
      console.log(sk.join(" | "))
      console.log(egypt);

*/

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete => return boolean (true, false)
  - clear
  - has
  EX:
      let myData = [1, 1, 1, 2, 3];

      // --- Add ----
      // let myUniqueData = new Set(myData);
      let myUniqueData = new Set();
      myUniqueData.add(1).add(1).add(1).add(2).add(3);

      // --- Size ---
      console.log(myUniqueData);
      console.log(myUniqueData.size);

      // --- Check ---
      if (myUniqueData.has(3)) {
        console.log("3 is found")
      } else {
        console.log("3 is not found");
      }

      // --- Access to an element
      console.log(myUniqueData[0]); // undefined
      // => Solution : Transform to array
      myData = [...myUniqueData]; // myData = Array.from(myUniqueData)
      console.log(myData[0]); 

      // --- Delete ---
      let checkDelete = myUniqueData.delete(1);
      console.log(`The data 1 is ${checkDelete ? '' : 'not '}deleted`);

      // --- Clear ---
      myUniqueData.clear();
      console.log(myUniqueData);

*/

/*
    أكيد 👌 هاي **notes صغيرة وسريعة** تحفظها:

  ---

  ### 📝 Notes — Array vs Set (Keys)

  * **Array**:
    * مبنيّة على **index**
    * كل عنصر إلو key (0, 1, 2…)
    * لذلك فيها `keys()`

  * **Set**:

    * مبنيّة على **values فقط**
    * القيمة نفسها هي الهوية
    * ما في keys حقيقية

  * بالـ **Set**:

    * `keys()` = `values()`
    * موجودة فقط للتوافق مع `Map`

  ---

  ### 🔑 جملة تحفظها:

  **Array = index-based**
  **Set = value-based**

  ---
*/

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible

  EX:
      // --- SET ---

      // Type Of Data
      let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

      // Keys, Values, And Entries
      let iterator = mySet.values(); // Or mySet.keys()

      console.log(iterator.next().value); // {value: 1, done: false}
      console.log(iterator.next().value);
      console.log(iterator.next().value);
      console.log(iterator.next().value); 
      console.log(iterator.next()); // {value: undefined, done: true}

      // forEach

      mySet.forEach((ele) => console.log(ele));

      // Oe
            let mySet = new Set();
      mySet.add({name: "Omar"});

      for (let val of mySet) {
        console.log(val);
      }

      let mySet2 = new Set();
      mySet2.add({name: "Omar"});

      for (let [key, value] of mySet2.entries()) {
        console.log(key, value);
      }

      // --- WeekSet ---

      // Type of Data
      let myws = new WeakSet([{ name: 'Omar'}, {name: "Omar"}]);
      console.log(myws);

      // Delete
      let d = myws.delete( {name: 'Omar'} );
        // false beacause Objects are compared by reference, not by value.

      // => Solution
      let a = { name: "Omar"};
      let b = { name: "Omar"}; // a !== b

      let myws2 = new WeakSet([a, b]);

      let m = myws2.delete(a);
      console.log(m); // true

      // Keys, Values, And Entries
      let iter = myws.values(); // Or myws.keys()
      console.log(iter); // ERROR: myws.values is not a function

*/

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map

  EX:

      let myObject = {};
      let myEmptyObject = Object.create(null); // like Map
      let myMap = new Map();

      console.log(myObject);
      console.log(myEmptyObject);
      console.log(myMap);

      // --- Object ---

      // -- Key --

      let myNewObject = {
        10: "Number",
        "10": "String",
      }
      // The second will override the first

      console.log(myNewObject[10]); // String
      console.log(myNewObject["10"]); // String

      // -- Size --
      let size = Object.entries(myNewObject).length;

      // -- Loop --
      for(let [key, value] of Object.entries(myNewObject)) {
        console.log(key, value);
      }

      // --- Map ---

      // Key
      let user = {
        a: 1,
        b: 2
      }

      function doSomething() {

      }

      let myNewMap = new Map();
      myNewMap.set(10, "Number");
      myNewMap.set("10", "String");
      myNewMap.set(true, "Boolean");
      myNewMap.set(user, "Object");
      myNewMap.set(doSomething, "Function");

      console.log(myNewMap.get(10)); // Number
      console.log(myNewMap.get("10")); // String
      console.log(myNewMap.get(true)); // Boolean
      console.log(myNewMap.get(user)); // Object
      console.log(myNewMap.get(doSomething)); // undefined

      // -- Size --
      let sizeMap = myNewMap.size;
      console.log(sizeMap);

      // -- Loop --
      myNewMap.forEach((ele, index) => {
        console.log(index + " => "  + ele);
      })
*/

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size

  EX:
      let myMap = new Map([
        ["name", "Omar"],
        [10, 'number'],
        [true, "Boolean"]
      ]);

      // -- Has --
      if (myMap.has("10")) {
        console.log("Found");
      } else {
        console.log("Not Found"); // Not Found because 10 string
      }

      // -- delete --
      let check = myMap.delete(true);
      console.log(check);

      // -- clear --
      myMap.clear();

      console.log(myMap);

      EX:
      A router Map maps URL paths to handler functions. Retrieve the handler for "/home" and invoke it.
      const router = new Map();
      router.set("/home", () => console.log("home"));
      const handler = router.method(…);
      handler();

// logs "home"
*/

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
  EX:
        // --- Map ---
        let myUserMap = {
          name: "Omar",
          age: 20
        };

        let myMap = new Map([
          [myUserMap, "Object Value"]
        ]);

        myUserMap = null; // Override the reference

        console.log(myMap); // No changing

        // --- WeakMap ---

        let myUserWMap = {
          name: "Omar",
          age: 20
        };

        let myWMap = new WeakMap([
          [myUserWMap, "Object Value"]
        ]);

        myUserWMap = null; // Override the reference

        console.log(myWMap); // There is changing but we can't catch that

*/

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments

  EX:
      console.log(Array.from("Omar"));

      console.log(Array.from("12345", (e) => +e + +e));

      // --- SET ---
      let myArray = [1, 1, 1, 2, 3, 4];

      let mySet = new Set(myArray);

      console.log(Array.from(mySet));

      console.log([...new Set(myArray)]); // Future

      // --- Arguments ---
      function af() {
        return Array.from(arguments);
      }

      console.log(af(1, 2, 3, 4, 5, 6, 7));
*/

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
  EX:
            // myArray.copyWithin(4, -1); //  [10, 20, 30, 40, 'B', 'A', 'B']
            // myArray.copyWithin(1, -2); // [10, 'A', 'B', 40, 50, 'A', 'B']
            // myArray.copyWithin(1, -2, -1); // [10, 'A', 30, 40, 50, 'A', 'B']

            // console.log(myArray);
*/

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range

  EX:
       let nums = [1, 2, 3, 4, 5, 6, 7];

        // let chekcValueHigherThanFive = nums.some((e) => e > 5);
        // console.log(chekcValueHigherThanFive);

        // -- Check Value Higher Than 5
        let myNumber = 5;
        let chekcValueHigherThanFive = nums.some(function (e) {
          // console.log(this); // Number {5}
          return e > this;
        }, myNumber);
        console.log(chekcValueHigherThanFive);

        // -- Check Value Exist ---
        function checkValue(arr, val) {
          return arr.some((e) => e === val);
        }

        console.log(checkValue(nums, 8));

        // -- Check Number In Range --

        let range = {
          min: 10,
          max: 20,
        };

        let checkNumberInRange = function(range, num) {
          return num >= range.min && num <= range.max;
        }

        console.log(checkNumberInRange(range, 1));

        // -- Check Number In Range From Array --

        let checkNumberInRange2 = nums.some(function (e) {
          return e >= this.min && e <= this.max
        }, range);

        console.log(checkNumberInRange2);
*/

/*
  Array Methods
    - Array.every(CallbackFunc(Element, Index, Array), This Argument)
    --- CallbackFunc => Function To Run On Every Element On The Given Array
    ------ Element => The Current Element To Process
    ------ Index => Index Of Current Element
    ------ Array => The Current Array Working With
    --- This Argument => Value To Use As This When Executing CallbackFunc
    --
  EX:
      const locations = {
      20: "Place 1",
      30: "Place 2",
      10: "Place 3",
      40: "Place 4",
    };

    let mainLocation = 15;

    let locationsArray = Object.keys(locations).map((e) => +e);
    console.log(locationsArray.every(function(e) {
      return e > this;
    }, mainLocation));
*/

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"

    EX:
      // Spread With String => Expand String
      console.log([..."Omar"]);


      // Concatenate   Arrays
      let myArray1 = [1, 2, 3];
      let myArray2 = [4, 5, 6];

      let allArrays = [...myArray1, ...myArray2];
      console.log(allArrays);

      // Copy Array
      let myArray = [1, 4, 8];
      let copiedArray = [...myArray];
      // copiedArray = myArray;
      // Not Copied, Each Update on the copiedArray will be on myArray

      // Push Inside Array
      let allFriends = ["Oussame", "Saleh", 'Tamer'];
      let newFriends = ["Samer"];

      allFriends.push(...newFriends);
      console.log(allFriends);

      // Use With Math Object
      let myNumber = [1, 4, 7, 6, 7, 100];
      let max = Math.max(...myNumber);
      console.log(max);

      // Spread With Objects => Merge Objects

      let objOne = {
        a: 1,
        b: 2,
      };
      let objTwo = {
        c: 3,
        d: 4,
      };

      // let allObjs = Object.assign({}, objOne, objTwo);
      // console.log(allObjs);
      console.log({ ...objOne, ...objTwo, e: 5});
*/

/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
  EX:
      // let str1 = '10 20 100 1000 5000';
      // let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

      // let invalidEmail = 'Osama@@@gmail....com';
      // let validEmail = 'o@nn.sa';

      // let ip = '192.168.2.1'; // IPv4

      // let url = 'elzero.org';
      // let url = 'elzero.org/';
      // let url = 'http://elzero.org/';
      // let url = 'http://www.elzero.org/';
      // let url = 'https://.elzero.org/';
      // let url = 'https://www.elzero.org/';
      // let url = 'https://www.elzero.org/?facebookid=asdasdasd';
*/

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.

  EX:
    let myString = "Hello Elzero Web School I Love elzero";

    let regex = /Elzero/ig;

    console.log(myString.match(regex));
*/

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

  EX:
    // (X|Y) => X Or Y
    let tld = "Com Net Org Info Code Io";
    let tldRe = /(org|info|io)/i;
    console.log(tld.match(tldRe));

    // [0-9] => 0 To 9
    let nums = "123456789";
    let numsRe = /[0-9]/g;
    console.log(nums.match(numsRe));

    // [^0-9]
    let nums1 = "123456789";
    let nums1Re = /[^0-2]/g;
    console.log(nums1.match(nums1Re));

    // Special
    let specialNums = "1##@23%4 5&%6789";
    let specialNumsRe = /[^0-9\s])/g;
    console.log(specialNums.match(specialNumsRe))

    let practice = "Os1 Os1Os Os2 Os8 Os8Os";
    let practiceReg = /Os[5-9]Os/g;
    console.log(practice.match(practiceReg));

    EX:
      let myString = "AaBbcdefG123!234%^&*";

      let atozSmall = /[a-z]/g;
      let NotAtozSmall = /[^a-z]/g;
      let atozCapital = /[A-Z]/g;
      let NotAtozCapital = /[^A-Z]/g;
      let abc = /[abc]/g;
      let notabc = /[^abc]/g;

      let smallAndCapitalLetters = /[a-zA-Z]/g;
      let numsAndSpecials = /[^a-zA-Z]/g;
      let specials = /[^a-z^A-Z0-9]/g;
      console.log(myString.match(specials));
*/

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
  
  EX:s
      let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

      let dot = /./g;
      let word = /\w/g;
      let validEmail = /\w@\w.(com|net)/g;

      console.log(email.match(validEmail));
*/

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  EX;
      Test Method
      pattern.test(input)


    let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

    let re = /(\bSpam|Spam\b)/ig // Just if begin or start by Spam
    console.log(names.match(re));

    console.log(re.test("OSAMA"));

*/

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one

  EX:
      let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
      let mailsRe = /\w+@\w+.\w+/g;
      console.log(mails.match(mailsRe));

      let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
      let reg = /0\d*0/g;
      console.log(nums.match(reg));

      let urls = "https://google.com http://www.website.net web.com"; // http + https
      let urlReg = /(https?:\/\/)?(www.)?\w+.\w+/g;
      console.log(urls.match(urlReg));
*/

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x

  EX:
    let serials = "S100S S3000S S50000S S950000S";

    console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
    console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
    console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
*/

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something

  EX:
      let myString = "We Love Programming";
      let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

      console.log(/ing$/ig.test(myString));
      console.log(/lz$/ig.test(names));
      console.log(/^we/ig.test(myString));
      console.log(/^\d/ig.test(names));

      console.log(names.match(/\d\w{5}(?=Z)/ig));
      console.log(names.match(/\d\w{8}(?!Z)/ig));

*/

/*
  Regular Expression

  - replace
  - replaceAll
  
  EX:
    let txt = "We Love Programming And @ Because @ Is Amazing";

    console.log(txt.replace("@", "JAVASCRIPT"));
    console.log(txt.replace(/@/g, "JAVASCRIPT")); // Replace All because there is g

  EX:
      // EX1:
    let str = "cat bat sat fat";
    // بدنا نبدل كل كلمة بتنتهي بـ "at" بكلمة "dog"
    console.log(str.replace(/\w+at/g, 'dog'));
    // Output: "dog dog dog dog"

    // EX2:
    let str1 = "Hello   World   JS";
    console.log(str1.replace(/\s+/g, " "))
    // في مسافات زيادة بين الكلمات
    // بدنا نخليها مسافة وحدة بس
    // Output: "Hello World JS"

    // EX3:
    let str3 = "2024-19-02";
    console.log(str3.replace(/(\d{4})-(\d{2})-(\d{2})/g, "$3/$2/$1"));
    // بدنا نقلب الـ date من YYYY-DD-MM لـ DD/MM/YYYY
    // Output: "02/19/2024"

    // EX: 4
    let phone = "+1 (555) 123-4567";
    console.log(phone.replace(/\D/g, ""))
    // بدنا نشيل كل شي غير الأرقام
    // Output: "15551234567"

    EX4:
      let str = "My email is hello@gmail.com and work email is work.name@company.org";
      // بدنا نشيل الـ emails ونحطلهم *** 
      // Output: "My email is *** and work email is ***"

      // console.log(str.replace(/(\w+.)?\w+@(gmail|company).(com|org)/g, "***"));
      console.log(str.replace(/[\w.]+@[\w.]+\.\w+/g, "***"));
*/

/*
  Example Form:
          <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
              .empty-err {
                border-color: red;
              }

              #err {
                color: red;
              }
            </style>
          </head>
          <body>
            <form id="register" action="" method="get">
              <input type="text" id="phone" name="the-phone" placeholder="(1234) 567-8910" maxlength="15" />
              <div id="err"></div>
              <input type="submit" value="Register" />
            </form>
            <script>
              const rules = {
                phone: {
                  empty: "Phone Cannot Be Empty",
                  invalid: "Please Enter Valid Phone",
                },
              };

              document.getElementById("register").onsubmit = function (e) {
                
                const phone = document.getElementById("phone");
                let err = document.getElementById("err");
                var regex = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
                
                if (phone.value === "") {
                  e.preventDefault();
                  err.textContent = rules.phone.empty;
                  phone.classList.add("empty-err");
                } else if (!regex.test(phone.value)) {
                  e.preventDefault();
                  err.textContent = rules.phone.invalid;
                }
              };

              document.getElementById("phone").onfocus = function () {
                this.value = "";
                this.classList.remove("empty-err");
                document.getElementById("err").textContent = "";
              };
            </script>
            <script src="js/main.js"></script>
          </body>
        </html>
*/

/*
  Regular Expression
  - Challenge

  EX:
    let url1 = 'elzero.org';
    let url2 = 'http://elzero.org';
    let url3 = 'https://elzero.org';
    let url4 = 'https://www.elzero.org';
    let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

    let re = /(https?:\/\/)?(www\.)?\w+\.\w+(\:\d+\/\w+\.\w+)?(\?(\w+\=\w+&?)+)?/ig;

    console.log(url1.match(re));
    console.log(url2.match(re));
    console.log(url3.match(re));
    console.log(url4.match(re));
    console.log(url5.match(re));
*/

/*
  OOP
  Constructor Function

  EX:
    function User(id, username, salary) {
      this.id = id;
      this.username = username;
      this.salary = salary;
    }

    let userOne = new User(1, "Omar", 5000);
    console.log(userOne.id);
*/

/*
  OOP
  Constructor Function
  - New Syntax

      class User {
      constructor(id, username, salary) {
        this.id = id;
        this.username = username;
        this.salary = salary;
      }

      increaseSalary(amount) {
        this.salary = this.salary + amount;
      }
    }

    let userOne = new User(1, "Omar", 5000);
    userOne.increaseSalary(3000);
    console.log(userOne.salary);

    // -- Check Instance --
    console.log(userOne instanceof User);
    console.log(userOne.constructor === User);

  EX:
      const versions = [4.6, 4.7, 4.8];

    class Claude {
      constructor(version) {
        this.version = version;
      }
    }

    const claudes = versions.map(e => new Claude(e));

    console.log(claudes[0]);
*/
/*
  --- Instance ---
  Question1:
    class Animal {
      constructor(name, type) {
        this.name = name;
        this.type = type;
      }
    }

    class Dog extends Animal {
      constructor(name) {
        super(name, "Dog");
      }
    }

    let dog = new Dog("Rex");

    console.log(dog instanceof Dog); // true
    console.log(dog instanceof Animal); // true

  Question2:
    class Animal {}
    class Dog extends Animal {}
    class Cat extends Animal {}

    let dog = new Dog();

    console.log(dog instanceof Cat); // false
    console.log(dog instanceof Animal); // true

  Question3:
    class Vehicle {}
    class Car extends Vehicle {}
    class ElectricCar extends Car {}

    let tesla = new ElectricCar();

    console.log(tesla instanceof ElectricCar);
    console.log(tesla instanceof Car);
    console.log(tesla instanceof Vehicle);

  Question4:
    class Animal {}
    class Dog extends Animal {}

    let dog = new Dog();

    console.log(dog.constructor === Dog); // true
    console.log(dog.constructor === Animal); // false
*/

/*
  # Properties And Methods
      class User {
            constructor(id, username = "Unknown", salary) {
              this.id = id;
              this.username = username;
              this.salary = this.setSalary(salary);
            }
            
            // Set Salary
            setSalary(salary) {
              return salary < 6000 ? salary + 500 : salary;
            }

            // Write Messag
            msg() {
              return `Hello ${this.username}, Your Salary Is ${this.salary}`;
            }
          }

          let userOne = new User(1, "Omar", 5000);
          console.log(userOne.salary);
          console.log(userOne.msg());
*/

/*
  # Practice On Validation

      class Product {
        constructor(id, title = "No Title", price) {
          this.id = this.setId(id);
          this.title = title;
          this.price = this.setPrice(price);
        }

        setId(id) {
          return Number.isInteger(id) ? id : "ID should be a number";
        }

        setPrice(price) {
          return Number.isInteger(price)
            ? price < 50
              ? 50
              : price
            : "Product should be a number";
        }

        details() {
          return `Product: ${this.title}, Price: ${this.price}`;
        }
      }

      let p1 = new Product(1, "Laptop", 30);
      let p2 = new Product(2, undefined, 200);

      console.log(p1.price);      // 50
      console.log(p2.title);      // "No Title"
      console.log(p1.details());  // "Product: Laptop, Price: 50"
      console.log(p2.details());  // "Product: No Title, Price: 200"
*/

/*
  Private Field & Update Method
    class User {
      #salary; // Private Field

      constructor(id, username = "Unknown", salary) {
        this.id = id;
        this.username = username;
        this.#salary = this.#setSalary(salary);
      }

      #setSalary(salary) {
        return salary < 6000 ? salary + 500 : salary;
      }

      getSalary() {
        return this.#salary;
      }

      updateSalary(salary) {
        this.#salary = this.#setSalary(salary);
      }
    }

    let userOne1 = new User(1, "Omar", 5000);

    userOne1.updateSalary(4000)
    console.log(userOne1.getSalary()); 
*/

/*  
  Built In Constructors

  - Number
  - String 
  - Image
  - Object
  - File

  EX:
    let strOne = "Omar";
    let strTwo = new String('Omar');

    console.log(typeof strOne); // string
    console.log(typeof strTwo); // object

    console.log(strOne instanceof String); // false
    console.log(strTwo instanceof String); // true

    console.log(strOne.constructor === String); // true
    console.log(strTwo.constructor === String); // true

*/

/* 
  Static Properties And Methods
      class User {
        static count = 0;
        static admin = "Amir"
        constructor(id, username = "Unknown", salary) {
          this.id = id;
          this.username = username;
          this.salary = salary;
          User.count++;
        }

        static sayHello() {
          return `Hello From Class User, Admin is ${User.admin}`;
        }

        static countMembers() {
          return `${User.count} Member(s) Created`;
        }
      }

      const user1 = new User(1, "Omar", 4000);
      const user2 = new User(1, "Ahmad", 4000);

      // console.log(user.sayHello()); // Error: Is Not A Function
      console.log(user1.count); // undefined
      console.log(User.sayHello()); 
      console.log(User.countMembers());

*/

/*  
  Class
  - Inheritance

  EX:
    const permissions = new Map([
      [1, ["write", "read"]],
      [2, ["read"]],
    ]);

      // Parent
      class User {
        constructor(id, username) {
          this.id = id;
          this.username = username;
        }
      }

      // Child Of User
      class Admin extends User {
        constructor(id, username, permission) {
          super(id, username);
          this.permission = this.#setPermissions(permission);
        }

        #setPermissions(permission) {
          return permissions.has(permission)
            ? permission
            : false;
        }
      }

      // Child of Admin
      class SuperAdmin extends Admin {
        constructor(id, username, permission, ability) {
          super(id, username, permission);
          this.ability = ability;
        }
      }

      let admin = new Admin(1, "Omar", 2);
      let superAdmin = new SuperAdmin(3, "Jaber", 4, "Manage Projects");

      if (admin.permission) {
        console.log(`### Admin Permissions ###`);
        console.log(permissions.get(admin.permission).join(" & "))
      }

      if (superAdmin.permission) {
        console.log(`### Super Admin Permissions ###`);
        console.log(permissions.get(superAdmin.permission).join(" & "))
      }
      console.log(superAdmin.ability);

*/

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.

  EX:

      class User {
        #eSalary;
        constructor(id, username, eSalary) {
          this.id = id;
          this.username = username;
          this.#eSalary = eSalary;
        }

        getSalary() {
          return parseInt(this.#eSalary);
        }
      }

      class Admin extends User {
        constructor(id, username, eSalary, permissions) {
          super(id, username, eSalary);
          this.permissions = permissions;
        }
      }

      const user = new User(1, 'Omar', '5000 Gneh');
      const admin = new Admin(2, 'Fadel', 10000);
      console.log(admin.getSalary());
*/

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.

    EX:

      class User {
      constructor(id, username) {
        this.id = id;
        this.username = username;
      }
      sayHello() {
        return `Hello ${this.username}`;
      }
    }

    let user = new User(1, "Omar");
    console.log(User.prototype);

    let str = "Omar";
    console.log(String.prototype);
*/

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features

  EX:
      class User {
        constructor(id, username) {
          this.id = id;
          this.username = username;
        }
        sayHello() {
          return `Hello ${this.username}`;
        }
      }

      let user = new User(1, "Omar");
      console.log(User.prototype);

      // -- Add Method To User --
      User.prototype.sayWelcome = function() {
        return `Welcome ${this.username}`;
      }
      console.log(user.sayWelcome());

      // -- Add Property To Object --
      Object.prototype.love = "Love Elzero Web Shcool";
      console.log(User.love);
      console.log(user.love);

      // -- Add Method To Object --
      String.prototype.addDotBeforeAndAfter = function(val) {
        return `${val} .${this}.`;
      }
      let str = "Omar";
      console.log(str.addDotBeforeAndAfter("Hello"));
*/

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
  
  EX:
      const myObject = {
        a: 1,
        b: 2,
      };

      Object.defineProperty(myObject, 'c', {
        value: 3,
        writable: false,
        enumerable: false,
        configurable: false,
      });

      Object.defineProperty(myObject, 'c', {
        value: 4, // Error Cannot redefine a property has configurable(false)
        writable: false,
        enumerable: false,
        configurable: false,
      });

      // Writable
      myObject.c = 5
      console.log(myObject.c); // No Changing

      // Enumerable
      for (let prop in myObject) {
        console.log(prop, myObject[prop]); // Execpt c
      };

      // Configurable
      console.log(delete myObject.c); // false

*/

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors

  EX:
      const myObject = {
        a: 1, // by Default true
        b: 2,
      };

      Object.defineProperties(myObject, {
        // By default false
        c: {
          value: 3,
          configurable: true,
        },
        d: {
          value: 4,
          configurable: true,
        },
        e: {
          value: 5,
          configurable: true,
        },
      });

      console.log(Object.getOwnPropertyDescriptors(myObject));
      // a
      // :
      // {value: 1, writable: true, enumerable: true, configurable: true}
      // b
      // :
      // {value: 2, writable: true, enumerable: true, configurable: true}
      // c
      // :
      // {value: 3, writable: false, enumerable: false, configurable: true}
      // d
      // :
      // {value: 4, writable: false, enumerable: false, configurable: true}
      // e
      // :
      // {value: 5, writable: false, enumerable: false, configurable: true}
*/

/*
  Date And Time
  - Date Constructors

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.

  EX:
      let dateNow = new Date();

      console.log(dateNow);

      console.log(Date.now()); // 1000 Mill = 1 Second

      let seconds = Date.now() / 1000; // Number Of Seconds
      console.log(`Seconds ${seconds}`);

      let minutes = seconds / 60; // Number Of Minutes
      console.log(`Minutes ${minutes}`);

      let hours = minutes / 60; // Number Of Hours
      console.log(`Hours ${hours}`);

      let days = hours / 24; // Number Of Days
      console.log(`Days ${days}`);

      let years = days / 365; // Number Of Years
      console.log(`Years ${years}`);
*/

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()

  EX:

      let dateNow = new Date(); // current date and time
      let birthDay = new Date("Jun 22, 05");
      let dateDiff = dateNow - birthDay;

      console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

      console.log(dateNow);
      console.log(dateNow.getTime());
      console.log(dateNow.getDate());
      console.log(dateNow.getFullYear());
      console.log(dateNow.getMonth());
      console.log(dateNow.getDay()); // Sun => 0 ... Sat => 6
      console.log(dateNow.getHours());
      console.log(dateNow.getMinutes());
      console.log(dateNow.getSeconds());
*/

/*
    Date And Time
    - setTime(Milliseconds)
    - setDate() => Day Of The Month [Negative And Positive]
    - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
    - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
    - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setSeconds(Seconds => [0-59], MS => Optional [0-999])

    EX:
      let dateNow = new Date();
      let birthDay = new Date("Jun 22, 05");

      console.log(dateNow); // Sat Feb 21 2026 20:44:40 GMT+0200 (Eastern European Standard Time)
      // console.log(birthDay); 

      // --- Set Time ---
      // dateNow.setTime(0);
      // birthDay.setTime(0);

      // console.log(dateNow); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
      // console.log(birthDay); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)

      // --- Set Date ---
      // dateNow.setDate(20);
      // console.log(dateNow); // Fri Feb 20 2026 20:44:40 GMT+0200 (Eastern European Standard Time)
      
      // --- Set Full Year ---
      dateNow.setFullYear(2020, -1, 3);
      console.log(dateNow);

      // Why we use setTime()
      // const now = new Date();
      // const afterOneHour = new Date();

      // afterOneHour.setTime(now.getTime() + 60 * 60 * 1000);
      // console.log(afterOneHour);
*/

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Parse A Date To MilleSeconds

  EX:

        console.log(Date.parse('jun 22 2005'));
        console.log(new Date('Jun 22 2005') - new Date(0));
        // The Same

        let date1 = new Date(0);
        console.log(date1);

        let date2 = new Date(1119387600000);
        console.log(date2);

        let date3 = new Date('Jun 22 2005');
        console.log(date3);

        let date4 = new Date('6-22-2005');
        console.log(date4);

        let date5 = new Date('2005-6-22');
        console.log(date5);

        let date6 = new Date('2005-6');
        console.log(date6);

        let date7 = new Date('2005');
        console.log(date7);

        let date8 = new Date(2005, 5, 22, 2, 10, 0);
        console.log(date8);

        let date9 = new Date(2005, 5, 22);
        console.log(date9);

        let date10 = new Date("2005-06-22T06:10:00Z");
        console.log(date10);
*/

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()

  EX:
      
    // Start Time
    let start = new Date();

    // Operation
    for (let i = 0; i < 100000; i++) {
      // document.write(`<div>${i}</div>`);
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(i));
      document.body.appendChild(div);
    }

    // Time End
    let end = new Date();

    // Operation Duration
    let duration = end - start;

    console.log(duration);
*/

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable

  EX:
    function* generateNumbers() {
      yield 1;
      console.log('Hello After Yield 1');
      yield 2;
      yield 3;
      yield 4;
    }

    const generator = generateNumbers();

    console.log(typeof generator);
    console.log(generator);

    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());

    for (let value of generateNumbers()) {
      console.log(value);
    }

    for (let value of generator) {
      console.log(value); // Empty
    }
*/
// function* generateNumbers() {
//   console.log("Hello From Generator");
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// function* generateLetters() {
//   yield 'A';
//   yield 'B';
//   yield 'C';
//   yield 'D';
// }

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return('C'));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

/*
  Generators
  - Delegate Generator
  - return: stop the delegation

  EX:
      function* generateNums() {
      yield 1;
      yield 2;
      yield 3;
    }

    function* generateLetters() {
      yield 'A';
      yield 'B';
      yield 'C';
    }

    function* generateAll() {
      yield* generateNums(); // if we don't put *
      // it will return the object, otherwise
      // the value of each yield
      yield* generateLetters();
      yield* [3, 5, 6];// if we don't put *
      // it will return the array, otherwise
      // the value of each yield
    }

    let generator = generateAll();

    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.return("Done"));
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
*/

/* 
  EX:

    function* generateAll() {
      yield* [1, 2, 3, 4];
      yield* ['A', 'B', 'C', 'D'];
      yield* ['/', '*', '-', '+'];
    }

    let generator = generateAll();

    for (let val of generator) {
      if (val == 'C') {
        console.log(generator.return('Stop').value);
        break;  
      }
      console.log(val);
    }

*/

/*
  Import And Export
    Math.js:
          function add(a, b) {
        return a + b;
      }

      const PI = 3.14;
      const arr = [1, 4, 5, 5];

      export { add, PI, arr };

    App.js
      import {PI, add, arr as numbers} from "./main.js";

      console.log(PI, add(3, 5), numbers); 
*/

/*  
  Default 
    function add(a, b) {
      return a + b;
    }

    const PI = 3.14;
    const arr = [1, 4, 5, 5];

    export { add as add1, PI, arr };

    export default function() {
      console.log("Hello")
    } 
*/

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null

  EX:
      {
      "name": "Omar",
      "age": 20,
      "adress": {
        "EGY": "Cairo",
        "Leb": "Beyrouth"
      },
      "skills": ["HTML", "CSS", "JS"],
      "isAmin": false,
      "null": null
    }
*/

/*
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API

  => Private API: like Youtube
  => Public API 
*/

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON

  EX:
    const myJsonObjectFromServer = `{ "Username": "Omar", "Age": 20}`;

    console.log(typeof myJsonObjectFromServer);
    console.log(myJsonObjectFromServer);

    const myJsObject = JSON.parse(myJsonObjectFromServer);
    myJsObject.Username = "Samer";
    myJsObject.Age = 21;

    console.log(typeof myJsObject);
    console.log(myJsObject);

    const myJsonObjectToServer = JSON.stringify(myJsObject);
    console.log(typeof myJsonObjectToServer);
    console.log(myJsonObjectToServer);
*/

/*  
  Animation:
    element.animate(keyframes, options);
    - duration
    - iterations
    - direction
    - easing

    - Methods:
      - play
      - pause
      - reverse()
      - finish()
      - cancel()

    
    - Properties
      - playbackRate
      - currentTime
      - startTime
      - effect
      - timeline
      - playState
      - finished
      - onfinish
      - oncancel

  EX:
      const square = document.getElementById("square");
      const playBtn = document.getElementById("play-btn");
      const pauseBtn = document.getElementById("pause-btn");

      const animation = square.animate(
        [{ transform: "translate(0)" }, { transform: "translate(100px)" }],
        {
          duration: 2000,
          iterations: Infinity,// I put it to show the animation finsished
          direction: "alternate",
          easing: "ease-in-out",
        },
      );

      animation.onfinish = () => {
        console.log("Animation finished");
      };

      playBtn.addEventListener("click", () => {
        animation.play();
        console.log("Animation Play");
      });

      pauseBtn.addEventListener("click", () => {
        animation.pause();
        console.log("Animation Pause");
      });
*/

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages

  EX:
    // Synchronous
    // console.log(1)
    // console.log(2)
    // alert('Operation');
    // console.log(3)

    // Asynchronous
    // console.log(1)
    // console.log(2)
    // setTimeout(() => console.log('Operation'), 4000)
    // console.log(3)
*/

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser

  EX:
      setTimeout(() => console.log('WEP API'), 0);
      // Even if it is 0 it will be logged after all

      function one() {
        console.log("One");
      }
      function two() {
        one();
        console.log("Two");
      }
      function three() {
        two();
        console.log("three");
      }
      three();

      // Output:
      // One
      // Two
      // Three
*/

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
    (And the browser will execute it later)
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  (like ex3)
  - Callback Queue Follow FIFO "First In First Out" Rule

  EX3:
    console.log("A");

    setTimeout(() => {
      console.log("B");
    }, 0);

    for (let i = 0; i < 1_000_000_000; i++) {}

    console.log("C");
  
    حتى لو timeout = 0
    الـ callback لازم تنطر:
    ✔ يخلص الـ loop
    ✔ يفضى الـ call stack
    ✔ بعدين تنفّذ
  -------------------------
  EX:4
    console.log("A");

    setTimeout(() => {
      console.log("B");
    }, 0);

    setTimeout(() => {
      console.log("D");
    }, 1);

    for (let i = 0; i < 1_000_000_000; i++) {}

    console.log("C");
  -------------------------
  EX:
    console.log("A");

    setTimeout(() => {
      console.log("B");
    }, 2);

    setTimeout(() => {
      console.log("D");
    }, 0);

    console.log('F');

      // Senario
    // A => execute
    // The Time Of D is end
    // PUT The D In the CallBack Queue First
    // The Time of B is end
    // PUT the B In the CallBak Queue Next
    // Get the first one, then the second
    // D => execute
    // B => execute

  EX:
    setTimeout(() => console.log(myVar), 0)

    let myVar = 100;
    myVar += 100;

*/

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code

  EX:
    let request = new XMLHttpRequest();
    console.log(request);
*/

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication]
  
  EX:
      let myRequest = new XMLHttpRequest();

    myRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
    myRequest.send();

    myRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);

        const jsData = JSON.parse(this.responseText);

        for (var v of jsData) {
          const div = document.createElement('div');
          div.textContent = `Username: ${v.username}`;
          document.body.appendChild(div);
        }
      }
    }
*/

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website

  EX:
      setTimeout(() => {
      console.log("Download Photo From URL");
      setTimeout(() => {
        console.log("Resize Photo");
        setTimeout(() => {
          console.log("Add Logo To The Photo");
          setTimeout(() => {
            console.log("Show The Photo In Website");
          }, 4000);
        }, 3000);
      }, 2000);
    }, 1000);
*/

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]

  EX:
      const promise = new Promise((resolveFunction, rejectFunction) => {
      let connect = false;

      if (connect) {
        resolveFunction("Connection Established");
        // fulfilled
      } else {
        rejectFunction(Error('Connection failed'));
        // Rejected
      }

    });

    let resolver = (resolveMsg) => console.log(`Good ${resolveMsg}`);
    let rejecter = (rejectMsg) => console.log(`Bad ${rejectMsg}`)

    // Async Function
    // Step 1
    promise.then(resolver, rejecter);

    // Step 2
    promise.then(
      (resolveMsg) => console.log(`Good ${resolveMsg}`),
      (rejectMsg) => console.log(`Bad ${rejectMsg}`)
    );

    // Step 3
    promise.then(
      (resolveMsg) => console.log(`Good ${resolveMsg}`),
      (rejectMsg) => console.log(`Bad ${rejectMsg}`)
    );
*/

/*
  /*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something

  EX:
        let promise = new Promise((resolve, reject) => {
      let employees = ["Omar", 'Hamza', "Oussama", "Saleh"];

      if (employees.length === 4) {
        resolve(employees);
      } else {
        reject(Error("Number Of Employees Is not 4"));
      }
    });

    promise 
      .then((data) => {
        data.length = 2;
        return data;
      })
      .then((data) => {
        data.length = 1;
        return data;
      })
      .then((data) => {
        console.log(`Choosen Employee is ${data}`);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log('Operation Fininshed'));
*/

/*
  Promise
  - All 
  - All Settled 
  - Race
*/

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style

  Important:
  - In async functions, use `throw new Error(...)` to reject the promise.
    Using `return Error(...)` resolves the promise with an Error object.
  - With regular promises, use `return Promise.reject(new Error(...))`
    to create a rejected promise.
  - There is Bit Difference between async method and the regular promise

      // EX:
    // function getData() {
    //   let users = [];

    //   return users.length > 0
    //     ? Promise.resolve("Users Found")
    //     : Promise.reject(Error("Users Not Found"));
    // }

    // getData()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))

  EX:
    async function getData() {
      let users = [];

      if (users.length === 0) {
        throw new Error("Users Not Found");
      }

      return "Users Found";
    }

    getData()
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
*/

/*
    **Golden rule to remember**

  🧠 `await` = wait for a **Promise** only
  🧠 modification / calculation / logging = **no await needed**

*/

/*
**Important note**

`await` does NOT stop the whole program — it only pauses the current async function.
*/

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response

  EX:
    fetch('articles.json')
    .then((result) => {
      const myData = result.json();
      // console.log(myData); Log A Promise
      // Return A Promise
      return myData
    })
    .then((data) => {
      data.length = 5;
      return data;
    })
    .then((data) => {
      console.log(data[0].userId);
    })
*/

