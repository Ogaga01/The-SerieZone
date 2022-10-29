import renderShows from './renderShows';

const search = document.querySelector('.search-input');
const baseurl = 'https://api.tvmaze.com/shows'; 

const searchFunction = async () => {
  const response = await fetch(baseurl);
    const data = await response.json();
    

    search.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value
        const newFirst = first.toUpperCase()
        const capitalised = newFirst + rest
        const newData = data.filter((show) => {
            return show.name.startsWith(capitalised)
        })
        renderShows(newData)
    })




  // data = data.filter((show) => {
  //     return show.name.startsWith(searchKey)
  // })

  // console.log(data)

  // console.log(searchKey)
  // search.addEventListener('keydown', (e) => {
  //     if (e.key === )
  //     renderShows(data)
  // })
};

export default searchFunction;