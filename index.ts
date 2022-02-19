// Import stylesheets
import { Person } from './person';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let Pessoa = new Person('Luca', 'Pedro', 'Oliveira', 20);

appDiv.innerHTML = `
<div>nome completo: ${Pessoa.getFullName()}</div>
<div>ano de nascimento: ${Pessoa.getBirthdayYear()}</div>
`;
