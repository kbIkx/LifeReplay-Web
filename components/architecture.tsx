"use client";

import { useState } from "react";
import { Aperture, Camera, Cpu, HardDrive, MousePointer2, Smartphone } from "lucide-react";

const stages = [
  { title: "Capture", icon: Camera, detail: "Picamera2 receives camera frames on the Raspberry Pi Zero 2 W." },
  { title: "Buffer", icon: Cpu, detail: "A bounded rolling buffer holds recent frames and replaces the oldest ones." },
  { title: "Trigger", icon: MousePointer2, detail: "A physical button marks the event and starts the post-event capture window." },
  { title: "Encode", icon: Aperture, detail: "FFmpeg assembles captured frames into a local MP4 replay." },
  { title: "Store", icon: HardDrive, detail: "The replay and metadata are saved on the device." },
  { title: "View", icon: Smartphone, detail: "The Android app uses the Flask API to browse, play, download, and manage replays." },
];

export function Architecture() {
  const [active, setActive] = useState(0);
  return <div className="architecture"><div className="architecture-stages" role="group" aria-label="Replay pipeline">{stages.map((stage, index) => <button key={stage.title} type="button" aria-pressed={active === index} aria-controls="architecture-detail" className={active === index ? "active" : ""} onClick={() => setActive(index)}><stage.icon size={23} /><span>{stage.title}</span><small>{String(index + 1).padStart(2, "0")}</small></button>)}</div><div id="architecture-detail" className="architecture-detail" aria-live="polite"><span>STEP {String(active + 1).padStart(2, "0")} / 06</span><h3>{stages[active].title}</h3><p>{stages[active].detail}</p></div></div>;
}
