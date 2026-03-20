export function Footer() {
    return (
        <footer className="border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-between sm:flex-row gap-4">
                <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} Harsha Vardhan Vicharapu. Built with Next.js and Tailwind CSS.
                </p>
                <div className="flex gap-4 text-sm text-zinc-400">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
}
