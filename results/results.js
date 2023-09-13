const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")
const dropdowns = document.querySelectorAll(".dropdown")
//display aside menu
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
//close aside
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
//theme changing
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
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
