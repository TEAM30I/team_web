"use client"

interface SectionIndicatorProps {
  activeSection: number
  sectionCount: number
  onNavigate: (index: number) => void
}

export default function SectionIndicator({ activeSection, sectionCount, onNavigate }: SectionIndicatorProps) {
  return (
    <ul className="section-indicator">
      {Array.from({ length: sectionCount }).map((_, index) => (
        <li key={index} className={activeSection === index ? "active" : ""} onClick={() => onNavigate(index)} />
      ))}
    </ul>
  )
}

