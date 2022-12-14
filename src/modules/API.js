import renderShows from './renderShows';

const baseurl = 'https://api.tvmaze.com/shows';

const fetchSeries = async () => {
  const response = await fetch(baseurl);
  const data = await response.json();
  renderShows(data);
};

export default fetchSeries;