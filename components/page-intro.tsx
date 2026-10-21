import type { ReactNode } from "react";

export function PageIntro({ index, label, title, accent, children }: { index: string; label: string; title: string; accent: string; children: ReactNode }) {
  return <section className="page-intro"><div className="shell"><div className="section-kicker"><span>{index} / {label}</span><span className="section-line" /></div><h1>{title}<br /><span className="muted">{accent}</span></h1><p>{children}</p></div></section>;
}
