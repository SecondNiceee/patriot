export function MaxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 1000" className={className} fill="none">
      <defs>
        <linearGradient id="maxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077FF" />
          <stop offset="50%" stopColor="#0066DD" />
          <stop offset="100%" stopColor="#0055CC" />
        </linearGradient>
      </defs>
      <rect width="1000" height="1000" rx="220" fill="url(#maxGradient)" />
      {/* Speech bubble shape */}
      <path
        d="M500 200C310 200 200 340 200 480C200 560 240 630 300 680L280 800L420 720C445 728 472 732 500 732C690 732 800 592 800 480C800 340 690 200 500 200Z"
        fill="white"
      />
    </svg>
  )
}
