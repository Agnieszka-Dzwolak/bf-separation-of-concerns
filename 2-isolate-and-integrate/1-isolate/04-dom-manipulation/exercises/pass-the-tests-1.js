'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const nav1 = document.createElement('nav');
const pEl1 = divEl.getElementsByTagName('p')[0];
divEl.replaceChild(nav1, pEl1);

//  insert something before the <section>
const h2El = document.createElement('h2');
const secEl = divEl.getElementsByTagName('section')[0];
divEl.insertBefore(h2El, secEl);

//  remove the <h1>
divEl.removeChild(divEl.children[2]);

//  append something to the end
const pEl = document.createElement('p');
divEl.appendChild(pEl);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
