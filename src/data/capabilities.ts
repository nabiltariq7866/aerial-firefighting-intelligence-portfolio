import { BrainCircuit, CloudCog, Layers3, Network, ShieldCheck } from 'lucide-react'

export const capabilityGroups = [
  { title: 'Operational Intelligence', icon: Layers3, items: ['Common Operating Picture','Incident Timelines','Hazard Signals','Resource Visibility','Role-Based Command Views'] },
  { title: 'AI & Learning', icon: BrainCircuit, items: ['Theme Detection','Semantic Search','Recurring Patterns','Trend Intelligence','Human-Reviewed Recommendations'] },
  { title: 'Fleet Intelligence', icon: CloudCog, items: ['Readiness Scoring','Maintenance Prioritization','Usage Forecasting','What-If Simulation','Risk Transparency'] },
  { title: 'Operational Data', icon: Network, items: ['Aircraft Position Feeds','GeoJSON Perimeters','Weather Data','Debrief Records','Maintenance Logs','Training Context'] },
  { title: 'Responsible AI', icon: ShieldCheck, items: ['Human-in-the-Loop','Explainability','Evidence Traceability','Auditability','Safety-Critical Boundaries'] },
]
