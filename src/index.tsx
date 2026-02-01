import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeEdited } from "./screens/HomeEdited";
import { Phases } from "./screens/Phases";
import { CaseStudy } from "./screens/CaseStudy";

import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeEdited />} />
        <Route path="/journey" element={<Phases />} />
        <Route path="/case-studies" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
