// parallax effect start

let cloud = document.querySelectorAll(".header__cloud")
let boat = document.querySelector(".header__boat")

window.addEventListener("scroll", () => {
    // console.log(this.scrollY);

    cloud.forEach(clouds => {
        // console.log(clouds);
        // console.log(index);
        // console.log(array);

        let speed = clouds.getAttribute("data-speed")

        clouds.style.transform = `translateX(${this.scrollY * speed}px)`
    });

    boat.style.transform = `translateX(${this.scrollY * 0.9}px)`

})

// parallax effect end

// run string start

let h1 = document.querySelector(".header__title")

let txt = h1.innerHTML
h1.innerHTML = ""

function str(x = 0) {
    h1.innerHTML += txt[x]
    x++

    if (x < txt.length) {
        setTimeout(() => {
            str(x)
        }, 200);
    }

}

str()

// run string end

// parallax start

let parallaxBox = document.querySelector(".parallax__box")
let parallaxBall = document.querySelectorAll(".parallax__ball")

parallaxBox.addEventListener("mousemove", (e) => {
    // console.log(e);

    parallaxBall.forEach(balls => {
        const speed = balls.getAttribute("data-speed")
        const X = (window.innerWidth - e.pageX * speed) / 50
        const Y = (window.innerWidth - e.pageY * speed) / 100

        balls.style.transform = `translate(${X}px, ${Y}px)`
    });

})

// parallax end

// timer start

let timerNum = document.querySelectorAll(".timer__num")
let timerSection = document.querySelector(".timer")

// console.log(timerSection.getBoundingClientRect());\
// console.log(timerSection.offsetTop); 1936 - 350 * 2
// console.log(timerSection.offsetHeight);

// timerNum[0]

window.addEventListener("scroll", function scrollTimer() {
    // console.log(this.scrollY); 1318

    if (this.scrollY >= timerSection.offsetTop - timerSection.offsetHeight * 2) {
        // console.log("Section timer");
        // timerSection.style.background = "red"
        timerSet()
        this.removeEventListener("scroll", scrollTimer)
    }

})

function timerSet() {
    for (let i = 0; i < timerNum.length; i++) {
        const count = +timerNum[i].getAttribute("data-num")
        timerNum[i].innerHTML = 0

        function timer(k = 0) {
            // const x = +timerNum[0].dataset.num
            // console.log(count);
            // console.log(x);
            timerNum[i].innerHTML = k
            k++

            if (k <= count) {
                setTimeout(() => {
                    timer(k)
                }, 5);
            }
        }
        timer()
    }
}

// timer end

// Bubble animation start

let timerBtn = document.querySelectorAll(".timer__btn")

timerBtn.forEach(btns => {
    btns.addEventListener("mousemove", function (e) {
        // console.log(e.pageX);
        // console.log(e.pageX - this.offsetLeft);
        const X = e.pageX - this.offsetLeft
        const Y = e.pageY - this.offsetTop
        this.style.setProperty('--x', `${X}px`)
        this.style.setProperty('--y', `${Y}px`)
    })
});

// Bubble animation end

// 3D card animation start

let card = document.querySelectorAll(".card")

card.forEach(cards => {
    cards.addEventListener("mousemove", rotate)
    cards.addEventListener("mouseout", rotateNone)
});

function rotate(e) {
    const cardItem = this.querySelector(".card__item")
    const halfHeight = cardItem.offsetHeight / 2 /* 125 */
    // cardItem.innerHTML = `Y: ${halfHeight - e.offsetY}`
    cardItem.style.transform = `rotateX(${(halfHeight - e.offsetY) / 10}deg) rotateY(${-(halfHeight - e.offsetX) / 10}deg)`
}

function rotateNone() {
    const cardItem = this.querySelector(".card__item")
    cardItem.style.transform = 'rotate(0)'
}

// 3D card animation end