export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
};

export type FeaturedProject = {
  index: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  tools: string[];
  techStack: string[];
  images: string[];
  link: string;
};

export const featuredProject: FeaturedProject = {
  index: "01",
  badge: "Frontier Mobile Application",
  category: "Mobile Application · AI Flashcards",
  title: "Axie Flash",
  description:
    "An Instagram-Stories-style swipe/timer flashcard game with AI-generated cards — offline-first free play, plus a cloud-AI premium tier for generating cards from your own notes.",
  highlights: [
    "Swipe/timer Stories-style flashcard gameplay backed by a card economy and daily budget.",
    "OCR scanning (ML Kit) turns photos of notes into flashcards, fully on-device.",
    "Cloud AI tier generates cards from text, images, or documents via DeepSeek.",
    "Offline-first free tier with a local question bank — works with zero network.",
    "Google Sign-In with anonymous-first auth and server-verified purchases.",
    "PDF / PPT / Word document parsing to generate cards from existing study materials.",
  ],
  tools: ["OkHttp", "ML Kit OCR", "Credentials API", "org.json", "Laravel Sanctum"],
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
    description: "Desktop/local AI application built around Ollama.",
    stack: ["Electron", "Ollama", "Local LLMs"],
    image: "/images/projects/callama.jpg",
    link: "#",
  },
  {
    title: "Library Management Information System",
    description: "A library management system with appointment functionality.",
    stack: ["PHP", "MySQL"],
    image: "/images/projects/lmis.jpg",
    link: "#",
  },
];
