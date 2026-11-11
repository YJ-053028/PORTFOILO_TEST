import Link from 'next/link';
import {Art} from './art';
import {projects,type Lang} from '@/lib/projects';
export function ProjectGrid({lang}:{lang:Lang}){return <div className="project-grid">{projects.map(p=><Link className="project-card" key={p.slug} href={`/${lang}/projects/${p.slug}`}><div className="project-image">{p.slug==='hey-meta-window'?<Art variant="object" label={p.title[lang]}/>:<div className="project-wordmark" aria-label={p.title[lang]}>{p.title[lang]}</div>}</div><div className="project-caption"><div><div className="eyebrow">{p.number} / {p.category}{p.year?` · ${p.year}`:''}</div><h3>{p.title[lang]}</h3><p>{p.subtitle[lang]}</p></div><span className="arrow">↗</span></div></Link>)}</div>}
