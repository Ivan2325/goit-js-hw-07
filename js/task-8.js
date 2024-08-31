const input = document.querySelector('.contactsFilter') ;
input.addEventListener('input', searchName) ;
const list = document.querySelector('.contacts') ;
const items = [...list.children];

function searchName () {
    const value = input.value.toLowerCase().trim() ;
    const filteredArray = items.filter(item => item.textContent.toLowerCase().includes(value)) ;
    list.innerHTML = '' ;
    list.append(...filteredArray) ;
}