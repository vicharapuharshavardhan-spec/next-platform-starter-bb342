import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Portfolio',
        default: 'Harsha Vardhan Vicharapu | Portfolio'
    },
    description: 'Portfolio of Harsha Vardhan Vicharapu, a Mechanical Engineer and Technical Leader.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-zinc-300 bg-zinc-950">
                <div className="flex flex-col min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
