export const blogCategories = ["All", "Finance", "Development", "Product"];

export const blogPosts = [
  {
    id: "mis-system-2-minute-reporting",
    slug: "mis-system-2-minute-reporting",
    title: "How I turned a messy MIS report into a 2–4 minute workflow",
    category: "Finance",
    date: "2026",
    readTime: "4 min read",
    imageUrl: "",
    excerpt:
      "A real-world finance reporting project where a messy monthly MIS process was converted into a refresh-based Excel system using Xero exports, Power Query, pivot logic, slicers, and dashboarding.",
    tags: ["MIS", "Excel", "Xero", "Dashboard", "Finance"],
    content: [
      "During my articleship, I worked on a customer-wise profitability reporting system for a real mid-sized company with an annual turnover of around 10M USD. The report was originally messy, manual, and time-consuming. Every month required repeated cleanup, checking, formatting, and preparation before the final output could be reviewed.",
      "The goal was simple: make the report reliable, repeatable, and fast. I created a custom report flow from Xero, designed a master table structure in Excel, and built the reporting logic around refreshable components. Now the user only needs to download the custom Xero report till YTD, paste it into the master table, and click Refresh All.",
      "The system has two major parts. The first is a customer-wise P&L statement that helps analyze profitability across customers. The second is a fully interactive dashboard with key business metrics, KPIs, charts, and month/year slicers. The user can view a specific month or analyze YTD performance without manually rebuilding the report each time.",
      "What makes this project important to me is that it is not a dummy portfolio project. It is used in a real business context. It solved a practical reporting problem and reduced a process that previously felt messy into a clean 2–4 minute workflow.",
      "This project also showed me how powerful accounting knowledge becomes when combined with automation thinking. You do not always need a complex app to create value. Sometimes a well-structured Excel system, clean data flow, and thoughtful dashboard design can save hours every month.",
    ],
    metrics: [
      "2–4 minute refresh workflow",
      "Monthly and YTD reporting",
      "Customer-wise P&L",
      "Interactive KPI dashboard",
    ],
  },
  {
    id: "why-i-am-building-finfile-tools",
    slug: "why-i-am-building-finfile-tools",
    title: "Why I am building FinFile Tools",
    category: "Development",
    date: "2026",
    readTime: "4 min read",
    imageUrl: "https://res.cloudinary.com/dw5lnosfi/image/upload/v1782044857/Screenshot_2026-06-21_175714_fkwdmb.png",
    excerpt:
      "FinFile Tools is my attempt to build a finance-focused document utility SaaS for accountants, finance teams, and professionals who work with PDFs, Excel files, scanned documents, and reconciliation workflows.",
    tags: ["SaaS", "FinFile Tools", "OCR", "Documents", "React"],
    content: [
      "A large part of accounting and finance work still happens around documents. PDFs, scanned invoices, Excel files, statements, reports, images, and messy exports keep moving between people, systems, and clients. Many times, the work is not difficult because the accounting concept is hard. It becomes difficult because the files are messy.",
      "That is the reason I started building FinFile Tools. The idea is to create a clean, modern utility platform for finance and accounting professionals. Instead of treating document tools as random converters, FinFile Tools is being designed around real workflows: PDF/image to Excel, OCR extraction, document cleanup, reconciliation, review, and eventually AI-assisted finance utilities.",
      "The product is being built using a modern stack with React on the frontend, Node and Express on the backend, Supabase for backend services, Cloudinary for media handling, and a separate document engine for heavier parsing and OCR work. The goal is not to build a flashy tool. The goal is to build something that feels reliable, fast, and useful in real accounting work.",
      "One important principle behind FinFile Tools is that it should stay generic. Even though the product is finance-focused, users should be able to compare and process many kinds of documents. The system should understand names, dates, numbers, amounts, references, tables, parties, and identifiers without being hardcoded around one document type.",
      "For me, FinFile Tools is more than a development project. It connects my CA background with my interest in full-stack development. It is where accounting problems, SaaS product thinking, document engineering, and user experience all meet.",
    ],
    metrics: [
      "Finance-focused SaaS",
      "PDF/image to Excel workflow",
      "OCR and document parsing",
      "React + Node + document engine",
    ],
  },
];
