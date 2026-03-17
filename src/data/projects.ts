export type ProjectCategory = "hardware" | "software";

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectEntry = {
  slug: string;
  title: string;
  category: ProjectCategory;
  sortOrder: number;
  mediaStyle: "wide" | "standard" | "square";
  period: string;
  shortDescription: string;
  fullDescription: string[];
  bullets: string[];
  skills: string[];
  links: ProjectLink[];
  imageLabel: string;
  media: Array<{
    type: "image" | "video";
    label: string;
    src?: string;
    poster?: string;
  }>;
};

export const profile = {
  name: "Ben Brake",
  tagline: "Project Portfolio",
  linkedin: "https://www.linkedin.com/in/ben-brake-36192a261/",
  github: "https://github.com/",
};

export const projects: ProjectEntry[] = [
  {
    slug: "raspberry-pi-handheld-arcade",
    title: "Custom Raspberry Pi Handheld Arcade Emulator",
    category: "hardware",
    sortOrder: 202508,
    mediaStyle: "standard",
    period: "Jun 2025 – Aug 2025",
    shortDescription:
      "A custom handheld arcade emulator built from scratch with a Raspberry Pi, hand soldered controls, and a fully custom 3D-printed enclosure.",
    fullDescription: [
      "This project started as a full-stack hardware build where the goal was to design and assemble a complete portable arcade unit from the ground up.",
      "I handled everything from component integration and wiring to enclosure design and software configuration, making sure the final unit was both functional and durable.",
      "The result was a complete, portable system with custom input mapping and a clean physical layout ready for regular play.",
    ],
    bullets: [
      "Learned fundamentals of circuit design through breadboarding and troubleshooting connection issues.",
      "Applied soldering techniques to permanently secure wire connections for interface buttons.",
      "Utilized 3D CAD software to design a housing unit that fit all internal components.",
      "Configured RetroPie scripts to map physical hardware inputs to software commands.",
    ],
    skills: ["CAD", "Circuit Design", "Raspberry Pi", "Soldering", "RetroPie"],
    links: [
      
    ],
    imageLabel: "Raspberry Pi Emulator",
    media: [
      { type: "image", label: "Emulator Photo 1", src: "/1763776991900.jpg" },
      {
        type: "video",
        label: "Gameplay Demo",
        src: "/emulator_vid.mp4",
        poster: "/1763776991900.jpg",
      },
      { type: "image", label: "Emulator Photo 2", src: "/1763776963017.jpg" },
      {
        type: "image",
        label: "Emulator Build",
        src: "/EmulatorRaspberryPi-removebg-preview.png",
      },
    ],
  },
  {
    slug: "heart-pcb",
    title: "Heart PCB",
    category: "hardware",
    sortOrder: 202509,
    mediaStyle: "standard",
    period: "October 2025 – December 2025",
    shortDescription:
      "A custom PCB designed in Altium, ordered through PCBWay, repaired through precise rework, and programmed via ATtiny85 using an Arduino UNO as ISP.",
    fullDescription: [
      "I designed this board in Altium Designer and had it manufactured through PCBWay, then performed careful post-manufacturing rework when some LED diode placements needed correction.",
      "To program U1 (ATtiny85-20SU), I converted an Arduino UNO into an ISP programmer and soldered temporary jumper wires to the correct pads for flashing.",
      "After successful programming, I removed the temporary wires with care to avoid bridging, then validated USB-powered operation and the heartbeat-style LED animation.",
    ],
    bullets: [
      "Programmed U1 (ATtiny85-20SU) using an Arduino UNO converted into an ISP programmer.",
      "Temporarily soldered jumper wires to the required pads to flash firmware, then removed them carefully to avoid bridging.",
      "Enabled micro USB power and programmed LED behavior to create a beating-heart border animation.",
    ],
    skills: ["Altium Designer", "PCB Design", "Soldering", "Microcontroller"],
    links: [
      {
        label: "Heart PCB Link",
        url: "https://docs.google.com/document/d/1Ax5auCjvafiQIizRYwfxvnMmLHJK5YUPhNFRELVosqI/edit?usp=sharing",
      },
    ],
    imageLabel: "Heart PCB",
    media: [
      { type: "image", label: "Heart PCB Back", src: "/HeartPCB2.png" },
      { type: "image", label: "Heart PCB Front", src: "/HeartPCB.png" },
    ],
  },
  {
    slug: "programming-adapter-rev-2",
    title: "Programming Adapter Rev. 2",
    category: "hardware",
    sortOrder: 202610,
    mediaStyle: "standard",
    period: "In Progress",
    shortDescription:
      "An in-progress adapter board designed for WARG to centralize embedded programming/validation connectivity with configurable output voltage support.",
    fullDescription: [
      "This board is being developed to eliminate custom harnesses during embedded flight systems validation on WARG by consolidating key connectors into one programmable interface.",
      "The design includes configurable output behavior with a PD IC (3.3V output and 5V switchability), plus STLINK-V3MODS support for straightforward USB programming.",
      "I am currently iterating schematic and layout decisions around the STM32L433 integration to make the board robust and practical for repeated validation cycles.",
    ],
    bullets: [
      "Designing for STLINK-V3MODS USB programming support.",
      "Integrating STM32L433 as the 32-bit microcontroller.",
      "Actively iterating schematic and PCB layout for validation-ready embedded workflows.",
    ],
    skills: ["Embedded Systems", "Schematic Design", "PCB Layout", "STM32", "Power Delivery"],
    links: [],
    imageLabel: "Programming Adapter Rev. 2",
    media: [
      { type: "image", label: "Current Layout", src: "/CurrentLayout.png" },
      { type: "image", label: "Current Layout 3D", src: "/CurrentLayout3D.png" },
      {
        type: "image",
        label: "Power Management",
        src: "/PowerManagement.png",
      },
      { type: "image", label: "Programming Logic", src: "/ProgLogic.png" },
    ],
  },
  {
    slug: "basic-ldo-board",
    title: "Low-Dropout Regulator (LDO)",
    category: "hardware",
    sortOrder: 202501,
    mediaStyle: "standard",
    period: "September 2026",
    shortDescription:
      "A foundational power design board built in Altium to convert JST 5V input down to stable 3.3V using an LDO regulator, including component tradeoff analysis, schematic capture, and iterative layout improvements guided by team feedback.",
    fullDescription: [
      "As part of onboarding for WARG, I was tasked with building this board from scratch in Altium despite being new to the tool.",
      "I handled component research and selection, schematic capture, and board-level implementation with iterative review feedback from team leads and peers.",
      "This project accelerated my understanding of PCB fundamentals, practical design tradeoffs, and collaborative hardware review workflows.",
    ],
    bullets: [
      "Performed component research and selection for the regulator design.",
      "Learned Altium Designer from scratch and applied feedback from team leads and peers.",
      "Used the challenge to build fundamentals in PCB and electronics design.",
    ],
    skills: ["LDO Design", "Altium Designer", "Component Selection", "Power Electronics"],
    links: [],
    imageLabel: "LDO Board",
    media: [
      { type: "image", label: "LDO Board", src: "/LDO.png" },
      { type: "image", label: "LDO Board Alt", src: "/LDO2.png" },
      { type: "image", label: "LDO Schematic", src: "/LDO_Schematic.png" },
    ],
  },
  {
    slug: "6ix-streets",
    title: "6IX STREETS",
    category: "software",
    sortOrder: 202603,
    mediaStyle: "wide",
    period: "March 2026",
    shortDescription:
      "A real-time urban traffic optimization engine using a Decision Transformer and an offline reinforcement learning backend to proactively route flow across a 36-node city grid.",
    fullDescription: [
      "Built for GenAI Genesis 2026, this project frames traffic management as a sequence modeling task instead of traditional timer-based control.",
      "The system uses returns-to-go logic and offline reinforcement learning signals to make forward-looking optimization decisions based on density, queues, and wait times.",
      "A real-time dashboard makes routing behavior transparent and visually debuggable through live intersection and network-state views.",
    ],
    bullets: [
      "Implemented a Decision Transformer in PyTorch utilizing returns-to-go logic to learn optimization strategies.",
      "Engineered an offline reinforcement learning backend to analyze queue lengths, wait times, and capacities, achieving a 22.3% improvement from baseline.",
      "Generated an expert trajectory dataset of 360,000 data points via a custom mathematical heuristic/reward system.",
      "Developed a React and Tailwind CSS dashboard with a live intersection viewer for real-time grid density and routing decisions.",
    ],
    skills: ["Python", "System Architecture", "PyTorch", "React", "Tailwind CSS"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/6ix-streets" },
    ],
    imageLabel: "6IX STREETS",
    media: [
      { type: "image", label: "6IX STREETS", src: "/A.png" },
      {
        type: "image",
        label: "6IX STREETS Screenshot 2",
        src: "/sixstreets-screenshot-2.png",
      },
    ],
  },
  {
    slug: "specterbot",
    title: "SpecterBot",
    category: "software",
    sortOrder: 202602,
    mediaStyle: "wide",
    period: "March 2026",
    shortDescription:
      "A legal research assistant with hybrid retrieval, citation validation, and a streaming interface for trustworthy Canadian Federal statute exploration.",
    fullDescription: [
      "Built for Hack Canada, SpecterBot combines vector retrieval and full-text search to surface highly relevant legal passages quickly.",
      "Every citation is validated against source windows before presentation, reducing hallucination risk and strengthening trust in responses.",
      "The product includes ETL ingestion of Justice Canada XML data into PostgreSQL plus an interactive front-end with graph and voice elements.",
    ],
    bullets: [
      "Built hybrid search combining vector embeddings and full-text search for high-precision legal retrieval.",
      "Implemented hallucination protection by validating every cited statute against the source window before display.",
      "Created an ETL pipeline ingesting Justice Canada's XML corpus into structured PostgreSQL.",
      "Shipped a streaming UI with legal graph visualization and ElevenLabs voice integration.",
    ],
    skills: ["Python", "System Architecture", "PostgreSQL", "ETL", "Vector Search"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/statutelens" },
    ],
    imageLabel: "SpecterBot",
    media: [
      { type: "image", label: "SpecterBot", src: "/SpecterBot.png" },
      { type: "image", label: "SpecterBot Web", src: "/specterbotweb.png" },
    ],
  },
];

export const hardwareProjects = projects.filter(
  (project) => project.category === "hardware",
).sort((a, b) => b.sortOrder - a.sortOrder);

export const softwareProjects = projects.filter(
  (project) => project.category === "software",
).sort((a, b) => b.sortOrder - a.sortOrder);

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
