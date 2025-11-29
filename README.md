# Adarsh Raj - Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, React, and Tailwind CSS.

## Features

- 🎨 Modern and minimalistic UI design
- 📱 Fully responsive and mobile-friendly
- 🌓 Dark/Light mode toggle
- ✨ Smooth scrolling and animations
- 📄 Downloadable resume
- 📧 Contact form
- 🚀 Optimized for performance and SEO
- ♿ Accessible design

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Add your resume PDF:
   - Place your resume PDF file in the `public` folder
   - Name it `resume.pdf` (or update the link in `components/Hero.tsx` and `components/About.tsx`)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Build command: `npm run build`
- Start command: `npm start`

## Customization

### Update Personal Information

Edit the following files to update your information:
- `components/Hero.tsx` - Hero section with personal details
- `components/About.tsx` - About section content
- `components/Experience.tsx` - Work experience
- `components/Education.tsx` - Education details
- `components/Projects.tsx` - Projects showcase
- `components/Skills.tsx` - Skills and technologies
- `app/layout.tsx` - SEO metadata

### Update Resume

1. Place your resume PDF in the `public` folder
2. Ensure it's named `resume.pdf` or update the links in components

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Update primary colors in `tailwind.config.ts`

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form and info
│   ├── Education.tsx    # Education section
│   ├── Experience.tsx   # Work experience
│   ├── Footer.tsx       # Footer component
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   └── ThemeProvider.tsx # Dark mode provider
├── public/
│   └── resume.pdf       # Your resume (add your own)
└── package.json
```

## License

This project is open source and available under the MIT License.

## Contact

Adarsh Raj
- Email: adarshrajapplication@gmail.com
- LinkedIn: [linkedin.com/in/adarsh-raj-ds](https://www.linkedin.com/in/adarsh-raj-ds/)
- GitHub: [github.com/adarshrajds](https://github.com/adarshrajds)


