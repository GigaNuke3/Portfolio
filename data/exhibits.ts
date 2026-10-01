export type Exhibit = {
  no: string;
  title: string;
  after: string;
  meaning: string;
  plaque: string;
  medium: string;
  target: string;
  targetLabel: string;
};

// The four gallery paintings are the index of the work — each reinterpretation maps to something real.
export const exhibits = {
  deepseek: {
    no: "02",
    title: "The Whale in the Studio",
    after: "after the Renaissance studio portrait",
    meaning: "An idea, being painted into a product.",
    plaque:
      "Axie Flash's cloud AI tier calls DeepSeek to paint flashcards from your own notes, images, and documents.",
    medium: "Kotlin · Jetpack Compose · Laravel · DeepSeek API",
    target: "#artifact-axie-flash",
    targetLabel: "Go to Artifact 01 — Axie Flash",
  },
  chatgpt: {
    no: "03",
    title: "The Great Wave",
    after: "after Hokusai",
    meaning: "A wave of documents, answered.",
    plaque:
      "Retrieval-Augmented Generation: assistants that read your own documents and answer questions from them — chunking, embeddings, vector search.",
    medium: "Python · LangChain · Chroma · Embeddings",
    target: "#services",
    targetLabel: "Commission a document assistant",
  },
  grok: {
    no: "04",
    title: "The Persistence of Memory",
    after: "after Salvador Dalí",
    meaning: "Memory that doesn't melt away.",
    plaque:
      "Callama remembers. Its subject-based memory keeps each conversation's context — retrieved by embeddings, on your own machine, with local models.",
    medium: "Electron · Ollama · SQLite · Embeddings",
    target: "#artifact-callama",
    targetLabel: "Go to Artifact 02 — Callama",
  },
  gemini: {
    no: "05",
    title: "The Starry Night",
    after: "after Vincent van Gogh",
    meaning: "A sky full of models.",
    plaque:
      "The AI engineering practice: embeddings, vector search, prompt engineering, local models through Ollama, and the Google Gemini API.",
    medium: "LLMs · Embeddings · Ollama · Gemini API",
    target: "#skills",
    targetLabel: "Enter the Technical Collection",
  },
} satisfies Record<string, Exhibit>;

export type ExhibitId = keyof typeof exhibits;
