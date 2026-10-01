export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Short description of what this project does and the problem it solves.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/your-handle/project-one",
  },
  {
    title: "Project Two",
    description: "Short description of what this project does and the problem it solves.",
    stack: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/your-handle/project-two",
  },
  {
    title: "Project Three",
    description: "Short description of what this project does and the problem it solves.",
    stack: ["Python", "FastAPI"],
    link: "https://github.com/your-handle/project-three",
  },
];
