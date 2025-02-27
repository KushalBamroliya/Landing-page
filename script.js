Shery.imageEffect(".back", {
  style: 6,
  config: {
    noiseDetail: { value: 7.44, range: [0, 100] },
    distortionAmount: { value: 3.74, range: [0, 10] },
    scale: { value: 10.69, range: [0, 100] },
    speed: { value: 1, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.9822361506963366 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 0 },
    noise_speed: { value: 1.45, range: [0, 10] },
    metaball: { value: 0.21, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.52, range: [0, 2] },
    noise_scale: { value: 27.48, range: [0, 100] },
  },
  gooey: true,
});

var elem = document.querySelectorAll(".elem");

elem.forEach((element) => {
  var h1s = element.querySelectorAll("h1");
  var index = 0;
  var animation = false;

  document.querySelector(".main").addEventListener("click", () => {
    if (!animation) {
      animation = true;

      let currentH1 = h1s[index];
      let nextIndex = (index + 1) % h1s.length;
      let nextH1 = h1s[nextIndex];

      gsap.to(currentH1, {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: () => {
          gsap.set(currentH1, { top: "100%" }); // Reset position
        },
      });
      gsap.to(nextH1, {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: () => {
          animation = false;
        },
      });
      index = nextIndex; 
    }
  });
});

