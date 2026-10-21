import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "About", description: "The idea and purpose behind the LifeReplay camera prototype." };

export default function AboutPage() {
  return <main id="main"><PageIntro index="03" label="ABOUT" title="Made for the moments" accent="you never plan for.">A great moment rarely waits for someone to press Record. LifeReplay starts with a simple question: what if the camera could remember for you?</PageIntro><section className="subpage-section"><div className="shell about-story"><span className="eyebrow">THE IDEA</span><div><h2>Press after.<br />Remember forever.</h2><p>LifeReplay began as a compact camera concept for the unexpected parts of everyday life: a turn on a bike ride, a moment on a trail, something small that becomes a story later.</p><p>The prototype combines a Raspberry Pi camera, a rolling video buffer, a physical replay trigger, local storage, and an Android companion. Every piece serves one interaction: choose to keep a moment once you know it matters.</p></div></div></section><section className="subpage-section alternate"><div className="shell about-belief"><span>01 / SIMPLE TO USE</span><span>02 / LOCAL BY DESIGN</span><span>03 / HONEST ABOUT PROGRESS</span></div></section><section className="subpage-end"><div className="shell"><h2>See where the project stands.</h2><Link className="button button-primary" href="/development">Follow development <ArrowRight size={18} /></Link></div></section></main>;
}
