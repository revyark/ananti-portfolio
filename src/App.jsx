import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react'; // Using lucide-react for icons

const App = () => {
  // --- DATA ---
  const projects = [
    {
      title: "Staybooker",
      description: "Developed my full stack skills by building a property listing website where one can host and book properties",
      details: "Tech Stack: React.j,Flask,sqlite,stripe",
      link: "https://github.com/revyark/Property-listing-website"
    },
    {
      title: "Cars Only Website",
      description: "Cars gallery website for car enthusiasts",
      details: "Tech Stack: HTML5, CSS3, JavaScript (Vanilla),Unsplash API,Firebase",
      link: "https://revyark.github.io/CarsOnly-Website/"
    },
    {
      title: "Blockshield",
      description: "Hackathon Project-A blockchain-based, tokenized rate-limiting system that defends servers against bot abuse, spam, and DDoS attacks.I worked on smart contracts and backend",
      details: "Tech Stack: Frontend: React.js,Express.js,Solidity, Hardhat, Ethers.js,MongoDB,MetaMask",
      link: "https://github.com/revyark/vajra"
    },
    {
        title: "Feature Matching without the use of Machine Learning",
        description: "Using classical computer vision algorithms to find and connect corresponding points of interest between two different images",
        details: "Tech Stack: Language- Python,Libraries- OpenCV-Python (for feature detection/matching), NumPy (for numerical operations), Matplotlib (for visualization)",
        link: "https://github.com/revyark/Feature-Matching_Without-ML"
    },
    {
        title: "Cost Optimisation of power system networks",
        description: "Designing a power system networks,running simulations and optimisting the cost of power flow while upholding the security constraints",
        details: "Tech Stack: GAMS Software,Power world Simulator",
        link: "https://github.com/revyark/GAMS-Cost_optimisation_project"
    }
  ];

  const skills = ["React", "Node.js", "Express", "MySQL", "JavaScript", "Next.js", "Tailwind CSS", "Git", "Figma", "Firebase","Flask","Hardhat","Solidity","GAMS Software"];
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Tycho-Tecnologies",
      duration: "May 2025 - June 2025",
      description: "Developing and maintaining web applications , contributing to both front-end and back-end development cycles and collaborating with a team to build scalable features."
    },
    {
      title: "Joint Secretary",
      company: "Cloudops",
      duration: "August 2024-Present",
      description: "Leveraging my technical background in cloud operations to understand and guide projects"
    },
    {
      title: "Project Intern",
      company: "GRID India",
      duration: "June 2024 - July 2024",
      description: "Cost optimisation of power system networks upholding the security constraints in GAMS Software."
    }
  ];
  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech in Computer Science",
      duration: "2023 - 2027",
      percentage: "9.27 cgpa"
    },
    {
      institution: "Delhi Public School RK Puram",
      degree: "Senior Secondary",
      duration: "2020 - 2022", 
      percentage: "93.4%"
    },
    {
      institution: "Delhi Public School RK Puram",
      degree: "Secondary",
      duration: "2018 - 2020", 
      percentage: "96.8%"
    }
  ];
  const socialLinks = {
    github: "https://github.com/revyark",
    linkedin: "https://www.linkedin.com/in/ananti24/"
  };

  // --- COMPONENTS ---

  // Typing Animation Component
  const TypingEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (isTyping && displayedText.length < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, displayedText.length + 1));
            }, 100);
        } else {
            setIsTyping(false);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, text, isTyping]);
    
    return <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{displayedText}</span>;
  };
  
  // Project Flip Card Component
  const FlipCard = ({ project }) => (
    <div className="group h-64 w-full [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900/80 backdrop-blur-lg rounded-xl p-6 text-center flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-400 mt-2">{project.description}</p>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-base">{project.details}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-md bg-purple-600 py-2 px-4 text-sm font-semibold hover:bg-purple-700 transition-colors duration-300">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Section Component for consistent styling
  const Section = ({ title, children, id }) => (
      <section id={id} className="mb-24 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{title}</h2>
          {children}
      </section>
  );

  return (
    <div className="bg-[#0d1117] text-gray-300 font-sans leading-relaxed">
        {/* --- HERO SECTION --- */}
        <header className="h-screen flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">
                Ananti
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
                <TypingEffect text="I build cool things for the web." />
            </h2>
            <div className="flex space-x-6">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                    <Github size={32} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
                    <Linkedin size={32} />
                </a>
            </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="container mx-auto px-8">
            <Section title="About Me" id="about">
                <p className="max-w-3xl mx-auto text-lg text-center leading-relaxed">
                    I'm a passionate Full Stack Developer with a love for creating intuitive, dynamic, and high-performance web applications. I thrive on solving complex problems and I'm always eager to dive into new technologies and frameworks. My goal is to build products that not only work flawlessly but also provide an exceptional user experience.
                </p>
            </Section>

            <Section title="Skills" id="skills">
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map(skill => (
                        <span key={skill} className="bg-gray-800 text-purple-300 text-lg font-medium py-2 px-5 rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1">
                            {skill}
                        </span>
                    ))}
                </div>
            </Section>

            <Section title="Projects" id="projects">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map(project => <FlipCard key={project.title} project={project} />)}
                </div>
            </Section>

            <Section title="Experience" id="experience">
                 <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto transition-shadow duration-300 hover:shadow-purple-500/20">
                    {experiences.map(exp => (
                        <div key={exp.title}>
                            <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                            <p className="text-purple-400 text-lg">{exp.company} | {exp.duration}</p>
                            <p className="mt-2 text-gray-400 leading-relaxed">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Education" id="education">
                <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg max-w-3xl mx-auto transition-shadow duration-300 hover:shadow-purple-500/20">
                    {education.map(edu => (
                        <div key={edu.institution}>
                            <h3 className="text-2xl font-semibold text-white">{edu.institution}</h3>
                            <p className="text-purple-400 text-lg">{edu.degree}</p>
                            <p className="text-gray-400">{edu.duration}</p>
                            {edu.percentage && <p className="text-gray-400">Percentage: {edu.percentage}</p>}
                        </div>
                    ))}
                </div>
            </Section>
        </main>
        
        {/* --- FOOTER --- */}
        <footer className="p-8 mt-24 text-center text-gray-500">
            <p>&copy; 2024 Ananti. Crafted with 💜</p>
        </footer>
        
        {/* This is a simple trick to make lucide-react work in this environment */}
        <script src="https://unpkg.com/lucide-react@0.292.0/dist/umd/lucide-react.min.js"></script>
    </div>
  );
};

export default App;