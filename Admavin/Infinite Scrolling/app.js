const container = document.getElementById('container');
const loading = document.querySelector('.loading');

let page = 1;

const getItems = async (page) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
  const data = await response.json();
  return data;
};

const addItemToPage = (item) => {
  const itemElement = document.createElement('div');
  itemElement.classList.add('item');
  itemElement.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.body}</p>
  `;
  container.appendChild(itemElement);
};

const loadItems = async () => {
  loading.style.display = 'block';
  const items = await getItems(page);
  items.forEach((item) => addItemToPage(item));
  loading.style.display = 'none';
  page++;
};

loadItems();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadItems();
  }
});
