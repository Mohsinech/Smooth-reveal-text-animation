const title = new SplitType("span");
const chars = title.chars;

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top ",
    end: "bottom",
    toggleActions: "play reverse play reverse",
    scrub: true,
    pin: true,
  },
});

tl.to(chars, {
  y: 0,
  stagger: 0.1,
  ease: "expo.Inout",
});

// lenis smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
