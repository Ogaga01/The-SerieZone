import renderShows from './renderShows';

const search = document.querySelector('.search-input');
const mobileSearch = document.querySelector('.mobile-search-input');
const baseurl = 'https://api.tvmaze.com/shows';

const searchFunction = async () => {
  const response = await fetch(baseurl);
  const data = await response.json();

  search.addEventListener('input', (e) => {
    const [first, ...rest] = e.target.value;
    const newFirst = first.toUpperCase();
    const capitalised = newFirst + rest;
    const newData = data.filter((show) => show.name.startsWith(capitalised));
    renderShows(newData);
  });

  mobileSearch.addEventListener('input', (e) => {
    const [first, ...rest] = e.target.value;
    const newFirst = first.toUpperCase();
    const capitalised = newFirst + rest;
    const newData = data.filter((show) => show.name.startsWith(capitalised));
    renderShows(newData);
  });
};

export default searchFunction;