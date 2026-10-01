import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="reveal border-b-4 border-ink px-6 py-24 sm:px-12 sm:py-32"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 sm:flex-row sm:items-start">
        <Image
          src="/images/profile-ai-engineer.jpg"
          alt="Portrait of Eco"
          width={280}
          height={280}
          className="h-56 w-56 flex-shrink-0 border-4 border-ink object-cover brutal-shadow sm:h-70 sm:w-70"
        />
        <div className="space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-relaxed">
            I help small agencies and businesses stop doing reports and repetitive work by hand. I build AI tools that do it for them.
          </p>
          <p className="text-lg leading-relaxed">
            I&apos;m a Freelance AI Engineer &amp; Virtual Assistant focused on AI automation. My core skill set includes RAG (document Q&amp;A), report automation, and web development. I can build AI assistants that answer questions from your own documents, automate weekly or monthly client reports, set up AI workflows for research and content drafting, and handle everyday VA tasks like inbox management, scheduling, and data entry.
          </p>
          <p className="text-lg leading-relaxed">
            For development, I work with technologies such as Python, LangChain, Ollama, Laravel, PHP, JavaScript, MySQL, REST APIs, Electron, Git, and Linux.
          </p>
          <p className="text-lg leading-relaxed">
            Recent projects include E-LIB, a live library management system with automated fines, SMS and email notifications, and Excel reporting, and Callama, an offline desktop AI assistant with subject-based memory that runs local models, so private data never leaves the machine.
          </p>
          <p className="text-lg leading-relaxed">
            I focus on practical solutions that are reliable, easy to use, and aligned with the needs of the business.
          </p>
          <p className="text-lg leading-relaxed">
            If your team is losing hours to work like this, message me. Tell me what eats your week, and I&apos;ll tell you honestly whether AI can fix it.
          </p>
        </div>
      </div>
    </section>
  );
}
