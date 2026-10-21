"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner shell">
    <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="LifeReplay home"><span className="brand-mark" aria-hidden="true"><span /></span><span>Life<span className="brand-light">Replay</span></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.label} href={item.href}>{item.label}</Link>)}</nav>
    <a className="header-link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a>
    <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
  </div><nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!open}>
    {navigation.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={18} /></Link>)}
    <a href={site.github} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>GitHub<ArrowUpRight size={18} /></a>
  </nav></header>;
}
