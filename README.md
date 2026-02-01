# CairnShift Website v2

This is the repository for the CairnShift website, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation
1.  Clone the repo (if you haven't already).
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production
To create a production-ready build:
```bash
npm run build
```

---

## 📂 Project Structure

This project follows a component-based architecture.

*   **`public/`** - Static assets like `favicon.ico`, `robots.txt`, and images that don't need bundling.
*   **`src/`**
    *   **`components/`** - Reusable global components (e.g., `Header`, `ArrowForward`).
    *   **`screens/`** - The main page views using React Router.
        *   `HomeEdited/` - The Homepage.
        *   `Phases/` - "The Journey" page.
        *   `CaseStudy/` - "Proven Results" / Case Studies page.
    *   **`icons/`** - SVG icon components.

---

## ✍️ How to Make Edits

### 1. Editing Page Content
Each main page is located in `src/screens/`.
*   **Home Page**: `src/screens/HomeEdited/HomeEdited.tsx`
*   **The Journey**: `src/screens/Phases/Phases.tsx`
*   **Case Studies**: `src/screens/CaseStudy/CaseStudy.tsx`

These "Screen" files act as wrappers that assemble various **Sections**.

### 2. Editing Specific Sections (Text & Layout)
To edit specific parts of a page (like "The Engines", "Hero", or "Footer"), navigating into the `sections` folder within that screen's directory.

**Example: Editing the Home Page "Engines" section**
1.  Go to `src/screens/HomeEdited/sections/`.
2.  Identify the component (e.g., `FrameWrapper.tsx` contains "The Engines").
3.  Edit the text or HTML directly in the `.tsx` file.

**Common Sections:**
*   `Header`: Located in `src/components/Header/Header.tsx` (Global navigation).
*   `Container.tsx`: Often used for the Footer/Bottom navigation links in each screen folder.
*   `HowWeWork`: The Accordion component on the Home Page.

### 3. Styling (Tailwind CSS)
We use [Tailwind CSS](https://tailwindcss.com/) for styling. You will see classes like `flex`, `p-10`, `bg-[#15353c]`, etc.
*   **To change colors**: Edit the `bg-[color]` or `text-[color]` classes.
*   **To change spacing**: Edit `margin` (`m-4`) or `padding` (`p-4`) classes.
*   **Responsive Design**: Use prefixes like `md:`, `lg:` (e.g., `lg:w-full`) to apply styles only on larger screens.

### 4. Adding Images
*   Place images in `src/assets/` (if importing in JS) or `public/img/` (for static reference).
*   Use standard `<img>` tags or import them at the top of the file:
    ```tsx
    import myImage from "../../assets/image.png";
    // ...
    <img src={myImage} alt="Description" />
    ```

### 5. Navigation & Links
*   **Internal Links**: Use the `<Link>` component from `react-router-dom`.
    ```tsx
    import { Link } from "react-router-dom";
    <Link to="/journey">The Journey</Link>
    ```
*   **External Links**: Use standard `<a>` tags with `target="_blank"`.
    ```tsx
    <a href="https://cal.com/..." target="_blank">Book Now</a>
    ```
