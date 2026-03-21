import Button from "./Button.js"

export default function NavBar(title) {
  return `
    <nav>
      <h1>${title}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul>
        ${Button("Login", 'login-btn')}
      </ul>
    </nav>
  `;
}
