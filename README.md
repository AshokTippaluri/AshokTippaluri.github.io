# Ashok Tippaluri Portfolio

A modern, multi-page personal portfolio built with **React + TypeScript + Vite + Tailwind CSS** and deployed on GitHub Pages.

## Design

The design follows the "Meridian" light editorial style: clean white cards, cobalt/azure accents, rounded corners, and subtle animations.

## Pages

- **Home** — Hero introduction with quick links
- **About** — Background and focus areas
- **Experience** — Work history timeline
- **Skills** — Technologies and tools
- **Projects** — Selected projects with links
- **Education** — Academic background
- **Contact** — Contact information and form

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured for GitHub Pages. The `dist` folder is the build output. To deploy manually:

```bash
npm run build
# Then push the dist folder contents to your gh-pages branch,
# or enable GitHub Actions for automatic deployment.
```

## Project Structure

```
├── public/            # Static assets
│   ├── assets/img/    # Images and icons
│   └── favicon.svg
├── src/
│   ├── components/    # Shared UI components
│   ├── data/          # Portfolio content (profile.ts)
│   ├── pages/         # Page components
│   ├── App.tsx        # Router setup
│   ├── main.tsx       # Entry point
│   └── index.css      # Tailwind + custom styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## License

MIT — see [LICENSE](./LICENSE).
