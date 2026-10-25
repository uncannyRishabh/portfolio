# 🌌 Personal Portfolio | uncannyRishabh

> An interactive, 3D-infused single-page developer portfolio built with React, Three.js, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/Live_Demo-uncannyrishabh.github.io%2Fportfolio-blue?style=for-the-badge&logo=github)](https://uncannyrishabh.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.140.2-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![styled-components](https://img.shields.io/badge/styled--components-5.3.5-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)

---

## 🔗 Live Site

**Experience the live portfolio at:** [https://uncannyrishabh.github.io/portfolio/](https://uncannyrishabh.github.io/portfolio/)

<p align="center">
  <img src="https://raw.githubusercontent.com/uncannyRishabh/portfolio/master/src/assets/Portfolio_IMG.jpg" alt="Portfolio Preview" width="850" style="border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);" />
</p>

---

## 📖 Overview

Designed in Figma and built using modern React and WebGL, this portfolio serves as the digital hub and showcase for **Rishabh Raj Gupta** ([@uncannyRishabh](https://github.com/uncannyRishabh)), highlighting projects and expertise spanning **Android development** and **Frontend web engineering**.

Rather than relying on static pages, the portfolio utilizes real-time 3D canvas rendering, spring-physics simulations, interactive light/dark mode theming, and intersection-triggered choreography.

---

## ✨ Key Features

- **🌐 Interactive 3D WebGL Experiences**:
  - **Deformable Hero Sphere**: A fluid, interactive 3D mesh sphere powered by Three.js and `@react-three/drei`'s `MeshDistortMaterial`, coupled with `@react-spring/three` for responsive hover elasticity, click squash, and mouse tracking.
  - **3D Spherical Skills Cloud**: An orbitable 3D word cloud displaying core technical competencies in spherical coordinates, built using `@react-three/drei` (`Text`, `OrbitControls`) with dynamic camera orientation and interactive hover feedback.
- **🌓 Dynamic Light & Dark Mode**:
  - Seamless theme toggling with custom CSS variables (`--bg`, `--thumb_bg`).
  - Animated SVG sun/moon toggle switch powered by `lottie-web`.
  - State persisted locally via `localStorage` for returning visitors.
- **📱 Responsive & Touch-Optimized Layout**:
  - Desktop shining spotlight cursor effect on navigation links.
  - Collapsible, mobile-first navigation dock with icon badges.
  - Adaptive layout restructuring across tablets and mobile viewports.
- **🎬 Scroll Choreography & Viewport Triggers**:
  - Lightweight custom Intersection Observer hook (`useIsIntersecting`) coordinating element reveals with `framer-motion`.
  - Smooth page section jumping with `react-scroll`.
- **📊 Telemetry & Analytics**:
  - Integrated with Google Analytics 4 (`react-ga4`) for pageview and 3D interaction tracking.

---

## 🚀 Featured Projects Highlighted

| Project | Description | Tech Stack |
| :--- | :--- | :--- |
| **[CamX](https://github.com/uncannyRishabh/camx)** | Open-source Android camera app capable of leveraging auxiliary sensors (ultrawide, telephoto, macro) with manual controls. | `Android`, `Java`, `Camera2 API`, `MLKit`, `RxJava` |
| **[Portfolio](https://github.com/uncannyRishabh/portfolio)** | This responsive single-page web portfolio featuring interactive 3D WebGL meshes and custom physics hooks. | `React`, `Three.js`, `Framer Motion`, `styled-components` |
| **[ERS](https://github.com/uncannyRishabh/ERS)** | Exam Registration System mobile app enabling students without PCs to register for exams and generate verified hall tickets. | `Android`, `Java`, `Firebase` |

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 17, React DOM
- **3D Graphics & Canvas**: Three.js (`^0.140.2`), `@react-three/fiber`, `@react-three/drei`, `three-stdlib`
- **Animations & Physics**: `@react-spring/three`, `react-spring`, `framer-motion`, `lottie-web`
- **Styling**: `styled-components` (CSS-in-JS), CSS variables
- **Navigation & Scrolling**: `react-scroll`, `react-router-dom`
- **Analytics**: `react-ga4`
- **Deployment & Hosting**: GitHub Pages via `gh-pages`

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets, HTML template, favicon & manifest
│   ├── index.html          # HTML entry point with meta tags & Google fonts
│   └── site.webmanifest    # PWA web manifest
├── src/
│   ├── assets/             # Images, icons, color palettes, fonts, Lottie animations
│   ├── component/          # Modular React components
│   │   ├── navbar/         # Navigation header, Lottie dark mode toggle
│   │   ├── heroSection/    # Hero banner & interactive CustomSphere 3D canvas
│   │   ├── aboutMe/        # Bio description & 3D rotating WordCloud canvas
│   │   ├── projects/       # Project cards with interactive links & previews
│   │   ├── experience/     # Interactive experience section
│   │   ├── contact/        # Direct email CTA & social media links
│   │   └── footer/         # Footer banner & attribution
│   ├── utils/              # Custom hooks (IntersectionObserver)
│   ├── App.js              # Main application root & dark-mode provider
│   └── index.js            # React DOM bootstrap
├── package.json            # Project dependencies and build scripts
└── README.md               # Project documentation
```

---

## 💻 Local Development Setup

### Prerequisites

- **Node.js**: v16+ (tested up to Node.js v26 with Webpack 5)
- **npm**: v7+

### 1. Clone the repository

```bash
git clone https://github.com/uncannyRishabh/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Start development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for production

```bash
npm run build
```

This compiles optimized, minified production assets into the `build/` directory.

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This triggers the `predeploy` script (`npm run build`) and publishes the `build` folder directly to the `gh-pages` branch.

---

## 📄 License

```text
Portfolio
Copyright (C) 2021 uncannyRishabh

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
```
