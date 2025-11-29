# Deploying to Vercel

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub to connect)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Click **"Deploy"**
6. Your site will be live in ~2 minutes!

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Deploy

```bash
# From your project directory
cd /Users/human1/Documents/HFU/Portfolio

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

---

## Important Notes

1. **Resume PDF**: Make sure your `resume.pdf` file is in the `public/` folder before deploying
2. **Environment Variables**: Not needed for this project
3. **Build Settings**: Vercel auto-detects Next.js, no configuration needed
4. **Custom Domain**: You can add a custom domain in Vercel dashboard after deployment

---

## After Deployment

- Your site will be live at: `https://your-project-name.vercel.app`
- Every push to main branch will auto-deploy
- You can preview deployments from other branches

