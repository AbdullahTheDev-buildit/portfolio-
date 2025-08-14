export type educationEntry = {
  id: number;
  degree: string;
  institution: string;
  year: number;
  details?: string[];
  GPA?: number;
}


export const educationHistory : educationEntry[] = [
  {
    id: 1,
    degree: "Btech in Computer Science with specialization Data science",
    institution: "Global Institute of Engineering & Technology",
    year: 2026,
    details: [
      "Club President",
      "Vice class representative",
      "Won various coding competitions which include internal SIH"
    ]
  },
  {
    id: 2,
    degree: "Science (maths, physics, chemistry)",
    institution: "Narayana Junior College",
    year: 2022,
    GPA: 9.1
  },

  {
    id: 3,
    degree: "10th",
    institution: "Rising Sun High School",
    year: 2020,
    details: ["5 times class representative"],
    GPA: 10.0
  }

];