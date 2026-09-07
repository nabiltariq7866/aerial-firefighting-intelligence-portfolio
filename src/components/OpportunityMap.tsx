import { useState } from 'react'
import { projects } from '../data/projects'

const domains = [
  {
    name: 'Common Operating Picture',
    copy: 'Shared air / ground / command visibility across aircraft, fire perimeter, resources and hazards.',
    projectIds: ['fireline-cop'],
  },
  {
    name: 'Detect-to-Dispatch',
    copy: 'Reduce the hand-off gap between verified detection and a human-confirmed dispatch recommendation.',
    projectIds: [],
  },
  {
    name: 'Fuels & Micro-Weather',
    copy: 'Bring localized fuels and weather context closer to live incident planning and hazard awareness.',
    projectIds: ['fireline-cop'],
  },
  {
    name: 'Predictive Maintenance',
    copy: 'Use aircraft hours, cycles and inspections to see maintenance pressure before peak-season downtime.',
    projectIds: ['aerofleet'],
  },
  {
    name: 'Resource Allocation',
    copy: 'Support human dispatchers with best-fit aircraft assignment and what-if reallocation scenarios.',
    projectIds: ['fireline-cop'],
  },
  {
    name: 'Contract & Compliance',
    copy: 'Centralize contract terms, cost-escalation tracking, reporting requirements and audit-ready exports.',
    projectIds: [],
  },
  {
    name: 'Crew Readiness & Training',
    copy: 'Track fatigue exposure, training progress and development evidence across long fire-season pipelines.',
    projectIds: ['aerolearn-ai'],
  },
]

export default function OpportunityMap() {
  const [active, setActive] = useState(0)
  const current = domains[active]
  const activeProjects = current.projectIds.map((id) => projects.find((p) => p.id === id)).filter(Boolean)

  return (
    <div className="opportunity-map">
      <div className="opportunity-map-track">
        <div className="opportunity-map-line" aria-hidden="true" />
        {domains.map((domain, index) => (
          <button
            key={domain.name}
            type="button"
            className={active === index ? 'active' : ''}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <i />
            <b>{domain.name}</b>
          </button>
        ))}
      </div>
      <div className="opportunity-map-detail">
        <div>
          <span>ACTIVE OPPORTUNITY</span>
          <h3>{current.name}</h3>
          <p>{current.copy}</p>
        </div>
        <div className="opportunity-map-projects">
          {activeProjects.length ? activeProjects.map((project) => project && (
            <a href={`/projects/${project.id}`} key={project.id} style={{ '--accent': project.accent } as React.CSSProperties}>
              <i />
              <span><small>PORTFOLIO DEMO · {project.number}</small><b>{project.name}</b></span>
            </a>
          )) : (
            <div className="opportunity-research-note">
              <small>RESEARCH OPPORTUNITY</small>
              <b>No dedicated portfolio demo yet</b>
              <span>Documented as a future software opportunity, not presented as an already-built system.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
