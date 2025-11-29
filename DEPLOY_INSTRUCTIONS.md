# How to Publish Your Portfolio Website

To open your website on **any device** (phones, laptops, tablets) anywhere in the world, you need to **deploy** it to the internet. Here are the three best ways to do it:

## Option 1: Netlify Drop (Easiest & Fastest)
*Best for: Getting it online in 30 seconds.*

1.  Open your web browser and go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Open your File Explorer on your computer.
3.  Navigate to the folder: `c:\Users\darsh\.gemini\antigravity\playground\cryo-granule`
4.  **Drag and drop** the `portfolio-chatbot` folder directly onto the Netlify webpage.
5.  Wait a few seconds. Netlify will give you a **public URL** (e.g., `https://darshan-portfolio.netlify.app`).
6.  Share that link! You can open it on your phone or send it to anyone.

## Option 2: GitHub Pages (Professional)
*Best for: Long-term hosting and showing off your coding skills.*

1.  Create a new repository on GitHub (e.g., `my-portfolio`).
2.  Upload `index.html`, `style.css`, and `script.js` to that repository.
3.  Go to the repository **Settings** -> **Pages**.
4.  Under "Source", select `main` branch and click **Save**.
5.  GitHub will give you a link like `https://yourusername.github.io/my-portfolio`.

## Option 3: Local Network (Testing at Home)
*Best for: Testing on your phone while connected to the same Wi-Fi.*

1.  Open a terminal in the `portfolio-chatbot` folder.
2.  Run this command:
    ```bash
    python -m http.server 8000
    ```
3.  Find your computer's IP address (Run `ipconfig` in a new terminal and look for "IPv4 Address", e.g., `192.168.1.5`).
4.  On your phone, open Chrome/Safari and type: `http://192.168.1.5:8000` (replace with your actual IP).

---
**Note:** Since you removed the API key from the code, the chatbot will work perfectly in "Basic Mode" on the deployed version. If you want "Advanced AI" on the public web, you would need to re-add the key, but be careful as others could use your quota.
