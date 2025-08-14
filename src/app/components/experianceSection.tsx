import { workExperience } from '../data/experiance';

export default function ExperienceSection() {
  return (
    <section className="py-16 md:py-12 bg-transparent text-white max-w-4xl mx-auto md:border border-white rounded-xl md:bg-zinc-900/90 md:mt-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="relative border-l-2 border-sky-500 ml-4 md:ml-0">
          {workExperience.map((entry) => (
            <div key={entry.id} className="mb-12 pl-8 relative">
              
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 bg-sky-500 rounded-full border-4 border-gray-900"></div>

              <p className="text-gray-400 mb-1">{entry.period}</p>
              <h3 className="text-xl md:text-2xl font-bold text-sky-400">
                {entry.role}
              </h3>
              <h4 className="text-lg text-gray-200 mb-3">{entry.company}</h4>
              
              <ul className="list-disc list-inside text-white space-y-2">
                {entry.responsibilities.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}