import '../styles/globals.css';

export const metadata = {
    title: 'Harsha Vardhan Vicharapu | Professional CV',
    description: 'A comprehensive and professional online business CV.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body>
                <div className="flex flex-col min-h-screen">
                    <header className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#e5e0d8]">
                        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                            <div className="text-2xl font-serif font-bold tracking-tighter">
                                <a href="/" className="text-[#2c2c2c] hover:text-[#b3a394] transition-colors no-underline">
                                    Harsha Vardhan.
                                </a>
                            </div>
                            <nav className="hidden md:flex gap-8">
                                <a href="#about" className="text-sm font-medium uppercase tracking-widest no-underline">Summary</a>
                                <a href="#experience" className="text-sm font-medium uppercase tracking-widest no-underline">Experience</a>
                                <a href="#education" className="text-sm font-medium uppercase tracking-widest no-underline">Education</a>
                                <a href="#projects" className="text-sm font-medium uppercase tracking-widest no-underline">Projects</a>
                                <a href="#skills" className="text-sm font-medium uppercase tracking-widest no-underline">Skills</a>
                                <a href="#contact" className="text-sm font-medium uppercase tracking-widest no-underline">Contact</a>
                            </nav>
                        </div>
                    </header>
                    
                    <main className="grow">
                        {children}
                    </main>

                    <footer className="bg-[#2c2c2c] text-white py-12 text-center">
                        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
                            <h2 className="text-3xl text-white mb-2">Harsha Vardhan Vicharapu.</h2>
                            <p className="text-[#a3a3a3] max-w-md">
                                Accomplished Mechanical Engineer with 4+ years of progressive experience driving design innovation and robust project execution.
                            </p>
                            <div className="flex gap-6 mt-4">
                                <a href="mailto:harsha02.vardhan@gmail.com" className="text-white hover:text-[#b3a394] no-underline transition-colors">harsha02.vardhan@gmail.com</a>
                                <a href="tel:8008784100" className="text-white hover:text-[#b3a394] no-underline transition-colors">8008784100</a>
                            </div>
                            <p className="text-sm text-[#737373] mt-8">
                                &copy; {new Date().getFullYear()} by Harsha Vardhan Vicharapu. Built with Next.js on Netlify.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
