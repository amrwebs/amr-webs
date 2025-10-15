import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 320, className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          {/* Advanced Gradients */}
          <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4">
              <animate attributeName="stop-color" values="#06b6d4; #22d3ee; #06b6d4" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#3b82f6">
              <animate attributeName="stop-color" values="#3b82f6; #6366f1; #3b82f6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6; #06b6d4; #8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <radialGradient id="glowGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Advanced Filters */}
          <filter id="superGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feFlood floodColor="#22d3ee" floodOpacity="0.8" result="glowColor"/>
            <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
            <feMerge>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="softGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated Background Glow */}
        <circle cx="250" cy="250" r="200" fill="url(#glowGradient)">
          <animate attributeName="r" values="200; 220; 200" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3; 0.5; 0.3" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Outer Rotating Ring */}
        <circle
          cx="250"
          cy="250"
          r="180"
          stroke="url(#mainGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          strokeDasharray="10 5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Middle Ring - Counter Rotation */}
        <circle
          cx="250"
          cy="250"
          r="160"
          stroke="url(#neonGradient)"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
          strokeDasharray="5 10"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 250 250"
            to="0 250 250"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Main Hexagonal Frame */}
        <g filter="url(#superGlow)">
          <path
            d="M 250 90 L 365 155 L 365 285 L 250 350 L 135 285 L 135 155 Z"
            stroke="url(#mainGradient)"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          />
          
          {/* Inner Hexagon */}
          <path
            d="M 250 120 L 340 170 L 340 270 L 250 320 L 160 270 L 160 170 Z"
            stroke="url(#neonGradient)"
            strokeWidth="3"
            fill="rgba(6, 182, 212, 0.05)"
          />
        </g>

        {/* Circuit-like decorative lines */}
        <g stroke="url(#mainGradient)" strokeWidth="2" opacity="0.6" filter="url(#innerGlow)">
          <path d="M 135 155 L 100 155 L 100 220" />
          <path d="M 365 155 L 400 155 L 400 220" />
          <path d="M 135 285 L 100 285 L 100 220" />
          <path d="M 365 285 L 400 285 L 400 220" />
          <circle cx="100" cy="220" r="4" fill="#22d3ee" />
          <circle cx="400" cy="220" r="4" fill="#22d3ee" />
        </g>

        {/* Animated Particles at corners */}
        {[
          { x: 250, y: 90 },
          { x: 365, y: 155 },
          { x: 365, y: 285 },
          { x: 250, y: 350 },
          { x: 135, y: 285 },
          { x: 135, y: 155 },
        ].map((pos, i) => (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y} r="8" fill="url(#mainGradient)" filter="url(#neonGlow)">
              <animate
                attributeName="r"
                values="8; 12; 8"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1; 0.5; 1"
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={pos.x} cy={pos.y} r="4" fill="#ffffff" opacity="0.9" />
          </g>
        ))}

        {/* Central Letter Design - AMR with futuristic style */}
        <g filter="url(#superGlow)">
          {/* Letter A - Stylized */}
          <path
            d="M 180 240 L 220 160 L 260 240"
            stroke="url(#letterGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="195"
            y1="220"
            x2="245"
            y2="220"
            stroke="url(#letterGradient)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Letter M - Futuristic */}
          <path
            d="M 150 270 L 150 330 M 150 270 L 180 315 L 210 270 L 210 330"
            stroke="url(#letterGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Letter R - Tech Style */}
          <path
            d="M 240 270 L 240 330 M 240 270 L 280 270 Q 300 270 300 295 Q 300 310 280 310 L 240 310 M 275 310 L 300 330"
            stroke="url(#letterGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Energy Pulses */}
        <g opacity="0.6">
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="250"
              cy="220"
              r="60"
              stroke="url(#mainGradient)"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="r"
                values="60; 140; 60"
                dur="4s"
                begin={`${i * 1.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6; 0; 0.6"
                dur="4s"
                begin={`${i * 1.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        {/* Scanline effect */}
        <line
          x1="0"
          y1="250"
          x2="500"
          y2="250"
          stroke="url(#neonGradient)"
          strokeWidth="1"
          opacity="0.3"
        >
          <animate
            attributeName="y1"
            values="100; 400; 100"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y2"
            values="100; 400; 100"
            dur="3s"
            repeatCount="indefinite"
          />
        </line>

        {/* Digital corner accents */}
        <g stroke="url(#mainGradient)" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <path d="M 90 90 L 110 90 L 110 110" />
          <path d="M 410 90 L 390 90 L 390 110" />
          <path d="M 90 410 L 110 410 L 110 390" />
          <path d="M 410 410 L 390 410 L 390 390" />
        </g>
      </svg>
    </div>
  );
}
