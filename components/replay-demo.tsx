"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";

const PAST = 8;
const FUTURE = 3;
type Phase = "live" | "capturing" | "saving" | "saved";

export function ReplayDemo() {
  const [time, setTime] = useState(0);
  const [pressAt, setPressAt] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>("live");

  useEffect(() => {
    const timer = window.setInterval(() => setTime(value => value + 0.1), 100);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (pressAt === null || phase === "saved") return;
    const delta = time - pressAt;
    if (delta >= FUTURE + 0.8) setPhase("saved");
    else if (delta >= FUTURE) setPhase("saving");
  }, [time, pressAt, phase]);

  function save() {
    setPressAt(time);
    setPhase("capturing");
  }

  function reset() {
    setPressAt(null);
    setPhase("live");
  }

  const elapsed = pressAt === null ? 0 : Math.max(0, time - pressAt);
  const futureProgress = Math.min(1, elapsed / FUTURE);
  const seconds = Math.floor(time);
  const displayTime = `00:${String(Math.floor(seconds / 60) % 60).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return <div className="demo" id="demo" aria-label="Interactive replay demonstration">
    <div className="demo-topline"><span><i className="live-dot" /> INTERACTIVE PRODUCT DEMO</span><span>LOCAL SIMULATION · NO DEVICE CONNECTED</span></div>
    <div className="demo-stage">
      <div className="demo-video" aria-label="Animated illustration of a passing moment">
        <div className="demo-video-grid" />
        <div className="demo-orbit demo-orbit-one" /><div className="demo-orbit demo-orbit-two" />
        <div className="demo-subject"><span className="subject-core" /><span className="subject-ring" /></div>
        <div className="video-corner top-left" /><div className="video-corner top-right" /><div className="video-corner bottom-left" /><div className="video-corner bottom-right" />
        <div className="video-label"><span className="rec-dot" /> REC <span className="video-time">{displayTime}</span></div>
        <div className="video-caption">A moment is happening.<br /><strong>You can decide to keep it later.</strong></div>
      </div>
      <div className="demo-control">
        <div className="demo-control-top"><div><span className="eyebrow">ROLLING BUFFER</span><h3>The past is still here.</h3></div><span className="buffer-count">DEMO · {PAST} SEC</span></div>
        <p className="demo-instruction">Frames keep moving through the buffer. Press when the moment has already happened.</p>
        <div className="timeline-labels"><span>PAST</span><span>{phase === "live" ? "NOW" : "BUTTON PRESS"}</span><span>FUTURE</span></div>
        <div className={`timeline-track phase-${phase}`} role="img" aria-label={phase === "live" ? "Rolling buffer of the last eight seconds" : `Saving eight seconds before the press and ${Math.round(futureProgress * FUTURE)} of three seconds after` }>
          <div className="timeline-past" /><div className="timeline-future" style={{ width: `${futureProgress * 27}%` }} /><div className="timeline-marker" />
          {Array.from({ length: 34 }, (_, index) => <i key={index} />)}
        </div>
        <div className="timeline-times"><span>−{PAST}s</span><span>0s</span><span>+{FUTURE}s</span></div>
        <div className="demo-action-row">
          {phase === "live" ? <button className="replay-button" onClick={save}><span className="replay-button-icon"><ArrowRight size={19} /></span>SAVE REPLAY</button> : phase === "saved" ? <button className="replay-button replay-again" onClick={reset}><RotateCcw size={18} /> TRY AGAIN</button> : <button className="replay-button" disabled><span className="saving-spinner" />{phase === "capturing" ? "CAPTURING THE NEXT SECONDS" : "SAVING REPLAY"}</button>}
          <span className="demo-feedback" aria-live="polite">{phase === "live" ? "The buffer is live" : phase === "capturing" ? `Keeping the next ${FUTURE} seconds…` : phase === "saving" ? "Creating your replay…" : <><Check size={16} /> Replay saved locally in this demo</>}</span>
        </div>
        {phase === "saved" && <div className="saved-card" role="status"><div className="saved-card-icon"><Check size={20} /></div><div><strong>Replay saved</strong><span>{PAST}s before + {FUTURE}s after the moment</span></div><span className="saved-card-tag">DEMO</span></div>}
      </div>
    </div>
  </div>;
}
