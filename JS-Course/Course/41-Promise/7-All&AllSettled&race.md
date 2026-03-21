Looks like you’re summarizing JavaScript promise combinators. Here’s the clean version:

**• Promise.all**

* Runs multiple promises in parallel.
* ✅ Resolves when **all** promises resolve → returns array of results.
* ❌ If **any one** promise rejects → it immediately rejects.
* When it rejects, the error is returned and remaining results are ignored.

**• Promise.allSettled**

* Runs multiple promises in parallel.
* ✅ Always resolves after **all promises settle** (either resolve or reject).
* Returns an array of objects like:
  `{ status: "fulfilled", value: ... }`
  `{ status: "rejected", reason: ... }`
* No promise stops the others.

**• Promise.race**

* Runs multiple promises in parallel.
* ⚡ Settles as soon as the **first promise settles** (resolve OR reject).
* Returns the result/error of the fastest one.

## EX:
```js
const firstPromsie = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'am the first Promise");
  }, 500);
});
const secondPromsie = new Promise((res, rej) => {
  setTimeout(() => {
    rej("I'am the second Promise");
  }, 1000);
});
const thirdPromsie = new Promise((res, rej) => {
  setTimeout(() => {
    res("I'am the third Promise");
  }, 2000);
});

// Promise.all([firstPromsie, secondPromsie, thirdPromsie])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`Rejected: ${err}`))

// Promise.allSettled([firstPromsie, secondPromsie, thirdPromsie])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(`Rejected: ${err}`))

Promise.race([firstPromsie, secondPromsie, thirdPromsie])
  .then((res) => console.log(res))
  .catch((err) => console.log(`Rejected: ${err}`))

```

