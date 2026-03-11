# SCISOL Website

A modern, responsive website for Scientific Solutions (SCISOL) built with React, Vite, and Tailwind CSS.

## Project Structure

```
scisol-website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable components
│   │   ├── layout/     # Navbar, Footer
│   │   ├── sections/   # Page sections (Hero, About, Services, etc.)
│   │   └── ui/         # UI components (Button, Card, SectionTitle)
│   ├── data/           # Data files
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
└── index.html
```

## Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-friendly components
- 🎯 **Modular Architecture** - Reusable components

## Getting Started

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Available Pages

- **Home** (`/`) - Landing page with all sections
- **About** (`/about`) - About page
- **Services** (`/services`) - Services overview
- **Contact** (`/contact`) - Contact form

## Component Library

### Layout Components
- `Navbar` - Navigation bar
- `Footer` - Site footer

### Section Components
- `Hero` - Hero/banner section
- `About` - About section
- `Services` - Services grid
- `WhyChoose` - Features/benefits
- `Contact` - Contact form
- `CTA` - Call-to-action

### UI Components
- `Button` - Reusable button with variants
- `Card` - Card container
- `SectionTitle` - Standardized section headers

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
- Update text content in individual component files
- Modify `src/data/servicesData.js` for services information

### Assets
Add your images to:
- `src/assets/images/` - Logo, hero background, etc.
- `src/assets/icons/` - Icon files
- `public/` - Favicon and other static assets

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT
