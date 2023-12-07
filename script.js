// Colors
const allColors = {
    primary: "#181818",
    darkPrimary: "#e4e4e4",
}

// Navbar color change when about section start
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "100% 30px",
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

// Iphone scroll animation from hero section to about section
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "0% 95%",
        end: "45% 50%",
        scrub: 1,
    }
})
tl3.to("#iphone15", {
    top: '110%',
    left: '12%',
}, 'heroToAbout');
tl3.to("#wire", {
    width: '12%',
    left: '80.5%',
    top: '115%',
    rotate: '340deg'
}, "heroToAbout");
tl3.to("#apple-logo", {
    top: '95%',
    width: '5%',
    right: '47.5%',
    zIndex: 2,
}, "heroToAbout");
tl3.to("#apple-name", {
    position: 'fixed',
    top: '2.7%',
    fontSize: '16px',
    letterSpacing: '5px',
    zIndex: 2,
    color: "#ababab",
}, "heroToAbout");

