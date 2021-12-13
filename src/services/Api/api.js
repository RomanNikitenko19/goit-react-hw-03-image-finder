// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const BASE_URL = "https://pixabay.com/api/?key=";
const API_KEY = '18623542-c3ea86fe133d4cad85931c408';
// const BASE_URL =  process.env.REACT_APP_API_URL
const type = '&image_type=photo';
const orientation = '&orientation=horizontal';
const quantityPerPage = '&per_page=12';

const fetchData = async (search, page = 1) => {
  const res = await fetch(`${BASE_URL}${API_KEY}&q=${search}${type}${orientation}${page}${quantityPerPage}`);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));

};
export { fetchData };

// ${baseUrl}&key=${KEY}&q=${inputData}${filterUrl}&page=${page}&${perPage}