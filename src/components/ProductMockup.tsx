import { Activity, BrainCircuit, Gauge } from 'lucide-react'
import type { Project } from '../data/projects'

const iconMap: Record<string, typeof Activity> = {
  'fireline-cop': Activity,
  'aerolearn-ai': BrainCircuit,
  'aerofleet': Gauge,
}

const labels: Record<string, string[]> = {
  'fireline-cop': ['Incidents', 'Aircraft', 'Hazards', 'Resources'],
  'aerolearn-ai': ['Debriefs', 'Lessons', 'Patterns', 'Reviews'],
  'aerofleet': ['Aircraft', 'Risk', 'Service', 'Forecast'],
}

export default function ProductMockup({ project, detailed = false }: { project: Project; detailed?: boolean }) {
  const Icon = iconMap[project.id] ?? Activity
  const statLabels = labels[project.id] ?? ['Overview', 'Signals', 'Review', 'Actions']

  return (
    <div
      className={`product-mockup ${detailed ? 'detailed' : ''}`}
      style={{ '--accent': project.accent, '--accent-2': project.accent2, '--dark': project.dark } as React.CSSProperties}
    >
      <aside className="mock-sidebar">
        <div className="mock-logo"><Icon size={16} /></div>
        <span className="mock-brand-line" />
        {[0, 1, 2, 3, 4, 5, 6].map((item) => <i key={item} className={item === 0 ? 'active' : ''} />)}
      </aside>
      <div className="mock-main">
        <div className="mock-topbar"><span className="mock-search" /><span className="mock-status" /><span className="avatar-dot" /></div>
        <div className="mock-page">
          <div className="mock-heading">
            <div><small>AERIAL FIREFIGHTING WORKSPACE</small><b>{project.shortName}</b></div>
            <button type="button">Portfolio demo</button>
          </div>
          <div className="mock-stats">
            {statLabels.map((label, i) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{[8, 14, 23, 4][i]}</strong>
                <small>{i % 2 ? 'Human review' : 'Current state'}</small>
              </div>
            ))}
          </div>
          <div className="mock-grid">
            <div className="mock-panel large">
              <div className="mock-panel-head"><b>Operational intelligence</b><span>Updated now</span></div>
              <div className="mock-chart">
                {[38, 55, 47, 72, 64, 83, 76, 88, 69].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
              </div>
            </div>
            <div className="mock-panel">
              <div className="mock-panel-head"><b>Requires review</b><span>3</span></div>
              {[0, 1, 2].map((i) => (
                <div className="mock-list-row" key={i}>
                  <i />
                  <span><b>{project.capabilities[i]}</b><small>Evidence linked · Human review</small></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
