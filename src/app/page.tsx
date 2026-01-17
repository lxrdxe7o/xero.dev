'use client';

import React from 'react';
import FolderCard from '@/components/FolderCard';
import Typewriter from '@/components/Typewriter';

export default function Home() {
  const projects = [
    { name: 'dotfiles', description: 'System configuration files for Neovim, Tmux, Zsh. Maintained for efficiency and aesthetics.', link: 'https://github.com/lxrdxe7o/dotfiles' },
    { name: 'xero-shell', description: 'Custom shell environment with advanced autocompletion and theming.', link: 'https://github.com/lxrdxe7o/xero-shell' },
    { name: 'DeadDrop', description: 'Secure, ephemeral file sharing service with end-to-end encryption.', link: 'https://github.com/lxrdxe7o/DeadDrop' },
    { name: 'hachi', description: 'Experimental neural network project focusing on pattern recognition.', link: 'https://github.com/lxrdxe7o/hachi' },
    { name: 'KrakenVim', description: 'Performance-oriented Neovim distribution. Lua-based configuration.', link: 'https://github.com/lxrdxe7o/KrakenVim' },
    { name: 'shiro-nekoo-115', description: 'Frontend design system exploration. White cat theme.', link: 'https://github.com/lxrdxe7o/shiro-nekoo-115' },
    { name: 'tora-neko-311', description: 'Backend microservices architecture prototype. Tiger cat theme.', link: 'https://github.com/lxrdxe7o/tora-neko-311' },
    { name: 'mikeneko', description: 'Full-stack application boilerplate. Calico cat theme.', link: 'https://github.com/lxrdxe7o/mikeneko' },
    { name: 'kuro-nekoo-215', description: 'Security audit tools and scripts. Black cat theme.', link: 'https://github.com/lxrdxe7o/kuro-nekoo-215' },
  ];

  return (
    <div className="page-container">
      
      {/* Header Section */}
      <section className="page-header section-animate visible">
        <div className="header-meta font-mono text-sm">
           <span>REF: XERO-DEV-07</span>
           <span>Class: ARCHIVAL</span>
        </div>
        <h1 className="main-title">ARCHIVAL TECHNICAL BRUTALIST VARIANT 07</h1>
        <div className="header-desc font-mono">
           <p>
             <Typewriter 
               text="The following index relates to the developmental works and experimental projects of [XERO]. All files have been declassified for public viewing."
               speed={30}
               delay={500}
             />
           </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
         {projects.map((project, index) => (
            <FolderCard 
               key={project.name}
               index={index}
               {...project}
            />
         ))}
      </section>

      <style jsx>{`
        .page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
          padding-bottom: var(--space-4xl);
        }

        .page-header {
          border-bottom: 2px solid var(--ink);
          padding-bottom: var(--space-xl);
          margin-top: var(--space-xl);
        }

        .header-meta {
          display: flex;
          justify-content: space-between;
          opacity: 0.6;
          margin-bottom: var(--space-md);
          border-bottom: 1px solid var(--grid-line);
          padding-bottom: var(--space-sm);
        }

        .main-title {
          font-size: 3rem;
          line-height: 0.9;
          margin-bottom: var(--space-lg);
          max-width: 15ch;
        }

        .header-desc {
          max-width: 60ch;
          border-left: 2px solid var(--accent-red);
          padding-left: var(--space-md);
          font-style: italic;
          opacity: 0.8;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--space-2xl);
          perspective: 1000px;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            padding: 0 var(--space-md);
          }
        }
      `}</style>
    </div>
  );
}
