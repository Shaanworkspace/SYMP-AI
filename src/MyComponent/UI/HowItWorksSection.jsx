import React from "react";
import { howItWorks } from "@/data/howItWorks";

const HowItWorksSection = () => (
    <section className="relative bg-black py-20 md:py-28 text-white overflow-x-hidden">
        {/* Decorative background */}
        <div
            aria-hidden
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                background:
                    "radial-gradient(ellipse 65% 80% at 50% 0%,rgba(99,102,241,0.14),transparent 80%)",
            }}
        />

        <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm">
                How SympAI Works
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-300 mb-14 text-lg">
                Get clarity on your symptoms in just a few simple steps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {howItWorks.map((step, idx) => (
                    <div
                        key={step.title}
                        className="group rounded-xl bg-gradient-to-br from-zinc-900/80 to-black/80 border border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] relative overflow-hidden"
                    >
                        {/* Glow on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-0"
                            style={{
                                background:
                                    "radial-gradient(ellipse 80% 60% at 50% 10%,rgba(139,92,246,0.15),transparent 70%)",
                            }}
                        />
                        <div className="relative z-10 flex flex-col items-center text-center p-8">
                            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 shadow-xl mb-6 p-4">
                                {/* Render the icon as a React element */}
                                {step.icon}
                            </span>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-300 text-base font-normal">{step.description}</p>
                        </div>
                        {/* Step number bubble */}
                        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-primary font-bold border border-primary/30 shadow text-lg z-20">
                            {idx + 1}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorksSection;