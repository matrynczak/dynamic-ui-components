const next = document.querySelector('.next-arrow');
const prev = document.querySelector('.prev-arrow');
const slidesList = document.querySelector('.slides-list');
const slides = document.querySelectorAll('.slides-list li');
const slidesDotsList = document.querySelector('.slides-dots');
const dots = document.querySelectorAll('.slides-dots li');

const moveToNextSlider = () => {
    const slidesArray = Array.from(slides);
    const dotsArray = Array.from(dots);

    for(let i=0; i<slidesArray.length; i++) {
        if(slidesArray[i].className.includes('selected')) {
            if(i === slidesArray.length-1) {
                slidesArray[i].className = `slide-${i+1}`;
                slidesArray[0].className = `slide-${1} selected`;

                dotsArray[i].className = `dot-icon-${i+1}`;
                dotsArray[0].className = `dot-icon-${1} dot-selected`;
                break;
            }
            slidesArray[i].className = `slide-${i+1}`;
            slidesArray[i+1].className = `slide-${i+2} selected`;

            dotsArray[i].className = `dot-icon-${i+1}`;
            dotsArray[i+1].className = `dot-icon-${i+1} dot-selected`;
            break;
        }
    }
    slides.forEach((item, index) => {
        item.className = slidesArray[index].className;
    });
    slides.forEach((item) => {
        slidesList.appendChild(item); 
    });

    dots.forEach((item, index) => {
        item.className = dotsArray[index].className;
    });
    dots.forEach((item) => {
        slidesDotsList.appendChild(item); 
    });

    
    //const translateAmount = 80; 
    //let translate = 0;
    //translate += translateAmount;
    //slides.forEach(
    //    item => (item.style.transform = `translateX(${translate}%)`)
    //  );
    
}

const moveToPrevSlider = () => {
    const slidesArray = Array.from(slides);
    const dotsArray = Array.from(dots);

    for(let i=0; i<slidesArray.length; i++) {
        if(slidesArray[i].className.includes('selected')) {
            if(i === 0) {
                slidesArray[i].className = `slide-${i+1}`;
                slidesArray[slidesArray.length-1].className = `slide-${slidesArray.length} selected`;

                dotsArray[i].className = `dot-icon-${i+1}`;
                dotsArray[dotsArray.length-1].className = `dot-icon-${dotsArray.length} dot-selected`;
                break;
            }
            slidesArray[i].className = `slide-${i+1}`;
            slidesArray[i-1].className = `slide-${i} selected`;

            dotsArray[i].className = `dot-icon-${i+1}`;
            dotsArray[i-1].className = `dot-icon-${i} dot-selected`;
            break;
        }
        
    }
    slides.forEach((item, index) => {
        item.className = slidesArray[index].className;
    });
    slides.forEach((item) => {
        slidesList.appendChild(item); 
    });

    dots.forEach((item, index) => {
        item.className = dotsArray[index].className;
    });
    dots.forEach((item) => {
        slidesDotsList.appendChild(item); 
    });
}

const slidesPlay = () => {
    setInterval(() => moveToNextSlider(), 5000)
}

const changeSlideViaDot = (item) => {
    const slidesArray = Array.from(slides);
    const dotsArray = Array.from(dots);
    const index = dotsArray.indexOf(item)

    for(let i=0; i<dotsArray.length; i++) {
        if(i===index) dotsArray[i].className = `dot-icon-${i+1} dot-selected`;
        else dotsArray[i].className = `dot-icon-${i+1}`;

        if(i===index) slidesArray[i].className = `slide-${i+1} selected`;
        else slidesArray[i].className = `slide-${i+1}`;
    }

    slides.forEach((item, index) => {
        item.className = slidesArray[index].className;
    });
    slides.forEach((item) => {
        slidesList.appendChild(item); 
    });

    dots.forEach((item, index) => {
        item.className = dotsArray[index].className;
    });
    dots.forEach((item) => {
        slidesDotsList.appendChild(item); 
    });
}

next.addEventListener('click', moveToNextSlider);
prev.addEventListener('click', moveToPrevSlider);
slidesPlay();
dots.forEach(item => item.addEventListener('click', () => changeSlideViaDot(item)))
