export type ProjectCategory =
  | 'Incident Operations'
  | 'Operational Learning'
  | 'Fleet Readiness'

export type Project = {
  id: string
  number: string
  name: string
  shortName: string
  subtitle: string
  category: ProjectCategory
  tagline: string
  description: string
  industryChallenge: string
  solution: string
  impact: string[]
  problemHeadline: string
  solutionHeadline: string
  outcomeHeadline: string
  capabilities: string[]
  technologies: string[]
  accent: string
  accent2: string
  dark: string
  demoUrl: string
  screenshots?: { hero?: string; secondary?: string[] }
  caseStudyPath?: string
  featured: boolean
  problem: string
  approach: string
  workflow: string[]
  aiCapabilities: string[]
  sourceData: string[]
  targetUsers: string[]
  successMetrics: string[]
  outOfScope: string[]
  responsibleBoundary: string
}

// Add deployed demo URLs when the three applications are published.
// Empty values render “Demo link coming soon” and avoid inventing a live URL.
export const projects: Project[] = [
  {
    id: 'fireline-cop',
    number: '01',
    name: 'Fireline COP',
    shortName: 'Fireline',
    subtitle: 'Wildfire Common Operating Picture Dashboard',
    category: 'Incident Operations',
    tagline: 'One shared operational picture across aircraft, fire perimeter, weather, ground resources and command.',
    description: 'A near-real-time wildfire aviation command demo for incident commanders, dispatch staff and operations leadership. Fireline COP combines simulated aircraft movement, GeoJSON fire perimeters, weather hazards, ground resources, alerts and incident activity in one shared interface.',
    industryChallenge: 'Air crews, ground teams and command can each hold a different slice of the same incident picture. When aircraft position, fire perimeter, weather, resources and hazards are split across radio traffic and disconnected systems, commanders have to assemble situational awareness under time pressure.',
    solution: 'Fireline COP normalizes simulated ADS-B-style aircraft data, fire-perimeter GeoJSON, weather and resource information into one tactical command view. Role-aware Dispatcher, Incident Command and Operations Leadership views support aircraft inspection, assignment, wind-shift alerts, incident timelines, perimeter growth and queue-and-sync feed simulation.',
    impact: ['Locate aircraft and resources from one shared reference','Reduce reliance on radio-only situational updates','Demonstrate a clean handoff from mock feeds to real data adapters'],
    problemHeadline: 'Incident awareness is fragmented across air, ground and command.',
    solutionHeadline: 'Fuse live operational context into one common operating picture.',
    outcomeHeadline: 'Help teams locate, understand and coordinate incident activity faster.',
    capabilities: [
      'Near-Real-Time Aircraft Tracking',
      'GeoJSON Fire Perimeter',
      'Weather & Wind-Shift Hazards',
      'Ground Resource Visibility',
      'Chronological Incident Timeline',
      'Dispatcher Assignment Workflow',
      'Role-Based Command Views',
      'Feed Delay / Queue-and-Sync Simulation'
    ],
    technologies: ['React','TypeScript','SVG Tactical Mapping','GeoJSON','Mock ADS-B / Weather Feeds','Local Persistence'],
    accent: '#4EA2FF',
    accent2: '#C59B48',
    dark: '#0B1118',
    demoUrl: 'https://wildfire-common-operating-picture-n0oojnv9w.vercel.app/',
    screenshots: { hero: '/projects/fireline-cop.webp' },
    featured: true,
    problem: 'Air crews, ground teams and command can each hold a different slice of the same incident picture. When aircraft position, fire perimeter, weather, resources and hazards are split across radio traffic and disconnected systems, commanders have to assemble situational awareness under time pressure.',
    approach: 'Fireline COP normalizes simulated operational feeds into one command experience, keeps key changes visible in a chronological log and frames the dashboard as a secondary decision-support reference rather than a replacement for incident command procedures.',
    workflow: ['Choose Dispatcher or Command view','Open the live incident picture','Inspect an aircraft, resource or hazard','Simulate wind shift or perimeter growth','Assign an aircraft or acknowledge an alert','Review the resulting incident timeline'],
    aiCapabilities: ['Operational signal normalization','Wind-shift hazard alerting','Role-aware decision support','Scenario and feed-state simulation'],
    sourceData: ['Aircraft positions','Fire perimeter GeoJSON','Weather / wind','Ground resources','Incident events'],
    targetUsers: ['Incident commanders','Air / ground dispatch staff','Operations leadership'],
    successMetrics: ['Time-to-locate an asset vs. radio-based process','Secondary-reference trust in usability review','Documented handoff path to real data sources'],
    outOfScope: ['Restricted agency data ingestion','Production mobile offline mode','Multi-agency authentication'],
    responsibleBoundary: 'The demo supports situational awareness and coordination only. It does not make autonomous dispatch, flight or safety-critical decisions.'
  },
  {
    id: 'aerolearn-ai',
    number: '02',
    name: 'AeroLearn AI',
    shortName: 'AeroLearn',
    subtitle: 'Debrief Intelligence & Lessons-Learned Platform',
    category: 'Operational Learning',
    tagline: 'Turn post-mission and training debriefs into searchable, organization-wide operational knowledge.',
    description: 'A post-mission operational-learning platform that captures structured debriefs, organizes recurring themes, compares trends, surfaces lessons, supports keyword and semantic search and links evidence into training profiles with explicit human review.',
    industryChallenge: 'Debriefs already capture what happened after missions, training sorties and assessments. The harder problem is turning one crew’s experience into reusable knowledge across the organization instead of leaving lessons inside individual forms or local conversations.',
    solution: 'AeroLearn AI structures what happened, what went well, what could improve and contributing factors; organizes recurring themes across realistic mock debriefs; compares recurrence by time of day and aircraft type; supports keyword plus semantic knowledge search; links debrief evidence to training profiles; and routes candidate lessons through human review before publication.',
    impact: ['Turn individual debriefs into reusable organizational learning','Surface recurring operational patterns across missions and training','Give crews, trainers and leadership searchable evidence instead of isolated reports'],
    problemHeadline: 'Mission lessons are captured but do not reliably travel across the organization.',
    solutionHeadline: 'Organize debrief evidence into trends, lessons and searchable knowledge.',
    outcomeHeadline: 'Make operational learning easier to find, validate and reuse.',
    capabilities: [
      'Guided Digital Debriefs',
      'Contributing-Factor Capture',
      'AI-Assisted Theme Tagging',
      'Day / Night & Aircraft Trend Comparison',
      'Keyword + Semantic Search',
      'Lessons-Learned Publishing',
      'Training-Profile Linkage',
      'Human Review, Audit & Corrective Actions'
    ],
    technologies: ['React','TypeScript','Recharts','Structured Mock Debrief Data','Semantic Search Concepts','Local Persistence'],
    accent: '#C59B48',
    accent2: '#8A76FF',
    dark: '#121015',
    demoUrl: 'https://aviation-debrief-intelligence.vercel.app/',
    screenshots: { hero: '/projects/aerolearn-ai.webp' },
    featured: true,
    problem: 'Debriefs already capture what happened after missions, training sorties and assessments. The harder problem is turning one crew’s experience into reusable knowledge across the organization instead of leaving lessons inside individual forms or local conversations.',
    approach: 'AeroLearn AI is deliberately post-mission. It creates structured evidence, AI-assisted themes, trend views, search and training context while preserving original records and keeping publication, validation and corrective actions human-controlled.',
    workflow: ['Capture a mission, training or assessment debrief','Record contributing factors and crew context','Process and review suggested themes','Validate or publish a lesson learned','Search direct terms or related concepts','Inspect linked training-profile and trend evidence'],
    aiCapabilities: ['Theme tagging and organization','Recurring-pattern detection','Keyword and semantic matching','Trend summarization','Human-reviewed lesson recommendations'],
    sourceData: ['Post-mission debriefs','Training-sortie debriefs','Assessment records','Crew / aircraft context','Training profiles'],
    targetUsers: ['Flight crews','Training officers / checkers','Operations leadership'],
    successMetrics: ['Theme precision against a manually tagged sample','Search relevance for realistic operational queries','Reviewer feedback on trend usefulness'],
    outOfScope: ['Real operator training-record integration','Production voice-to-text capture','Live or in-mission decision support'],
    responsibleBoundary: 'AI is used only after missions to organize, search and surface patterns. Original evidence remains visible and humans decide what becomes an approved lesson or corrective action.'
  },
  {
    id: 'aerofleet',
    number: '03',
    name: 'AeroFleet',
    shortName: 'AeroFleet',
    subtitle: 'Predictive Maintenance & Fleet Readiness Dashboard',
    category: 'Fleet Readiness',
    tagline: 'Use aircraft usage, cycles and inspection pressure to see maintenance risk before it becomes unplanned downtime.',
    description: 'An explainable fleet-readiness demo for maintenance managers, schedulers and operations leadership. AeroFleet tracks simulated aircraft usage across a 10-aircraft fleet, ranks maintenance pressure and lets planners test how future flying changes projected risk.',
    industryChallenge: 'Aerial-firefighting aircraft are heavily utilized and maintenance-intensive. Unscheduled downtime during peak season directly reduces suppression capacity, so fleet teams need a clearer way to see which aircraft are moving toward service thresholds before availability is lost.',
    solution: 'AeroFleet tracks engine hours, tank and snorkel cycles, inspection age, defects and maintenance history; calculates a transparent weighted risk score; ranks fleet readiness; supports service scheduling; and provides a what-if simulator that changes upcoming hours and cycles to show how maintenance pressure shifts.',
    impact: ['Prioritize aircraft approaching mock maintenance thresholds','Give leadership one fleet-wide readiness view','Test peak-season workload before committing maintenance capacity'],
    problemHeadline: 'Maintenance pressure becomes costly when it is visible too late.',
    solutionHeadline: 'Turn aircraft usage and inspection history into explainable readiness signals.',
    outcomeHeadline: 'Plan service earlier and protect fleet availability through peak demand.',
    capabilities: [
      '10-Aircraft Fleet Readiness Board',
      'Engine Hours & Mission-Cycle Tracking',
      'Inspection & Defect History',
      'Explainable Risk Scoring',
      'Risk-Based Fleet Ranking',
      'Maintenance Scheduling Workflow',
      'Forecast & What-If Simulator',
      'Usage Analytics & Evaluation Metrics'
    ],
    technologies: ['React','TypeScript','Recharts','Explainable Weighted Risk Model','Mock Aircraft Logs','Local Persistence'],
    accent: '#8A76FF',
    accent2: '#4EA2FF',
    dark: '#0C0F1A',
    demoUrl: 'https://aerofleet-predictive-maintenance.vercel.app/',
    screenshots: { hero: '/projects/aerofleet.webp' },
    featured: true,
    problem: 'Aerial-firefighting aircraft are heavily utilized and maintenance-intensive. Unscheduled downtime during peak season directly reduces suppression capacity, so fleet teams need a clearer way to see which aircraft are moving toward service thresholds before availability is lost.',
    approach: 'AeroFleet uses a transparent regression-style weighted model rather than a black-box predictor. Every risk factor is visible, what-if changes are deterministic and maintenance decisions remain with fleet and maintenance personnel.',
    workflow: ['Review fleet-wide readiness','Filter and rank aircraft by risk','Open an aircraft profile and risk drivers','Adjust future hours and mission cycles','Reserve a maintenance window','Advance simulated usage and re-evaluate the fleet'],
    aiCapabilities: ['Explainable maintenance-risk scoring','Risk-driver transparency','Fleet readiness ranking','What-if forecasting','Maintenance-priority recommendations'],
    sourceData: ['Engine hours','Tank / snorkel cycles','Inspection history','Open defects','Maintenance logs'],
    targetUsers: ['Fleet / maintenance managers','Operations leadership','Maintenance schedulers'],
    successMetrics: ['Correctly flag aircraft nearing mock thresholds','Readiness-score clarity to non-technical reviewers','Plausible and defensible what-if outputs'],
    outOfScope: ['Direct OEM maintenance-system integration','Real FAA / CASA compliance logic','Parts-ordering workflows'],
    responsibleBoundary: 'The risk score is transparent planning support only. It does not replace approved maintenance programs, regulatory requirements, engineering judgement or return-to-service authority.'
  }
]

export const categories = ['All','Incident Operations','Operational Learning','Fleet Readiness'] as const
