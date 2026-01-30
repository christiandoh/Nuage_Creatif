# William's Portfolio - Modern React.js with Glassmorphism

A stunning, fully responsive portfolio website built with React.js featuring an elegant glassmorphism design aesthetic.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 Design
- **Glassmorphism Effects**: Beautiful frosted glass aesthetic throughout
- **Dark/Light Theme**: Smooth theme switching with persistent state
- **Animated Background**: Dynamic gradient animations in hero section
- **Modern Typography**: Cormorant Garamond + DM Sans font pairing
- **Gradient Accents**: Indigo to pink gradient system

### 📱 Responsive Design
- **Desktop**: Full navigation, side theme switcher, grid layouts
- **Tablet**: Optimized layouts, touch-friendly interactions
- **Mobile**: 
  - Hamburger menu
  - **Floating circular navigation with rotating icons**
  - Single column layouts
  - Touch-optimized

### 🎯 Sections
1. **Hero**: Animated background, rotating gradient border, stats counter
2. **About**: Skills progress bars, core values, biography
3. **Services**: 6 service cards with Lucide icons
4. **Portfolio**: 6 project showcase cards
5. **Contact**: Multiple contact methods with glassmorphism
6. **Footer**: Navigation, services, social links

### 🔧 Technical Features
- Component-based architecture
- React Hooks (useState, useEffect, useRef)
- Smooth scroll navigation
- Intersection Observer for animations
- CSS Variables for theming
- Lucide React icons
- Modular CSS organization

## 📁 Project Structure

```
william-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FloatingNav.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   └── WhatsAppButton.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd william-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## 🎨 Customization Guide

### 1. Personal Information

**In `src/components/Contact.jsx`:**
```jsx
// Update contact details
<a href="https://wa.me/YOUR_NUMBER">
<a href="mailto:YOUR_EMAIL">
<a href="tel:YOUR_PHONE">
```

**In `src/components/Hero.jsx`:**
```jsx
// Update stats
const targets = { 
  projects: 50,  // Your number
  clients: 30,   // Your number
  experience: 5  // Your years
};

// Update profile image
<img src="YOUR_IMAGE_URL" />
```

### 2. Theme Colors

**In `src/styles/App.css`:**
```css
:root {
  --accent-light: #6366f1;  /* Primary color */
  --accent-dark: #818cf8;   /* Dark theme accent */
}
```

### 3. Typography

**Change fonts in `src/styles/App.css`:**
```css
@import url('YOUR_GOOGLE_FONTS_URL');

:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

### 4. Projects

**In `src/components/Portfolio.jsx`:**
```jsx
const projects = [
  {
    image: 'YOUR_PROJECT_IMAGE_URL',
    category: 'YOUR_CATEGORY',
    title: 'YOUR_PROJECT_TITLE',
    description: 'YOUR_DESCRIPTION'
  },
  // Add more projects...
];
```

### 5. Services

**In `src/components/Services.jsx`:**
```jsx
const services = [
  {
    icon: YourIcon,  // From lucide-react
    title: 'YOUR_SERVICE',
    description: 'YOUR_DESCRIPTION',
    features: ['Feature 1', 'Feature 2']
  },
  // Add more services...
];
```

### 6. Social Media Links

**In `src/components/Footer.jsx`:**
```jsx
<a href="https://YOUR_FACEBOOK">
<a href="https://YOUR_INSTAGRAM">
<a href="https://YOUR_LINKEDIN">
```

## 🎯 Key Components Explained

### Hero Component
- Stats counter animation
- Animated floating image
- Gradient rotating border
- Call-to-action buttons

### About Component
- Animated skill bars
- Core values with icons
- Professional biography

### Services Component
- Glassmorphism service cards
- Icon integration
- Feature lists

### Portfolio Component
- Project showcase grid
- Image hover effects
- Category badges

### FloatingNav Component (Mobile)
- Circular rotating icons
- Active state indication
- Smooth section scrolling

### Navbar Component
- Fixed position with scroll effect
- Theme switcher integration
- Mobile hamburger menu

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🎨 Design Philosophy

### Glassmorphism Implementation
- `backdrop-filter: blur(20px)`
- Semi-transparent backgrounds
- Subtle borders and shadows
- Layered visual hierarchy

### Color System
- Light theme: Clean white with indigo accents
- Dark theme: Deep navy with lighter accents
- Gradients: Indigo (#6366f1) to Pink (#ec4899)

### Animation Strategy
- CSS-only animations for performance
- Smooth transitions (0.3s ease)
- Scroll-triggered reveals
- Rotating elements on mobile navigation

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode

### `npm test`
Launches the test runner

### `npm run build`
Builds the app for production

### `npm run eject`
**Note: this is a one-way operation!**

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Note**: Glassmorphism effects require modern browsers with `backdrop-filter` support.

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.263.1"
}
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Lucide Icons](https://lucide.dev)
- [CSS Glassmorphism](https://glassmorphism.com)
- [Google Fonts](https://fonts.google.com)

## 🐛 Troubleshooting

### Images not loading
- Replace Unsplash URLs with your own hosted images
- Check CORS settings if using external image sources

### Theme not persisting
- Ensure localStorage is enabled in browser
- Check browser console for errors

### Mobile navigation not working
- Clear browser cache
- Check that JavaScript is enabled
- Verify responsive CSS media queries

## 📝 TODO / Roadmap

- [ ] Add contact form with validation
- [ ] Implement project detail modals
- [ ] Add blog section
- [ ] Create loading animations
- [ ] Add internationalization (i18n)
- [ ] Implement analytics tracking
- [ ] Add testimonials section
- [ ] Create case study pages

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is free to use for personal and commercial purposes.

## 👨‍💻 Author

**William** - Designer & Creative

- Email: koffi.troh@gmail.com
- WhatsApp: +225 05 03 72 93 40
- Location: Abidjan, Côte d'Ivoire

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

