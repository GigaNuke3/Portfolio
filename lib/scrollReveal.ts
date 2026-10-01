import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function revealOnScroll(targets: string, scope: Element) {
  gsap.utils.toArray<HTMLElement>(targets, scope).forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}

// Each room's top hairline draws itself like a doorway as the visitor crosses into it.
export function drawThresholds(scope: Element) {
  gsap.utils.toArray<HTMLElement>("[data-threshold]", scope).forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: { trigger: el, start: "top 85%" },
      },
    );
  });
}
