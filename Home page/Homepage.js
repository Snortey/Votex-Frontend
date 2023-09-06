const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_list')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


let seeAllBtn = document.querySelector('#see-all');
let seeAllsBtn = document.querySelector('#see-alls');
let currentItem =3;
let pastItem =3;

seeAllBtn.onclick = () => {
    let box = [...document.querySelectorAll('.current_container .current_event')];
    
    for (var i = currentItem; i < currentItem+3; i++){
        box[i].style.display ='inline-block';
    }
    currentItem +=3
    if(currentItem >= box.length){
        seeAllBtn.style.display ='none';
    }

}
seeAllsBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.past_container .past_event')];
    for
     (var i = pastItem; i < pastItem+3; i++){
        boxes[i].style.display ='inline-block';
    }
    pastItem +=3
    if(pastItem >= boxes.length){
        seeAllsBtn.style.display ='none';
    }
}