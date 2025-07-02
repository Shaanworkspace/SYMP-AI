import React from "react";

const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
];

const socialLinks = [
    {
        name: "Twitter",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.5 6.1c.02.23.02.46.02.69 0 7.06-5.38 15.2-15.2 15.2-3.02 0-5.84-.89-8.21-2.42.42.05.84.08 1.28.08 2.51 0 4.81-.86 6.65-2.3-2.34-.04-4.31-1.59-4.99-3.72.33.06.66.09 1.01.09.48 0 .95-.06 1.39-.18-2.45-.5-4.29-2.65-4.29-5.24v-.07c.72.4 1.54.65 2.41.68-1.43-.95-2.36-2.56-2.36-4.39 0-.97.26-1.87.72-2.65C3.56 7.27 8.07 9.15 13 9.36c-.09-.39-.13-.8-.13-1.22 0-2.99 2.42-5.41 5.41-5.41 1.55 0 2.95.65 3.94 1.69 1.23-.24 2.39-.69 3.43-1.32-.4 1.25-1.25 2.3-2.36 2.96 1.09-.13 2.13-.42 3.09-.85-.73 1.08-1.66 2.02-2.73 2.78z" />
            </svg>
        ),
        href: "https://twitter.com",
    },
    {
        name: "LinkedIn",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm16.25 11.268h-3v-5.604c0-1.336-.026-3.055-1.862-3.055-1.864 0-2.151 1.454-2.151 2.956v5.703h-3v-10h2.879v1.367h.041c.401-.759 1.379-1.56 2.839-1.56 3.037 0 3.599 2 3.599 4.591v5.602z" />
            </svg>
        ),
        href: "https://linkedin.com",
    },
    {
        name: "GitHub",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.303-5.466-1.334-5.466-5.931 0-1.309.469-2.382 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.874.119 3.176.77.839 1.235 1.912 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
        href: "https://github.com",
    },
];

const Footer = () => (
    <footer className="relative bg-gradient-to-t from-black via-zinc-900 to-white/5 py-16 px-4 text-white overflow-x-hidden border-t border-gray-800">
        {/* Decorative blurred gradients */}
        <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,255,255,0.09),transparent 70%)",
            }}
        />
        <div className="container mx-auto relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
                {/* Logo bubble with animated gradient ring */}
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-white/90 to-zinc-300 w-14 h-14 shadow-lg relative overflow-hidden">
                    <span className="absolute z-0 inset-0 animate-spin-slow bg-gradient-to-tr from-primary via-fuchsia-400 to-primary opacity-30 blur-[6px]" />
                    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="relative z-10">
                        <circle cx="16" cy="16" r="16" fill="url(#footer-logo-gradient)" />
                        <defs>
                            <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fafafa" />
                                <stop offset="1" stopColor="#dbdbdb" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-zinc-300 bg-clip-text text-transparent drop-shadow">
                    SympAI
                </span>
            </div>
            <p className="text-center text-gray-200 max-w-2xl mb-7 text-lg font-medium">
                Empowering your health journey with AI-driven guidance.<br />
                <span className="text-primary bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent font-semibold">
                    Secure, private, and always accessible.
                </span>
            </p>

            <nav className="flex flex-wrap gap-5 justify-center mb-8 text-base font-medium">
                {footerLinks.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        className="transition-all px-3 py-1 rounded-lg bg-gradient-to-tr from-white/10 to-zinc-800/40 
              hover:from-primary/80 hover:to-fuchsia-500/70 hover:scale-105 hover:shadow-lg
              hover:text-white bg-clip-padding text-white/90"
                        style={{ backdropFilter: "blur(2px)" }}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>

            <div className="flex gap-4 mb-7">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group p-2 rounded-full bg-gradient-to-tr from-white/10 to-zinc-800/50 
              hover:from-fuchsia-500/80 hover:to-primary/80 transition-all hover:scale-110 hover:shadow-xl"
                        style={{ backdropFilter: "blur(2px)" }}
                    >
                        <span className="text-gray-200 group-hover:text-white transition-colors">
                            {social.icon}
                        </span>
                    </a>
                ))}
            </div>

            <div className="border-t border-white/10 w-full max-w-2xl my-6" />

            <div className="text-xs text-gray-400 text-center">
                &copy; {new Date().getFullYear()} <span className="text-white font-bold">SympAI</span>. All rights reserved.
                <span className="ml-2 text-[11px] text-gray-500">
                    — Designed with <span className="text-pink-400">♥</span> for wellbeing.
                </span>
            </div>
        </div>
        {/* Animation CSS */}
        <style>{`
      .animate-spin-slow {
        animation: spin 4s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
      }
    `}</style>
    </footer>
);

export default Footer;