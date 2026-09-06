import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahmet Emre Kurt — Computer Engineer",
  description:
    "Portfolio of Ahmet Emre Kurt, a computer engineering student building maintainable digital products and exploring system design.",
};

const projects = [
  {
    number: "01",
    name: "Typovia",
    type: "Product / Web",
    description:
      "An online PDF editor built as a focused, browser-first product experience.",
    stack: "Next.js · TypeScript · Tailwind",
    href: "https://www.typovia.com/",
  },
  {
    number: "02",
    name: "EasyOrder",
    type: "School Project / Web",
    description:
      "A digital ordering experience designed and developed as a collaborative school project. ",
    stack: "Next.js · TypeScript · DaisyUI · Figma",
    href: "https://easyorder.com.tr/",
  },
  {
    number: "03",
    name: "PPE Detector",
    type: "School Project / System",
    description:
      "A smart PPE detector turnstile for the dangerous working sites.",
    stack: "Express.js · JavaScript · PostgreSQL",
    href: "https://smart-ppe-website.vercel.app/",
  },
  {
    number: "04",
    name: "Comparegram",
    type: "Product / Web",
    description:
      "A compact comparison tool for Instagram account followers and followings.",
    stack: "React · Vite · Tailwind · Vercel",
    href: "https://compare-gram.com",
  },
];

const languages = [
  "C",
  "C++",
  "Java",
  "Python",
  "Go",
  "JavaScript",
  "TypeScript",
  "SQL",
];

const tools = [
  "React",
  "Next.js",
  "Vite",
  "Tailwind",
  "React Native",
  "Expo",
  "Express.js",
  "Spring Boot",
  "PyTorch",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Figma",
  "Git",
  "Jira",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ahmet Emre Kurt, back to top">
          AEK<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#writing">Writing</a>
        </nav>
        <a className="header-contact" href="mailto:akurtt2534@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span>Computer Engineer</span>
          <span>Istanbul, Türkiye</span>
        </div>
        <h1 id="hero-title">
          Ahmet
          <br />
          Emre <span>Kurt</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-statement">
            I just love
            <strong> application development</strong> and
            <strong> computer engineering</strong>. Here is a brief introduction about me.
          </p>
          <a className="scroll-cue" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-index">01 / 05</div>
        <div className="section-content">
          <div className="section-heading-row">
            <h2 id="work-title">Selected work</h2>
            <p>Building to learn.<br />Learning to build better.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <span>{project.stack}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="research-band" aria-labelledby="research-title">
        <div className="research-label">Current research</div>
        <div className="research-body">
          <p className="research-org">TÜBİTAK 2209-A</p>
          <h2 id="research-title">
            Energy savings in large language models via Small Logic Module
            (TRM) integration.
          </h2>
          <p className="research-stack">Python · PyTorch · NLP · NumPy · Pandas</p>
        </div>
        <div className="research-mark" aria-hidden="true"></div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-index">02 / 05</div>
        <div className="section-content about-grid">
          <div className="about-intro">
            <p className="eyebrow">About</p>
            <h2 id="about-title">
              Curious by nature.<br />Practical by choice.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a computer engineering student who learns best by making
              things real. I care about the small decisions that turn code into
              a product people can understand, use, and maintain.
            </p>
            <p>
              Right now, my focus is application development, system design,
              and research into more efficient AI systems.
            </p>
            <div className="about-actions">
              <a href="https://www.linkedin.com/in/ahmet-emre-kurt-3a63a3247/" target="_blank" rel="noreferrer">
                Linkedin <Arrow />
              </a>
              <a href="https://github.com/WauF" target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="education" aria-labelledby="education-title">
        <div className="education-title-wrap">
          <span className="section-index">03 / 05</span>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="education-item">
          <div>
            <span className="eyebrow">2022 — Present</span>
            <h3>Gebze Technical University</h3>
          </div>
          <div>
            <p>B.Eng. Computer Engineering</p>
            <p>Kocaeli, Türkiye · GPA 3.21 / 4.00</p>
          </div>
        </div>
        <div className="education-item">
          <div>
            <span className="eyebrow">2017 — 2021</span>
            <h3>Çağrıbey Anatolian High School</h3>
          </div>
          <div>
            <p>Istanbul, Türkiye</p>
          </div>
        </div>
      </section>

      <section className="toolbox" aria-labelledby="toolbox-title">
        <div className="toolbox-head">
          <span className="section-index">04 / 05</span>
          <h2 id="toolbox-title">Toolbox</h2>
        </div>
        <div className="skill-column">
          <p className="eyebrow">Languages</p>
          <div className="skill-cloud">
            {languages.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="skill-column">
          <p className="eyebrow">Tools &amp; frameworks</p>
          <div className="skill-cloud secondary">
            {tools.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="writing" id="writing" aria-labelledby="writing-title">
        <div className="writing-copy">
          <span className="section-index">05 / 05</span>
          <p className="eyebrow">Notes on building</p>
          <h2 id="writing-title">Writing,<br />soon.</h2>
        </div>
        <div className="writing-note">
          <div className="pulse" aria-hidden="true" />
          <p>
            I&apos;m preparing a space for my blogposts, notes and personal opinions.
          </p>
          <span>No posts published yet.</span>
        </div>
      </section>

      <section className="community" aria-labelledby="community-title">
        <p className="eyebrow">Beyond the screen</p>
        <h2 id="community-title">Community matters.</h2>
        <div className="community-list">
          <div><span>01</span><p>Edited e-books for visually impaired readers with Marmara University.</p></div>
          <div><span>02</span><p>Supported donation operations at ÇYDD&apos;s secondhand clothing store.</p></div>
          <div><span>03</span><p>Member of GDG on Campus GTU, Cyber GTU, and GTU Computer Community.</p></div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <p>Have a problem worth solving?</p>
          <a href="mailto:akurtt2534@gmail.com">Let&apos;s talk<span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <span>Ahmet Emre Kurt © 2026</span>
          <a href="mailto:akurtt2534@gmail.com">akurtt2534@gmail.com</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
