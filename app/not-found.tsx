import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main id="main" className="not-found"><div className="shell"><span className="eyebrow">ERROR / 404</span><h1>This moment<br /><span className="muted">isn&apos;t here.</span></h1><p>The page may have moved, or the address may be wrong.</p><Link className="button button-primary" href="/"><ArrowLeft size={18} /> Back to LifeReplay</Link></div></main>;
}
