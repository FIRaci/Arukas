import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

interface UseCinematicMotionOptions {
  enabled: boolean;
  refreshKey?: string | number | boolean;
}

export const useCinematicMotion = ({ enabled, refreshKey }: UseCinematicMotionOptions) => {
  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove('lenis');
      document.documentElement.classList.remove('lenis-smooth');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.08,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    const revealNodes = gsap.utils.toArray<HTMLElement>('[data-reveal]');
    const triggers: ScrollTrigger[] = [];

    revealNodes.forEach((node, index) => {
      const trigger = ScrollTrigger.create({
        trigger: node,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            node,
            { opacity: 0, y: 26, scale: 0.985 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.62,
              ease: 'power2.out',
              delay: index * 0.018,
              overwrite: 'auto',
            }
          );
        },
      });
      triggers.push(trigger);
    });

    const parallaxNodes = gsap.utils.toArray<HTMLElement>('[data-parallax]');
    parallaxNodes.forEach((node, index) => {
      gsap.to(node, {
        yPercent: index % 2 === 0 ? -8 : 8,
        ease: 'none',
        scrollTrigger: {
          trigger: node,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16,
      }
    );

    document.querySelectorAll<HTMLElement>('.io-fade').forEach((el) => io.observe(el));

    ScrollTrigger.refresh();

    return () => {
      io.disconnect();
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.cancelAnimationFrame(rafId);
      lenis.off('scroll', onScroll);
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
      document.documentElement.classList.remove('lenis-smooth');
    };
  }, [enabled, refreshKey]);
};
