import renderShows from './renderShows';

const category = document.querySelector('.options');
const mobileCategory = document.querySelector('.mobile-options');
const baseurl = 'https://api.tvmaze.com/shows';

const categoryFunction = async () => {
  const response = await fetch(baseurl);
  const data = await response.json();

  category.addEventListener('change', (e) => {
    if (e.target.value === 'All') {
      renderShows(data);
    }

    if (e.target.value !== 'All') {
      const newData = data.filter((show) => show.genres.includes(e.target.value));
      renderShows(newData);
    }
  });

  mobileCategory.addEventListener('change', (e) => {
    if (e.target.value === 'All') {
      renderShows(data);
    }

    if (e.target.value !== 'All') {
      const newData = data.filter((show) => show.genres.includes(e.target.value));
      renderShows(newData);
    }
  });
};
export default categoryFunction;