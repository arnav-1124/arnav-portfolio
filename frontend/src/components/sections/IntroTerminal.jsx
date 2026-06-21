import { useEffect, useMemo, useState } from "react";

const terminalLines = [
  {
    command: "whoami",
    response:
      "Arnav Gupta — CA student, articleship trainee, and full-stack developer.",
  },
  {
    command: "current_focus",
    response:
      "Building finance-focused tools, document utilities, and MERN projects.",
  },
  {
    command: "proof",
    response:
      "Resume, certificates, academic milestones, projects, and build notes.",
  },
  {
    command: "stack",
    response:
      "JavaScript, React, Node.js, Express, Supabase, Cloudinary, MongoDB.",
  },
];

function IntroTerminal() {
  const commands = useMemo(() => terminalLines, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const currentCommand = commands[activeIndex].command;
    let characterIndex = 0;

    setTypedCommand("");
    setShowResponse(false);

    const typingInterval = setInterval(() => {
      setTypedCommand(currentCommand.slice(0, characterIndex + 1));
      characterIndex += 1;

      if (characterIndex === currentCommand.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setShowResponse(true);
        }, 350);

        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % commands.length);
        }, 3300);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [activeIndex, commands]);

  return (
    <div className="intro-terminal" aria-label="Interactive portfolio terminal">
      <div className="intro-terminal__topbar">
        <div className="intro-terminal__dots">
          <span />
          <span />
          <span />
        </div>
        <p>arnav@portfolio: ~/profile</p>
      </div>

      <div className="intro-terminal__body">
        <div className="terminal-line terminal-line--muted">
          <span>$</span> init portfolio-proof-system
        </div>

        <div className="terminal-line">
          <span>$</span> {typedCommand}
          <i className="terminal-cursor" />
        </div>

        <div
          className={`terminal-response ${showResponse ? "is-visible" : ""}`}
        >
          {showResponse && commands[activeIndex].response}
        </div>

        <div className="terminal-grid">
          <div>
            <span>Status</span>
            <strong>Building</strong>
          </div>
          <div>
            <span>Domain</span>
            <strong>Accounting × Dev</strong>
          </div>
          <div>
            <span>Mode</span>
            <strong>Proof-first</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroTerminal;
