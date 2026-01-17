import styles from './page.module.css';

export const metadata = {
  title: 'About | xero.dev',
  description: 'Learn more about me, my skills, and what drives my passion for development.',
};

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Rust', 'Python', 'Go'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue', 'CSS/Sass', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL'] },
  { category: 'DevOps', items: ['Docker', 'Linux', 'Nginx', 'CI/CD', 'Vercel'] },
  { category: 'Tools', items: ['NeoVim', 'Git', 'tmux', 'Zsh', 'Figma'] },
];

const timeline = [
  {
    year: '2024',
    title: 'Full-Stack Developer',
    description: 'Building production applications and diving deep into system design.'
  },
  {
    year: '2023',
    title: 'Started Open Source',
    description: 'Contributing to projects and maintaining my own repositories.'
  },
  {
    year: '2022',
    title: 'First Dev Job',
    description: 'Landed my first role as a junior developer, learned the ropes.'
  },
  {
    year: '2021',
    title: 'Self-Taught Journey',
    description: 'Began learning to code through online resources and building projects.'
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.avatarWrapper}>
              <img 
                src="/images/cats/pixel_cat_wave_1768601359673.png"
                alt="Pixel cat avatar"
                className={`${styles.avatar} pixel-art`}
                width={200}
                height={200}
              />
              <div className={styles.avatarGlow}></div>
            </div>

            <div className={styles.heroText}>
              <h1 className={styles.title}>
                Hey there! <span className={styles.wave}>👋</span>
              </h1>
              <h2 className={styles.subtitle}>
                I&apos;m <span className="gradient-text">xero</span>, a developer 
                who loves building things.
              </h2>
              <p className={styles.bio}>
                I&apos;m passionate about creating elegant solutions to complex problems. 
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open source, or tweaking my development environment 
                for the hundredth time.
              </p>
              <p className={styles.bio}>
                This blog is my digital garden — a place where I document what I learn, 
                share project setups, and hopefully help other developers along the way.
              </p>

              <div className={styles.socials}>
                <a href="https://github.com/lxrdxe7o" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
                <a href="mailto:hello@xero.dev" className={styles.socialLink}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🛠️</span>
            Skills & Technologies
          </h2>

          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.category} className={`${styles.skillCard} glass-card`}>
                <h3 className={styles.skillCategory}>{skill.category}</h3>
                <div className={styles.skillItems}>
                  {skill.items.map((item) => (
                    <span key={item} className={styles.skillItem}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
