import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/public/HomePage.jsx";
import ProjectsPage from "../pages/public/ProjectsPage.jsx";
import JourneyPage from "../pages/public/JourneyPage.jsx";
import BlogPage from "../pages/public/BlogPage.jsx";
import ResumePage from "../pages/public/ResumePage.jsx";
import ContactPage from "../pages/public/ContactPage.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRouter;
