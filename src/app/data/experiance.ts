
export type ExperienceEntry = {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
};

export const workExperience: ExperienceEntry[] = [
    {
    id: 1,
    role: "Business Manager",
    company: "Zamms Closet",
    period: "Nov 2025 - Present",
    location: "Hyderabad, Telangana, India · onsite",
    responsibilities: [
      "Overseeing daily operations and managing business activities to ensure smooth functioning.",
      "Developing and implementing strategies to enhance customer satisfaction and drive sales growth.",
      "Coordinating with suppliers, vendors, and team members to optimize inventory management.",
      "Analyzing market trends and competitor activities to identify opportunities for business expansion."
    ],
  },{
    id: 2,
    role: "Business Analyst Intern",
    company: "Zamms Closet",
    period: "Aug 2025 - Oct 2025",
    location: "Hyderabad, Telangana, India · onsite",
    responsibilities: [
      "Conducted market research to identify trends and customer preferences in the fashion industry.",
      "Analyzed sales data to provide insights and recommendations for improving business strategies.",
      "Collaborated with cross-functional teams to develop and implement marketing campaigns.",
      "Assisted in the creation of business reports "
    ],
  },
  {
    id: 3,
    role: "Data & Operations Intern",
    company: "SFA",
    period: "sept 2024 - Nov 2024",
    location: "Hyderabad, Telangana, India · onsite",
    responsibilities: [
      "Maintained and updated the Salesforce database to ensure accuracy of records.",
      "Worked extensively with Excel for data organization and team's work management.",
      "Led a team of 3, assigning and monitoring tasks to ensure timely completion.",
      "Conducted on-site meetings with multiple school sports teams, and management to coordinate events."
    ],
  },
  {
    id: 4,
    role: "Campus Lead",
    company: "EdVenture Park",
    period: "Nov 2024 - Present",
    location: "Hyderabad, Telangana, India · Hybrid",
    responsibilities: [
      "Driving campus entrepreneurship activities for EdVenture Park.",
      "Contributing to the Founders Friday team to foster innovation and startup thinking.",
      "Engaging students in startup culture through workshops, events, and networking sessions."
    ],
  },
  {
    id: 5,
    role: "Campus Ambassador",
    company: "GeeksforGeeks",
    period: "Jan 2023 - Jan 2024",
    location: "Hyderabad, Telangana, India · Remote",
    responsibilities: [
      "Encouraged students to leverage GeeksforGeeks resources for competitive programming and learning.",
      "Coordinated events, webinars, and problem-solving sessions.",
      "Facilitated communication between the GeeksforGeeks community and the student body."
    ],
  },
  {
    id: 6,
    role: "Campus Ambassador",
    company: "Coding Ninjas",
    period: "July 2023 - Dec 2023",
    location: "Hyderabad, Telangana, India · Remote",
    responsibilities: [
      "Promoted Coding Ninjas programs and coding culture among peers.",
      "Organized coding contests and interactive sessions to increase engagement.",
      "Acted as the point of contact between students and the Coding Ninjas team."
    ],
  },
];