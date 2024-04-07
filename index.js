const scroll = document.querySelector(".scroll");
const arrImgScroll = Array.from(document.querySelectorAll('.img-scroll'));
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

leftBtn.textContent = '<';//стрелка
//визуализируем  первые фото в галерее

    
        if(window.innerWidth < 641) {
           
                for(let i = 0; i < arrImgScroll.length; i++) {
                arrImgScroll[i].classList.add('active');
                arrImgScroll[i + 1].classList.add('active');
                
                break;
                }
            
            
        } else {
           
                for(let i = 0; i < arrImgScroll.length; i++) {
                arrImgScroll[i].classList.add('active');
                arrImgScroll[i + 1].classList.add('active'); 
                arrImgScroll[i + 2].classList.add('active');
                break;
                }
            
        }
    

//нажатие на стрелку вперед в галерее
rightBtn.addEventListener('click', () => {
    leftBtn.removeAttribute('disabled');
    for(let i = 0; i < arrImgScroll.length; i++) {
        if(arrImgScroll[i].classList.contains('active')) {

            if(window.innerWidth < 641) {
                arrImgScroll[i].classList.remove('active');
                arrImgScroll[i + 2].classList.add('active');
                if(i === 4) {
                    rightBtn.setAttribute('disabled', '');
                }
                return;
            } else {
                arrImgScroll[i].classList.remove('active');
                arrImgScroll[i + 3].classList.add('active');
                if(i === 3) {
                    rightBtn.setAttribute('disabled', '');
                }
                return;
            }
        }
    }
})

//нажатие на стрелку назад
leftBtn.addEventListener('click', () => {
    rightBtn.removeAttribute('disabled');
    for(let i = 0; i < arrImgScroll.length; i++) {
        if(arrImgScroll[i].classList.contains('active')) {

            if(window.innerWidth < 641) {
                arrImgScroll[i - 1].classList.add('active'); 
                arrImgScroll[i + 1].classList.remove('active');
                if(i === 1) {
                    leftBtn.setAttribute('disabled', '');
                }
                return;
            } else {
                arrImgScroll[i - 1].classList.add('active'); 
                arrImgScroll[i + 2].classList.remove('active');
                if(i === 1) {
                    leftBtn.setAttribute('disabled', '');
                }
                return;
            }
        }
    }

}) 

//меняется ширина браузера
window.onresize = function() {
    if(window.innerWidth < 641) {
        for(let i = 0; i < arrImgScroll.length; i++) {
            if(arrImgScroll[i].classList.contains('active')) { 
                for(let k = i + 2; k < arrImgScroll.length; k++) {
                    arrImgScroll[k].classList.remove('active');
                   
                }
                return;
            }
        }
    } else {
        for(let i = 0; i < arrImgScroll.length; i++) {
            if(arrImgScroll[i].classList.contains('active')) {
                arrImgScroll[i + 2].classList.add('active');
                 for(let k = i + 3; k < arrImgScroll.length; k++) {
                    arrImgScroll[k].classList.remove('active');
                }
                return;
            }  
        }
    } 
}
