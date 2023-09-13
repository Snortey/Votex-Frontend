const dropdowns = document.querySelectorAll(".dropdown")
//dropdown menu
dropdowns.forEach(dropdown => {
    const select =dropdown.querySelector('.select')
    const caret =dropdown.querySelector('.caret')
    const menu =dropdown.querySelector('.menu')
    const options =dropdown.querySelectorAll('.menu li')
    const selected =dropdown.querySelector('.selected')

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            option.forEach(option => {
                option.classList.remove('actives');
            })
            option.classList.add('actives');
        })
    })

})

//display popup menu
const OpenModalButtons = document.querySelectorAll('[data-modal-target]')
const CloseModalButton = document.querySelectorAll('[data-close-button]')
const Overlay = document.getElementById('overlay')

OpenModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        OpenModal(modal)
    })
})

CloseModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        CloseModal(modal)
    })
})

Overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        CloseModal(modal)
    })
})

function OpenModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    Overlay.classList.add('active')
}

function CloseModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    Overlay.classList.remove('active')
}
