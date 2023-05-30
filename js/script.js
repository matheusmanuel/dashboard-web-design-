var menuToggle = document.querySelector('.toogle-menu');
if (window.matchMedia("(min-width: 1200px)").matches) {

    var timenu = new TimelineMax({
        paused: true,
    })

    timenu.fromTo(".nav .menu li span, .logo span", 0.2, {
        opacity: 1,
        display: "block"
    }, {
        opacity: 0,
        display: "none",
        ease: "power2.out"
    })

    timenu.fromTo(".logo .bi", 0.3, {
            css: {
                marginRight: "15px"
            }
        }, {
            css: {
                marginRight: 0
            },
            ease: "power2.out"
        },
        0.1
    )
    timenu.fromTo("nav", 0.5, {
        width: "280px"
    }, {
        width: "80px",
        ease: "power2.out"
    }, .1)

    timenu.fromTo(".container, .footer", 0.5, {
        width: "calc(100% - 280px)"
    }, {
        width: "calc(100% - 80px)",
        ease: "power2.out"
    }, .1)

    menuToggle.onclick = () => {

        menuToggle.classList.toggle('active')

        if (menuToggle.classList.contains('active')) {
            timenu.reverse(0);
        } else {
            timenu.play(0)
        }
    }
} else {
    // Gsap para menu mobile
    var timenuMob = new TimelineMax({
        paused: true
    })
    timenuMob.fromTo(".nav .menu li span, .logo span", 0.2, {
        opacity: 0,
        display: "none"
    }, {
        opacity: 1,
        display: "block",
        ease: "power2.out"
    })
    timenuMob.fromTo(".logo .bi", 0.3, 
    {css:{marginRight: "0"}},
    {css:{marginRight: "15px"},ease: "power2.out"},
    .01
    )
    timenuMob.fromTo(".nav", 0.5, 
    {width: "80px"},
    {width: "200px",ease: "power2.out"},
    .1
    )
    timenuMob.fromTo(".content, .footer", 0.5, 
    {width: "calc(100% - 80px)"},
    {width: "calc(100% - 200px)",ease:"power2.out"},
     .1
    )
    menuToggle.onclick = () => {
        menuToggle.classList.toggle('active');
        if (menuToggle.classList.contains('active')) {
            timenuMob.reverse(0);
        } else {
            timenuMob.play(0);
        }
    }
}