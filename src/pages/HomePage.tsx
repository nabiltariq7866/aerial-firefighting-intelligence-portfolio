import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroProductStack from '../components/HeroProductStack'
import ProjectCard from '../components/ProjectCard'
import ProjectVisual from '../components/ProjectVisual'
import ProjectLightbox, { type LightboxState } from '../components/ProjectLightbox'
import CapabilityMatrix from '../components/CapabilityMatrix'
import OpportunityMap from '../components/OpportunityMap'
import ProcessStory from '../components/ProcessStory'
import ResponsibleAIFlow from '../components/ResponsibleAIFlow'
import ArchitectureVisual from '../components/ArchitectureVisual'
import SectionHeading from '../components/SectionHeading'
import { FadeMask, Reveal } from '../components/Motion'
import { categories, projects, type Project } from '../data/projects'
import { siteConfig } from '../data/site'

const principles = [
  'AI suggests, humans decide',
  'Evidence remains visible',
  'Source provenance is preserved',
  'Safety-critical decisions require human authority',
  'Synthetic portfolio data only',
  'Actions remain auditable',
]

export default function HomePage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [lightbox, setLightbox] = useState<LightboxState>(null)
  const reduced = useReducedMotion()
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])
  const featured = projects.find((project) => project.id === 'fireline-cop') ?? projects[0]

  const openPreview = useCallback((project: Project) => {
    const images = [project.screenshots?.hero, ...(project.screenshots?.secondary ?? [])].filter(Boolean) as string[]
    if (!images.length) return
    setLightbox({ project, images, index: 0 })
  }, [])

  return (
    <div className="site-shell">
      <NavBar />
      <main>
        <section id="overview" className="hero-section">
          <div className="hero-backdrop" aria-hidden="true"><i className="hero-radial one" /><i className="hero-radial two" /><i className="hero-grid-lines" /></div>
          <div className="hero-inner">
            <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 28 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}>
              <div className="hero-kicker"><Sparkles size={14} /> Aerial Firefighting Intelligence Portfolio <span>03 SYSTEMS</span></div>
              <h1>Intelligent systems designed around <em>real aerial-firefighting operations.</em></h1>
              <p>Three connected portfolio systems exploring wildfire situational awareness, post-mission operational learning and explainable fleet readiness—grounded in real sector pain points and human decision authority.</p>
              <div className="hero-actions">
                <button className="primary-btn" type="button" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Explore the Portfolio <ArrowRight size={17} /></button>
                <button className="secondary-btn dark" type="button" onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}>View Capabilities <ArrowDown size={16} /></button>
              </div>
              <div className="hero-proof-row">
                {[['03', 'Interactive Systems'], ['100%', 'Synthetic Data'], ['Human', 'Authority Preserved'], ['07', 'Industry Pain Points']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
            </motion.div>
            <HeroProductStack />
          </div>
          <div className="hero-scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="metric-transition" aria-label="Portfolio overview">
          <div className="metric-panel">
            {[['03', 'Interactive Systems'], ['07', 'Industry Pain Points'], ['100%', 'Synthetic Demo Data'], ['Human', 'Decision Authority']].map(([value, label], index) => (
              <Reveal className="metric-panel-item" delay={index * .06} key={label}><strong>{value}</strong><span>{label}</span></Reveal>
            ))}
          </div>
        </section>

        <section className="featured-story section-dark-soft">
          <div className="featured-story-inner">
            <Reveal className="featured-copy">
              <div className="featured-index"><span>{featured.number}</span><i /><b>FEATURED PRODUCT</b></div>
              <h2>{featured.name}</h2>
              <h3>{featured.subtitle}</h3>
              <p>{featured.description}</p>
              <div className="featured-capabilities">{featured.capabilities.slice(0, 3).map((item) => <span key={item}><CheckCircle2 size={14} />{item}</span>)}</div>
              <div className="featured-actions"><a href={`/projects/${featured.id}`} className="primary-btn light">Explore Product <ArrowRight size={16} /></a>{featured.demoUrl ? <a href={featured.demoUrl} target="_blank" rel="noopener noreferrer" className="secondary-btn dark">Launch Demo <ArrowUpRight size={15} /></a> : <span className="featured-demo-pending">Live demo URL ready to connect</span>}</div>
            </Reveal>
            <FadeMask className="featured-visual-wrap" delay={.08}><ProjectVisual project={featured} onOpen={() => openPreview(featured)} priority /></FadeMask>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section section">
          <Reveal><SectionHeading eyebrow="The product portfolio" title="Three aerial-firefighting systems. One operational intelligence story." copy="Each product tackles a different aerial-firefighting challenge—from shared incident awareness to operational learning and fleet readiness—while keeping evidence, explainability and human authority visible." /></Reveal>
          <Reveal className="portfolio-toolbar" delay={.06}>
            <div className="filter-segment" role="tablist" aria-label="Filter projects">
              {categories.map((category) => <button type="button" role="tab" aria-selected={filter === category} key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}{filter === category && <motion.i layoutId="filter-active" />}</button>)}
            </div>
            <span>{String(filtered.length).padStart(2, '0')} systems shown</span>
          </Reveal>
          <motion.div layout className="project-bento">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div layout key={project.id} initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .36 }}>
                  <ProjectCard project={project} onPreview={openPreview} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="capabilities" className="capability-section section-dark">
          <div className="section-inner-wide">
            <Reveal><SectionHeading invert eyebrow="Full-stack capability" title="Built across the full AI product stack." copy="Operational data, product engineering, AI-assisted learning, explainable forecasting and human-controlled workflows—designed as one coherent capability stack." /></Reveal>
            <Reveal delay={.08}><CapabilityMatrix /></Reveal>
          </div>
        </section>

        <section className="ecosystem-section section">
          <Reveal><SectionHeading eyebrow="Aerial-firefighting opportunity landscape" title="Research-backed software opportunities across the mission." copy="Move across the seven industry pain points to see where the three completed demos fit—and where future software opportunities remain." /></Reveal>
          <Reveal delay={.08}><OpportunityMap /></Reveal>
        </section>

        <section id="approach" className="process-story-section section">
          <ProcessStory />
        </section>

        <section id="responsible-ai" className="responsible-section">
          <div className="responsible-ambient" aria-hidden="true" />
          <div className="responsible-inner">
            <Reveal className="responsible-heading"><span>RESPONSIBLE AI BY DESIGN</span><h2>AI assistance.<br /><em>Human accountability.</em></h2><p>High-impact operational decisions remain reviewable, evidence-linked and explicitly human-controlled throughout the portfolio.</p></Reveal>
            <Reveal delay={.08}><ResponsibleAIFlow /></Reveal>
            <div className="responsible-principles">{principles.map((principle, index) => <Reveal className="responsible-principle" delay={index * .04} key={principle}><span>{String(index + 1).padStart(2, '0')}</span><b>{principle}</b></Reveal>)}</div>
          </div>
        </section>

        <section className="architecture-section section">
          <Reveal><SectionHeading eyebrow="Engineering architecture" title="From operational data to accountable decision support." copy="A visual architecture spanning aircraft, weather, fire, debrief and maintenance context through intelligence layers into purpose-built operational applications." /></Reveal>
          <Reveal delay={.08}><ArchitectureVisual /></Reveal>
        </section>

        <section id="about" className="studio-section section">
          <Reveal className="studio-layout">
            <div className="studio-statement"><span>ASPIREX LLC · PRODUCT ENGINEERING</span><h2>Building intelligent systems for complex aerial-firefighting operations.</h2><p>The portfolio demonstrates practical capability across operational dashboards, data normalization, AI-assisted learning, explainable forecasting and enterprise workflow design.</p><a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer">Visit AspireX LLC <ArrowUpRight size={15} /></a></div>
            <div className="studio-capabilities">{['Operational Platforms', 'Decision Support', 'Workflow Automation', 'Data Integration', 'Responsible AI'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b><i /></div>)}</div>
          </Reveal>
        </section>

        <section className="final-cta-section">
          <div className="final-cta-grid" aria-hidden="true" />
          <div className="final-cta-orbit one" aria-hidden="true" /><div className="final-cta-orbit two" aria-hidden="true" />
          <Reveal className="final-cta-copy"><span>WHAT SHOULD WE BUILD NEXT?</span><h2>What aerial-firefighting workflow should we make <em>smarter next?</em></h2><p>We design operational intelligence platforms around real workflows—from detection and incident coordination to training, fleet readiness, resource allocation and compliance.</p><div><a className="primary-btn light" href={`mailto:${siteConfig.contactEmail}`}>Discuss a Project <ArrowUpRight size={16} /></a><button className="secondary-btn dark" type="button" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Explore Portfolio <ArrowRight size={16} /></button></div></Reveal>
        </section>
      </main>
      <Footer />
      <ProjectLightbox state={lightbox} onChange={(index) => setLightbox((current) => current ? { ...current, index } : current)} onClose={() => setLightbox(null)} />
    </div>
  )
}
