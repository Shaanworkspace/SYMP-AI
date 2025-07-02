import React from 'react';
import { Button } from '@/components/ui/button';
import {
    ChevronDown,
    LayoutDashboard,
    StarIcon
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur z-50">
            <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
                <img
                    src="/logo-symp-ai.png"
                    alt="Logo"
                    className="h-12 w-auto object-contain"
                />

                <div className="flex items-center space-x-2 md:space-x-4">
                    <Button variant="default" size="sm" className={`bg-white`}>
                        <LayoutDashboard className="h-4 w-4 mr-1" />
                        <span className="hidden md:inline">AI Analysis</span>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="sm" className={`bg-white`}>
                                <StarIcon className="h-4 w-4 mr-1" />
                                <span className="hidden md:inline">Common Virals</span>
                                <ChevronDown className="h-4 w-4 ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Quick Remedy</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Common Cold</DropdownMenuItem>
                            <DropdownMenuItem>Fever</DropdownMenuItem>
                            <DropdownMenuItem>Stress</DropdownMenuItem>
                            <DropdownMenuItem>Anxiety</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header>
    );
};

export default Header;
