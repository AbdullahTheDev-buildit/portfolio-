import { skills } from '../data/skill';

export default function SkillsSection() {
  const groupedSkills = skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section className="py-8 md:py-10 bg-transparent text-white max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-sky-400">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
            <div key={category} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsInCategory.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="bg-zinc-800/70 text-zinc-300 px-2 py-1 rounded text-sm font-medium hover:bg-sky-500/20 hover:text-sky-300 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}