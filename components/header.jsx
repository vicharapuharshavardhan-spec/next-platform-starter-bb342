import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Skills', href: '#skills' },
    { linkText: 'Experience', href: '#experience' },
    { linkText: 'Projects', href: '#projects' },
    { linkText: 'Education', href: '#education' },
    { linkText: 'Contact', href: '#contact' }
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-white/10">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-white transition hover:text-cyan-400">
                    Portfolio.
                </Link>
                
                {!!navItems?.length && (
                    <nav>
                        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium hidden md:flex">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className="text-zinc-400 transition-colors hover:text-white"
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
