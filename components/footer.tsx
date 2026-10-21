import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-top"><div><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true"><span /></span><span>Life<span className="brand-light">Replay</span></span></Link><p>Hold on to the moment after it happens.</p></div><nav aria-label="Footer navigation"><Link href="/">Product</Link><Link href="/technology">Technology</Link><Link href="/development">Development</Link><Link href="/about">About</Link><Link href="/privacy">Privacy</Link><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a></nav></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} LifeReplay</span><span>Prototype in development · Built to remember.</span></div></footer>;
}
