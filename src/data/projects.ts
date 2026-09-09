export type ProjectCategory = "hardware";

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
    slug: "programming-adapter-rev-2",
    title: "Programming Adapter Rev. 2",
    category: "hardware",
    sortOrder: 202610,
    mediaStyle: "standard",
    period: "January 2026 – August 2026",
    shortDescription:
      "An adapter board designed for WARG to centralize embedded programming and validation connectivity with configurable output voltage support.",
    fullDescription: [
      "This board was developed to eliminate custom harnesses during embedded flight systems validation on WARG by consolidating key connectors into one programmable interface.",
      "The design includes configurable output behavior with a PD IC (3.3V output and 5V switchability), plus STLINK-V3MODS support for straightforward USB programming.",
      "I iterated on schematic and layout decisions around the STM32L433 integration to make the board robust and practical for repeated validation cycles.",
    ],
    bullets: [
      "Designed for STLINK-V3MODS USB programming support.",
      "Integrated STM32L433 as the 32-bit microcontroller.",
      "Iterated schematic and PCB layout for validation-ready embedded workflows.",
    ],
    skills: ["Embedded Systems", "Schematic Design", "PCB Layout", "STM32", "Power Delivery"],
    links: [],
    imageLabel: "Programming Adapter Rev. 2",
    media: [
      { type: "image", label: "PCB Layout", src: "/ProgAdapterLayout.png" },
      { type: "image", label: "3D Render", src: "/ProgAdapter3D.png" },
      { type: "image", label: "Overview Schematic", src: "/ProgAdapterOverviewSchematic.png" },
      { type: "image", label: "Power Management Schematic", src: "/ProgAdapterPowerSchematic.png" },
      { type: "image", label: "Programming Logic Schematic", src: "/ProgAdapterLogicSchematic.png" },
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
];

export const hardwareProjects = projects.filter(
  (project) => project.category === "hardware",
).sort((a, b) => b.sortOrder - a.sortOrder);

export const projectsBySlug = Object.fromEntries(
  projects.map((project) => [project.slug, project]),
);
