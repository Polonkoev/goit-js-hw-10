import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchCountries} from "./fetchCountries"
const inputEl = document.getElementById('search-box')
const list = document.querySelector('.country-list')
const divEl = document.querySelector('.country-info')



const DEBOUNCE_DELAY = 300;

let dataFromServer = []


function inputHandler(name){
  fetchCountries(name)
  fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,language`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
    data.map(element => {
      dataFromServer.push(element)
      });
    })
    .catch(error => {
      console.log(error);
    });
    
    
}

inputEl.addEventListener('input', debounce((event) => {
  inputHandler(event.target.value)


  }, DEBOUNCE_DELAY)

  
)

console.log(dataFromServer);