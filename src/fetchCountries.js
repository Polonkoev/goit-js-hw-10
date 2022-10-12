import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function fetchCountries(name) {
    // fetch(`https://restcountries.com/v2/${name}?fields=,name.official,capital,population,flags.svg,languages`)
    // fetch(`https://restcountries.com/v2/${name}?fields={name.official},{capital},{population},{flags.svg},{languages}`)
    // fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg`)
    // fetch(`https://restcountries.com/v3.1/name/${name}?fields={name.official},{capital},{population},{flags.svg},{languages}`)
    // fetch(`https://restcountries.com/v3.1/${name}/name?fields={name.official},{capital},{population},{flags.svg},{languages}`)
    // fetch(`https://restcountries.com/v2/{service}?fields={name.official},{capital},{population},{flags.svg},{languages}`)
    fetch(`https://restcountries.com/v2/all?fields=name,capital,currencies`)
    // fetch(`https://restcountries.com/v2/${name}?fields=name,capital,currencies`)

    
    
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      
      console.log(data);
    })
    .catch(error => {
        console.log(error);
      
    });
} 

