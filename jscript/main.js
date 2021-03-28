const images = document.querySelectorAll('.projects__img');
const containerImg = document.querySelector('.container-img');
const imgContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const close = document.querySelector('.bx.bx-x');

images.forEach(image =>{
    image.addEventListener('click', ()=>{

        addImage(image.getAttribute('src'), image.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage)=>{
    containerImg.classList.toggle('move');
    imgContainer.classList.toggle('show');
    imgContainer.src = srcImage;
    copy.innerHTML= altImage;
}

close.addEventListener('click', () =>{
    containerImg.classList.toggle('move');
    imgContainer.classList.toggle('show');
})
