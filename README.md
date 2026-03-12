# Monkey Theme

A minimalist and visually appealing VS Code theme that lets you set both the color theme and file/folder icons.

## Description

Monkey Icons gives your workspace a clean, consistent look with custom icons for hundreds of file types and folder names.

Supported areas include:

- **Languages & runtimes**: JavaScript/TypeScript, React, Go, Rust, Python, C/C++, C#, Java, Ruby, PHP, Swift, Dart, Lua, and more
- **Config & tooling**: `package.json`, `go.mod`/`go.sum`, `tsconfig.json`, Gradle, Maven, Prisma, Docker
- **Web & data**: HTML, CSS/SCSS, JSON, YAML, TOML, SQL, XML
- **Specialized**: Solidity (`.sol`), Protobuf (`.proto`), Markdown, LaTeX, shell scripts
- **Media**: Images, audio, video, documents, spreadsheets
- **Folders**: Common names like `src`, `dist`, `components`, `config`, `assets`, and many more

## Installation

1. Open VS Code.
2. Go to **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Search for **Monkey Theme**.
4. Click **Install**.

Or install from the command line:

```bash
code --install-extension YoichiKojima.monkey-theme
```

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Run **Color Theme** → **Monkey Theme (Dark)** or **Monkey Theme (Light)** .
3. Run **File Icon Theme** → **Monkey Icons**.

Your file explorer will switch to the Monkey Icons theme.

## Development

- **Node**: use a version supported by the project (see `package.json` engines).
- **Package manager**: [pnpm](https://pnpm.io/) (see `packageManager` in `package.json`).

```bash
pnpm install
pnpm build        # build theme once
pnpm build:dev    # watch and rebuild on changes
pnpm lint         # run linters (Biome, SVGO)
pnpm package      # create .vsix for distribution
```

## Repository

- **GitHub**: [YoichiKojima/Monkey-Theme](https://github.com/YoichiKojima/Monkey-Theme)
- **Author**: [Yoichi Kojima](https://github.com/YoichiKojima)

## License

See [LICENSE.md](LICENSE.md) in this repository.
