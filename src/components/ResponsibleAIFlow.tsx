import { BrainCircuit, CheckCircle2, Database, FileSearch, UserCheck } from 'lucide-react'

const nodes = [
  { title: 'Operational input', copy: 'Incident · Debrief · Fleet context', Icon: Database },
  { title: 'Intelligence support', copy: 'Alert · Pattern · Search · Forecast', Icon: BrainCircuit },
  { title: 'Evidence layer', copy: 'Source records · Inputs · Rationale', Icon: FileSearch },
  { title: 'Human authority', copy: 'Review · Modify · Approve · Act', Icon: UserCheck },
]

export default function ResponsibleAIFlow() {
  return (
    <div className="responsible-flow">
      <div className="responsible-flow-line" aria-hidden="true"><i /></div>
      {nodes.map(({ title, copy, Icon }, index) => (
        <div className="responsible-node" key={title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <i><Icon /></i>
          <b>{title}</b>
          <small>{copy}</small>
          {index === nodes.length - 1 && <em><CheckCircle2 size={13} /> Operational authority preserved</em>}
        </div>
      ))}
    </div>
  )
}
