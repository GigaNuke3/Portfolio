"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ponytail: gap coordinates eyeballed from the source fresco (55%/66% width, 44% height
   for fingertip/sprite), not pixel-measured — nudge GAP_ORIGIN if the opening crop looks off */
const GAP_ORIGIN = "60% 44%";
const START_SCALE = 3.2;

export default function Hero() {
  const pinRef = useRef<HTMLDivElement>(null);

  const cloud1Ref = useRef<HTMLImageElement>(null);
  const birdGroup1Ref = useRef<HTMLImageElement>(null);
  const bird2aRef = useRef<HTMLImageElement>(null);
  const cloud2Ref = useRef<HTMLImageElement>(null);
  const bird2bRef = useRef<HTMLImageElement>(null);
  const birdGroup2Ref = useRef<HTMLImageElement>(null);
  const mistARef = useRef<HTMLDivElement>(null);
  const mistBRef = useRef<HTMLDivElement>(null);
  const mistCRef = useRef<HTMLDivElement>(null);
  const frescoWrapRef = useRef<HTMLDivElement>(null);
  const frescoImgRef = useRef<HTMLImageElement>(null);
  const introTitleRef = useRef<HTMLDivElement>(null);
  const outroTitleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(
          [cloud1Ref.current, birdGroup1Ref.current, bird2aRef.current, cloud2Ref.current, bird2bRef.current, birdGroup2Ref.current, mistARef.current, mistBRef.current, mistCRef.current],
          { opacity: 0 },
        );
        gsap.set(cloud1Ref.current, { opacity: 1, scale: 1.1 });
        gsap.set(frescoWrapRef.current, { opacity: 0 });
        gsap.set(frescoImgRef.current, { scale: START_SCALE, transformOrigin: GAP_ORIGIN });
        gsap.set(outroTitleRef.current, { opacity: 0, y: 40 });
        gsap.set(document.querySelector("header"), { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=600%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(introTitleRef.current, { opacity: 0, y: -20, duration: 1.5 }, 1.5)
          // Cloud 1 — close-up hold, then the camera pulls back through it
          .to(cloud1Ref.current, { scale: 1.4, opacity: 0, ease: "none", duration: 4 }, 3)
          .fromTo(birdGroup1Ref.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 2 }, 2)
          .to(birdGroup1Ref.current, { opacity: 0, scale: 1.1, x: 15, duration: 2 }, 4.5)
          .fromTo(bird2aRef.current, { opacity: 0, x: -35, scale: 1.3 }, { opacity: 1, x: 15, scale: 1.7, duration: 1.8 }, 2.3)
          .to(bird2aRef.current, { opacity: 0, x: 50, scale: 1.1, duration: 1.8 }, 4.1)
          // Cloud 2 — overlaps Cloud 1's fade so the two coexist briefly
          .fromTo(cloud2Ref.current, { opacity: 0, scale: 1.3 }, { opacity: 1, scale: 1.05, duration: 3 }, 6)
          .fromTo(birdGroup2Ref.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 2 }, 8)
          .to(birdGroup2Ref.current, { opacity: 0, scale: 1.08, x: -10, duration: 2 }, 10.5)
          .fromTo(bird2bRef.current, { opacity: 0, x: -25, scale: 1.15 }, { opacity: 1, x: 12, scale: 1.45, duration: 1.8 }, 8.3)
          .to(bird2bRef.current, { opacity: 0, x: 40, scale: 0.9, duration: 1.8 }, 10.1)
          // Mist — drifts at its own rate, independent of the cloud layers
          .fromTo([mistARef.current, mistBRef.current, mistCRef.current], { opacity: 0 }, { opacity: 0.5, duration: 3, stagger: 0.6 }, 9)
          .to(mistARef.current, { x: 60, ease: "none", duration: 10 }, 9)
          .to(mistBRef.current, { x: -40, ease: "none", duration: 12 }, 9)
          .to(mistCRef.current, { x: 30, ease: "none", duration: 8 }, 10)
          .to(cloud2Ref.current, { scale: 1.3, opacity: 0, ease: "none", duration: 4 }, 11)
          .to([mistARef.current, mistBRef.current, mistCRef.current], { opacity: 0, duration: 3, stagger: 0.4 }, 14)
          // The fresco — gallery-framed, zooming out of the fingertip/sprite gap
          .fromTo(frescoWrapRef.current, { opacity: 0 }, { opacity: 1, duration: 2 }, 13)
          .to(frescoImgRef.current, { scale: 1, transformOrigin: "50% 50%", ease: "none", duration: 6 }, 13)
          .to(document.querySelector("header"), { opacity: 1, ease: "none", duration: 2 }, 19)
          .fromTo(outroTitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 2 }, 19);
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [cloud1Ref.current, birdGroup1Ref.current, bird2aRef.current, cloud2Ref.current, bird2bRef.current, birdGroup2Ref.current, mistARef.current, mistBRef.current, mistCRef.current, introTitleRef.current],
          { opacity: 0 },
        );
        gsap.set(frescoWrapRef.current, { opacity: 1 });
        gsap.set(frescoImgRef.current, { scale: 1, transformOrigin: GAP_ORIGIN });
        gsap.set(outroTitleRef.current, { opacity: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: pinRef },
  );

  return (
    <div
      id="home"
      ref={pinRef}
      className="relative h-screen w-full overflow-hidden bg-plaster"
    >
      <img
        ref={cloud1Ref}
        src="/cloud_1_backdrop.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ponytail: right side, small — distant flock sitting within Cloud 1 */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-end pr-[6vw] pt-[14vh]">
        <img
          ref={birdGroup1Ref}
          src="/bird_group_1_for_cloud_1.png"
          alt=""
          className="w-[26vw] max-w-[260px] object-contain"
        />
      </div>

      {/* left side, much closer to camera than Bird Group 1 — big, strong foreground presence */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start pl-[4vw]">
        <img ref={bird2aRef} src="/bird_2.png" alt="" className="w-[34vw] max-w-[420px] object-contain" />
      </div>

      <img
        ref={cloud2Ref}
        src="/cloud_2.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* left side, close — different depth/position from Bird 1 and Bird Group 2 */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-start pl-[12vw] pt-[16vh]">
        <img ref={bird2bRef} src="/bird_2.png" alt="" className="w-[28vw] max-w-[340px] object-contain" />
      </div>

      {/* left side, very small — much farther than Bird Group 1, deep inside Cloud 2 */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-start pb-[16vh] pl-[5vw]">
        <img
          ref={birdGroup2Ref}
          src="/bird_group_2_for_cloud_2.png"
          alt=""
          className="w-[14vw] max-w-[140px] object-contain"
        />
      </div>

      <div
        ref={mistARef}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 40% at 30% 60%, rgba(255,255,255,0.55), transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        ref={mistBRef}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 35% at 70% 40%, rgba(255,255,255,0.45), transparent 70%)", filter: "blur(50px)" }}
      />
      <div
        ref={mistCRef}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 30% at 50% 80%, rgba(255,255,255,0.4), transparent 70%)", filter: "blur(35px)" }}
      />

      <div
        ref={frescoWrapRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center p-[3vw]"
      >
        <div className="brutal-shadow relative h-full w-full border-[10px] border-ink bg-plaster p-3 sm:p-5">
          <img
            ref={frescoImgRef}
            src="/fresco.jpg"
            alt="Renaissance fresco parody of The Creation of Adam, with a pixel-art sprite reaching toward Adam's hand"
            className="h-full w-full object-contain will-change-transform"
          />
        </div>
      </div>

      <div
        ref={introTitleRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-center"
      >
        <p className="border-y-2 border-ink/70 px-6 py-3 font-mono text-sm uppercase tracking-[0.3em] text-ink sm:text-base">
          This portfolio presents to you…
        </p>
      </div>

      <div
        ref={outroTitleRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="brutal-shadow-sm border-2 border-ink bg-plaster px-4 py-2 font-display text-3xl tracking-tight text-ink sm:text-5xl">
          Edil Con L. Gorospe
        </h1>
        <div className="brutal-shadow-sm mt-6 flex items-center gap-2 border-2 border-ink bg-plaster px-4 py-2">
          <span className="text-ink">■</span>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink sm:text-sm">
            Web Developer | AI Engineer
          </p>
        </div>
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-ink animate-bounce">
          Scroll to enter ↓
        </p>
      </div>
    </div>
  );
}
