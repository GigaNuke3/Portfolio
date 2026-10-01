export type Experience = {
  type: "experience" | "education";
  mark: string;
  accession: string;
  role: string;
  org: string;
  period: string;
  tech: string;
  summary?: string;
  bullets?: string[];
};

export const experience: Experience[] = [
  {
    type: "experience",
    mark: "2025",
    accession: "ACC. 2025-01",
    role: "Salesforce Virtual Intern",
    org: "SmartBridge · Remote",
    period: "September 2025 – December 2025",
    tech: "CRM · Apex · LWC · Declarative Automation",
    bullets: [
      "Completed an 8-week Salesforce virtual internship covering CRM fundamentals, platform development, and system configuration.",
      "Built hands-on experience with data & security modeling, declarative automation, Apex, Lightning Web Components (LWC), and Visualforce.",
      "Built and configured Salesforce components, applying automation, security, and CRM best practices throughout.",
      "Wrapped up with a capstone project combining Salesforce automation, security, and CRM solutions to solve a real-world business scenario.",
    ],
  },
  {
    type: "experience",
    mark: "2026",
    accession: "ACC. 2026-01",
    role: "IT Support Intern",
    org: "TESDA Provincial Office · Oriental Mindoro, Philippines",
    period: "March 2026 – June 2026",
    tech: "IT Support · Troubleshooting · Documentation",
    bullets: [
      "Assisted with day-to-day office operations — client support, troubleshooting, reporting, and keeping inventory documentation up to date.",
      "Reviewed and processed accreditation and assessment paperwork in line with office procedures and accuracy requirements.",
      "Organized and tracked inventory, from toolkit distribution and labeling to general asset management.",
      "Troubleshot and fixed printer, scanner, and basic network issues to keep the office running without interruption.",
    ],
  },
  {
    type: "education",
    mark: "BSIT",
    accession: "ACC. EDU-01",
    role: "Bachelor of Science in Information Technology",
    org: "Polytechnic University of the Philippines · Bansud Campus, Oriental Mindoro",
    period: "Undergraduate degree",
    tech: "Information Technology",
    summary: "BSIT graduate.",
  },
];
