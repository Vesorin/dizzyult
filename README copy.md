# The Dizzy Fansite

A React-based website for The Dizzy Fansite.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment to GitHub Pages

### Initial Setup:

1. Create a new repository on GitHub named `dizzyultadv`
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dizzyultadv.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select **"Deploy from a branch"**
   - Choose branch: **`gh-pages`**
   - Choose folder: **`/ (root)`**
   - Click **Save**

### Deploy Your Website:

After the initial setup, deploy your website with:

```bash
npm install
npm run deploy
```

This will:
1. Build your project
2. Deploy it to the `gh-pages` branch
3. Your site will be available at: `https://YOUR_USERNAME.github.io/dizzyultadv/`

### Future Updates:

Every time you make changes:
1. Commit your changes: `git add . && git commit -m "Your message"`
2. Push to main: `git push`
3. Deploy: `npm run deploy`

## Images

Place your images in the `public/images/` folder:
- `Header.Png` - Header background and character images
- `BackgroundMain.png` - Main content background

