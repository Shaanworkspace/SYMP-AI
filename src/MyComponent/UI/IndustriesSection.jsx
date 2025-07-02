import React from "react";
import { industries } from "@/data/industries";

const industryColors = [
    "from-primary to-fuchsia-500",
    "from-fuchsia-500 to-cyan-500",
    "from-cyan-500 to-pink-500",
    "from-pink-500 to-yellow-400",
    "from-yellow-400 to-primary",
    "from-green-400 to-primary",
    "from-indigo-500 to-fuchsia-500",
    "from-rose-500 to-orange-400",
    "from-sky-400 to-indigo-400",
    "from-violet-500 to-pink-500",
];

const IndustriesSection = () => (
    <section className="relative bg-black py-20 md:py-28 text-white overflow-x-hidden">
        <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background:
                    "radial-gradient(ellipse 70% 80% at 50% 0%,rgba(139,92,246,0.10),transparent 80%)",
            }}
        />
        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm">
                Explore Health Domains
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-300 mb-14 text-lg">
                SympAI supports a wide range of health topics for all ages. Find quick guidance for your unique needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, idx) => (
                    <div
                        key={industry.id}
                        
                        style={{
                            backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops)), linear-gradient(90deg, #18181b 80%, #111 100%)`,
                        }}
                        // Tailwind gradient classes below handle the color on the first gradient
                        // The second gradient is a dark fallback for depth
                        // The gradient color is picked from the array above
                        className={`group rounded-2xl border border-gray-800 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 relative overflow-hidden bg-gradient-to-br ${industryColors[idx % industryColors.length]}`}
                    >
                        {/* Glow effect */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none z-0"
                            style={{
                                background:
                                    "radial-gradient(ellipse 80% 60% at 50% 10%,rgba(99,102,241,0.17),transparent 70%)",
                            }}
                        />
                        <div className="relative z-10 flex flex-col items-start p-8">
                            <span className="text-xl font-bold mb-2 tracking-tight bg-black/30 rounded px-3 py-1 text-primary border border-primary/20 shadow">
                                {industry.name}
                            </span>
                            <p className="text-gray-200 text-base font-normal mb-2">
                                {industry.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default IndustriesSection;