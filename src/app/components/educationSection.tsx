import { educationHistory } from '../data/education';

export default function EducationSection() {
  return (
    <section className="py-8 md:py-10 bg-transparent text-white max-w-4xl mx-auto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-sky-400">
          Education
        </h2>
        
        <div className="grid gap-4">
          {educationHistory.map((entry) => (
            <div key={entry.id} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {entry.degree}
                  </h3>
                  <p className="text-sky-300 font-medium">{entry.institution}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <span className="text-sm text-zinc-400">{entry.year}</span>
                  {entry.GPA && (
                    <span className="text-sm text-zinc-300 font-medium">
                      GPA: {entry.GPA}
                    </span>
                  )}
                </div>
              </div>
              
              {entry.details && (
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {entry.details.map((detail, i) => (
                      <span 
                        key={i}
                        className="bg-zinc-800/70 text-zinc-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { EducationSection };