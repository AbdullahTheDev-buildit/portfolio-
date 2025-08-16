import Image from "next/image";
import RotatingText from "./components/ui/RotatingText";
import EducationSection from "./components/educationSection";
import ExperienceSection from "./components/experianceSection";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="min-h-screen text-white flex items-center justify-center p-6 pt-0 max-w-4xl mx-auto md:border border-white rounded-xl md:bg-zinc-900/90 md:mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/profile.jpeg"
              alt="A picture of Abdullah Mohd"
              width={300}
              height={300}
              className="rounded-full shadow-lg shadow-sky-500/20"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I&apos;m Abdullah Mohd 👋
            </h1>
            <h2 className="text-2xl md:text-3xl text-sky-400 mb-6 font-semibold">
              A Passionate
              <RotatingText
                texts={["Learner", "Developer", "Freelancer", "Teacher"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg max-w-fit"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
  I build <span className="text-sky-400 font-semibold">fast</span>, 
  <span className="text-sky-400 font-semibold"> reliable</span>, and 
  <span className="text-sky-400 font-semibold"> visually engaging</span> applications 
  <span className="text-sky-400 font-semibold"> tailored</span> to client needs. 
  With expertise across both <span className="text-sky-400 font-semibold">front-end aesthetics</span> 
  and <span className="text-sky-400 font-semibold">back-end systems</span>, I 
  <span className="text-sky-400 font-semibold"> transform complex challenges</span> into 
  <span className="text-sky-400 font-semibold"> smooth</span>, 
  <span className="text-sky-400 font-semibold"> functional</span>, and 
  <span className="text-sky-400 font-semibold"> user-friendly</span> digital experiences. 
  As a <span className="text-sky-400 font-semibold">freelancer</span>, I focus on delivering 
  <span className="text-sky-400 font-semibold"> quality</span>, 
  <span className="text-sky-400 font-semibold"> performance</span>, and 
  <span className="text-sky-400 font-semibold"> results</span> that 
  <span className="text-sky-400 font-semibold"> exceed expectations</span>.
</p>

          </div>
        </div>
      </main>
      <EducationSection />
      <ExperienceSection />
    </>
  );
}
