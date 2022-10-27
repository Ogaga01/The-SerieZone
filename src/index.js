import './style.css';

const url = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  console.log(data);
};
url();
