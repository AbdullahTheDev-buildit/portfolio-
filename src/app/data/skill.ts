
export type Skill = {
    name: string;
    category: 'Frontend' | 'Backend' | 'Databases' | 'Tools & Platforms' | 'App Dev';
};

export const skills: Skill[] = [
    // Frontend
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'shadcn', category: 'Frontend' },
    

    // App Dev
    { name: 'React Native', category: 'App Dev' },
    { name: 'tauri', category: 'App Dev' },
    { name: 'expo', category: 'App Dev' },
    

    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'dotnet', category: 'Backend' },

    // Databases
    { name: 'MongoDB', category: 'Databases' },
    { name: 'PostgreSQL', category: 'Databases' },

    // Tools & Platforms
    { name: 'Git & GitHub', category: 'Tools & Platforms' },
    { name: 'Vercel', category: 'Tools & Platforms' },
    { name: 'Docker', category: 'Tools & Platforms' },
    { name: 'Netlify', category: 'Tools & Platforms' },
    { name: 'Firebase', category: 'Tools & Platforms' },
    { name: 'supabase', category: 'Tools & Platforms' },
    { name: 'Linux', category: 'Tools & Platforms' },
];