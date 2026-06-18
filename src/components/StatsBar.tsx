import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  duration: number;
  triggered: boolean;
  isText?: boolean;
  textValue?: string;
}

function StatItem({ value, suffix, label, duration, triggered, isText = false, textValue }: StatItemProps) {
  const count = useCountUp(value, duration, triggered && !isText);

  return (
    <div className="flex flex-col items-center gap-2 px-8 py-2">
      {isText ? (
        <span
          className="font-serif text-5xl md:text-6xl font-bold text-gold transition-opacity duration-700"
          style={{
            opacity: triggered ? 1 : 0,
            transform: triggered ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '0.3s',
          }}
        >
          {textValue}
        </span>
      ) : (
        <span className="font-serif text-5xl md:text-6xl font-bold text-gold tabular-nums">
          {triggered ? count : 0}{suffix}
        </span>
      )}
      <span className="text-xs font-sans font-medium uppercase tracking-widest text-white/70 text-center">
        {label}
      </span>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect(); // Only trigger once, ever
        }
      },
      { threshold: 0.35 } // Fire when 35% of the bar is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-forest py-16 md:py-20 select-none border-b border-light/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-10 sm:gap-4 px-6">

        {/* Stat 1 — Years of experience */}
        <StatItem
          value={15}
          suffix="+"
          label="Yıllık Deneyim"
          duration={1200}
          triggered={triggered}
        />

        {/* Vertical divider — hidden on mobile */}
        <div className="hidden sm:block h-16 w-px bg-white/20" />

        {/* Stat 2 — Completed projects */}
        <StatItem
          value={300}
          suffix="+"
          label="Tamamlanan Proje"
          duration={1600}   /* slightly longer for larger number */
          triggered={triggered}
        />

        {/* Vertical divider */}
        <div className="hidden sm:block h-16 w-px bg-white/20" />

        {/* Stat 3 — Districts served */}
        <StatItem
          value={5}
          suffix=""
          label="İlçe Hizmet Alanı"
          duration={900}
          triggered={triggered}
        />

        {/* Vertical divider */}
        <div className="hidden sm:block h-16 w-px bg-white/20" />

        {/* Stat 4 — Turkey-wide (text, not a number) */}
        <StatItem
          value={0}
          suffix=""
          label="Bitki Teslimatı"
          duration={0}
          triggered={triggered}
          isText={true}
          textValue="Türkiye Geneli"
        />

      </div>
    </div>
  );
}
