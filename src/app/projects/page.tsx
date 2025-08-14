import { projects } from '../data/project';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-white p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-shadow duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-sky-400 mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-sky-300 text-xs font-mono px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4">
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" className="text-white hover:text-sky-400 transition-colors">
                    GitHub
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" className="text-white hover:text-sky-400 transition-colors">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}