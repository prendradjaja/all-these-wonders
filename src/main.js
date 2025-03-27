import { data } from "./data";
import './style.css'

function main() {
  const item = data[Math.floor(Math.random() * data.length)];
  const { section, chapter } = item;

  const app = document.querySelector('#app');
  const result = document.querySelector('#result');

  if (result) {
    result.outerHTML = renderResult(chapter, section);
  } else {
    app.innerHTML = `
      ${renderResult(chapter, section)}
      <button id="reroll">Reroll</button>
    `;
    document.querySelector('#reroll').addEventListener('click', main);
  }
}

function renderResult(chapter, section) {
  return `
    <div id="result">
      <h1>${chapter}</h1>
      <h2>${section}</h2>
    </div>
  `;
}

main();