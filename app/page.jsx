export default function Page() {
    return (
        <div className="flex flex-col gap-24 sm:gap-32 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 pt-32 pb-16 flex flex-col justify-center items-start min-h-[70vh]">
                <p className="text-cyan-400 font-mono mb-4 text-lg">Hi, my name is</p>
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6">
                    Harsha Vardhan Vicharapu.
                </h1>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-400 mb-8 max-w-4xl">
                    Driving Engineering Excellence & Innovation.
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed">
                    Visionary Technical Leader with a proven track record of architecting complex mechanical systems and optimizing designs for manufacturing efficiency. I partner with executive leadership to transform ambitious concepts into high-performance, cost-effective realities, driving both technological advancement and bottom-line growth.
                </p>
                <div className="flex gap-4">
                    <a 
                        href="#experience" 
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all border rounded text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
                    >
                        Check out my experience
                    </a>
                    <a 
                        href="/Harsha_CV.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all border rounded text-white border-white/20 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
                    >
                        View Full CV
                    </a>
                </div>
            </section>

            {/* About / Skills Section */}
            <section id="skills" className="container mx-auto px-6 scroll-mt-24">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                        <span className="text-cyan-400 font-mono text-xl">01.</span> About Me & Skills
                        <span className="h-px bg-white/10 flex-grow ml-4"></span>
                    </h2>
                    <div className="text-zinc-400 space-y-4 text-lg leading-relaxed">
                        <p>
                            As a Technical Leader, I specialize in bridging the gap between high-level strategic objectives and rigorous mechanical design. With progressive experience leading cross-functional teams, I deliver scalable, innovative integrated systems that accelerate time-to-market and significantly reduce production costs.
                        </p>
                        <p>
                            Holding an M.E. in Advanced Design and Manufacturing, I combine deep theoretical expertise with practical industry acumen. I continuously refine my methodologies, leveraging advanced CAD tools and industry standards to ensure our engineering practices remain at the cutting edge of global excellence.
                        </p>
                        <p className="pt-4 pb-2">Here are my core technical skills and tools:</p>
                        <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-cyan-400">
                            <li className="flex items-center gap-2">▹ Solidworks</li>
                            <li className="flex items-center gap-2">▹ Autodesk Inventor</li>
                            <li className="flex items-center gap-2">▹ Catia</li>
                            <li className="flex items-center gap-2">▹ Pro-E (Creo)</li>
                            <li className="flex items-center gap-2">▹ AutoCAD</li>
                            <li className="flex items-center gap-2">▹ BOM Creation & Management</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="container mx-auto px-6 scroll-mt-24">
                <div className="max-w-4xl">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                        <span className="text-cyan-400 font-mono text-xl">02.</span> Professional Experience
                        <span className="h-px bg-white/10 flex-grow ml-4"></span>
                    </h2>

                    <div className="space-y-12">
                        <div className="border-l border-white/10 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[6px] top-2"></div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                Technical Leader
                            </h3>
                            <p className="text-cyan-400 font-mono text-sm mb-4">
                                Kohlex, Hyderabad <span className="text-zinc-500 mx-2">|</span> 02/2022 - Current
                            </p>
                            <ul className="text-zinc-400 space-y-3 text-sm leading-relaxed list-disc list-inside">
                                <li>Lead multi-disciplinary engineering initiatives (TRIOSM, BISION, BHS, DFP, FPS, VFP) delivering strategic projects on time and optimizing workflows over 3+ years.</li>
                                <li>Spearhead the architecture and delivery of complex assemblies and integrated systems, translating executive vision into scalable technical solutions.</li>
                                <li>Drive continuous improvement by optimizing existing designs, significantly reducing part counts, and maximizing manufacturing ROI without compromising functional integrity.</li>
                                <li>Act as a key technical liaison for stakeholders and high-value clients, ensuring seamless alignment between business goals, client needs, and engineering execution.</li>
                                <li>Enforce rigorous quality standards through advanced engineering data analysis (dimensions, tolerances, materials), mitigating risk and ensuring flawless deliverables.</li>
                                <li>Direct cross-functional team operations, managing project lifecycles, change orders, and leading strategic milestone reviews to ensure operational excellence.</li>
                            </ul>
                        </div>

                        <div className="border-l border-white/10 pl-6 relative">
                            <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[6px] top-2"></div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                AutoCAD Designer
                            </h3>
                            <p className="text-cyan-400 font-mono text-sm mb-4">
                                ARMTEC, Hyderabad <span className="text-zinc-500 mx-2">|</span> 09/2021 - 12/2021
                            </p>
                            <ul className="text-zinc-400 space-y-3 text-sm leading-relaxed list-disc list-inside">
                                <li>Generated precision layouts, drawings, and schematics to accelerate the product development lifecycle from initial conceptualization to manufacturing.</li>
                                <li>Produced comprehensive technical documentation, including detailed assembly drawings and bills of materials, ensuring smooth production handoffs.</li>
                                <li>Provided rapid technical support and troubleshooting to production personnel, minimizing downtime and optimizing the manufacturing process.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container mx-auto px-6 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4 max-w-4xl">
                    <span className="text-cyan-400 font-mono text-xl">03.</span> Notable Projects
                    <span className="h-px bg-white/10 flex-grow ml-4"></span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
                    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
                        <div className="flex justify-between items-center mb-6">
                            <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            Material Analysis & Laminate
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                            Evaluation of Mechanical Behaviour of Glass Fibre-Epoxy with Graphene Nano Powder Laminate to discover stronger, more resilient materials.
                        </p>
                        <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mt-auto">
                            <li>12 Months</li>
                            <li>Material Science</li>
                        </ul>
                    </div>
                    
                    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
                        <div className="flex justify-between items-center mb-6">
                            <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            Gearbox Fault Diagnosis
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                            Diagnosis of Gearbox Fault Using Acoustic Signal for advanced preventative maintenance, ensuring high operational uptime.
                        </p>
                        <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mt-auto">
                            <li>6 Months</li>
                            <li>Acoustics</li>
                        </ul>
                    </div>

                    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
                        <div className="flex justify-between items-center mb-6">
                            <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            Blow Molding Die Design
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                            Design and Analysis of Blow Molding Die for 250ml PET Bottle using precise Turning Operations to optimize production yields.
                        </p>
                        <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mt-auto">
                            <li>6 Months</li>
                            <li>Die Design</li>
                        </ul>
                    </div>

                    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
                        <div className="flex justify-between items-center mb-6">
                            <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            Metal Cutting Analysis
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                            Exploration and study of advanced Metal Cutting techniques by Pug Machine to enhance precision and efficiency.
                        </p>
                        <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mt-auto">
                            <li>3 Months</li>
                            <li>Machining</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="container mx-auto px-6 scroll-mt-24">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                        <span className="text-cyan-400 font-mono text-xl">04.</span> Education
                        <span className="h-px bg-white/10 flex-grow ml-4"></span>
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                M.E: Advanced Design and Manufacturing
                            </h3>
                            <p className="text-zinc-400 mb-1">Vasavi College of Engineering, Hyderabad</p>
                            <p className="text-cyan-400 font-mono text-sm">Graduated: 2021 | Grade: 7.0/10</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                B.Tech: Mechanical
                            </h3>
                            <p className="text-zinc-400 mb-1">Chilkur Balaji Institute of Technology, Hyderabad</p>
                            <p className="text-cyan-400 font-mono text-sm">Graduated: 2017 | Grade: 59%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container mx-auto px-6 scroll-mt-24 pb-12">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-cyan-400 font-mono mb-4 text-sm">05. What's Next?</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-400 mb-10 text-lg">
                        I am currently seeking strategic roles where I can leverage my technical leadership to drive enterprise-wide innovation and operational excellence. Open to connecting with visionaries and forward-thinking organizations globally.
                    </p>
                    <p className="text-zinc-300 font-mono mb-6">
                        📍 Hyderabad, Telangana 500085<br/>
                        📞 8008784100
                    </p>
                    <a 
                        href="mailto:harsha02.vardhan@gmail.com" 
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all border rounded text-cyan-400 border-cyan-400 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
                    >
                        Say Hello
                    </a>
                </div>
            </section>
        </div>
    );
}
