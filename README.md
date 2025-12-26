# bodhan.ai

A minimalist landing page for bodhan.ai - Centre of Excellence in AI for Education, built with React and Vite.

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

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. Go to your repository Settings > Pages
3. Under "Build and deployment", select "GitHub Actions"
4. The site will deploy automatically on each push to main

### Manual Deployment

```bash
npm run deploy
```

## Configuration

Before deploying, update the following:

1. In `vite.config.js`, update the `base` path to match your repository name
2. In `package.json`, update the `homepage` URL with your GitHub username
