// Tasteful, conceptual cover art for each project — not screenshots.
// Swap in a real screenshot later by passing an `image` prop to ProjectCard/ProjectCover.

const STROKE = '#2B2723'
const FAINT = '#DDD2BB'
const ACCENT = '#9C6B33'

function Frame({ children }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="0" y="0" width="400" height="300" fill="#F4EEE3" />
      {children}
    </svg>
  )
}

function EcgCover() {
  return (
    <Frame>
      <g stroke={FAINT} strokeWidth="1">
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="0" y1={40 + i * 40} x2="400" y2={40 + i * 40} />
        ))}
      </g>
      <path
        d="M0 160 H120 L140 160 L155 90 L172 230 L188 60 L205 160 L230 160 L245 130 L260 160 H400"
        fill="none"
        stroke={STROKE}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="188" cy="60" r="4" fill={ACCENT} />
    </Frame>
  )
}

function RafiqCover() {
  return (
    <Frame>
      <rect x="160" y="50" width="120" height="200" rx="14" fill="none" stroke={STROKE} strokeWidth="2" />
      <line x1="185" y1="70" x2="255" y2="70" stroke={FAINT} strokeWidth="2" />
      <circle cx="220" cy="120" r="26" fill="none" stroke={ACCENT} strokeWidth="2" />
      <path d="M220 96 A24 24 0 1 0 244 120" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <rect x="180" y="165" width="80" height="10" rx="5" fill={FAINT} />
      <rect x="180" y="185" width="55" height="10" rx="5" fill={FAINT} />
      <rect x="180" y="205" width="65" height="10" rx="5" fill={FAINT} />
    </Frame>
  )
}

function SehatakCover() {
  return (
    <Frame>
      <rect x="130" y="90" width="140" height="90" rx="20" fill="none" stroke={STROKE} strokeWidth="2" />
      <path
        d="M140 135 H180 L190 115 L205 160 L218 135 H260"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="200" y1="90" x2="200" y2="65" stroke={STROKE} strokeWidth="2" />
      <line x1="200" y1="180" x2="200" y2="205" stroke={STROKE} strokeWidth="2" />
      <g stroke={FAINT} strokeWidth="1.5">
        <line x1="80" y1="230" x2="120" y2="230" />
        <line x1="140" y1="230" x2="170" y2="230" />
        <line x1="230" y1="230" x2="280" y2="230" />
        <line x1="300" y1="230" x2="320" y2="230" />
      </g>
    </Frame>
  )
}

function FraudCover() {
  const nodes = [
    [90, 90], [180, 70], [270, 100], [320, 170], [230, 210], [130, 200], [60, 150], [200, 150],
  ]
  return (
    <Frame>
      <g stroke={FAINT} strokeWidth="1">
        <line x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
        <line x1={nodes[1][0]} y1={nodes[1][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
        <line x1={nodes[2][0]} y1={nodes[2][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
        <line x1={nodes[3][0]} y1={nodes[3][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
        <line x1={nodes[4][0]} y1={nodes[4][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
        <line x1={nodes[5][0]} y1={nodes[5][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
        <line x1={nodes[6][0]} y1={nodes[6][1]} x2={nodes[7][0]} y2={nodes[7][1]} />
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 7 : 5} fill={i === 3 ? ACCENT : '#F4EEE3'} stroke={STROKE} strokeWidth="1.5" />
      ))}
    </Frame>
  )
}

function ParkingCover() {
  const bays = [60, 130, 200, 270, 340]
  return (
    <Frame>
      {bays.map((x, i) => (
        <rect
          key={i}
          x={x - 22}
          y="110"
          width="44"
          height="80"
          fill={i === 2 ? ACCENT : 'none'}
          fillOpacity={i === 2 ? 0.18 : 1}
          stroke={STROKE}
          strokeWidth="1.5"
        />
      ))}
      <circle cx={bays[2]} cy="150" r="10" fill="none" stroke={ACCENT} strokeWidth="2" />
      <rect x="20" y="40" width="30" height="18" rx="3" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <circle cx="35" cy="49" r="5" fill="none" stroke={STROKE} strokeWidth="1.5" />
      <line x1="35" y1="58" x2="35" y2="100" stroke={FAINT} strokeWidth="1.5" strokeDasharray="3 4" />
    </Frame>
  )
}

const COVERS = {
  ecg: EcgCover,
  rafiq: RafiqCover,
  sehatak: SehatakCover,
  fraud: FraudCover,
  parking: ParkingCover,
}

export default function ProjectCover({ variant, image, alt = '' }) {
  if (image) {
    return <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" />
  }
  const Cover = COVERS[variant] || EcgCover
  return (
    <div className="w-full h-full">
      <Cover />
    </div>
  )
}
