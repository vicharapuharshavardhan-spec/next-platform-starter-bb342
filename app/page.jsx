"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Settings, 
  ChevronRight, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink,
  Layers
} from "lucide-react";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = [];
    const particleCount = Math.floor((width * height) / 15000);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(6, 182, 212, 0.1)"; // cyan-500 equivalent

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 - dist / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mouseDist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.3 - mouseDist / 500})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

const SectionHeading = ({ number, title, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-4 mb-12"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 backdrop-blur-sm">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-4">
      <span className="text-cyan-400 font-mono text-xl">{number}.</span> 
      {title}
    </h2>
    <div className="h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow ml-4"></div>
  </motion.div>
);

export default function AdvancedPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden font-sans relative">
      <InteractiveBackground />
      
      {/* Custom Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Nav */}
      <nav className="fixed hidden lg:flex flex-col right-8 top-1/2 -translate-y-1/2 gap-6 z-50">
        {[
          { id: "#hero", label: "Start" },
          { id: "#skills", label: "Skills" },
          { id: "#experience", label: "Experience" },
          { id: "#projects", label: "Projects" },
          { id: "#education", label: "Education" },
          { id: "#contact", label: "Contact" },
        ].map((item, index) => (
          <a
            key={item.id}
            href={item.id}
            className="group relative flex items-center justify-end w-32"
          >
            <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono text-cyan-400 mr-2">
              {item.label}
            </span>
            <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-300"></div>
          </a>
        ))}
      </nav>

      <main className="container mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20 pb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-mono text-sm mb-8 w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Strategic Opportunities
            </div>
            
            <motion.p 
              className="text-cyan-400 font-mono mb-4 text-lg md:text-xl ml-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi, my name is
            </motion.p>
            
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-6">
              Harsha Vardhan.
            </h1>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-400 mb-8">
              Driving Engineering <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Excellence & Innovation.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light">
              Visionary Technical Leader architecting complex mechanical systems and optimizing designs for manufacturing efficiency. I transform ambitious concepts into high-performance, cost-effective realities.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#experience" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase overflow-hidden rounded-lg bg-cyan-500 text-zinc-950 hover:bg-cyan-400 transition-colors"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2">
                  Check out my experience
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Harsha_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all border rounded-lg text-white border-white/20 hover:bg-white/5 hover:border-cyan-400/50"
              >
                View Full CV
                <ExternalLink size={16} className="ml-2 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
          </motion.div>
        </section>

        {/* About / Skills Section */}
        <section id="skills" className="py-32 scroll-mt-10 relative">
          <SectionHeading number="01" title="About & Skills" icon={Cpu} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-relaxed text-zinc-400"
            >
              <p>
                As a Technical Leader, I specialize in bridging the gap between high-level strategic objectives and rigorous mechanical design. With progressive experience leading cross-functional teams, I deliver scalable, innovative integrated systems that accelerate time-to-market and significantly reduce production costs.
              </p>
              <p>
                Holding an M.E. in Advanced Design and Manufacturing, I combine deep theoretical expertise with practical industry acumen. I continuously refine my methodologies, leveraging advanced CAD tools and industry standards to ensure our engineering practices remain at the cutting edge of global excellence.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Terminal className="text-cyan-400" size={20} />
                  <h3 className="text-xl font-bold text-white">Core Technologies</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  {[
                    "Solidworks", "Autodesk Inventor", "Catia", 
                    "Pro-E (Creo)", "AutoCAD", "BOM Management",
                    "GD&T", "Finite Element Analysis"
                  ].map((skill, i) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-zinc-300 group"
                    >
                      <ChevronRight size={14} className="text-cyan-500 group-hover:translate-x-1 transition-transform" />
                      <span className="group-hover:text-cyan-300 transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 scroll-mt-10">
          <SectionHeading number="02" title="Professional Experience" icon={Briefcase} />
          
          <div className="max-w-4xl relative">
            <div className="absolute left-0 md:left-[21px] top-4 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent"></div>
            
            <div className="space-y-24">
              {[
                {
                  role: "Technical Leader",
                  company: "Kohlex",
                  location: "Hyderabad",
                  date: "02/2022 - Current",
                  highlights: [
                    "Lead multi-disciplinary engineering initiatives (TRIOSM, BISION, BHS, DFP, FPS, VFP) delivering strategic projects on time and optimizing workflows over 3+ years.",
                    "Spearhead the architecture and delivery of complex assemblies and integrated systems, translating executive vision into scalable technical solutions.",
                    "Drive continuous improvement by optimizing existing designs, significantly reducing part counts, and maximizing manufacturing ROI without compromising functional integrity.",
                    "Act as a key technical liaison for stakeholders and high-value clients, ensuring seamless alignment between business goals, client needs, and engineering execution.",
                    "Enforce rigorous quality standards through advanced engineering data analysis (dimensions, tolerances, materials), mitigating risk and ensuring flawless deliverables.",
                    "Direct cross-functional team operations, managing project lifecycles, change orders, and leading strategic milestone reviews to ensure operational excellence."
                  ]
                },
                {
                  role: "AutoCAD Designer",
                  company: "ARMTEC",
                  location: "Hyderabad",
                  date: "09/2021 - 12/2021",
                  highlights: [
                    "Generated precision layouts, drawings, and schematics to accelerate the product development lifecycle from initial conceptualization to manufacturing.",
                    "Produced comprehensive technical documentation, including detailed assembly drawings and bills of materials, ensuring smooth production handoffs.",
                    "Provided rapid technical support and troubleshooting to production personnel, minimizing downtime and optimizing the manufacturing process."
                  ]
                }
              ].map((job, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative md:pl-16 pl-8 group"
                >
                  <div className="absolute left-[-5px] md:left-[16px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-lg text-zinc-300 font-medium mt-1">
                        {job.company} <span className="text-zinc-500 font-normal">| {job.location}</span>
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-sm w-max">
                      {job.date}
                    </div>
                  </div>
                  
                  <ul className="space-y-4 text-zinc-400 leading-relaxed">
                    {job.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <Settings size={16} className="mt-1 flex-shrink-0 text-cyan-500/50" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 scroll-mt-10">
          <SectionHeading number="03" title="Notable Projects" icon={Layers} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Material Analysis & Laminate",
                img: "/images/project-materials.svg",
                desc: "Evaluation of Mechanical Behaviour of Glass Fibre-Epoxy with Graphene Nano Powder Laminate to discover stronger, more resilient materials.",
                tags: ["12 Months", "Material Science", "Graphene"],
                color: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Gearbox Fault Diagnosis",
                img: "/images/project-gearbox.svg",
                desc: "Diagnosis of Gearbox Fault Using Acoustic Signal for advanced preventative maintenance, ensuring high operational uptime.",
                tags: ["6 Months", "Acoustics", "Maintenance"],
                color: "from-cyan-500/20 to-emerald-500/20"
              },
              {
                title: "Blow Molding Die Design",
                img: "/images/project-molding.svg",
                desc: "Design and Analysis of Blow Molding Die for 250ml PET Bottle using precise Turning Operations to optimize production yields.",
                tags: ["6 Months", "Die Design", "CAD"],
                color: "from-orange-500/20 to-red-500/20"
              },
              {
                title: "Metal Cutting Analysis",
                img: "/images/project-machining.svg",
                desc: "Exploration and study of advanced Metal Cutting techniques by Pug Machine to enhance precision and efficiency.",
                tags: ["3 Months", "Machining", "Precision"],
                color: "from-pink-500/20 to-rose-500/20"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl bg-zinc-900/40 border border-white/10 overflow-hidden backdrop-blur-sm"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`}></div>
                
                <div className="h-48 overflow-hidden relative border-b border-white/10">
                  <div className="absolute inset-0 bg-zinc-950/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                
                <div className="p-8 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-32 scroll-mt-10">
          <SectionHeading number="04" title="Academic Background" icon={GraduationCap} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                degree: "M.E: Advanced Design and Manufacturing",
                school: "Vasavi College of Engineering, Hyderabad",
                year: "2021",
                grade: "7.0/10",
                type: "Master's Degree"
              },
              {
                degree: "B.Tech: Mechanical",
                school: "Chilkur Balaji Institute of Technology, Hyderabad",
                year: "2017",
                grade: "59%",
                type: "Bachelor's Degree"
              }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-950 border border-white/10 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
                  <GraduationCap size={120} />
                </div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold mb-4 uppercase tracking-widest">
                    {edu.type}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-zinc-400 mb-6">
                    {edu.school}
                  </p>
                  
                  <div className="flex items-center gap-6 font-mono text-sm">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      Graduated: {edu.year}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      Grade: {edu.grade}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 pb-48 scroll-mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
            
            <div className="relative z-10">
              <p className="text-cyan-400 font-mono mb-6 text-sm flex items-center justify-center gap-2">
                <span className="w-12 h-px bg-cyan-400/50"></span>
                05. What's Next?
                <span className="w-12 h-px bg-cyan-400/50"></span>
              </p>
              
              <h2 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 tracking-tight">
                Get In Touch
              </h2>
              
              <p className="text-zinc-400 mb-12 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                I am currently seeking strategic roles where I can leverage my technical leadership to drive enterprise-wide innovation and operational excellence. Open to connecting with visionaries and forward-thinking organizations globally.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-3 text-zinc-300 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>Hyderabad, Telangana 500085</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                  <Phone size={20} className="text-cyan-400" />
                  <span>8008784100</span>
                </div>
              </div>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:harsha02.vardhan@gmail.com" 
                className="group relative inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-widest uppercase overflow-hidden rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative flex items-center gap-3">
                  <Mail size={18} />
                  Say Hello
                </span>
              </motion.a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 relative z-10">
        <p className="text-zinc-500 font-mono text-sm">
          Designed & Engineered with Excellence <br/>
          <span className="text-cyan-500/50">© {new Date().getFullYear()} Harsha Vardhan Vicharapu</span>
        </p>
      </footer>
    </div>
  );
}
