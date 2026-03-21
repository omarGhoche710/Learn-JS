Got it — exercises based on how destructuring is **actually used in real codebases**! Here are 2:

---

**Challenge 1 — `useState` in React**

In React, `useState` returns an array. Destructure it correctly to make this counter work:

```js
// useState returns [currentValue, setterFunction]
const _______ = useState(0);

function increment() {
  setCount(prev => prev + 1);
}

console.log(count); // 0
```

---

**Challenge 2 — Processing a list of users**

You have this array of users from a database. Use destructuring inside the `map` to extract only `name` and `role` from each user's info array.

```js
const users = [
  ['Alice', 28, 'admin'],
  ['Bob', 34, 'editor'],
  ['Carol', 22, 'viewer'],
];

const result = users.map(([_______, _______]) => {
  return `${name} is a ${role}`;
});

console.log(result);
// ['Alice is a admin', 'Bob is a editor', 'Carol is a viewer']
```

---

Give them a shot!