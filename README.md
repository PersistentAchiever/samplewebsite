# Restaurant Website — Local + GitHub Pages

## Run locally
1. Extract this ZIP.
2. Open `index.html` directly in Chrome/Edge, OR run a local server:
   - VS Code: install Live Server and open `index.html`.
   - Python: `python -m http.server 8000`
   - Then visit `http://localhost:8000`

## Customize
- Edit restaurant name, address, phone, hours and links in `index.html`.
- Replace the image URLs in `style.css` with your own restaurant/food photos.
- For local images, put them in `assets/` and use paths such as:
  `url("assets/ambience-1.jpg")`
- Replace each `₹ —` with your real price.
- Add the full menu by copying a `.dish` card.

## GitHub Pages
Create a GitHub repository, upload `index.html`, `style.css`, `script.js`, and `assets/`.
Then go to Settings → Pages → Deploy from branch → select `main` and `/ (root)`.
Your site will then be available at the GitHub Pages URL shown by GitHub.

## Important
The starter site uses remote Unsplash images so it looks good immediately. For the final restaurant website, replace them with your own licensed restaurant and food photos.
