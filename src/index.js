import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
const inputEl = document.getElementById('search-box');
const list = document.querySelector('.country-list');
const divEl = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

function inputHandler(name) {
  fetchCountries(name);
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,language`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {renderMarkupUnique(data)})
    .catch(error => {
      console.log(error);
    });
}


function renderMarkupUnique(data){
  data.map((item) => list.insertAdjacentHTML('afterbegin', `<li style="
  display: flex;
  flex-direction: row;
  align-items: center;
"><img width="60px" height="40px" src="${item.flags.svg}">&nbsp<p>${item.name.official}<p/></li>`))
}












inputEl.addEventListener(
  'input',
  debounce(event => {
    inputHandler(event.target.value);
  }, DEBOUNCE_DELAY)
);

// console.log(dataFromServer);
