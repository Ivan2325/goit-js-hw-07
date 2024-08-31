const form = document.querySelector('.checkboxForm') ;
const list = document.querySelectorAll('.checkboxWrapper') ;
form.addEventListener('submit', onSubmit) ;

function onSubmit (event) {
    event.preventDefault() 
    const filteredList = [...list].filter(item => item.lastElementChild.checked) ;

    filteredList.forEach(item => item.remove());
}

