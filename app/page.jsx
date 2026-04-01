export default function Page() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="bg-[#f4f0ec] min-h-[70vh] flex items-center justify-center py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#2c2c2c] leading-tight font-serif tracking-tight">
                        Hello, I'm Harsha Vardhan.<br/>
                        <span className="text-[#8c7a6b] font-serif">Mechanical Engineer</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[#666666] mb-10 max-w-2xl mx-auto font-light">
                        Diligent Senior Engineer with fortes in Solidworks and Autodesk Inventor. Adaptable and easily acclimates to new concepts while working under stressful circumstances.
                    </p>
                    <div className="flex justify-center gap-6">
                        <a href="#experience" className="inline-block px-10 py-4 bg-[#8c7a6b] text-white font-sans font-medium uppercase tracking-widest text-sm hover:bg-[#2c2c2c] transition-colors duration-300 no-underline rounded-sm">
                            View Experience
                        </a>
                        <a href="#contact" className="inline-block px-10 py-4 border border-[#8c7a6b] text-[#8c7a6b] font-sans font-medium uppercase tracking-widest text-sm hover:bg-[#8c7a6b] hover:text-white transition-colors duration-300 no-underline rounded-sm">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            {/* Summary Section */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-full h-[500px] bg-[#e5e0d8] rounded-sm relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-[#8c7a6b]/50 font-serif text-3xl italic text-center p-8">
                                Harsha Vardhan Vicharapu
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#2c2c2c] font-serif">Summary</h2>
                        <div className="w-16 h-1 bg-[#8c7a6b] mb-8"></div>
                        <p className="text-lg text-[#666666] mb-6 leading-relaxed">
                            Accomplished Mechanical Engineer with 4+ years of progressive experience driving design innovation and robust project execution. Recognized as a diligent Senior Engineer with advanced proficiency in SolidWorks and Autodesk Inventor, consistently delivering high-quality technical solutions.
                        </p>
                        <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                            Highly adaptable and strategic problem-solver, excelling in dynamic environments by rapidly mastering new concepts. Demonstrates strong cross-functional collaboration, exceptional multitasking capabilities, and a proven track record of exceeding project expectations through technical excellence and effective time management.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div>
                                <h4 className="font-bold text-[#2c2c2c] mb-2 uppercase tracking-wider text-sm">Location</h4>
                                <p className="text-[#666666]">Hyderabad, Telangana 500085</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#2c2c2c] mb-2 uppercase tracking-wider text-sm">Languages</h4>
                                <p className="text-[#666666]">Telugu, English, Hindi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-24 bg-[#fdfbf7]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] font-serif inline-block relative">
                            Professional Experience
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8c7a6b]"></div>
                        </h2>
                    </div>

                    <div className="space-y-16">
                        {/* Experience Item 1 */}
                        <div className="grid md:grid-cols-12 gap-8 relative border-l-2 border-[#e5e0d8] pl-8 md:pl-0 md:border-none">
                            <div className="md:col-span-3 md:text-right md:pr-12 md:border-r-2 md:border-[#e5e0d8] relative">
                                <div className="hidden md:block absolute top-2 -right-[9px] w-4 h-4 rounded-full bg-[#8c7a6b]"></div>
                                <div className="text-xl font-bold text-[#8c7a6b]">02/2022 - Current</div>
                                <div className="text-[#666666] mt-1">Kohlex</div>
                                <div className="text-sm text-[#a3a3a3] mt-1">Hyderabad, India</div>
                            </div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-bold text-[#2c2c2c] mb-4">Technical Leader</h3>
                                <ul className="list-disc list-inside text-[#666666] space-y-2">
                                    <li>Currently working in TRIOSM and worked in BISION, BHS, DFP, FPS, VFP Projects as Technical Leader for more than 3 years.</li>
                                    <li>Collaborated with other designers to create complex assemblies and integrated systems.</li>
                                    <li>Optimized existing designs by reducing part counts while maintaining functional requirements.</li>
                                    <li>Interfaced with clients to understand their needs, provide feedback, and ensure satisfaction with final results.</li>
                                    <li>Analyzed engineering data such as dimensions, tolerances, and material requirements.</li>
                                    <li>Ensured accuracy of all deliverables by performing thorough checks before submission to clientele.</li>
                                    <li>Maintained up-to-date records of all projects, including change orders, revisions.</li>
                                    <li>Led team meetings to discuss project progress and address issues.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="grid md:grid-cols-12 gap-8 relative border-l-2 border-[#e5e0d8] pl-8 md:pl-0 md:border-none">
                            <div className="md:col-span-3 md:text-right md:pr-12 md:border-r-2 md:border-[#e5e0d8] relative">
                                <div className="hidden md:block absolute top-2 -right-[9px] w-4 h-4 rounded-full bg-[#8c7a6b]"></div>
                                <div className="text-xl font-bold text-[#8c7a6b]">09/2021 - 12/2021</div>
                                <div className="text-[#666666] mt-1">ARMTEC</div>
                                <div className="text-sm text-[#a3a3a3] mt-1">Hyderabad, India</div>
                            </div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-bold text-[#2c2c2c] mb-4">AutoCAD Designer</h3>
                                <ul className="list-disc list-inside text-[#666666] space-y-2">
                                    <li>Mechanical Engineer with 3 months experience.</li>
                                    <li>Supported design staff with AutoCAD-related issues.</li>
                                    <li>Generated layouts, drawings, and sketches from verbal instructions or rough inputs.</li>
                                    <li>Produced detailed design documents such as assembly drawings, parts lists, and bills of materials.</li>
                                    <li>Provided technical support to production personnel during the manufacturing process.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] font-serif inline-block relative">
                            Education
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8c7a6b]"></div>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-[#fdfbf7] p-10 rounded-sm border border-[#e5e0d8] hover:shadow-lg transition-shadow duration-300">
                            <div className="text-[#8c7a6b] font-bold mb-2">2021</div>
                            <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2 font-serif">M.E: Advanced Design and Manufacturing</h3>
                            <div className="text-lg text-[#666666] mb-4">Vasavi College of Engineering, Hyderabad</div>
                            <p className="text-[#666666] leading-relaxed">
                                Grade: 7.0/10
                            </p>
                        </div>
                        <div className="bg-[#fdfbf7] p-10 rounded-sm border border-[#e5e0d8] hover:shadow-lg transition-shadow duration-300">
                            <div className="text-[#8c7a6b] font-bold mb-2">2017</div>
                            <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2 font-serif">B.Tech: Mechanical</h3>
                            <div className="text-lg text-[#666666] mb-4">Chilkur Balaji Institute of Technology, Hyderabad</div>
                            <p className="text-[#666666] leading-relaxed">
                                Grade: 59%
                            </p>
                        </div>
                        <div className="bg-[#fdfbf7] p-10 rounded-sm border border-[#e5e0d8] hover:shadow-lg transition-shadow duration-300">
                            <div className="text-[#8c7a6b] font-bold mb-2">2012</div>
                            <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2 font-serif">Intermediate: MPC</h3>
                            <div className="text-lg text-[#666666] mb-4">NRI Junior College, Hyderabad</div>
                            <p className="text-[#666666] leading-relaxed">
                                Grade: 61.5% | Medium: English
                            </p>
                        </div>
                        <div className="bg-[#fdfbf7] p-10 rounded-sm border border-[#e5e0d8] hover:shadow-lg transition-shadow duration-300">
                            <div className="text-[#8c7a6b] font-bold mb-2">2010</div>
                            <h3 className="text-2xl font-bold text-[#2c2c2c] mb-2 font-serif">SSC</h3>
                            <div className="text-lg text-[#666666] mb-4">Bhashyam High School, Hyderabad</div>
                            <p className="text-[#666666] leading-relaxed">
                                Grade: 75% | Medium: English
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-[#fdfbf7]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] font-serif inline-block relative">
                            Projects
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8c7a6b]"></div>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-sm border border-[#e5e0d8]">
                            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">EVALUATION OF MECHANICAL BEHAVIOUR OF GLASS FIBRE-EPOXY WITH GRAPHENE NANO POWDER LAMINATE</h3>
                            <div className="text-[#8c7a6b] mb-4">12 Months</div>
                        </div>
                        <div className="bg-white p-8 rounded-sm border border-[#e5e0d8]">
                            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">DIAGNOSIS OF GEARBOX FAULT USING ACOUSTIC SIGNAL</h3>
                            <div className="text-[#8c7a6b] mb-4">6 Months</div>
                        </div>
                        <div className="bg-white p-8 rounded-sm border border-[#e5e0d8]">
                            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">Design and Analysis of Blow Molding Die for 250ml PET Bottle By using Turning Operations</h3>
                            <div className="text-[#8c7a6b] mb-4">6 Months</div>
                        </div>
                        <div className="bg-white p-8 rounded-sm border border-[#e5e0d8]">
                            <h3 className="text-xl font-bold text-[#2c2c2c] mb-2">Metal Cutting by Pug Machine</h3>
                            <div className="text-[#8c7a6b] mb-4">3 Months</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills & Expertise Section */}
            <section id="skills" className="py-24 bg-[#f4f0ec]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] font-serif inline-block relative">
                            Skills & Certifications
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#8c7a6b]"></div>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {[
                            "Solidworks", "Autodesk Inventor", "Catia", "Pro-E (Creo)",
                            "BOM Creation", "Team Skills", "Deadline Management", "Backup Team Leadership",
                            "Presentation Skills", "Microsoft Word", "Microsoft Excel", "Trello"
                        ].map((skill, index) => (
                            <div key={index} className="bg-white py-6 px-4 text-center border border-[#e5e0d8] rounded-sm group hover:border-[#8c7a6b] transition-colors duration-300">
                                <h4 className="font-bold text-[#2c2c2c] group-hover:text-[#8c7a6b] transition-colors">{skill}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-8 rounded-sm border border-[#e5e0d8]">
                        <h3 className="text-2xl font-bold text-[#2c2c2c] mb-6 font-serif text-center">Certifications</h3>
                        <ul className="list-disc list-inside text-[#666666] space-y-2 md:columns-2">
                            <li>CSWP, DASSULT SYSTEMS - 2022</li>
                            <li>Mechanical CADD, CITD - 2017</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section id="contact" className="py-32 bg-[#2c2c2c] text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif text-white">Let's Work Together</h2>
                    <p className="text-xl text-[#a3a3a3] mb-12">
                        I'm currently available for full-time mechanical engineering roles.
                    </p>
                    <a href="mailto:harsha02.vardhan@gmail.com" className="inline-block px-12 py-5 bg-[#b3a394] text-white font-sans font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-[#2c2c2c] transition-colors duration-300 no-underline rounded-sm">
                        Get In Touch
                    </a>
                </div>
            </section>
        </div>
    );
}