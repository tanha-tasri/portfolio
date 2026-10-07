# Tanha Tasri — Personal Portfolio Website

A modern, responsive, production-quality portfolio website for **Tanha Tasri**, Software Engineering student at Green University of Bangladesh (CGPA 3.63/4.00).

Built with **React.js**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Router**. Features glassmorphism aesthetics, dark/light theme switching with zero flash of unstyled content, animated typing role cycler, dynamic skill categories, featured project showcases, verified education timeline, and an interactive validated contact form.

---

## 🚀 Live Demo & Featured Work
- **Featured Project — MentraLink**: [Student Mentorship Management System](https://mentra-link.vercel.app/)
- **GitHub**: [github.com/tanha-tasri](https://github.com/tanha-tasri)
- **LinkedIn**: [linkedin.com/in/tanha-tasri-3444493a1/](https://www.linkedin.com/in/tanha-tasri-3444493a1/)
- **Contact Email**: tanha224517@gmail.com

---

## 🛠️ Tech Stack & Architecture
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) (cyber-minimalist glassmorphism, animated glow, dark mode default)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (smooth spring transitions, scrollspy active indicators, floating micro-badges)
- **Navigation & Routing**: [React Router DOM](https://reactrouter.com/) (SPA hash/scroll + dedicated 404 handler)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Crisp SVG Brand Icons
- **Typography**: Google Fonts — *Outfit* (bold modern headings) & *Plus Jakarta Sans* (readable body text)

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg             # Custom SVG "TT" monogram brand favicon
│   └── resume.pdf              # (Optional) Drop your resume PDF here
├── src/
│   ├── assets/                 # Static imagery / assets
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Sticky glassmorphism navbar, scrollspy, mobile drawer
│   │   │   └── Footer.jsx      # Social links, bio summary, quick jump, copyright
│   │   ├── sections/
│   │   │   ├── Hero.jsx        # Gradient title, typing role animation, CTAs, avatar ring
│   │   │   ├── About.jsx       # Student bio, education highlights, interest domains
│   │   │   ├── Skills.jsx      # Filterable skills grid by category, proficiency chips
│   │   │   ├── Projects.jsx    # MentraLink showcase, interactive mockups, placeholders
│   │   │   ├── Education.jsx   # Vertical academic timeline, CGPA highlight
│   │   │   ├── Certifications.jsx # Extracurricular & achievement placeholders
│   │   │   └── Contact.jsx     # Validated form with real-time feedback & contact cards
│   │   └── ui/
│   │       ├── BackgroundBlobs.jsx # Ambient floating gradient lights & dot matrix
│   │       ├── BackToTop.jsx   # Floating back-to-top button with smooth scroll
│   │       ├── Icons.jsx       # Crisp SVG vector components (GitHub, LinkedIn)
│   │       └── SectionHeader.jsx # Reusable section title with badge & gradients
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/light mode state, system sync, localStorage
│   ├── data/
│   │   ├── personalInfo.js     # Centralized bio, links, roles, and placeholders
│   │   ├── projects.js         # MentraLink data and upcoming project templates
│   │   ├── skills.js           # Exact categorized technical skillset
│   │   └── education.js        # Green University of Bangladesh BSc & timeline
│   ├── pages/
│   │   ├── Home.jsx            # Main single-page portfolio layout
│   │   └── NotFound.jsx        # 404 error page with return CTA
│   ├── App.jsx                 # Theme & Router wrapper
│   ├── index.css               # Tailwind directives, glass utilities, custom scrollbar
│   └── main.jsx                # React root mount
├── tailwind.config.js          # Brand gradients, keyframe animations, dark mode
├── postcss.config.js           # PostCSS Tailwind and Autoprefixer integration
├── vercel.json                 # SPA rewrite rules for direct Vercel routing
├── index.html                  # SEO metadata, Open Graph, fonts & anti-FOUC script
└── package.json                # Dependencies and npm build scripts
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js (v18+)** installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/tanha-tasri/anti.git
cd anti
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, minified bundle in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚢 Deployment Steps (Vercel)

Deploying to [Vercel](https://vercel.com/) takes less than 2 minutes:

### Option 1: Vercel Web Dashboard (Recommended)
1. Push your code to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/tanha-tasri/portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com/) and click **"Add New" → "Project"**.
3. Import your `portfolio` repository from GitHub.
4. Keep the default build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Vercel will build and assign you a free production URL (e.g., `tanha-tasri.vercel.app`).
   *(Note: The included `vercel.json` already handles client-side SPA routing automatically).*

### Option 2: Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your terminal.

---

## 🎨 How to Customize Your Portfolio

### 1. How to Add a New Project
All project records live in `src/data/projects.js`. Simply duplicate the template object:
```javascript
{
  id: "my-new-project",
  title: "Project Title",
  subtitle: "One-line summary",
  description: "Detailed description of what the project solves...",
  tags: ["React.js", "Python", "MongoDB"],
  featured: false, // Set to true if you want the large hero card
  liveUrl: "https://your-demo-url.com",
  githubUrl: "https://github.com/tanha-tasri/repo-name",
  category: "Web Development",
  highlights: [
    "Key feature or technical achievement 1",
    "Key feature or technical achievement 2",
  ],
  imageUrl: null, // Drop image in /public/projects/ and set "/projects/my-screenshot.png"
  badge: "New Release",
  status: "Completed",
}
```

### 2. How to Change Colors & Gradients
Colors are centrally configured in `tailwind.config.js`:
- Gradient accents: modify `brand.indigo`, `brand.violet`, `brand.pink`, `brand.cyan`.
- In `src/index.css`, customize the `.text-gradient` utility to use any gradient you like.

### 3. Contact Form Delivery (Active)
The contact form in `src/components/sections/Contact.jsx` is automatically wired to **`tanha224517@gmail.com`** using FormSubmit:
- **No backend or credit card required**.
- **1-Click Activation**: The very first time a message is submitted, FormSubmit sends an activation link to `tanha224517@gmail.com`. Simply click **"Activate Form"** in your Gmail inbox once.
- **Instant Delivery**: Every subsequent message sent through your portfolio is delivered directly to your Gmail inbox, with the visitor's email set as the `Reply-To` address so you can reply to them with a single click.
- **Spam Protection & Fallback**: Includes spam filters and a 1-click "Open Mail App" fallback if any visitor experiences a network issue.

### 4. How to Update Your Resume & Profile Photo
- **Resume**: Place your PDF file in `/public/resume.pdf` and update `resumeUrl: "/resume.pdf"` in `src/data/personalInfo.js`.
- **Profile Photo**: Place your portrait photo in `/public/profile.jpg` and update `profilePhoto: "/profile.jpg"` in `src/data/personalInfo.js`.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
