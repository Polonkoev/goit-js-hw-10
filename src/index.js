import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix';
const inputEl = document.getElementById('search-box');
const list = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

let arr = [];

function inputHandler(name) {
  fetchCountries(name);
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => renderMarkup(data))
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      console.log(error);
    });
}

function renderMarkup(data) {
list.style.listStyle = "none";
list.style.paddingLeft = 0;

if(data === ""){
  


data.map(item =>
  
  list.insertAdjacentHTML('afterbegin',`<li><p>
  <img width="20px" height="10px" src="${item.flags.svg}">
  ${item.name.common}<p/>`))
}
else{
list.innerHTML = ''}
}

function renderMarkupUnique(data) {
  data.map(item =>
    divEl.insertAdjacentHTML('afterbegin',` <p  style=" font-size: 40px;
font-weight: bold;">
<img width="60px" height="40px" src="${item.flags.svg}">
${item.name.common}<p/>
<p><span style="font-weight: bold">Capital:</span> ${item.capital}</p>
<p><span style="font-weight: bold">Population:</span> ${item.population}</p>
<p><span style="font-weight: bold">Languages:</span> ${Object.values(item.languages)}</p>`));

}

inputEl.addEventListener(
  'input',
  debounce(event => {
    inputHandler(event.target.value);
  }, DEBOUNCE_DELAY)
);

// console.log(dataFromServer);
