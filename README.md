# 🚀 Modern Portfolio Template by Souvik

A stunning, fully responsive portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion**. Create your own professional portfolio in minutes by simply updating the configuration file!

![Portfolio Preview](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC) ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF)

---

## 🎯 Quick Start - Edit Your Portfolio

### To Edit This Portfolio:
1. **Update your details** in `src/config/constants.js` - This single file contains all your personal information, skills, projects, and more!
2. **Add your images** to `public/assets/images/`
3. **Deploy** - Follow the [Firebase Hosting & GitHub Actions Deployment Guide](#-deployment-with-github-actions) below for automatic deployment

📖 **Detailed customization guide**: See [Customize Your Portfolio](#-customize-your-portfolio) section below

---

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism, gradients, and smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌙 **Dark Theme** - Professional dark mode design
- 📊 **Easy Customization** - Update one file to personalize everything
- 🔍 **SEO Optimized** - Proper meta tags and semantic HTML
- 🚀 **Firebase Ready** - Configured for Firebase Hosting deployment

## 📦 What's Included

- **Home Page** - Animated introduction with stats
- **About Page** - Bio, education, skills with category filtering, certifications, and services preview
- **Experience Page** - Professional work history
- **Projects Page** - Showcase your work with tech stack badges
- **Services Page** - Display your offered services (optional)
- **Responsive Navigation** - Desktop navbar and mobile drawer
- **Social Media Links** - Floating sidebar with all your profiles
- **Scroll to Top** - Smooth scroll button on long pages

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd souvikportfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - You'll see the splash screen, then the portfolio!

## 🎨 Customize Your Portfolio

### Step 1: Update Personal Information

Open `src/config/constants.js` and update the following sections:

#### 1. Social Media Links
```javascript
export const SOCIAL_LINKS = {
  email: 'your.email@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourhandle',
  instagram: 'https://www.instagram.com/yourhandle',
  facebook: 'https://fb.com/yourprofile',
};
```

#### 2. Personal Information
```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Professional Title',
  tagline: 'Your Catchy Tagline',
  professionDetails: `Your professional description...`,
  imagePath: '/assets/images/your-photo.jpg',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
  location: 'Your City, Country',
  yearsOfExperience: '5+',
};
```

**📝 Note for Resume URL:**
1. Upload your resume to Google Drive
2. Right-click → Share → Change to "Anyone with the link"
3. Copy the link (format: `https://drive.google.com/file/d/FILE_ID/view`)
4. Extract the `FILE_ID` from the URL
5. Use format: `https://drive.google.com/uc?export=download&id=FILE_ID`

#### 3. About Section
```javascript
export const ABOUT = {
  whoAmI: `Write your bio here.
  
Technical Expertise:
• Backend: Your backend skills
• Frontend: Your frontend skills
• Mobile: Your mobile skills
...`,
};
```

#### 4. Services (Optional)
```javascript
export const SERVICES = [
  {
    icon: '🎨',
    title: 'Service Name',
    description: 'Service description',
  },
  // Add more services...
];
```

#### 5. Certifications
```javascript
export const CERTIFICATIONS = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    credentialUrl: 'https://credential-url.com',
    logo: 'https://logo-url.png',
    description: 'Brief description',
  },
];
```

#### 6. Education
```javascript
export const EDUCATION = [
  {
    degree: 'Your Degree (Year Range)',
    institution: 'Institution Name',
    score: 'GPA/Percentage',
  },
  // Add more education entries...
];
```

#### 7. Skills
```javascript
export const SKILLS = [
  { name: 'Skill Name', percentage: 90, category: 'Backend' },
  // Categories: Backend, Frontend, Mobile, AI/ML, DevOps, Cloud, Database
];
```

#### 8. Experience
```javascript
export const EXPERIENCES = [
  {
    companyLogo: '/assets/images/company-logo.png',
    companyName: 'Company Name',
    role: 'Your Role',
    description: `Job description...`,
    duration: 'Month Year - Present',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
];
```

#### 9. Projects
```javascript
export const PROJECTS = [
  {
    name: 'Project Name',
    logo: '/assets/images/project-logo.png',
    description: `Project description...`,
    technologies: ['React', 'Node.js', 'MongoDB'],
    url: 'https://github.com/yourusername/project',
    featured: true, // Set to true for important projects
  },
];
```

#### 10. Stats (Homepage)
```javascript
export const STATS = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Certifications', value: '3' },
];
```

### Step 2: Add Your Images

1. **Profile Photo**
   - Place your photo in `public/assets/images/`
   - Update `imagePath` in `PERSONAL_INFO`
   - Recommended size: 500x500px

2. **Company/Project Logos**
   - Add logos to `public/assets/images/`
   - Update paths in `EXPERIENCES` and `PROJECTS`

3. **Favicon**
   - Replace `public/favicon.ico` with your own

### Step 3: Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#6366F1',      // Main brand color
  secondary: '#14B8A6',    // Accent color
  background: '#111827',   // Page background
  // ... customize other colors
}
```

### Step 4: Update SEO

Edit `index.html` to update meta tags:

```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Name - Your Title" />
```

## 🎯 Navigation Customization

### Remove Services Page (if not needed)

If you don't want the Services page:

1. It's already removed from the navigation menu
2. Services preview still shows on About page
3. To completely remove: Delete `src/pages/Services.jsx` and remove the route from `src/App.jsx`

### Add New Pages

1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/layout/DesktopAppBar.jsx` and `MobileDrawer.jsx`
4. Add route constant in `src/config/constants.js`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

---

## 🔥 Deployment with GitHub Actions

### Automatic Deployment to Firebase Hosting

Set up automatic deployment so that every time you push to your GitHub repository, your portfolio automatically deploys to Firebase Hosting!

**📖 Reference Article**: [Firebase Hosting and Automatic Deployment with GitHub Actions](https://medium.com/swlh/firebase-hosting-and-automatic-deployment-with-github-actions-for-flutter-web-7713b00fb620)

### Step-by-Step Setup

#### 1. Prerequisites

- GitHub account
- Firebase account
- Firebase project created

#### 2. Install Firebase CLI

```bash
npm install -g firebase-tools
```

#### 3. Login to Firebase

```bash
firebase login
```

#### 4. Initialize Firebase in Your Project

```bash
firebase init hosting
```

**Configuration:**
- Select your Firebase project (or create a new one)
- **Public directory**: Enter `dist`
- **Single-page app**: Select `Yes`
- **Automatic builds with GitHub**: Select `Yes` (if prompted)
- **Overwrite index.html**: Select `No`

This will create:
- `firebase.json` - Firebase configuration
- `.firebaserc` - Firebase project settings

#### 5. Update `firebase.json`

Make sure your `firebase.json` looks like this:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

#### 6. Set Up GitHub Actions

##### A. Generate Firebase Token

```bash
firebase login:ci
```

This will generate a token. **Copy this token** - you'll need it for GitHub.

##### B. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_TOKEN`
5. Value: Paste the token from step A
6. Click **Add secret**

##### C. Create GitHub Actions Workflow Files

The project already includes two workflow files in `.github/workflows/`:

**1. `firebase-hosting-merge.yml`** - Deploys when you push to main branch

```yaml
name: Deploy to Firebase Hosting on merge
on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_TOKEN }}'
          channelId: live
          projectId: your-project-id
```

**2. `firebase-hosting-pull-request.yml`** - Creates preview for pull requests

```yaml
name: Deploy to Firebase Hosting on PR
on: pull_request

jobs:
  build_and_preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Firebase Preview
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_TOKEN }}'
          projectId: your-project-id
```

##### D. Update Workflow Files

1. Open `.github/workflows/firebase-hosting-merge.yml`
2. Replace `your-project-id` with your actual Firebase project ID
3. Do the same for `firebase-hosting-pull-request.yml`

**To find your Firebase Project ID:**
- Check `.firebaserc` file, or
- Go to Firebase Console → Project Settings

#### 7. Push to GitHub

```bash
git add .
git commit -m "Setup Firebase deployment"
git push origin main
```

#### 8. Watch the Magic! ✨

1. Go to your GitHub repository
2. Click on **Actions** tab
3. You'll see your workflow running
4. Once complete, your site is live!

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

Your site will be live at: `https://your-project-id.web.app`

---

### Deploy to Other Platforms

#### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on every push

#### Netlify
1. Drag and drop the `dist` folder to Netlify
2. Or connect GitHub repo for automatic deployment
3. Build command: `npm run build`
4. Publish directory: `dist`

#### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

### 🎯 Deployment Checklist

Before deploying, make sure you've:

- ✅ Updated all content in `src/config/constants.js`
- ✅ Added your images to `public/assets/images/`
- ✅ Updated SEO meta tags in `index.html`
- ✅ Tested locally with `npm run dev`
- ✅ Built successfully with `npm run build`
- ✅ Added Firebase token to GitHub secrets (for GitHub Actions)
- ✅ Updated Firebase project ID in workflow files

### 🔄 Updating Your Live Site

With GitHub Actions set up:

1. Make changes to `src/config/constants.js` or any files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. GitHub Actions automatically builds and deploys
4. Your site updates in ~2-3 minutes!


## 📁 Project Structure

```
souvikportfolio-react/
├── public/
│   ├── assets/
│   │   ├── images/          # Your images here
│   │   └── fonts/           # Custom fonts
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── about/           # About page components
│   │   ├── common/          # Shared components
│   │   ├── experience/      # Experience components
│   │   ├── home/            # Home page components
│   │   ├── layout/          # Navigation, drawer
│   │   ├── projects/        # Project components
│   │   └── services/        # Services components
│   ├── config/
│   │   └── constants.js     # ⭐ UPDATE THIS FILE
│   ├── hooks/
│   │   └── useResponsive.js # Responsive breakpoints
│   ├── pages/               # Page components
│   ├── App.jsx              # Main app & routing
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── firebase.json            # Firebase config
├── tailwind.config.js       # Tailwind customization
├── vite.config.js           # Vite configuration
└── package.json
```

## 🎨 Design Features

### Animations
- Fade in/out transitions
- Slide animations
- Hover effects with scale and glow
- Typewriter effect on home page
- Smooth scroll behavior
- Floating background gradients

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (<600px), Tablet (600-1024px), Desktop (>1024px)
- Adaptive navigation (drawer on mobile, navbar on desktop)
- Responsive typography
- Flexible grid layouts

### Modern UI Elements
- Glassmorphism cards
- Gradient backgrounds
- Neon glow effects
- Shimmer animations on skill bars
- Rotating gradient borders
- Floating particles
- Blur effects

## 🛠️ Tech Stack

- **Framework**: React 18.x
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router v6
- **Typewriter**: react-type-animation
- **Loading**: react-spinners

## 📝 Tips for Best Results

1. **Images**
   - Use high-quality images (at least 500x500px for profile)
   - Optimize images before uploading (use TinyPNG or similar)
   - Use consistent image formats (PNG for logos, JPG for photos)

2. **Content**
   - Keep descriptions concise and impactful
   - Use bullet points for better readability
   - Highlight your best projects and achievements
   - Update stats regularly

3. **SEO**
   - Use descriptive titles and meta descriptions
   - Include relevant keywords
   - Add alt text to images
   - Keep URLs clean and descriptive

4. **Performance**
   - Minimize image sizes
   - Remove unused dependencies
   - Test on multiple devices
   - Use Lighthouse for performance audits

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check file paths are correct (case-sensitive)
- Ensure images are in `public/assets/images/`
- Use absolute paths starting with `/`

## 📄 License

This project is open source and available for anyone to use for their personal portfolio.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them!

## 💬 Support

If you have questions or need help:
1. Check the `constants.js` file comments
2. Review this README
3. Check the component files for examples

## 🎉 Credits

- Design & Development: Souvik Ghosh
- Built with React + Tailwind CSS
- Animations by Framer Motion

---

**Made with ❤️ and React**

Ready to create your portfolio? Just update `src/config/constants.js` and you're good to go! 🚀
