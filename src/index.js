import './style.css';
import fetchSeries from './modules/API';
import mobileNav from './modules/mobileNav';
import searchFunction from './modules/searchFunction';
import categoryFunction from './modules/categoriesFunction';

fetchSeries();
mobileNav();
searchFunction();
categoryFunction();
