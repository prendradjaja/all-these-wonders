import { data } from "./data";
import './style.css'

function main() {
  const item = data[Math.floor(Math.random() * data.length)];
  const { section, chapter } = item;
  document.querySelector('#app').innerHTML = `
    <div>
      <h1>${chapter}</h1>
      <h2>${section}</h2>
      <button id="reroll">Reroll</button>
    </div>
  `;
  document.querySelector('#reroll').addEventListener('click', main)

}

main();