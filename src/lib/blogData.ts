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
    slug: 'arch-linux-hyprland-dotfiles',
    title: "The Complete Guide to Setting Up Xero's Dotfiles on Arch Linux",
    excerpt: 'A deep dive into a modern, aesthetic Hyprland-based Arch Linux development environment, covering directory structure, configuration files, and step-by-step installation.',
    date: '2026-01-18',
    tags: ['arch-linux', 'hyprland', 'dotfiles', 'linux'],
    content: `# The Complete Guide to Setting Up Xero's Dotfiles on Arch Linux

Setting up a new Linux environment can be a daunting task, especially when aiming for a polished, efficient, and aesthetically pleasing workflow. This guide walks you through **Xero's Dotfiles**, a comprehensive Hyprland-based configuration for Arch Linux.

This configuration is based on [JaKooLit's Hyprland-Dots](https://github.com/JaKooLit/Hyprland-Dots), featuring custom modifications for improved stability, performance, and a cleaner developer workflow.

---

## What's Included?

| Component          | Application                     |
| :----------------- | :------------------------------ |
| **Window Manager** | Hyprland                        |
| **Terminal**       | Kitty, Ghostty                  |
| **Shell**          | Zsh (Oh-My-Zsh + Powerlevel10k) |
| **Bar**            | Waybar                          |
| **Launcher**       | Rofi (Wayland fork)             |
| **Notifications**  | SwayNC                          |
| **File Manager**   | Thunar                          |
| **Wallpaper**      | swww + wallust                  |
| **Lock Screen**    | Hyprlock                        |
| **Idle Daemon**    | Hypridle                        |
| **Multiplexer**    | Tmux                            |
| **Editor**         | Neovim                          |

---

## Directory Structure

\`\`\`
dotfiles/
├── .config/
│   ├── hypr/            # Hyprland window manager
│   ├── waybar/          # Status bar
│   ├── rofi/            # Application launcher
│   ├── kitty/           # Primary terminal emulator
│   ├── ghostty/         # Alternative terminal
│   ├── swaync/          # Notification center
│   ├── tmux/            # Terminal multiplexer
│   └── ...              # More configs
├── .zshrc               # Zsh configuration
├── .zprofile            # Zsh login profile
└── README.md
\`\`\`

---

## Installation

### Step 1: Install Dependencies

\`\`\`bash
sudo pacman -S --needed hyprland hypridle hyprlock xdg-desktop-portal-hyprland \\
    wl-clipboard cliphist grim slurp swappy pipewire pipewire-pulse wireplumber \\
    pamixer playerctl swaync waybar rofi-wayland jq polkit-gnome \\
    network-manager-applet blueman brightnessctl thunar kitty kvantum qt5ct qt6ct \\
    nwg-look nwg-displays ttf-jetbrains-mono-nerd ttf-meslo-nerd otf-font-awesome \\
    zsh fzf zoxide atuin lsd lazygit tmux neovim papirus-icon-theme stow

# AUR packages
yay -S --needed swww wallust pokemon-colorscripts-git bibata-cursor-theme
\`\`\`

### Step 2: Clone & Apply

\`\`\`bash
git clone https://github.com/lxrdxe7o/dotfiles.git ~/dotfiles
cd ~/dotfiles
stow .
\`\`\`

### Step 3: Configure Zsh

\`\`\`bash
chsh -s $(which zsh)
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \\
    \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Plugins
git clone https://github.com/z-shell/F-Sy-H.git \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/F-Sy-H
git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
\`\`\`

### Step 4: Reboot

\`\`\`bash
reboot
\`\`\`

---

## Essential Keybindings

| Keybinding            | Action                   |
| :-------------------- | :----------------------- |
| \`SUPER + Return\`      | Open Terminal            |
| \`SUPER + Q\`           | Close Window             |
| \`SUPER + D\`           | App Launcher (Rofi)      |
| \`SUPER + E\`           | File Manager             |
| \`SUPER + 1-0\`         | Switch Workspace         |
| \`SUPER + SHIFT + 1-0\` | Move Window to Workspace |
| \`SUPER + SPACE\`       | Toggle Floating Mode     |
| \`SUPER + SHIFT + S\`   | Screenshot (Area)        |
| \`SUPER + W\`           | Wallpaper Selector       |
| \`SUPER + CTRL + L\`    | Lock Screen              |

---

## Troubleshooting

### NVIDIA Users
Add to \`~/.config/hypr/UserConfigs/ENVariables.conf\`:
\`\`\`conf
env = LIBVA_DRIVER_NAME,nvidia
env = __GLX_VENDOR_LIBRARY_NAME,nvidia
env = NVD_BACKEND,direct
\`\`\`

### Audio Issues
\`\`\`bash
systemctl --user restart pipewire pipewire-pulse wireplumber
\`\`\`

Happy ricing!`,
    readingTime: 12
  },
  {
    slug: 'my-neovim-setup',
    title: 'KrakenVim: My NeoVim Setup, Zero to IDE',
    excerpt: 'A comprehensive guide to KrakenVim - a modern, modular Neovim configuration with 15+ language support, beautiful themes, and sub-100ms startup times.',
    date: '2026-01-15',
    tags: ['neovim', 'productivity', 'tools', 'lua'],
    content: `# 🐙 KrakenVim: My NeoVim Setup

I've finally switched to NeoVim completely with my custom configuration: [KrakenVim](https://github.com/lxrdxe7o/KrakenVim). This is a from-scratch Neovim configuration that combines modern plugin architecture with familiar keybindings, built with [lazy.nvim](https://github.com/folke/lazy.nvim) for lightning-fast startup times and modular plugin management.

---

## Why KrakenVim?

- **Clean Foundation**: Built from the ground up, no bloat
- **Muscle Memory**: Preserves AstroNvim-style keybindings for seamless transition
- **Modular Design**: Organized plugin structure for easy customization
- **Language-First**: Complete LSP, DAP, and tooling for 15+ languages
- **Performance**: Aggressive lazy loading with sub-100ms startup
- **Beautiful**: 15 carefully selected themes with persistent picker

---

## 📊 Technical Stats

| Metric | Value | Details |
| :--- | :--- | :--- |
| **Startup Time** | **~18ms - 45ms** | Aggressive lazy-loading & bytecode caching |
| **Plugin Count** | **65+** | < 10 loaded at startup, rest on-demand |
| **Memory Usage** | **~28MB** | Highly optimized Lua garbage collection |
| **Language Support** | **20+** | Full LSP, DAP, and linter support |
| **Platform** | **Cross-Platform** | Linux, macOS, WSL2, Windows |

---

## ✨ Features

- ⚡ **Blazing Fast**: Aggressive lazy loading with header caching and sub-50ms startup
- 🎨 **15 Beautiful Themes**: Persistent colorscheme picker with live preview
- 🔍 **Powerful Fuzzy Finding**: Telescope with fzf-native for instant file/text search
- 💡 **Full LSP Support**: 20+ languages with auto-completion, diagnostics, and formatting
- 🐛 **Complete Debugging**: DAP configurations for Python, JS/TS, Java, Go, Rust, C/C++
- 🌳 **Treesitter 1.0**: Next-gen syntax highlighting and code understanding
- 🤖 **AI-Powered Completion**: GitHub Copilot integration with nvim-cmp
- 🔧 **Auto-Formatting**: conform.nvim with 20+ formatters
- 🔎 **Linting**: nvim-lint for real-time code quality checks
- 📊 **Beautiful UI**: Custom statusline, bufferline, dashboard, and notifications
- 🚀 **Git Integration**: Lazygit, gitsigns, and diffview

---

## 📦 Requirements

| Requirement   | Minimum Version | Purpose                               |
| :------------ | :-------------- | :------------------------------------ |
| **Neovim**    | 0.10.0          | Core editor with modern Lua API       |
| **Git**       | 2.19.0          | Plugin management and version control |
| **Node.js**   | 16.x            | LSP servers and tooling               |
| **npm/yarn**  | Latest          | Package management                    |
| **Nerd Font** | Any             | Icons and glyphs (JetBrainsMono recommended) |

### Recommended Tools

\`\`\`bash
# Better search/find
ripgrep      # Fast grep alternative (required for Telescope live_grep)
fd           # Fast find alternative (better file finding)

# Git tools
lazygit      # Terminal UI for Git (required for <leader>gg)

# File manager
yazi         # Modern terminal file manager (required for <leader>-)
\`\`\`

---

## 🚀 Installation

### Linux (Arch)

\`\`\`bash
# Backup existing config
mv ~/.config/nvim ~/.config/nvim.backup
mv ~/.local/share/nvim ~/.local/share/nvim.backup

# Clone KrakenVim
git clone https://github.com/lxrdxe7o/KrakenVim.git ~/.config/nvim

# Install dependencies
sudo pacman -S neovim git nodejs npm ripgrep fd lazygit make gcc

# Launch Neovim (plugins auto-install on first launch)
nvim
\`\`\`

### macOS

\`\`\`bash
# Backup and clone
mv ~/.config/nvim ~/.config/nvim.backup
git clone https://github.com/lxrdxe7o/KrakenVim.git ~/.config/nvim

# Install via Homebrew
brew install neovim git node ripgrep fd lazygit

# Install a Nerd Font
brew tap homebrew/cask-fonts
brew install font-jetbrains-mono-nerd-font

# Launch
nvim
\`\`\`

---

## 🔌 Plugin Reference

### 🎨 Colorschemes (15 Themes)

| Theme               | Description                    | Style        |
| :------------------ | :----------------------------- | :----------- |
| **Bamboo**          | Default, warm multiplex        | multiplex    |
| **Miasma**          | Dark, muted forest             | dark         |
| **Cyberdream**      | Futuristic cyberpunk           | default      |
| **Gruvbox**         | Retro groove warm theme        | dark         |
| **Catppuccin**      | Soothing pastel theme          | mocha        |
| **TokyoNight**      | Clean, vibrant night           | night        |
| **Kanagawa**        | Japanese painting inspired     | wave         |
| **Rose Pine**       | Natural pine, foam, gold       | main         |
| **Dracula**         | Classic dracula palette        | default      |
| **Nord**            | Arctic, north-bluish           | default      |
| **Everforest**      | Comfortable green forest       | medium       |

All themes configured with **transparent backgrounds**, **italic comments**, **LSP semantic highlighting**, and **Treesitter integration**.

---

### 🔧 LSP & Completion

| Plugin           | Purpose                           |
| :--------------- | :-------------------------------- |
| nvim-lspconfig   | LSP client configurations         |
| mason.nvim       | LSP/DAP/formatter package manager |
| nvim-cmp         | Completion engine                 |
| LuaSnip          | Snippet engine                    |
| copilot.lua      | GitHub Copilot integration        |
| conform.nvim     | Async formatting engine           |
| nvim-lint        | Asynchronous linter integration   |

**Supported Languages (Auto-Install):** Lua, Python, JavaScript, TypeScript, Java, Rust, Go, C, C++, HTML, CSS, SCSS, Tailwind, Vue, Svelte, React, JSON, YAML, TOML, Bash, Markdown

---

### 🐛 Debugging (DAP)

Pre-configured debug adapters for multiple languages:

| Language                  | Adapter            | Features                          |
| :------------------------ | :----------------- | :-------------------------------- |
| **Python**                | debugpy            | File, args, Django, Flask, attach |
| **JavaScript/TypeScript** | js-debug-adapter   | Node, Jest, Mocha, Chrome         |
| **Java**                  | java-debug-adapter | File, tests, attach, hot reload   |
| **Go**                    | delve              | File, package, workspace, tests   |
| **Rust**                  | codelldb           | Cargo debug, file, attach         |
| **C/C++**                 | codelldb           | Executable, args, attach          |

---

### ✏️ Editor Enhancements

| Plugin               | Purpose                                     |
| :------------------- | :------------------------------------------ |
| nvim-treesitter      | Syntax highlighting & code parsing          |
| mini.surround        | Add/delete/replace surroundings             |
| mini.ai              | Extended text objects (functions, classes)  |
| telescope.nvim       | Fuzzy finder for files, grep, LSP           |
| neo-tree.nvim        | File explorer with Git integration          |
| gitsigns.nvim        | Git decorations and hunk operations         |
| Comment.nvim         | Smart commenting (gcc, gbc)                 |
| neoscroll.nvim       | Smooth scrolling animations                 |
| indent-blankline.nvim| Rainbow indent guides                       |

---

## ⌨️ Keybindings

**Leader Key:** Space

### General

| Key            | Mode | Action                   |
| :------------- | :--- | :----------------------- |
| Ctrl-h/j/k/l   | N    | Navigate windows         |
| Ctrl-s         | N, I | Save file                |
| jk / jj        | I    | Escape to normal mode    |
| gcc            | N    | Comment line             |
| gc             | V    | Comment selection        |
| leader+h       | N    | Home (Alpha dashboard)   |

### File Navigation (leader+f)

| Key        | Action                       |
| :--------- | :--------------------------- |
| leader+ff  | Find files (Telescope)       |
| leader+fg  | Live grep (Telescope)        |
| leader+fb  | Buffers (Telescope)          |
| leader+fr  | Recent files (Telescope)     |
| leader+fk  | Keymaps (Telescope)          |

### LSP (leader+l, g*)

| Key        | Action                |
| :--------- | :-------------------- |
| gd         | Go to definition      |
| gr         | Go to references      |
| K          | Hover documentation   |
| leader+la  | Code action           |
| leader+lr  | Rename symbol         |
| leader+lf  | Format buffer         |

### Debugging (leader+d)

| Key        | Action                |
| :--------- | :-------------------- |
| leader+dc  | Continue              |
| leader+ds  | Start/Continue        |
| leader+db  | Toggle Breakpoint     |
| leader+du  | Toggle DAP UI         |
| F5         | Continue              |
| F10        | Step over             |
| F11        | Step into             |

---

## 🔧 Customization

### File Structure

\`\`\`
~/.config/nvim/
├── init.lua                 # Entry point
├── lua/
│   ├── config/
│   │   ├── options.lua      # Neovim options
│   │   ├── keymaps.lua      # Global keymaps
│   │   ├── autocmds.lua     # Autocommands
│   │   └── colorscheme.lua  # Theme persistence
│   └── plugins/
│       ├── colorscheme.lua  # Theme plugins
│       ├── completion.lua   # nvim-cmp & snippets
│       ├── dap.lua          # Debugging configs
│       ├── editor.lua       # Editor enhancements
│       ├── lsp.lua          # LSP configurations
│       ├── tools.lua        # Terminal, git, builds
│       └── ui.lua           # Statusline, dashboard
└── ftplugin/
    └── java.lua             # Java-specific setup
\`\`\`

### Adding Plugins

Create a new file in lua/plugins/ or add to existing category:

\`\`\`lua
-- lua/plugins/my-plugins.lua
return {
  {
    "author/plugin-name",
    event = "VeryLazy",
    opts = {
      -- plugin options
    },
  },
}
\`\`\`

Restart Neovim and run :Lazy to install.

---

## 🎨 Theme System

KrakenVim includes a **persistent colorscheme picker**:

\`\`\`vim
:Telescope colorscheme
\`\`\`

- **Live Preview**: See theme changes in real-time
- **Persistent Selection**: Choice saved to ~/.local/share/nvim/colorscheme.txt
- **Revert on Cancel**: Esc returns to original theme
- **Apply on Enter**: CR saves and persists selection

---

## 🐙 Conclusion

KrakenVim transforms Neovim into a full-featured IDE while maintaining the speed and efficiency that makes Vim legendary. With 15+ language support, beautiful themes, and a modular architecture, it's the perfect balance between power and simplicity.

Check out the full configuration: [github.com/lxrdxe7o/KrakenVim](https://github.com/lxrdxe7o/KrakenVim)

Happy coding! 🚀`,
    readingTime: 15
  },
  {
    slug: 'building-a-cli-in-rust',
    title: 'Building a CLI Tool in Rust',
    excerpt: 'Creating a powerful command-line application using Rust, with proper error handling and colorful output.',
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
