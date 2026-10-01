export type Link = { label: string; href: string };

export type Specimen = {
  name: string;
  what: string;
  how?: string;
  usedIn?: Link[];
};

export type SkillCategory = {
  code: string;
  category: string;
  items: Specimen[];
};

const CALLAMA: Link = { label: "Callama", href: "#artifact-callama" };
const AXIE: Link = { label: "Axie Flash", href: "#artifact-axie-flash" };
const ELIB: Link = { label: "E-LIB", href: "#artifact-e-lib" };

export const skillCategories: SkillCategory[] = [
  {
    code: "AI",
    category: "AI Engineering",
    items: [
      { name: "Python", what: "General-purpose programming language", how: "Builds RAG pipelines and AI tooling" },
      {
        name: "RAG (Retrieval-Augmented Generation)",
        what: "LLM answers grounded in your own documents",
        how: "Built full RAG systems from first principles through Chroma and Ollama",
        usedIn: [CALLAMA],
      },
      { name: "LangChain", what: "Framework for composing LLM pipelines", how: "Chains and retrieval in RAG pipelines", usedIn: [CALLAMA] },
      { name: "LCEL Chains", what: "LangChain Expression Language for composing chains" },
      {
        name: "Embeddings",
        what: "Vector representations of text for semantic search",
        how: "nomic-embed-text embeddings power Callama's memory retrieval",
        usedIn: [CALLAMA],
      },
      { name: "Vector Search (Chroma)", what: "Vector database for similarity search", how: "The retrieval store in RAG pipelines" },
      {
        name: "Cosine Similarity",
        what: "Similarity measure between embedding vectors",
        how: "Scores memory retrieval across chat topics",
        usedIn: [CALLAMA],
      },
      { name: "Prompt Engineering", what: "Designing instructions that steer model output" },
      {
        name: "Ollama (Local LLMs)",
        what: "Local LLM runtime",
        how: "Runs Callama's models fully offline — installed automatically by its Windows installer",
        usedIn: [CALLAMA],
      },
      { name: "Google Gemini API", what: "Google's hosted LLM API" },
      { name: "Document Chunking & PDF Processing", what: "Splitting documents into retrievable passages", how: "Prepares documents for RAG retrieval" },
      { name: "Embedding Model Selection (MTEB)", what: "Choosing embedding models with the MTEB benchmark" },
    ],
  },
  {
    code: "WEB",
    category: "Web",
    items: [
      { name: "HTML5", what: "The structure of the web" },
      { name: "CSS3", what: "The presentation of the web" },
      { name: "JavaScript", what: "The language of the browser" },
      { name: "PHP", what: "Server-side scripting language", how: "E-LIB is built in native PHP and MySQL", usedIn: [ELIB] },
      { name: "Laravel", what: "PHP web framework", how: "Axie Flash's backend — auth, sync, and billing", usedIn: [AXIE] },
      { name: "REST API", what: "HTTP interface design between client and server" },
      {
        name: "Tailwind CSS",
        what: "Utility-first CSS framework",
        how: "This exhibition is built with it",
        usedIn: [{ label: "This portfolio", href: "#home" }],
      },
      { name: "DaisyUI", what: "Component library for Tailwind CSS" },
      { name: "Responsive Design", what: "Layouts that adapt to every screen" },
    ],
  },
  {
    code: "DSK",
    category: "Desktop",
    items: [
      { name: "Electron.js", what: "Desktop applications built with web technologies", how: "Callama's desktop shell", usedIn: [CALLAMA] },
      { name: "IPC", what: "Inter-process communication between Electron's main and renderer processes" },
      {
        name: "Windows Installer Packaging (electron-builder)",
        what: "Packaging desktop apps into installers",
        how: "Shipped Callama as a Windows (NSIS) installer",
        usedIn: [CALLAMA],
      },
      {
        name: "Offline-first Apps",
        what: "Software that works without a network",
        how: "Callama runs fully offline; Axie Flash's free tier plays with zero network",
        usedIn: [CALLAMA, AXIE],
      },
    ],
  },
  {
    code: "DB",
    category: "Database",
    items: [
      { name: "MySQL", what: "Relational database", how: "E-LIB's database, and Axie Flash's backend", usedIn: [ELIB, AXIE] },
      { name: "SQLite", what: "Embedded single-file database", how: "Local storage inside Callama and Axie Flash", usedIn: [CALLAMA, AXIE] },
    ],
  },
  {
    code: "SYS",
    category: "Systems & Automation",
    items: [
      { name: "PHPMailer (Email)", what: "PHP email library", how: "E-LIB's email notifications", usedIn: [ELIB] },
      { name: "SMS Integration", what: "Sending text messages from an application", how: "E-LIB's SMS notifications", usedIn: [ELIB] },
      { name: "Automated Fines/Notifications", what: "Scheduled business rules that run themselves", how: "E-LIB computes fines and notifies borrowers", usedIn: [ELIB] },
      { name: "Excel Report Export", what: "Generating spreadsheet reports from data", how: "E-LIB's automated Excel reporting", usedIn: [ELIB] },
      { name: "Document & Report Workflows", what: "Automating recurring documents and reports" },
    ],
  },
  {
    code: "TLS",
    category: "Tools & Deployment",
    items: [
      { name: "Git", what: "Version control" },
      { name: "GitHub", what: "Hosting and collaboration for Git repositories", usedIn: [{ label: "github.com/GigaNuke3", href: "https://github.com/GigaNuke3" }] },
      { name: "VS Code", what: "Code editor" },
      { name: "Linux (Fedora)", what: "Linux distribution", how: "Daily driver and system administration" },
      { name: "Hostinger", what: "Web hosting provider", how: "Hosts E-LIB in production", usedIn: [ELIB] },
      { name: "Windows & Linux Environments", what: "Working across both operating systems" },
      {
        name: "Technical Documentation",
        what: "Writing that makes systems usable",
        how: "Authored E-LIB's complete end-user documentation",
        usedIn: [ELIB],
      },
    ],
  },
  {
    code: "VA",
    category: "Virtual Assistance",
    items: [
      { name: "Inbox Management", what: "Keeping email triaged and answered" },
      { name: "Scheduling", what: "Calendars, meetings, and deadlines" },
      { name: "Data Entry", what: "Accurate structured data capture" },
      { name: "Research", what: "Finding and summarizing information" },
      { name: "Document Formatting", what: "Clean, consistent documents" },
    ],
  },
];
