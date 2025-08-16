

export type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Business Management Tool (Freelance)",
    description:
      "Enterprise-ready business management system for customer records, orders, tasks, billing (delivery challans, invoices), and transactions.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Vue.js", "MongoDB"],
  },
  {
    id: 2,
    name: "College Admission App (Freelance)",
    description:
      "Mobile app for streamlining my college's admission process, enabling admin staff to manage inquiries, registrations, and admission data efficiently.",
    tech: ["React Native", "Expo", "Supabase"],
  },
];

