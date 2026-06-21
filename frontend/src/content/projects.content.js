export const projectCategories = [
  {
    label: "CA / Finance",
    value: "finance",
    description:
      "Real accounting, reporting, Excel automation, dashboarding, MIS, and finance workflow projects.",
  },
  {
    label: "Development",
    value: "development",
    description:
      "Full-stack development, SaaS builds, MERN projects, and product engineering work.",
  },
];

export const projects = [
  {
    id: "customer-wise-pl-dashboard",
    title: "Customer-wise P&L MIS + Interactive Dashboard",
    category: "finance",
    type: "MIS System",
    status: "Used in real business",
    year: "2026",
    featured: true,
    summary:
      "A real-world MIS system built during articleship for a mid-sized company with around 10M USD annual turnover. It converts messy monthly reporting into a 2–4 minute refresh workflow.",
    description:
      "The system includes a customer-wise P&L statement and a fully interactive dashboard showing important business KPIs and charts controlled by month and year slicers. Users can view both monthly and YTD performance. The process now only requires downloading a custom Xero report, pasting it into the master table, and clicking Refresh All.",
    impact: [
      "Reduced a messy manual reporting process into a 2–4 minute workflow.",
      "Supports monthly and YTD analysis.",
      "Used by a real mid-sized company.",
      "Built custom Xero report flow and Excel refresh system.",
    ],
    tools: ["Excel", "Power Query", "Pivot Tables", "Slicers", "Xero", "MIS"],
    links: {
      view: "",
      try: "",
      source: "",
    },
    media: {
      image: "",
      drive: "",
    },
  },
  {
    id: "finfile-tools",
    title: "FinFile Tools",
    category: "development",
    type: "Finance SaaS",
    status: "In development",
    year: "2026",
    featured: true,
    summary:
      "A finance-focused document utility SaaS for PDF, Excel, OCR, document parsing, cleanup, and reconciliation workflows.",
    description:
      "FinFile Tools is being built as a modern utility platform for accountants and finance professionals. The product focuses on document conversion, OCR scanning, PDF/image to Excel extraction, reconciliation, and AI-assisted workflow utilities.",
    impact: [
      "Finance/accounting-focused SaaS direction.",
      "Document parser and OCR workflow foundation.",
      "Frontend, backend, and document engine architecture.",
      "Built around real document-heavy accounting workflows.",
    ],
    tools: ["React", "Node.js", "Express", "Python", "Supabase", "Cloudinary"],
    links: {
      view: "",
      try: "https://finfile-tools-frontend.vercel.app/",
      source: "",
    },
    media: {
      image: "",
      drive: "",
    },
  },
];
