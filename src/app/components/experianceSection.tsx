import { workExperience } from '../data/experiance';

export default function ExperienceSection() {
  return (
    <section className="py-8 md:py-10 bg-transparent text-white max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-sky-400">
          Experience
        </h2>
        
        <div className="grid gap-4">
          {workExperience.map((entry) => (
            <div key={entry.id} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {entry.role}
                  </h3>
                  <p className="text-sky-300 font-medium mb-1">{entry.company}</p>
                  <p className="text-sm text-zinc-400">{entry.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-sm text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
                    {entry.period}
                  </span>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="grid gap-2">
                  {entry.responsibilities.map((responsibility, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}