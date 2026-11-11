'use client';
import Link from 'next/link';
import {useState} from 'react';
import {Art} from './art';
import {copy,projects,type Lang} from '@/lib/projects';
export function ProjectGrid({lang}:{lang:Lang}){const [filter,setFilter]=useState('all'), labels=copy[lang].categories;const cats=['all','Graduation Project','CAD Design','3D Modeling','Personal Project'];const visible=projects.filter(p=>filter==='all'||p.category===filter);return <><div className="filter-row" aria-label={lang==='ko'?'프로젝트 카테고리':'Project categories'}>{labels.map((label,i)=><button key={cats[i]} className={filter===cats[i]?'active':''} aria-pressed={filter===cats[i]} onClick={()=>setFilter(cats[i])}>{label}</button>)}</div><div className="project-grid">{visible.map(p=><Link className="project-card" key={p.slug} href={`/${lang}/projects/${p.slug}`}><div className="project-image"><Art variant={p.variant} label={p.title[lang]}/></div><div className="project-caption"><div><div className="eyebrow">{p.number} / {p.category} · {p.year}</div><h3>{p.title[lang]}</h3><p>{p.subtitle[lang]}</p></div><span className="arrow">↗</span></div></Link>)}</div></>}
