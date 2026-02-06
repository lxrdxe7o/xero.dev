"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import FolderCard from "@/components/FolderCard";
import TextScramble from "@/components/effects/TextScramble";
import StaggeredGrid from "@/components/effects/StaggeredGrid";
import SectionDivider from "@/components/effects/SectionDivider";
import DocumentReel from "@/components/sections/DocumentReel";

export default function Home() {
  const projects = [
    {
      name: "dotfiles",
      description:
        "System configuration files for Neovim, Tmux, Zsh. Maintained for efficiency and aesthetics.",
      link: "https://github.com/lxrdxe7o/dotfiles",
    },
    {
      name: "xero-shell",
      description:
        "Custom shell environment with advanced autocompletion and theming.",
      link: "https://github.com/lxrdxe7o/xero-shell",
    },
    {
      name: "DeadDrop",
      description:
        "Secure, ephemeral file sharing service with end-to-end encryption.",
      link: "https://github.com/lxrdxe7o/DeadDrop",
    },
    {
      name: "hachi",
      description:
        "Experimental neural network project focusing on pattern recognition.",
      link: "https://github.com/lxrdxe7o/hachi",
    },
    {
      name: "KrakenVim",
      description:
        "Performance-oriented Neovim distribution. Lua-based configuration.",
      link: "https://github.com/lxrdxe7o/KrakenVim",
    },
    {
      name: "shiro-nekoo-115",
      description: "Frontend design system exploration. White cat theme.",
      link: "https://github.com/lxrdxe7o/shiro-nekoo-115",
    },
    {
      name: "tora-neko-311",
      description:
        "Backend microservices architecture prototype. Tiger cat theme.",
      link: "https://github.com/lxrdxe7o/tora-neko-311",
    },
    {
      name: "mikeneko",
      description: "Full-stack application boilerplate. Calico cat theme.",
      link: "https://github.com/lxrdxe7o/mikeneko",
    },
    {
      name: "kuro-nekoo-215",
      description: "Security audit tools and scripts. Black cat theme.",
      link: "https://github.com/lxrdxe7o/kuro-nekoo-215",
    },
  ];

  return (
    <div className="page-container">
      {/* Header Section */}
      <section className="page-header">
        <div className="header-meta font-mono text-sm">
          <span>REF: XERO-DEV-07</span>
          <span>Class: ARCHIVAL</span>
        </div>
        <h1 className="main-title">
          <TextScramble
            text="ARCHIVAL TECHNICAL BRUTALIST VARIANT 07"
            trigger="mount"
            speed={25}
            delay={300}
          />
        </h1>
        <div className="header-desc font-mono">
          <p>
            <TextScramble
              text="The following index relates to the developmental works and experimental projects of [XERO]. All files have been declassified for public viewing."
              trigger="mount"
              speed={15}
              delay={1200}
            />
          </p>
        </div>
      </section>

      <SectionDivider variant="stamp" label="DECLASSIFIED" />

      {/* Document Reel - Evidence Board */}
      <DocumentReel />

      <SectionDivider variant="line" />

      {/* Projects Grid */}
      <StaggeredGrid className="projects-grid" staggerDelay={0.08}>
        {projects.map((project, index) => (
          <FolderCard key={project.name} index={index} {...project} />
        ))}
      </StaggeredGrid>

      <style jsx>{`
        .page-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-2xl);
          padding-bottom: var(--space-3xl);
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

        @media (max-width: 768px) {
          .main-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
