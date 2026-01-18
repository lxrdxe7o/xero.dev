---
title: "The Complete Guide to Setting Up Xero's Dotfiles on Arch Linux"
date: "2026-01-18"
description: "A deep dive into a modern, aesthetic Hyprland-based Arch Linux development environment, covering directory structure, configuration files, and step-by-step installation."
tags: ["arch-linux", "hyprland", "dotfiles", "linux", "ricing"]
---

# The Complete Guide to Setting Up Xero's Dotfiles on Arch Linux

Setting up a new Linux environment can be a daunting task, especially when aiming for a polished, efficient, and aesthetically pleasing workflow. This guide walks you through **Xero's Dotfiles**, a comprehensive Hyprland-based configuration for Arch Linux. We'll cover everything from the directory structure to the purpose of each file, and provide a complete installation guide.

This configuration is based on [JaKooLit's Hyprland-Dots](https://github.com/JaKooLit/Hyprland-Dots), featuring custom modifications for improved stability, performance, and a cleaner developer workflow.

---

## What's Included?

This dotfiles repository is a complete desktop environment setup. Here's a quick overview of the core components:

| Component          | Application                     | Description                                    |
| :----------------- | :------------------------------ | :--------------------------------------------- |
| **Window Manager** | Hyprland                        | A dynamic tiling Wayland compositor.           |
| **Terminal**       | Kitty, Ghostty                  | GPU-accelerated terminal emulators.            |
| **Shell**          | Zsh (Oh-My-Zsh + Powerlevel10k) | A powerful, themeable shell.                   |
| **Bar**            | Waybar                          | A highly customizable status bar.              |
| **Launcher**       | Rofi (Wayland fork)             | An application launcher and dmenu replacement. |
| **Notifications**  | SwayNC                          | A notification center for Sway/Hyprland.       |
| **File Manager**   | Thunar                          | A lightweight graphical file manager.          |
| **Wallpaper**      | swww + wallust                  | Dynamic wallpaper and color scheme generation. |
| **Lock Screen**    | Hyprlock                        | A GPU-accelerated lock screen for Hyprland.    |
| **Idle Daemon**    | Hypridle                        | Manages idle behavior (locking, screen off).   |
| **Multiplexer**    | Tmux                            | A terminal multiplexer for session management. |
| **Editor**         | Neovim                          | Hyperextensible Vim-based text editor.         |

---

## Understanding the Directory Structure

The repository is organized using a structure compatible with [GNU Stow](https://www.gnu.org/software/stow/), a symlink manager. This makes installation and management incredibly simple.

```
dotfiles/
├── .config/             # XDG config directory (all app configs live here)
│   ├── hypr/            # Hyprland window manager
│   ├── waybar/          # Status bar
│   ├── rofi/            # Application launcher
│   ├── kitty/           # Primary terminal emulator
│   ├── ghostty/         # Alternative terminal emulator
│   ├── swaync/          # Notification center
│   ├── tmux/            # Terminal multiplexer
│   ├── fastfetch/       # System info display
│   ├── gtk-3.0/         # GTK3 theme settings
│   ├── gtk-4.0/         # GTK4 theme settings
│   ├── qt5ct/           # Qt5 theme settings
│   ├── qt6ct/           # Qt6 theme settings
│   ├── nwg-look/        # GTK theme GUI configuration
│   ├── nwg-displays/    # Monitor layout configuration
│   ├── wallust/         # Dynamic color scheme generator
│   ├── wlogout/         # Logout/power menu
│   └── zathura/         # PDF viewer
├── .zshrc               # Zsh shell configuration
├── .zprofile            # Zsh login profile (environment setup)
├── .bashrc              # Bash shell fallback configuration
├── etc/                 # System-level configuration files
├── assets/              # README assets (SVG headers/footers)
└── README.md            # Documentation
```

### Key Files in Detail

#### `.zshrc` - The Shell Configuration

This is the heart of the command-line experience. It configures:

- **Oh-My-Zsh**: A framework for managing Zsh configuration.
- **Powerlevel10k**: A fast, customizable Zsh theme.
- **Plugins**: Syntax highlighting (`F-Sy-H`), autosuggestions, autocomplete, and `you-should-use` (alias reminder).
- **Aliases & Functions**: Custom shortcuts for common commands.
- **Environment Variables**: `EDITOR`, `BROWSER`, paths for development tools.
- **Tool Integrations**: `fzf` for fuzzy finding, `zoxide` for smart directory navigation, and `atuin` for shell history.

#### `.zprofile` - The Login Profile

This file runs once when you log in. It sets up the environment for the entire session, including the Hyprland session startup and SSH agent.

#### `.config/hypr/` - The Hyprland Directory

This is the most complex directory. It's organized for maintainability:

| Path                            | Purpose                                                                |
| :------------------------------ | :--------------------------------------------------------------------- |
| `hyprland.conf`                 | The main config file. It sources all other config files.               |
| `hypridle.conf`                 | Configures idle behavior (e.g., lock after 5 min, suspend after 30).   |
| `hyprlock.conf`                 | Lock screen appearance (wallpaper, clock, input field).                |
| `configs/Keybinds.conf`         | Default, "do not edit" keybindings.                                    |
| `UserConfigs/`                  | **The safe zone for your edits.** All user customization goes here.    |
| `UserConfigs/ENVariables.conf`  | Environment variables for Wayland, GPU drivers, etc.                   |
| `UserConfigs/Startup_Apps.conf` | Applications to launch on login (e.g., `waybar`, `swww-daemon`).       |
| `UserConfigs/UserKeybinds.conf` | Your custom keybindings.                                               |
| `UserConfigs/UserSettings.conf` | Hyprland settings like gaps, borders, animations.                      |
| `UserConfigs/WindowRules.conf`  | Rules for specific windows (floating, workspaces, opacity).            |
| `scripts/`                      | Helper scripts used by keybindings (e.g., screenshot, wallpaper swap). |

#### `.config/waybar/` - The Status Bar

Contains `config.jsonc` for modules (workspaces, clock, battery, etc.) and `style.css` for appearance. You can have multiple styles and switch between them with a keybinding.

#### `.config/rofi/` - The Launcher

Holds theme files and configuration for the application launcher, clipboard manager, and other rofi-based utilities.

#### `.config/kitty/` & `.config/ghostty/` - Terminals

Configurations for font, colors, opacity, and keybindings. Kitty is the primary terminal, and Ghostty is a newer, faster alternative.

---

## Installation Guide

### Prerequisites

- **OS**: Arch Linux or an Arch-based distribution (Endeavour, Garuda, etc.).
- **Display Server**: Wayland.
- **GPU**: Intel or AMD graphics are recommended. NVIDIA requires extra configuration (see Troubleshooting).

### Step 1: Install Dependencies

Run the following commands to install all required packages.

**From Official Repositories (Pacman):**

```bash
sudo pacman -S --needed hyprland hypridle hyprlock xdg-desktop-portal-hyprland \
    wl-clipboard cliphist grim slurp swappy pipewire pipewire-pulse wireplumber \
    pamixer playerctl swaync waybar rofi-wayland jq polkit-gnome \
    network-manager-applet blueman brightnessctl thunar kitty kvantum qt5ct qt6ct \
    nwg-look nwg-displays ttf-jetbrains-mono-nerd ttf-meslo-nerd otf-font-awesome \
    zsh fzf zoxide atuin lsd lazygit tmux neovim papirus-icon-theme stow
```

**From AUR (using `yay` or `paru`):**

```bash
yay -S --needed swww wallust pokemon-colorscripts-git bibata-cursor-theme
```

### Step 2: Clone the Repository

```bash
git clone https://github.com/lxrdxe7o/dotfiles.git ~/dotfiles
cd ~/dotfiles
```

### Step 3: Backup Existing Configs

Before applying new configs, back up your existing ones:

```bash
mkdir -p ~/.config-backup
cp -r ~/.config/hypr ~/.config/waybar ~/.config/rofi ~/.config/kitty ~/.config-backup/ 2>/dev/null
cp ~/.zshrc ~/.zprofile ~/.config-backup/ 2>/dev/null
```

### Step 4: Apply Dotfiles with GNU Stow

This is the magic command. From the `~/dotfiles` directory, run:

```bash
stow .
```

This creates symlinks in your home directory (`~`) pointing to the files in the `~/dotfiles` folder. For example, `~/.zshrc` will become a symlink to `~/dotfiles/.zshrc`.

**Manual Alternative (if you don't want to use Stow):**

```bash
ln -sf ~/dotfiles/.config/* ~/.config/
ln -sf ~/dotfiles/.zshrc ~/.zshrc
ln -sf ~/dotfiles/.zprofile ~/.zprofile
```

### Step 5: Configure Zsh

**Set Zsh as your default shell:**

```bash
chsh -s $(which zsh)
```

**Install Oh-My-Zsh:**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

**Install Powerlevel10k Theme:**

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
    ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

**Install Zsh Plugins:**

```bash
git clone https://github.com/z-shell/F-Sy-H.git \
    ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/F-Sy-H

git clone https://github.com/zsh-users/zsh-autosuggestions \
    ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

git clone https://github.com/marlonrichert/zsh-autocomplete.git \
    ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/zsh-autocomplete

git clone https://github.com/MichaelAquilina/zsh-you-should-use.git \
    ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/you-should-use
```

### Step 6: Configure Tmux

**Install Tmux Plugin Manager (TPM):**

```bash
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

After starting Tmux, press `Prefix + I` (usually `Ctrl-a + I`) to install the plugins listed in the config.

### Step 7: Reboot

Log out and log back in, or simply reboot your system to start with the new Hyprland session.

```bash
reboot
```

---

## Essential Keybindings

Here's a quick reference for the most important keybindings.

| Keybinding            | Action                   |
| :-------------------- | :----------------------- |
| `SUPER + Return`      | Open Terminal (Kitty)    |
| `SUPER + Q`           | Close Window             |
| `SUPER + D`           | App Launcher (Rofi)      |
| `SUPER + E`           | File Manager (Thunar)    |
| `SUPER + 1-0`         | Switch Workspace         |
| `SUPER + SHIFT + 1-0` | Move Window to Workspace |
| `SUPER + SPACE`       | Toggle Floating Mode     |
| `SUPER + SHIFT + S`   | Screenshot (Area)        |
| `SUPER + W`           | Wallpaper Selector       |
| `SUPER + CTRL + L`    | Lock Screen              |
| `SUPER + H`           | Show All Keybindings     |

---

## Troubleshooting

### NVIDIA Users

Add the following to `~/.config/hypr/UserConfigs/ENVariables.conf`:

```conf
env = LIBVA_DRIVER_NAME,nvidia
env = __GLX_VENDOR_LIBRARY_NAME,nvidia
env = NVD_BACKEND,direct
```

### Wallpaper Not Loading

Ensure the `swww-daemon` is running:

```bash
pgrep swww-daemon || swww-daemon &
swww img ~/Pictures/wallpapers/your-wallpaper.jpg
```

### Audio Issues

Restart PipeWire:

```bash
systemctl --user restart pipewire pipewire-pulse wireplumber
```

### Hyprland Logs

Check for errors in the Hyprland log:

```bash
cat /tmp/hypr/$(ls -t /tmp/hypr/ | head -1)/hyprland.log
```

---

## Final Thoughts

These dotfiles provide a solid, modern foundation for an Arch Linux desktop. The separation of `UserConfigs` from system defaults makes it easy to personalize without fear of breaking a future update. Happy ricing!
