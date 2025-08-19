import { socialLinks } from "../data/socials";

export default function ContactPage() {
  const yourEmail = "sahebabdullah7860@gmail.com"; 

  return (
    <main className="min-h-screen bg-transparent text-white flex items-center justify-center p-8 max-w-4xl mx-auto md:border border-white rounded-xl md:bg-zinc-900/90 pt-0">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
        </p>

        <a
          href={`mailto:${yourEmail}`}
          className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-600 transition-colors duration-300"
        >
          Say Hello
        </a>

        <div className="my-12">
          <p className="text-gray-400">Or connect with me on</p>
         
          <div className="flex justify-center gap-6 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

        
        <a
          href="/resume.pdf"
          download
          className="inline-block border-2 border-sky-500 text-sky-500 font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-500 hover:text-white transition-colors duration-300"
        >
          Download My Resume
        </a>
      </div>
    </main>
  );
}