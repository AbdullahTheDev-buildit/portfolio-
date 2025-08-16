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
    <section className="py-16 md:py-12 bg-transparent text-white max-w-4xl mx-auto md:border border-white rounded-xl md:bg-zinc-900/90 md:mt-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>
        
        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
            <div key={category}>
              <h3 className="text-xl md:text-2xl font-semibold text-sky-400 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillsInCategory.map((skill) => (
                  <div key={skill.name} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md hover:shadow-sky-500/20 transition-shadow">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}