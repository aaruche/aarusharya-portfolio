export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  status?: string;
  highlights: string[];
  technologies: string[];
};

export type Project = {
  name: string;
  period: string;
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
  technologies: string[];
  repositoryUrl?: string;
  featured?: boolean;
  links?: { label: string; href: string }[];
  media?: {
    label: string;
    src: string;
    alt: string;
    caption: string;
  };
};

export const experiences: Experience[] = [
  {
    company: "Apitronix Semiconductor Ltd.",
    role: "Microelectronics Engineer Intern",
    location: "York, UK",
    period: "Jun 2026 - Aug 2026",
    highlights: [
      "Contributed to pre-silicon development of a safety-critical dual-core RISC-V processor based on RV32I and Hazard3.",
      "Brought up the Hazard3 soft-core SoC on a Lattice ECP5 FPGA, integrated CTIO peripherals, and established JTAG program-and-debug through OpenOCD and GDB.",
      "Built a discrete single-slope ADC and wrote bare-metal Embedded C firmware to capture timing and linearise its response with calibrated lookup tables.",
      "Designed a two-channel CANPico physical-layer daughterboard in KiCad using dual TCAN6062V-Q1 transceivers.",
      "Engineered a custom four-layer adapter PCB in KiCad for the AtomHive CoB, integrating a high-density 70-pin mezzanine connector, an Arm-compliant JTAG interface, and custom clock generation for hardware prototyping.",
    ],
    technologies: ["RISC-V", "Hazard3", "Lattice ECP5", "Embedded C", "OpenOCD", "GDB", "KiCad"],
  },
  {
    company: "National Manufacturing Institute Scotland",
    role: "Software Intern",
    location: "Glasgow, UK",
    period: "Jun 2024 - Sep 2024",
    highlights: [
      "Developed a custom Behaviour Tree GUI in Python and PyQt to simplify collaborative-robot task management in manufacturing environments.",
      "Engineered synchronous and asynchronous execution logic for concurrent tasks and added scalable SVG visual support.",
      "Worked across software, hardware, and robotics teams using Git-based code review and real-world system feedback.",
    ],
    technologies: ["Python", "PyQt", "Behaviour Trees", "Async systems", "SVG", "Git"],
  },
  {
    company: "Forcepoint Ltd.",
    role: "IT Software Intern",
    location: "India",
    period: "Jun 2023 - Aug 2023",
    highlights: [
      "Developed proficiency in Go and MySQL while managing application data and maintaining database integrity.",
      "Used GORM object-relational mapping to build a fully functional banking application.",
      "Contributed within a dynamic product team and gained direct exposure to the cybersecurity industry.",
      "Built a command-line interface with GORM for clear and efficient database operations.",
    ],
    technologies: ["Go", "MySQL", "GORM", "CLI", "Cybersecurity"],
  },
];

export const projects: Project[] = [
  {
    name: "NLOS SDR Bare-Metal Transceiver",
    period: "Feb 2026 - May 2026",
    tagline: "Recovering signal where line-of-sight ends.",
    description:
      "A bare-metal communication stack for the Altera DE1-SoC, combining the Cyclone V FPGA and dual-core Arm Cortex-A9 HPS with custom FIR and FFT processing chains.",
    metrics: [
      { value: "9.3x", label: "DSP speedup" },
      { value: "72 ms", label: "NEON runtime" },
      { value: "8,192", label: "I/Q samples" },
    ],
    technologies: ["Embedded C", "NEON SIMD", "FFT", "FIR", "Cyclone V", "Arm Cortex-A9"],
    repositoryUrl: "https://github.com/aaruche/A9-NEON-DSP-Benchmarking",
  },
  {
    name: "Hardware-Accelerated Risk Filter",
    period: "Feb 2026 - Apr 2026",
    tagline: "Deterministic protection before a trade leaves the wire.",
    description:
      "An ultra-low-latency pre-trade engine on the Cyclone V FPGA that intercepts fat-finger errors and compliance breaches through a custom stateful Verilog datapath.",
    metrics: [
      { value: "20 ns", label: "Validation latency" },
      { value: "10", label: "Parallel rules" },
      { value: "1 clk", label: "Deterministic path" },
    ],
    technologies: ["Verilog", "FPGA", "Cyclone V", "Risk controls", "Low latency"],
    repositoryUrl: "https://github.com/aaruche/Pre-Trade-Risk-Filter",
  },
  {
    name: "Custom Processor + VGA System",
    period: "Jan 2025 - Apr 2025",
    tagline: "A processor, memory, and display pipeline built from logic.",
    description:
      "A three-phase custom processor implementation on FPGA, including a frame buffer, dual-port video memory, precise VGA timing, raster scanning, and an IR subsystem.",
    metrics: [
      { value: "3", label: "Build phases" },
      { value: "VGA", label: "Custom display" },
      { value: "RTL", label: "System design" },
    ],
    technologies: ["Verilog", "FPGA", "VGA", "Dual-port RAM", "IR", "Digital design"],
  },
  {
    name: "Smart Table Tennis Training System",
    period: "May 2026 - Aug 2026",
    tagline: "A racket that classifies each stroke on-device.",
    description:
      "An untethered smart racket sampling a six-axis BMI270 IMU at 100 Hz. Peak-centred one-second windows become 78 spectral features for a five-class INT8 neural network running on an Arm Cortex-M4F, evaluated on a separately recorded and physically remounted test session.",
    metrics: [
      { value: "90.91%", label: "Held-out accuracy" },
      { value: "22 ms", label: "DSP + inference" },
      { value: "99.07%", label: "BLE packet delivery" },
    ],
    technologies: [
      "TinyML",
      "INT8",
      "BMI270",
      "Cortex-M4F",
      "Bluetooth LE",
      "Edge Impulse",
      "Embedded C",
    ],
    repositoryUrl: "https://github.com/aaruche/smart-table-tennis-racket",
    featured: true,
    links: [
      {
        label: "Read MSc dissertation",
        href: "/smart-table-tennis-dissertation.pdf",
      },
    ],
    media: {
      label: "View racket architecture",
      src: "/table-tennis-racket-internals.jpeg",
      alt: "Internal electronics of the smart table tennis racket, including the microcontroller, battery, charger, and boost converter",
      caption:
        "Racket internals: Arduino Nano 33 BLE Sense Rev2, 400 mAh LiPo, TP4056 charger, and 5 V boost hardware inside the printed handle.",
    },
  },
];

export const stackGroups = [
  {
    title: "CORE LANGUAGES",
    code: "0x01",
    items: ["C", "C++", "Python", "Verilog", "Go", "Java", "SQL", "Bash"],
  },
  {
    title: "SILICON + SYSTEMS",
    code: "0x02",
    items: ["FPGA", "VLSI", "RISC-V RV32I", "Arm Cortex", "Cyclone V", "Lattice ECP5", "CAN", "DSP", "RTOS"],
  },
  {
    title: "TOOLS + PLATFORMS",
    code: "0x03",
    items: ["Quartus Prime", "MATLAB", "KiCad", "LTspice", "GDB", "OpenOCD", "STM32CubeIDE", "Git"],
  },
  {
    title: "SOFTWARE STACK",
    code: "0x04",
    items: ["PyQt", "MySQL", "Neo4j", "Cypher", "Haskell", "VS Code", "GitHub", "SVG"],
  },
];

export const education = [
  {
    school: "University of Leeds",
    qualification: "MSc (Eng) Embedded Systems Engineering",
    period: "Sep 2025 - Present",
    details:
      "Dissertation built an untethered smart table tennis racket that runs a five-class INT8 TinyML pipeline on a Cortex-M4F, reaching 90.91% accuracy on an independently recorded test session.",
  },
  {
    school: "University of Edinburgh",
    qualification: "B(Hons) Electronics & Computer Science",
    period: "Sep 2021 - Jul 2025",
    details:
      "Dissertation compared recursive queries across MySQL and Neo4j, supported by a custom recursive-descent parser in Python.",
  },
];
