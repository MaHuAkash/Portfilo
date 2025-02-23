'use client';
import { motion } from 'framer-motion';
import { Cover } from "../../components/acernityui/cover";
import { 
  CodeBracketIcon,
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  CommandLineIcon,
  CircleStackIcon,
  CubeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';



const colorConfig = {
  midnightPurple: {
    gradient: 'from-gray-900 via-purple-900/80 to-gray-900',
    textGradient: 'from-purple-300 to-amber-300',
    border: 'border-purple-400/30',
    iconColor: 'text-purple-300',
    methodologyGradient: 'from-purple-900/40 to-amber-900/20',
    accent: 'amber-300',
    skillCard: 'bg-gradient-to-br from-purple-900/20 to-amber-900/10'
  }
};

const colorScheme = colorConfig.midnightPurple;

const skills = [
  {
    title: "Frontend Architecture",
    description: "React, Next.js, TypeScript, Framer Motion",
    icon: CodeBracketIcon,
    tech: "/pics/doler/a.jpg" // Add your image path
  },
  {
    title: "Backend Systems",
    description: "ASP.NET Core, REST APIs, Microservices",
    icon: ServerIcon,
    tech: "/pics/doler/a.jpg" // Add your image path
  },
  {
    title: "Database Design",
    description: "SQL, EF Core, Query Optimization",
    icon: CircleStackIcon,
    tech: "/pics/doler/a.jpg" // Add your image path
  },
  {
    title: "Cloud & DevOps",
    description: "Azure, CI/CD, Docker, Cloud Patterns",
    icon: CloudIcon,
    tech: "/pics/doler/a.jpg" // Add your image path
  },
  {
    title: "Architecture Patterns",
    description: "DDD, MVC, SOLID, Clean Architecture",
    icon: CubeIcon,
    tech: "/pics/doler/a.jpg" // Add your image path
  },
  {
    title: "Tooling & Practices",
    description: "Git, Agile, TDD, Performance Tuning",
    icon: WrenchScrewdriverIcon,
    tech: "/pics/doler/a.jpg" // Add your image path
  }
];

const AboutPage = () => {
  const yourName = "who am i?";
  const experience = new Date().getFullYear() - 2022;

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen bg-gradient-to-b ${colorScheme.gradient} text-amber-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
    >
      {/* Vintage noise overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Profile Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-28">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 ${colorScheme.border} shadow-2xl group hover:shadow-purple-500/30 transition-shadow duration-300`}
          >
            <AnimatePresence>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/pics/doler/b.jpg"
                  alt={yourName}
                  fill
                  priority
                  className="sepia hover:sepia-0 contrast-110 brightness-90 hover:brightness-100 transition-all duration-500 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/40" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 border-2 border-amber-300/20 pointer-events-none" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <motion.h1
              className={`text-6xl font-bold bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent font-serif tracking-tight`}
              whileHover={{ scale: 1.02 }}
            >
              {yourName}
            </motion.h1>
            
            <motion.p
              className={`text-3xl bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent font-mono`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Full-Stack Developer • {experience}+ Years Crafting Digital Solutions
            </motion.p>

            <motion.p
              className="text-xl text-purple-100 leading-relaxed max-w-2xl space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block">I architect full-cycle solutions that blend cutting-edge frontend experiences with 
              rock-solid backend infrastructure.</span>
              <span className="block mt-4 text-amber-200/90">Specializing in modern web ecosystems, I transform 
              complex requirements into scalable, maintainable systems with <span className="text-amber-400">pixel-perfect UI/UX</span> 
              and <span className="text-purple-300">enterprise-grade architecture</span>.</span>
            </motion.p>
          </motion.div>
        </div>

       

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-12 rounded-2xl ${colorScheme.methodologyGradient} backdrop-blur-sm border ${colorScheme.border} mb-28`}
        >
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-4 font-serif">
            <CpuChipIcon className={`h-10 w-10 ${colorScheme.iconColor}`} />
            <span className={`bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent`}>
              Development Tenets
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-8 bg-black/20 rounded-xl border ${colorScheme.border} hover:border-purple-400/50 transition-all`}
            >
              <h4 className={`text-2xl font-semibold mb-6 text-${colorScheme.accent} flex items-center gap-3`}>
                <CommandLineIcon className="h-8 w-8" />
                Code Craftsmanship
              </h4>
              <p className="text-purple-100/90 text-lg leading-relaxed">
                Architecting with <span className="text-amber-300">SOLID principles</span>, 
                <span className="text-purple-300"> DDD patterns</span>, and 
                <span className="text-amber-300"> clean architecture</span>. 
                Emphasis on maintainable, self-documenting code through 
                strategic abstraction layers.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-8 bg-black/20 rounded-xl border ${colorScheme.border} hover:border-purple-400/50 transition-all`}
            >
              <h4 className={`text-2xl font-semibold mb-6 text-${colorScheme.accent} flex items-center gap-3`}>
                <CloudIcon className="h-8 w-8" />
                Cloud-Native Mindset
              </h4>
              <p className="text-purple-100/90 text-lg leading-relaxed">
                Building <span className="text-amber-300">horizontally scalable</span> systems with 
                <span className="text-purple-300"> microservices</span>, 
                <span className="text-amber-300"> containerization</span>, and 
                <span className="text-purple-300"> serverless patterns</span>. 
                Implementing CI/CD pipelines for zero-downtime deployments.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.section 
  className="text-center mb-16"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-4xl font-extrabold text-white mb-4">
    Here’s <span className="text-purple-400"><Cover>What I Do</Cover></span>
  </h2>
  <p className="text-lg text-purple-200 max-w-2xl mx-auto">
    I craft elegant solutions and bring ideas to life with 
    <span className="font-semibold text-white"> code, creativity, and animations</span>.
  </p>

  <motion.section
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 max-w-7xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {skills.map((skill, index) => {
      // Assigning different colors dynamically
      const colors = ["text-blue-400", "text-green-400", "text-pink-400", "text-yellow-400", "text-red-400", "text-purple-400"];
      const iconColor = colors[index % colors.length];

      return (
        <motion.div
          key={skill.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className={`relative group rounded-2xl overflow-hidden ${colorScheme.skillCard} border border-gray-800 hover:border-purple-400/50 transition-colors shadow-lg`}
        >
          <div className="flex flex-col items-center p-8 space-y-6 text-center">
            <div className="flex flex-col items-center">
              <skill.icon className={`h-14 w-14 ${iconColor}`} />
              <h3
                className={`text-2xl font-bold mt-4 bg-gradient-to-r ${colorScheme.textGradient} bg-clip-text text-transparent`}
              >
                {skill.title}
              </h3>
            </div>
            <p className="text-purple-100/90 text-lg leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Hover Effect with Vintage Overlay */}
          <motion.div
            className="absolute inset-0 -z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-300 bg-black/50"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={skill.tech}
              alt={skill.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-500"
            />
          </motion.div>
        </motion.div>
      );
    })}
  </motion.section>
</motion.section>




      </div>
    </motion.div>
  );
};

export default AboutPage;





