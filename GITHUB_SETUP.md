# Hosting on GitHub Pages

You are almost there! I have already set up the local "Git" repository for you.

Now, follow these **3 simple steps** to get your site online:

### Step 1: Create a Repository on GitHub
1.  Log in to your [GitHub account](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  Name it: `portfolio-chatbot` (or anything you like).
4.  Make sure it is **Public**.
5.  Click **Create repository**.

### Step 2: Connect and Push
Once created, GitHub will show you a page with commands. You only need to run these two lines in your terminal.

Copy and paste these commands into your terminal (one by one):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-chatbot.git
git branch -M main
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your actual GitHub username)*

### Step 3: Activate GitHub Pages
1.  Go to your new repository page on GitHub.
2.  Click on **Settings** (top tab).
3.  Scroll down (or look in the left sidebar) for **Pages**.
4.  Under **Source**, select `main` branch.
5.  Click **Save**.

Wait about 1-2 minutes, and GitHub will give you your **live website link**! 
(It will look like: `https://your-username.github.io/portfolio-chatbot/`)
