import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/public/HomePage.jsx";
import ProjectsPage from "../pages/public/ProjectsPage.jsx";
import JourneyPage from "../pages/public/JourneyPage.jsx";
import BlogPage from "../pages/public/BlogPage.jsx";
import ResumePage from "../pages/public/ResumePage.jsx";
import ContactPage from "../pages/public/ContactPage.jsx";

import AdminLayout from "../components/admin/AdminLayout.jsx";
import ProtectedAdminRoute from "../components/admin/ProtectedAdminRoute.jsx";
import AdminContactMessagesPage from "../pages/admin/AdminContactMessagesPage.jsx";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage.jsx";
import AdminLoginPage from "../pages/admin/AdminLoginPage.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route element={<ProtectedAdminRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route
            path="contact-messages"
            element={<AdminContactMessagesPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
