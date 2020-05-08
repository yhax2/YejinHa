
const lightBoxContainer = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-img");
const counter = document.querySelector(".lightbox-counter");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const lightboxText = document.querySelector(".lightbox-text");
const Items = document.querySelector(".items").children;
let index;
let imgSrc;


lightBoxContainer.addEventListener("click", function(event){
    // console.log(event.target)
    if (event.target !== lightboxImage && event.target !== prevButton && event.target !== nextButton) {

        lightBox();
    }
})

for (let i = 0; i < Items.length; i++) {
    Items[i].querySelector(".fa").addEventListener("click", function () {
        index = i;
        changeImage();
        lightBox();
    })
}

function next() {
    if (index==Items.length-1) {
        index=0
    }
    else {
        index++;
    }
    changeImage();
}

function prev() {
    if (index == 0) {
        index = Items.length - 1;
    }
    else {
        index--;
    }
    changeImage();
}

function lightBox() {
   lightBoxContainer.classList.toggle("open");
}

function changeImage() {
    imgSrc = Items[index].querySelector("img").getAttribute("src");
    lightboxImage.src = imgSrc;
    counter.innerHTML = (index + 1) + " of " + Items.length;
    lightboxText.innerHTML = Items[index].querySelector("h2").innerHTML;

}