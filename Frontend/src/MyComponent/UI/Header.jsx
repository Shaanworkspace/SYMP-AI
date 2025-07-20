import React from 'react';
import { Button } from '@/components/ui/button';
import {
    ChevronDown,
    ChevronRightCircle,
    LayoutDashboard,
    Star,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";

const navLinks = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Domains", href: "#domains" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black/90 via-zinc-900/80 to-black/60 border-b border-zinc-800 backdrop-blur-lg z-50 shadow-lg">
            <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo + Brand */}
                <div className="flex items-center gap-2">
                    <span className="ml-2 text-2xl font-extrabold tracking-tight text-white select-none hidden sm:flex items-center">
                        <svg
                            className="inline-block mr-2"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                        >
                            <defs>
                                <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32">
                                    <stop offset="0%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                            <circle cx="16" cy="16" r="16" fill="url(#logoGradient)" />
                            <text
                                x="50%"
                                y="58%"
                                textAnchor="middle"
                                fontWeight="bold"
                                fontSize="13"
                                fill="white"
                                fontFamily="Inter, sans-serif"
                            >
                                AI
                            </text>
                        </svg>
                        <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                            SympAI
                        </span>
                    </span>
                </div>

                {/* Center Navigation */}
                <div className="hidden md:flex gap-2">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-4 py-2 rounded-xl text-white/90 font-medium transition-all duration-200
                hover:bg-gradient-to-tr hover:from-primary/70 hover:to-fuchsia-500/70 hover:text-white hover:shadow-md"
                        >
                            {link.label}
                        </a>
                    ))}
                    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="ghost"
      size="lg"
      className="flex items-center px-4 py-2 rounded-xl text-white/90 font-medium
        hover:bg-gradient-to-tr hover:from-blue-600/80 hover:to-fuchsia-500/70 hover:text-white transition-all"
    >
      <Star className="h-5 w-5 mr-1" />
      Quick Remedy
      <ChevronDown className="h-4 w-4 ml-1" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent
    align="end"
    className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-black border border-zinc-700 shadow-2xl min-w-[190px] text-white z-[999]"
  >
    <DropdownMenuLabel className="text-primary font-bold">Common Virals</DropdownMenuLabel>
    <DropdownMenuSeparator className="bg-zinc-700" />
    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/70 hover:to-fuchsia-500/80 focus:bg-gradient-to-r focus:from-primary/80 focus:to-fuchsia-500/90 text-white transition-colors">
      Common Cold
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/70 hover:to-fuchsia-500/80 focus:bg-gradient-to-r focus:from-primary/80 focus:to-fuchsia-500/90 text-white transition-colors">
      Fever
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/70 hover:to-fuchsia-500/80 focus:bg-gradient-to-r focus:from-primary/80 focus:to-fuchsia-500/90 text-white transition-colors">
      Stress
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-primary/70 hover:to-fuchsia-500/80 focus:bg-gradient-to-r focus:from-primary/80 focus:to-fuchsia-500/90 text-white transition-colors">
      Anxiety
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
                </div>

                {/* Auth Buttons or Dashboard/User on right */}
                <div className="flex items-center gap-2">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button
                                size="lg"
                                className="flex items-center gap-2 bg-gradient-to-tr from-primary via-fuchsia-500 to-cyan-400 text-white font-semibold px-6 shadow-md hover:scale-105 transition-all"
                            >
                                Sign In
                                <ChevronRightCircle className="w-5 h-5" />
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button
                                size="lg"
                                
                                className="bg-white flex items-center gap-2 border-primary text-primary font-semibold px-6 hover:bg-primary/10 hover:font-extrabold transition-all"
                            >
                                Sign Up
                                <ChevronRightCircle className="w-5 h-5" />
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Button
                            variant="default"
                            size="lg"
                            className="flex items-center gap-2 bg-gradient-to-tr from-fuchsia-500 to-primary text-white font-semibold px-6 shadow-md hover:scale-105 transition-all"
                        >
                            <LayoutDashboard className="h-5 w-5 mr-1" />
                            <span className="hidden md:inline">AI Analysis</span>
                        </Button>
                        <div className="ml-2">
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
            </nav>
            {/* Responsive Mobile Navigation */}
            <div className="md:hidden flex justify-center pb-2 pt-2 gap-2 bg-black/90">
                {navLinks.map(link => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="px-3 py-2 rounded-lg text-white/90 font-medium text-sm transition-all hover:bg-gradient-to-tr hover:from-primary/70 hover:to-fuchsia-500/70 hover:text-white"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Header;