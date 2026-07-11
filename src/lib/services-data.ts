export interface Service {
  slug: string;
  title: string;
  image: string;
  descriptor: string;
  summary: string;
  scope: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "become-entrepreneur",
    title: "Become an Entrepreneur",
    image: "https://cashyambhatia.com/images/card-1.png",
    descriptor:
      "Company registration, MSME certification, and startup structuring made simple.",
    summary:
      "Structured guidance for new business formation — from choosing the right entity to first-year compliance.",
    scope: [
      "Private Limited / LLP / OPC registration",
      "MSME / Udyam registration",
      "PAN / TAN / GST setup",
      "Startup India recognition",
      "Opening current accounts",
      "MCA compliance calendar",
    ],
  },
  {
    slug: "gst",
    title: "GST Compliance",
    image: "https://cashyambhatia.com/images/card-2.png",
    descriptor:
      "End-to-end GST registration, filing, reconciliation, and advisory.",
    summary:
      "Complete GST lifecycle management for businesses of all sizes.",
    scope: [
      "GST registration",
      "Monthly / quarterly return filing (GSTR-1, 3B)",
      "Input Tax Credit reconciliation",
      "E-way bill compliance",
      "GST audit & notices",
      "Anti-profiteering advisory",
    ],
  },
  {
    slug: "itr-audit-nri",
    title: "ITR, Audit & NRI Taxation",
    image: "https://cashyambhatia.com/images/card-3.png",
    descriptor:
      "Individual and corporate income tax returns, statutory audits, and NRI tax advisory.",
    summary:
      "Accurate income tax filing, statutory audits, and cross-border tax advisory for NRIs.",
    scope: [
      "Individual & corporate ITR filing",
      "Tax audit (44AB)",
      "Internal & statutory audits",
      "FEMA compliance",
      "NRI income tax advisory",
      "DTAA benefit claims",
      "Repatriation structuring",
    ],
  },
  {
    slug: "government-subsidies",
    title: "Government Subsidies & Finance",
    image: "https://cashyambhatia.com/images/card-4.png",
    descriptor:
      "Subsidy identification, loan facilitation, and government scheme advisory for businesses.",
    summary:
      "Identifying and unlocking government schemes, subsidies, and credit facilities for businesses.",
    scope: [
      "MSME credit-linked subsidies",
      "PMEGP / MUDRA loans",
      "Export promotion schemes",
      "State government subsidies (MP)",
      "Project report preparation",
      "Bank loan liaison",
    ],
  },
  {
    slug: "uae-vat-ct",
    title: "UAE VAT & Corporate Tax",
    image: "https://cashyambhatia.com/images/card-5.png",
    descriptor:
      "UAE VAT registration, return filing, and Corporate Tax compliance for Indian businesses operating in the UAE.",
    summary:
      "Full UAE tax compliance for Indian businesses and individuals operating in the United Arab Emirates.",
    scope: [
      "UAE VAT registration & deregistration",
      "VAT return filing (FTA)",
      "Input tax recovery",
      "UAE Corporate Tax registration",
      "CT return filing",
      "Transfer pricing advisory",
      "Voluntary disclosure filings",
    ],
  },
  {
    slug: "outsourcing",
    title: "Outsourcing Services",
    image: "https://cashyambhatia.com/images/card-1.png",
    descriptor:
      "Bookkeeping, payroll processing, and MIS reporting for businesses that need a reliable back-office partner.",
    summary:
      "A reliable back-office partner for bookkeeping, payroll, and MIS reporting.",
    scope: [
      "Cloud bookkeeping (Tally / Zoho)",
      "Monthly MIS reports",
      "Payroll processing & compliance",
      "TDS deduction & filing",
      "Financial statement preparation",
      "Virtual CFO services",
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
