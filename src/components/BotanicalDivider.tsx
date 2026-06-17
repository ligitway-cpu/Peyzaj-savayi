export default function BotanicalDivider({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const strokeColor = variant === 'light' ? 'rgba(184, 150, 106, 0.35)' : 'rgba(255, 255, 255, 0.25)';
  return (
    <div className="w-full flex justify-center items-center py-8 overflow-hidden select-none">
      <svg
        viewBox="0 0 400 30"
        className="w-full max-w-[450px] h-auto mx-auto"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Central stem */}
        <line x1="15" y1="15" x2="160" y2="15" />
        <line x1="240" y1="15" x2="385" y2="15" />
        
        {/* Elegant leaf stems & buds on left */}
        <path d="M140,15 C135,10 120,5 110,12" />
        <path d="M110,15 C105,20 90,25 80,18" />
        <path d="M125,15 C120,8 105,8 100,12" />
        <circle cx="100" cy="12" r="1.5" fill={strokeColor} stroke="none" />
        <circle cx="80" cy="18" r="1.5" fill={strokeColor} stroke="none" />

        {/* Elegant leaf stems & buds on right */}
        <path d="M260,15 C265,10 280,5 290,12" />
        <path d="M290,15 C295,20 310,25 320,18" />
        <path d="M275,15 C280,8 295,8 300,12" />
        <circle cx="300" cy="12" r="1.5" fill={strokeColor} stroke="none" />
        <circle cx="320" cy="18" r="1.5" fill={strokeColor} stroke="none" />

        {/* Circular crest in the center */}
        <circle cx="200" cy="15" r="8" className="stroke-gold/50" strokeWidth="1" />
        <circle cx="200" cy="15" r="4" className="fill-gold/40" stroke="none" />
        <path d="M185,15 L190,15" />
        <path d="M210,15 L215,15" />
      </svg>
    </div>
  );
}
