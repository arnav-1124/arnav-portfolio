import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function PageShell({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageShell;
