export const site = {
  name: "LifeReplay",
  tagline: "Life doesn't have a replay button. Now it does.",
  description: "LifeReplay is a camera prototype that saves the moments before and after you press a button.",
  github: "https://github.com/kbIkx/LifeReplay",
  url: "https://lifereplay-product.kbikkbikovich.chatgpt.site",
  deviceStatus: "Prototype in development",
  microphoneStatus: "In integration",
};

export const navigation = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Technology", href: "/technology" },
  { label: "Development", href: "/development" },
  { label: "FAQ", href: "/#faq" },
];

export const milestones = [
  { title: "The idea", detail: "Save an event after it happens.", status: "Complete" },
  { title: "Camera prototype", detail: "Raspberry Pi camera capture and a rolling video buffer.", status: "Complete" },
  { title: "Replay pipeline", detail: "Physical trigger, pre-event and post-event capture, local MP4 saving.", status: "Complete" },
  { title: "Android companion", detail: "Browse, play, download and manage local replays and settings.", status: "Complete" },
  { title: "Physical microphone", detail: "INMP441 I²S capture and audio/video validation on the device.", status: "In progress" },
  { title: "Standalone device", detail: "Power, enclosure and real-world reliability work.", status: "Planned" },
  { title: "Public launch", detail: "Availability and release details after prototype validation.", status: "Planned" },
] as const;

export const faqs = [
  { q: "What is LifeReplay?", a: "A compact camera prototype built to save the moments immediately before and after a button press." },
  { q: "How does instant replay work?", a: "A rolling buffer continuously replaces its oldest frames. Pressing the button keeps the recent past and captures the next moments, then creates a local replay." },
  { q: "Can I buy one?", a: "Not yet. LifeReplay is an active prototype and there is no announced price or release date." },
  { q: "Does it require the internet?", a: "The current replay flow uses local capture and storage. The Android companion communicates with the prototype over its local API." },
  { q: "Where are videos stored?", a: "The prototype saves replays locally on the device. The Android app can browse them and download a copy to the phone." },
  { q: "Is there an Android app?", a: "Yes, an Android companion is part of the project. It is still being developed alongside the hardware prototype." },
  { q: "Is the project open source?", a: "The current source code is available through the project repository linked on this site." },
  { q: "When will LifeReplay be released?", a: "No release date has been announced. Follow development for verified progress." },
];
