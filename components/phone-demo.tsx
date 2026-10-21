"use client";

import { useState } from "react";
import { ChevronLeft, CirclePlay, Download, Settings2, Trash2, Wifi } from "lucide-react";

type Screen = "library" | "player" | "settings";

export function PhoneDemo() {
  const [screen, setScreen] = useState<Screen>("library");
  return <div className="phone-showcase"><div className="phone-tabs" role="group" aria-label="Phone concept screens"><button className={screen === "library" ? "active" : ""} onClick={() => setScreen("library")}>Library</button><button className={screen === "player" ? "active" : ""} onClick={() => setScreen("player")}>Player</button><button className={screen === "settings" ? "active" : ""} onClick={() => setScreen("settings")}>Settings</button></div>
    <div className="phone" aria-label={`Conceptual Android ${screen} screen`}><div className="phone-notch" /><div className="phone-status"><span>9:41</span><Wifi size={13} /></div>
      {screen === "library" && <div className="phone-content"><div className="phone-heading"><div><small>YOUR MOMENTS</small><h3>Replays<span className="blue-dot">.</span></h3></div><button aria-label="Open settings" onClick={() => setScreen("settings")}><Settings2 size={18} /></button></div><div className="phone-featured"><div className="phone-mountain" /><span>01:14</span></div><div className="phone-record"><strong>Morning ride</strong><small>Today · Local storage</small></div><div className="phone-list"><div className="phone-thumb thumb-two" /><div><strong>Unexpected turn</strong><small>Yesterday · 00:18</small></div><CirclePlay size={20} /></div><div className="phone-list"><div className="phone-thumb thumb-three" /><div><strong>On the trail</strong><small>Monday · 00:13</small></div><CirclePlay size={20} /></div></div>}
      {screen === "player" && <div className="phone-content"><button className="phone-back" onClick={() => setScreen("library")}><ChevronLeft size={18} /> Replays</button><div className="phone-player-art"><div className="phone-mountain" /><CirclePlay size={52} strokeWidth={1.3} /></div><h3>Morning ride</h3><p>Today · 9:24 AM</p><div className="phone-progress"><span /></div><div className="phone-duration"><span>00:07</span><span>00:13</span></div><div className="phone-actions"><span><Download size={17} /> Save to phone</span><span><Trash2 size={17} /> Delete</span></div></div>}
      {screen === "settings" && <div className="phone-content"><button className="phone-back" onClick={() => setScreen("library")}><ChevronLeft size={18} /> Replays</button><h3>Settings<span className="blue-dot">.</span></h3><p className="phone-settings-caption">REPLAY</p><div className="phone-setting"><span>Rolling buffer</span><b className="phone-switch" /></div><div className="phone-setting"><span>Before event</span><strong>10 sec</strong></div><div className="phone-setting"><span>After event</span><strong>5 sec</strong></div><p className="phone-settings-caption">DEVICE</p><div className="phone-setting"><span>Camera quality</span><strong>HD</strong></div><div className="phone-setting"><span>Local storage</span><strong>On device</strong></div></div>}
      <div className="phone-homebar" />
    </div><p className="phone-disclaimer">Illustrative interface based on the current Android companion. Not a live device connection.</p>
  </div>;
}
