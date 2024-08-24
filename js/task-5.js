function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color') ;
const spanEL = document.querySelector('.color') ;
const bodyEl = document.body ;
btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor() ;
  bodyEl.style.backgroundColor = randomColor ;
  spanEL.textContent = randomColor ;
}) ;
