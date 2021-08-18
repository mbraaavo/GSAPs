gsap.from(".mb", {
    delay: .8,
    opacity: 0,
    y: '-75%',
    duration: 1.2,
    ease: "back.out(1.7)"
});

gsap.from(".link", {
    delay: 1,
    opacity: 0,
    y: '-75%',
    duration: 1.2,
    ease: "back.out(1.7)",
    stagger: 0.2
});

gsap.from(".hero_words", {
    duration: 1,
    x: '-50%',
    delay: .2,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".bio", {
    scrollTrigger: {
        trigger: ".bio",
        start: "top center"
    },
    x: "-75%",
    ease: "sine.out", 
    duration: 1.2
})

gsap.to(".bio", {
    scrollTrigger: {
        trigger: ".bio",
        start: "top center"
    },
    duration: 2,
    opacity: 1
})

gsap.from(".skills", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top center"
    },
    x: "-75%",
    ease: "sine.out", 
    duration: 1.2
})

gsap.to(".skills", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top center"
    },
    duration: 2,
    opacity: 1
})

gsap.from(".Foot-Left", {
    scrollTrigger: {
        trigger: "Foot-Left",
        start: "top bottom"
    },
    x: "-75%",
    delay: .2
})

gsap.to(".Foot-Left", {
    scrollTrigger: {
        trigger: ".Foot-Left",
        start: "top bottom"
    },
    duration: 2,
    opacity: 1,
    delay: .3
})

gsap.from(".Foot-Mid", {
    scrollTrigger: {
        trigger: "Foot-Mid",
        start: "top bottom"
    },
    y: "75%",
    delay: .6,
    duration: 1
})

gsap.to(".Foot-Mid", {
    scrollTrigger: {
        trigger: ".Foot-Mid",
        start: "top bottom"
    },
    duration: 2,
    opacity: 1,
    delay: .6
})

gsap.from(".Foot-Right", {
    scrollTrigger: {
        trigger: ".Foot-Right",
        start: "top bottom"
    },
    x: "75%",
    delay: .5
})

gsap.to(".Foot-Right", {
    scrollTrigger: {
        trigger: ".Foot-Right",
        start: "top bottom"
    },
    duration: 2,
    opacity: 1, 
    delay: .5
})
