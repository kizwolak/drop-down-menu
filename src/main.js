import './style.css';

const menus = document.querySelectorAll('.menu');

menus.forEach((menu) => {
  menu.addEventListener('mouseover', () => {
    const child = menu.querySelector('.submenu');
    child.style.display = 'block';
  });
  menu.addEventListener('mouseout', () => {
    const child = menu.querySelector('.submenu');
    child.style.display = 'none';
  });
});
