'use client';

import { useEffect } from 'react';

export default function DynamicEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('effects-ready');

    const staggerContainers = Array.from(document.querySelectorAll<HTMLElement>('.stagger-children'));

    staggerContainers.forEach((container) => {
      Array.from(container.children).forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.classList.add('reveal');
          child.style.setProperty('--reveal-delay', `${Math.min(index * 85, 520)}ms`);
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 }
    );

    Array.from(document.querySelectorAll<HTMLElement>('.reveal')).forEach((item) => {
      observer.observe(item);
    });

    let ticking = false;
    const updateScrollMotion = () => {
      const scrollY = window.scrollY;
      const heroShift = Math.min(scrollY * 0.18, 160);
      const contactShift = Math.max(Math.min((scrollY - window.innerHeight * 4.8) * 0.05, 70), 0);

      root.style.setProperty('--hero-shift', `${heroShift}px`);
      root.style.setProperty('--contact-shift', `${-contactShift}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollMotion);
        ticking = true;
      }
    };

    const tiltCards = Array.from(document.querySelectorAll<HTMLElement>('.tilt-card'));
    const onPointerMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      card.style.setProperty('--tilt-x', `${(-y * 4).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 5).toFixed(2)}deg`);
      card.style.setProperty('--glow-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--glow-y', `${event.clientY - rect.top}px`);
    };

    const onPointerLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    };

    tiltCards.forEach((card) => {
      card.addEventListener('pointermove', onPointerMove);
      card.addEventListener('pointerleave', onPointerLeave);
    });

    updateScrollMotion();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      root.classList.remove('effects-ready');
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      tiltCards.forEach((card) => {
        card.removeEventListener('pointermove', onPointerMove);
        card.removeEventListener('pointerleave', onPointerLeave);
      });
    };
  }, []);

  return null;
}
