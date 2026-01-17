export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'my-neovim-setup',
    title: 'My NeoVim Setup: From Zero to Hero',
    excerpt: 'A comprehensive guide to setting up NeoVim with LSP, Treesitter, and a beautiful UI that makes VS Code users jealous.',
    date: '2026-01-15',
    tags: ['neovim', 'productivity', 'tools'],
    content: `
# My NeoVim Setup

I've finally switched to NeoVim completely. Here is why and how.

## Why NeoVim?

Speed, extensibility, and the "vim motion" muscle memory.

## The Config

I use using [Lazy.nvim](https://github.com/folke/lazy.nvim) for package management.

\`\`\`lua
-- Example config
return {
  "folke/lazy.nvim",
}
\`\`\`

## Plugins I use

- Telescope
- Treesitter
- LSP Zero
    `,
    readingTime: 8
  },
  {
    slug: 'building-a-cli-in-rust',
    title: 'Building a CLI Tool in Rust',
    excerpt: 'Learn how to create a powerful command-line application using Rust, with proper error handling and colorful output.',
    date: '2026-01-10',
    tags: ['rust', 'cli', 'tutorial'],
    content: 'Content coming soon...',
    readingTime: 12
  },
  {
    slug: 'docker-compose-deep-dive',
    title: 'Docker Compose Deep Dive',
    excerpt: 'Everything you need to know about Docker Compose for development environments, from basics to advanced networking.',
    date: '2026-01-05',
    tags: ['docker', 'devops', 'containers'],
    content: 'Content coming soon...',
    readingTime: 10
  },
  {
    slug: 'terminal-workflow',
    title: 'My Terminal Workflow & Dotfiles',
    excerpt: 'How I configured my terminal for maximum productivity with Zsh, tmux, and custom scripts.',
    date: '2025-12-28',
    tags: ['terminal', 'productivity', 'dotfiles'],
    content: 'Content coming soon...',
    readingTime: 6
  },
  {
    slug: 'react-patterns',
    title: 'Advanced React Patterns I Use Daily',
    excerpt: 'Compound components, render props, and custom hooks that make my React code cleaner and more maintainable.',
    date: '2025-12-20',
    tags: ['react', 'javascript', 'patterns'],
    content: 'Content coming soon...',
    readingTime: 15
  },
  {
    slug: 'git-workflow',
    title: 'Git Workflow for Solo Developers',
    excerpt: 'Branching strategies, commit conventions, and automation tips for managing projects by yourself.',
    date: '2025-12-15',
    tags: ['git', 'workflow', 'productivity'],
    content: 'Content coming soon...',
    readingTime: 7
  }
];
