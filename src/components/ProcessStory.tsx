import { motion } from 'framer-motion'

const steps = [
  ['01', 'Start With the Operational Pain', 'Define the real incident, training or maintenance decision before selecting technology or AI features.'],
  ['02', 'Normalize the Operational Context', 'Bring aircraft, weather, fire, debrief or fleet state into one usable and traceable product layer.'],
  ['03', 'Add Intelligence Where It Helps', 'Use alerts, pattern detection, semantic search, scoring or forecasting where it reduces searching and decision delay.'],
  ['04', 'Keep Authority With Operators', 'Make review, override, evidence and safety-critical boundaries explicit for command, crews, trainers and maintenance teams.'],
  ['05', 'Evaluate With Real Users', 'Measure clarity, usefulness, trust and plausibility so the next iteration is driven by operational feedback.'],
]

export default function ProcessStory() {
  return (
    <div className="process-story">
      <div className="process-sticky">
        <span>HOW WE BUILD</span>
        <h2>Technology follows the mission workflow.</h2>
        <p>We design around the operating decision first, then introduce intelligence where it improves visibility, learning, readiness or coordination.</p>
        <div className="process-progress"><i /></div>
      </div>
      <div className="process-steps">
        {steps.map(([number, title, copy], index) => (
          <motion.article
            key={number}
            className="process-story-step"
            initial={{ opacity: .35, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: .6 }}
            transition={{ duration: .5 }}
          >
            <span>{number}</span>
            <div><small>STEP {String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
