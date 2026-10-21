import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Privacy", description: "What the LifeReplay website does and does not collect." };

export default function PrivacyPage() {
  return <main id="main"><PageIntro index="04" label="PRIVACY" title="A straightforward" accent="privacy note.">This page describes the website itself. It does not replace documentation for a future commercial device or service.</PageIntro><section className="subpage-section"><div className="shell privacy-copy"><h2>Website data</h2><p>The current site has no account system, contact form, newsletter, payment flow, or first-party analytics. The Replay Demo runs in your browser and does not send its interactions to a LifeReplay server.</p><h2>Local browser behavior</h2><p>The site code does not store demo replays or personal data in local storage or set its own cookies. The demonstration resets when the page reloads.</p><h2>Hosting and external links</h2><p>The hosting provider may process ordinary request data, such as IP address and browser information, to deliver the site and maintain security. Private site access may also use authentication cookies. Following the GitHub link takes you to GitHub, which has its own privacy practices.</p><h2>Updates</h2><p>If the site gains analytics, forms, accounts, or other data handling, this page will be updated before those features are introduced.</p></div></section></main>;
}
