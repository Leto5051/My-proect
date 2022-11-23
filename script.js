const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const images = document.querySelectorAll('#slider .photos img');

let index = 0;

prev.onclick = function(){
    images[index].classList.remove('showed');
    index = index - 1;

    if(index < 0){
        index = images.length - 1;
    }
    images[index].classList.add('showed');
    
}

next.onclick = function(){
    images[index].classList.remove('showed');
    index = index + 1;

    if(index >= images.length){
        index = 0;
    }
    images[index].classList.add('showed');
}


//  удалить условие, где показывается и добавить displayButtons();
/* function displayButtons(){
    next.style.display = "inline-block";
    prev.style.display = "inline-block";

    if(index >= images.length - 1){
        next.style.display = "none";
    }

    if(index <= 0) {
        prev.style.display = "none";
    }
}
*/















