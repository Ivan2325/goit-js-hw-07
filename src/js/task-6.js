function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes') ;
  boxesContainer.innerHTML = '' ;
  const elements = [];
  let size = 30 ;


  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${size}px` ;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor() ;
    elements.push(divEl) ;
    size += 10  ;
    
  }
  boxesContainer.append(...elements) ;
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes') ;
  boxesContainer.innerHTML = '' ;
}

const controlsEl = document.getElementById('controls') ;
const inputEl = controlsEl.querySelector('input[type="number"]') ;
const createButton = controlsEl.querySelector('button[data-create]') ;
const destroyButton = controlsEl.querySelector('button[data-destroy]') ;


createButton.addEventListener('click', () => {
  const amount = parseInt(inputEl.value) ;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount) ;
  } else {
    alert('Please enter a number between 1 and 100')  
  }
  inputEl.value = '' ;
})

destroyButton.addEventListener('click', destroyBoxes) ;

