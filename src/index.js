import './css/styles.css';
import debounce from 'lodash.debounce';
import {fetchCountries} from "./fetchCountries"
const inputEl = document.getElementById('search-box')
const list = document.querySelector('.country-list')
const divEl = document.querySelector('.country-info')



const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce((event) => {
    fetchCountries(event.target.value)
  }, DEBOUNCE_DELAY)
)

