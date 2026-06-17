import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3 select-none">
      <span className="w-5 h-[1.5px] bg-gold opacity-80 decoration-slice"></span>
      <span>{children}</span>
    </div>
  );
}
