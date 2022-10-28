import './style.css';
import fetchSeries from './modules/API.js';
import showComments from './modules/showComments.js';
import renderInfo from './modules/renderInfo';

window.addEventListener('load', ()=>{

    fetchSeries()
    
})


showComments()

renderInfo()


