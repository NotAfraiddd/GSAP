var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

// gsap.from(".logo", { duration: 2.5, ease: "expo.easeInOut", opacity: 1, x: -50 });
// gsap.to(".logo", { duration: 2.5, ease: "expo.easeInOut", opacity: 1, x: 0 });
gsap.fromTo(".logo", { opacity: 0, x: -250 }, { delay: 1, opacity: 1, x: 0, duration: 3.5, ease: "power2.out" });
gsap.fromTo(".menu-links ul li", { opacity: 0, x: 150 }, { delay: 1, opacity: 1, x: 0, duration: 3.5, ease: "power2.easeInOut" });
gsap.fromTo(".search", { opacity: 0, x: -250 }, { delay: 1, opacity: 1, x: 0, duration: 3.5, ease: "power2.out" });
gsap.fromTo(".account", { opacity: 0, x: -250 }, { delay: 1, opacity: 1, x: 0, duration: 3.5, ease: "power2.out" });
gsap.fromTo(".cart", { opacity: 0, x: -250 }, { delay: 1, opacity: 1, x: 0, duration: 3.5, ease: "power2.out" });
gsap.fromTo(".juice", { opacity: 0, y: -50 }, { delay: 1.9, opacity: 1, y: 20, duration: 2.5, ease: "power2.out" });
gsap.from(".leaves .layer:nth-child(1)", { delay: 2, opacity: 0, y: -800, ease: "expo.easeInOut" });
gsap.from(".leaves .layer:nth-child(2)", { delay: 2.1, opacity: 0, y: -400, ease: "expo.easeInOut" });
gsap.from(".leaves .layer:nth-child(3)", { delay: 2.2, opacity: 0, y: -100, ease: "expo.easeInOut" });
gsap.from(".leaves .layer:nth-child(4)", { delay: 2.3, opacity: 0, y: -800, ease: "expo.easeInOut" });
gsap.from(".leaves .layer:nth-child(5)", { delay: 2.4, opacity: 0, y: -800, ease: "expo.easeInOut" });
gsap.from(".arrows ", { delay: 2, opacity: 0, ease: "expo.easeInOut" });
gsap.fromTo(".title", { opacity: 0, y: -340 }, { delay: 1, opacity: 1, y: 0, duration: 2, ease: "expo.easeInOut" });
gsap.from(".tagline", { delay: 1.3, opacity: 0, y: 20, ease: "expo.easeInOut" });
gsap.from(".pages", { delay: 2.4, opacity: 0, y: 20, ease: "expo.easeInOut" });
gsap.from(".more", { delay: 1.4, opacity: 0, y: 20, ease: "expo.easeInOut" });
gsap.from(".desc", { delay: 1.4, opacity: 0, y: 20, ease: "expo.easeInOut" });


