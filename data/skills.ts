export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI Engineering",
    items: [
      "Python",
      "RAG (Retrieval-Augmented Generation)",
      "LangChain",
      "LCEL Chains",
      "Embeddings",
      "Vector Search (Chroma)",
      "Cosine Similarity",
      "Prompt Engineering",
      "Ollama (Local LLMs)",
      "Google Gemini API",
      "Document Chunking & PDF Processing",
      "Embedding Model Selection (MTEB)",
    ],
  },
  {
    category: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "Laravel",
      "REST API",
      "Tailwind CSS",
      "DaisyUI",
      "Responsive Design",
    ],
  },
  {
    category: "Desktop Development",
    items: ["Electron.js", "IPC", "Windows Installer Packaging (electron-builder)", "Offline-first Apps"],
  },
  {
    category: "Database",
    items: ["MySQL", "SQLite"],
  },
  {
    category: "Integrations & Automation",
    items: [
      "PHPMailer (Email)",
      "SMS Integration",
      "Automated Fines/Notifications",
      "Excel Report Export",
      "Document & Report Workflows",
    ],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "VS Code", "Linux (Fedora)", "Hostinger", "Windows & Linux Environments", "Technical Documentation"],
  },
  {
    category: "Virtual Assistance",
    items: ["Inbox Management", "Scheduling", "Data Entry", "Research", "Document Formatting"],
  },
];
