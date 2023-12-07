// Colors
const allColors = {
    primary: "#181818",
    darkPrimary: "#e4e4e4",
}

// Navbar color change when about section start
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 30px",
        end: "top 30px",
        scrub: 1,
    }
})
tl.to(".menu-items", {
    color: '#e4e4e4'
})
tl.to("#brand-logo-name", {
    color: '#e4e4e4'
})

// Navbar color change when about section end
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#top-phones",
        start: "top 30px",
        end: "top 30px",
        scrub: 1,
    }
})
tl2.to(".menu-items", {
    color: 'black'
})
tl2.to("#brand-logo-name", {
    color: 'black'
})