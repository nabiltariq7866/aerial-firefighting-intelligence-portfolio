import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { siteConfig } from '../data/site'

const opportunityAreas = [
  'Detect-to-Dispatch',
  'Fuels & Micro-Weather',
  'Resource Allocation',
  'Contract & Compliance',
  'Crew Readiness & Training',
]

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-main">
        <div className="footer-brand">
          <span className="brand-symbol"><i /><i /><i /></span>
          <div><b>{siteConfig.companyName}</b><h3>Aerial Firefighting Intelligence Portfolio</h3><p>Interactive portfolio systems spanning wildfire situational awareness, post-mission learning and explainable fleet readiness.</p></div>
        </div>
        <div className="footer-col"><span>Portfolio systems</span>{projects.map((project) => <Link key={project.id} to={`/projects/${project.id}`}>{project.name}</Link>)}</div>
        <div className="footer-col"><span>Research opportunities</span>{opportunityAreas.map((item) => <a key={item} href="/#capabilities">{item}</a>)}</div>
        <div className="footer-col"><span>Contact</span><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer">aspirexllc.io <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {siteConfig.companyName}</span>
        <p>Portfolio demonstrations use synthetic aviation data and simulated workflows. They are not production flight, dispatch, maintenance or regulatory systems.</p>
      </div>
    </footer>
  )
}
