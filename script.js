var imgDets = [
    {
        "id": 1,
        "pic": "https://corpshcamt.org/image/relief1.jpg"
    },
    {
        "id": 2,
        "pic": "https://corpshcamt.org/image/relief2.jpg"
    },
    {
        "id": 3,
        "pic": "https://corpshcamt.org/image/relief3.jpg"
    },
    {
        "id": 4,
        "pic": "https://corpshcamt.org/image/Meeting1.jpg"
    },
    {
        "id": 5,
        "pic": "https://corpshcamt.org/image/poor1.jpg"
    },
    {
        "id": 6,
        "pic": "https://corpshcamt.org/image/build2.jpg"
    },
    {
        "id": 7,
        "pic": "https://corpshcamt.org/image/build3.jpg"
    },
    {
        "id": 8,
        "pic": "https://corpshcamt.org/image/edu2.jpg"
    },
    {
        "id": 9,
        "pic": "https://corpshcamt.org/image/edu1.jpg"
    }
]

var imgCont = "";

imgDets.forEach(e => {
    imgCont +=
    `<img src="${e.pic}" alt="">`
});

console.log(imgCont);

let imgsection = document.querySelector(".img-section");
imgsection.innerHTML = imgCont;

function makeSlideshow(slidesId){
    const slides = document.querySelector(slidesId)
    const slidesInner = slides.querySelector(".img-section")
    const images = slidesInner.querySelectorAll("img");
    
    let index = 0;

    setInterval(function(){
        index += 1;
        if(index === images.length){
            index = 0;
        }

        slidesInner.style.transform = `translated3d(${index * -1200}px, 0, 0)`

    }, 2000)
}

makeSlideshow('slides');
