export type Project = {
  title: string;
  kind: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
};

export type FeaturedProject = {
  index: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  images: string[];
  link: string;
};

export const featuredProject: FeaturedProject = {
  index: "01",
  category: "Mobile Application · AI",
  title: "Axie Flash",
  description:
    "An Instagram-Stories-style swipe/timer flashcard game with AI-generated cards.",
  highlights: [
    "AI-generated flashcards",
    "Offline-first free play",
    "Cloud AI premium tier",
    "OCR scanning",
    "Document parsing",
    "Local question bank",
  ],
  techStack: ["Kotlin", "Jetpack Compose", "Material 3", "Laravel", "MySQL", "DeepSeek API"],
  images: [
    "/images/projects/axie-flash/01-home.jpg",
    "/images/projects/axie-flash/02-create.jpg",
    "/images/projects/axie-flash/03-library.jpg",
    "/images/projects/axie-flash/04-profile.jpg",
    "/images/projects/axie-flash/05-gameplay.jpg",
  ],
  link: "#",
};

export const projects: Project[] = [
  {
    title: "Callama",
    kind: "Offline AI Desktop Application",
    description: "Offline/local AI desktop application built around Ollama.",
    stack: ["Electron", "Ollama", "Local LLMs"],
    image: "/images/projects/callama.jpg",
    link: "#",
  },
  {
    title: "E-LIB",
    kind: "Library Management Information System",
    description: "A library management system with appointment functionality.",
    stack: ["PHP", "MySQL"],
    image: "/images/projects/lmis.jpg",
    link: "https://e-librari.online",
  },
];
