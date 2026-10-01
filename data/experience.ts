export type Experience = {
  role: string;
  org: string;
  period: string;
  summary?: string;
  bullets?: string[];
  type: "experience" | "education";
};

export const experience: Experience[] = [
  {
    type: "experience",
    role: "Salesforce Virtual Intern",
    org: "SmartBridge · Remote",
    period: "September 2025 – December 2025",
    bullets: [
      "Completed an 8-week Salesforce virtual internship covering CRM fundamentals, platform development, and system configuration.",
      "Built hands-on experience with data & security modeling, declarative automation, Apex, Lightning Web Components (LWC), and Visualforce.",
      "Built and configured Salesforce components, applying automation, security, and CRM best practices throughout.",
      "Wrapped up with a capstone project combining Salesforce automation, security, and CRM solutions to solve a real-world business scenario.",
    ],
  },
  {
    type: "experience",
    role: "IT Support Intern",
    org: "TESDA Provincial Office · Oriental Mindoro, Philippines",
    period: "March 2026 – June 2026",
    bullets: [
      "Assisted with day-to-day office operations — client support, troubleshooting, reporting, and keeping inventory documentation up to date.",
      "Reviewed and processed accreditation and assessment paperwork in line with office procedures and accuracy requirements.",
      "Organized and tracked inventory, from toolkit distribution and labeling to general asset management.",
      "Troubleshot and fixed printer, scanner, and basic network issues to keep the office running without interruption.",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Science in Information Technology",
    org: "Polytechnic University of the Philippines (PUP)",
    period: "Education",
    summary: "BSIT graduate.",
  },
];
