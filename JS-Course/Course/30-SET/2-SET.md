Here are 2 real-world `Set` exercises!

---

**Challenge 1 — Remove Duplicates from API Tags**

A blog API returns tags with duplicates. Use a `Set` to return only unique tags as an array:

```js
const tags = ["js", "css", "js", "html", "css", "js", "react"];

function getUniqueTags(array) {
  return new Set(array);
}

console.log(getUniqueTags(tags));
// ['js', 'css', 'html', 'react']
```

---

**Challenge 2 — Track Visited Pages**

You are building a simple analytics tracker. Use a `Set` to track which pages a user has visited, and check if they've visited a page before:

```js
const visitedPages = new Set();

function visitPage(page) {
  // your code here
}

function hasVisited(page) {
  // your code here
}

visitPage("/home");
visitPage("/about");
visitPage("/home"); // visited again

console.log(visitedPages.size); // 2  (no duplicates)
console.log(hasVisited("/about")); // true
console.log(hasVisited("/contact")); // false
```

---

Here's a hard real-world DOM exercise combining everything you've practiced!

---

**Challenge — Live Tag Filter**

You have a list of articles, each with tags. Build a tag filter system where:

1. Clicking a tag **adds it to the active filters** (no duplicates — use a `Set`)
2. Clicking an active tag **removes it**
3. Only articles that have **all active tags** are shown
4. Use **event delegation** on the tag container (no listener on each tag)
5. Destructure the article data in your render function

```js
const articles = [
  { id: 1, title: "JS Basics", tags: ["js", "beginner"] },
  { id: 2, title: "React Hooks", tags: ["js", "react", "advanced"] },
  { id: 3, title: "CSS Grid", tags: ["css", "beginner"] },
  { id: 4, title: "JS & CSS Tricks", tags: ["js", "css"] },
];

const activeFilters = new Set();

document.querySelector("#tags ul").addEventListener("click", function (e) {
  if (e.target.matches("li")) {
    e.target.classList.toggle("active");
    if (activeFilters.has(e.target.textContent)) {
      activeFilters.delete(e.target.textContent);
    } else {
      activeFilters.add(e.target.textContent);
    }
    renderArticles(activeFilters);
  }
});

function renderArticles(activeFilters) {
  // show only articles that include ALL active filters
  // use destructuring in your loop
  document.querySelector("#articles").innerHTML = "";

  const filtered =
    activeFilters.size === 0
      ? articles
      : articles.filter(({ tags }) =>
          [...activeFilters].every((tag) => tags.includes(tag)),
        );

  filtered.forEach(createArticleLi);
}

function renderTags() {
  // display all unique tags across all articles
  // highlight active ones
  // use event delegation for click handling
  const allTags = new Set(articles.flatMap(({ tags }) => tags));

  allTags.forEach((ele) => {
    const li = document.createElement("li");
    li.textContent = ele;
    document.querySelector("#tags ul").append(li);
  });
}

function createArticleLi({ id, title, tags }) {
  const li = document.createElement("li");
  li.textContent = `${id}, title: ${title}, Tags: ${tags.join(" | ")}`;
  document.querySelector("#articles").append(li);
}
renderTags();
```

```html
<div id="tags">
  <ul></ul>
</div>
<ul id="articles"></ul>
```

---
### Big Example
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tag Filter</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --ink: #0f0f0f;
        --paper: #f5f0e8;
        --accent: #c8392b;
        --gold: #d4a017;
        --muted: #8a8078;
        --border: #2a2a2a;
        --tag-active-bg: #0f0f0f;
        --tag-active-fg: #f5f0e8;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: var(--paper);
        color: var(--ink);
        font-family: "IBM Plex Mono", monospace;
        min-height: 100vh;
        padding: 48px 32px;
      }

      /* ── Masthead ── */
      header {
        border-top: 6px solid var(--ink);
        border-bottom: 2px solid var(--ink);
        padding: 24px 0 20px;
        margin-bottom: 48px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 16px;
      }
      header h1 {
        font-family: "Playfair Display", serif;
        font-weight: 900;
        font-size: clamp(2rem, 5vw, 3.8rem);
        line-height: 1;
        letter-spacing: -0.02em;
      }
      header h1 span {
        color: var(--accent);
      }
      .issue-info {
        font-size: 0.62rem;
        color: var(--muted);
        text-align: right;
        line-height: 1.7;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      /* ── Layout ── */
      .layout {
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 0;
        border: 1.5px solid var(--ink);
      }

      /* ── Tag Panel ── */
      .tag-panel {
        border-right: 1.5px solid var(--ink);
        padding: 24px 20px;
      }
      .panel-label {
        font-size: 0.6rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--ink);
      }
      #tags ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      #tags ul li {
        font-size: 0.78rem;
        letter-spacing: 0.04em;
        padding: 7px 12px;
        border: 1.5px solid var(--ink);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition:
          color 0.18s,
          background 0.18s;
        user-select: none;
      }

      #tags ul li:hover span {
        color: white;
      }

      #tags ul li::before {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--ink);
        transform: translateX(-105%);
        transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
      }

      #tags ul li:hover::before {
        transform: translateX(-60%);
      }
      #tags ul li.active::before {
        transform: translateX(0);
      }
      #tags ul li span {
        position: relative;
        z-index: 1;
      }
      #tags ul li.active span {
        color: var(--paper);
      }
      #tags ul li.active {
        border-color: var(--ink);
      }

      /* Active pill counter */
      .filter-status {
        margin-top: 20px;
        padding-top: 12px;
        border-top: 1px dashed var(--ink);
        font-size: 0.62rem;
        color: var(--muted);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        line-height: 1.8;
      }
      .filter-status strong {
        color: var(--accent);
        font-size: 1.1rem;
        font-family: "Playfair Display", serif;
        font-weight: 700;
        display: block;
        line-height: 1;
        margin-bottom: 2px;
      }

      /* ── Articles Panel ── */
      .articles-panel {
        padding: 0;
      }
      .articles-header {
        padding: 14px 24px;
        border-bottom: 1.5px solid var(--ink);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .articles-header .panel-label {
        margin: 0;
        padding: 0;
        border: none;
      }
      #result-count {
        font-size: 0.62rem;
        color: var(--muted);
        letter-spacing: 0.08em;
      }

      #articles {
        list-style: none;
      }
      #articles li {
        padding: 20px 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        display: grid;
        grid-template-columns: 28px 1fr auto;
        align-items: start;
        gap: 14px;
        animation: slideIn 0.22s ease both;
      }
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-6px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      #articles li:last-child {
        border-bottom: none;
      }
      .article-id {
        font-size: 0.6rem;
        color: var(--muted);
        padding-top: 3px;
        letter-spacing: 0.06em;
      }
      .article-title {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-size: 1.05rem;
        line-height: 1.25;
      }
      .article-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: flex-end;
        padding-top: 2px;
      }
      .article-tags .tag-chip {
        font-size: 0.6rem;
        letter-spacing: 0.06em;
        padding: 2px 7px;
        border: 1px solid var(--ink);
        text-transform: lowercase;
      }
      .article-tags .tag-chip.matched {
        background: var(--ink);
        color: var(--paper);
      }

      /* Empty state */
      .empty-state {
        padding: 48px 24px;
        text-align: center;
        color: var(--muted);
      }
      .empty-state .big-x {
        font-family: "Playfair Display", serif;
        font-size: 4rem;
        font-weight: 900;
        color: var(--accent);
        line-height: 1;
        display: block;
        margin-bottom: 8px;
      }
      .empty-state p {
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      /* Clear button */
      #clear-btn {
        display: none;
        margin-top: 14px;
        width: 100%;
        font-family: "IBM Plex Mono", monospace;
        font-size: 0.65rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border: 1.5px solid var(--accent);
        background: transparent;
        color: var(--accent);
        padding: 7px 12px;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s;
      }
      #clear-btn:hover {
        background: var(--accent);
        color: var(--paper);
      }
      #clear-btn.visible {
        display: block;
      }

      @media (max-width: 600px) {
        body {
          padding: 24px 16px;
        }
        .layout {
          grid-template-columns: 1fr;
        }
        .tag-panel {
          border-right: none;
          border-bottom: 1.5px solid var(--ink);
        }
        #tags ul {
          flex-direction: row;
          flex-wrap: wrap;
        }
        #tags ul li {
          flex: 0 0 auto;
        }
      }
    </style>
  </head>
  <body>
    <header>
      <h1>THE ARTICLE<br /><span>ARCHIVE</span></h1>
      <div class="issue-info">
        Live Tag Filter<br />
        Vol. III · No. 7<br />
        <span id="today-date"></span>
      </div>
    </header>

    <div class="layout">
      <aside class="tag-panel">
        <div class="panel-label">Filter by tag</div>
        <div id="tags"><ul></ul></div>
        <div class="filter-status">
          <strong id="active-count">0</strong>
          active filter(s)
        </div>
        <button id="clear-btn">✕ Clear all</button>
      </aside>

      <section class="articles-panel">
        <div class="articles-header">
          <div class="panel-label">Articles</div>
          <span id="result-count"></span>
        </div>
        <ul id="articles"></ul>
      </section>
    </div>

    <script>
      // ── Data ──────────────────────────────────────────────
      const articles = [
        { id: 1, title: "JS Basics", tags: ["js", "beginner"] },
        { id: 2, title: "React Hooks", tags: ["js", "react", "advanced"] },
        { id: 3, title: "CSS Grid", tags: ["css", "beginner"] },
        { id: 4, title: "JS & CSS Tricks", tags: ["js", "css"] },
      ];

      const activeFilters = new Set();

      // ── Date ─────────────────────────────────────────────
      document.getElementById("today-date").textContent =
        new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });

      // ── Event delegation on the tag list ─────────────────
      document
        .querySelector("#tags ul")
        .addEventListener("click", function (e) {
          if (e.target.closest("li")) {
            const li = e.target.closest("li");
            const tag = li.dataset.tag;

            li.classList.toggle("active");

            if (activeFilters.has(tag)) {
              activeFilters.delete(tag);
            } else {
              activeFilters.add(tag);
            }

            updateFilterStatus();
            renderArticles(activeFilters);
          }
        });

      // ── Clear button ──────────────────────────────────────
      document.getElementById("clear-btn").addEventListener("click", () => {
        activeFilters.clear();
        document
          .querySelectorAll("#tags ul li")
          .forEach((li) => li.classList.remove("active"));
        updateFilterStatus();
        renderArticles(activeFilters);
      });

      // ── Render articles ───────────────────────────────────
      function renderArticles(activeFilters) {
        const container = document.querySelector("#articles");
        container.innerHTML = "";

        const filtered =
          activeFilters.size === 0
            ? articles
            : articles.filter(({ tags }) =>
                [...activeFilters].every((tag) => tags.includes(tag)),
              );

        document.getElementById("result-count").textContent =
          `${filtered.length} of ${articles.length} shown`;

        if (filtered.length === 0) {
          container.innerHTML = `
        <li class="empty-state" style="grid-column:1/-1;display:block">
          <span class="big-x">∅</span>
          <p>No articles match all active filters</p>
        </li>`;
          return;
        }

        filtered.forEach(createArticleLi);
      }

      // ── Create article list item (destructured) ──────────
      function createArticleLi({ id, title, tags }) {
        const li = document.createElement("li");

        const chipHTML = tags
          .map(
            (tag) =>
              `<span class="tag-chip ${activeFilters.has(tag) ? "matched" : ""}">${tag}</span>`,
          )
          .join("");

        li.innerHTML = `
      <span class="article-id">#${String(id).padStart(2, "0")}</span>
      <span class="article-title">${title}</span>
      <div class="article-tags">${chipHTML}</div>
    `;

        document.querySelector("#articles").append(li);
      }

      // ── Render all unique tags ────────────────────────────
      function renderTags() {
        const allTags = new Set(articles.flatMap(({ tags }) => tags));
        const ul = document.querySelector("#tags ul");

        allTags.forEach((tag) => {
          const li = document.createElement("li");
          li.dataset.tag = tag;
          li.innerHTML = `<span>${tag}</span>`;
          ul.append(li);
        });
      }

      // ── Update filter status UI ───────────────────────────
      function updateFilterStatus() {
        document.getElementById("active-count").textContent =
          activeFilters.size;
        const btn = document.getElementById("clear-btn");
        btn.classList.toggle("visible", activeFilters.size > 0);
      }

      // ── Init ──────────────────────────────────────────────
      renderTags();
      renderArticles(activeFilters);
    </script>
  </body>
</html>
```