import { data } from "./data";
import './style.css'

function main() {
  const item = data[Math.floor(Math.random() * data.length)];
  const { section, chapter } = item;

  const app = document.querySelector('#app');
  const contentWrapper = document.querySelector('#content-wrapper');

  if (contentWrapper) {
    contentWrapper.outerHTML = renderContent(chapter, section);
  } else {
    app.innerHTML = `
      ${renderContent(chapter, section)}
      <button id="reroll">Reroll</button>
    `;
    document.querySelector('#reroll').addEventListener('click', main);
  }
}

function renderContent(chapter, section) {
  return `
    <div id="content-wrapper">
      <h1>${chapter}</h1>
      <h2>${section}</h2>
    </div>
  `;
}

main();