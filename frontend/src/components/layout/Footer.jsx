function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-soft)",
        padding: "28px 0",
        color: "var(--text-soft)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <span>© {new Date().getFullYear()} Arnav Gupta</span>
        <span>Created with care by Arnav.</span>
      </div>
    </footer>
  );
}

export default Footer;
