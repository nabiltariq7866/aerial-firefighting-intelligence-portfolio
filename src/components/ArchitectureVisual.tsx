import { BrainCircuit, CloudCog, DatabaseZap, LayoutDashboard } from 'lucide-react'

const layers = [
  { label: 'SOURCES', title: 'Operational Data', items: ['Aircraft', 'Weather', 'GeoJSON', 'Debriefs', 'Maintenance'], Icon: DatabaseZap },
  { label: 'WORKFLOW', title: 'Data & Workflow Layer', items: ['Normalize', 'State', 'History', 'Audit'], Icon: CloudCog },
  { label: 'INTELLIGENCE', title: 'AI & Decision Support', items: ['Patterns', 'Semantic Search', 'Risk Scoring', 'Forecasting'], Icon: BrainCircuit },
  { label: 'APPLICATIONS', title: 'Operational Products', items: ['Fireline COP', 'AeroLearn AI', 'AeroFleet'], Icon: LayoutDashboard },
]

export default function ArchitectureVisual() {
  return (
    <div className="architecture-visual">
      {layers.map(({ label, title, items, Icon }, index) => (
        <div className="architecture-layer" key={label}>
          <span>{label}</span>
          <i className="architecture-icon"><Icon /></i>
          <div><h3>{title}</h3><p>{items.map((item) => <em key={item}>{item}</em>)}</p></div>
          {index < layers.length - 1 && <b className="architecture-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
