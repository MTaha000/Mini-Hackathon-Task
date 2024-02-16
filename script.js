let display0 = document.querySelector(".d0")
let display1 = document.querySelector(".d1")
let display2 = document.querySelector(".d2")
let display3 = document.querySelector(".d3")

let active = false;
let active2 = false;
let active3 = false;

setInterval(() => {
    if (!active) {
        display1.classList.add("show")
        display0.classList.add("visible")
        active = true;
    }
}, 2000)



setInterval(() => {
    if (!active2) {
        display2.classList.add("show")
        active2 = true
    }
}, 2300)



setInterval(() => {
    if (!active3) {
        display3.classList.add("show")
        active3 = true;
    }

}, 2500)

setInterval(() => {
    if (active) {
        display1.classList.remove("show")
        display0.classList.remove("visible")
        active = false;
    }
    if (active2) {
        display2.classList.remove("show")
        active2 = false;
    }
    if (active3) {
        display3.classList.remove("show")
        active3 = false;
    }
}, 5000)

