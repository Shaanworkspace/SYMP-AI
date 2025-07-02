import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/banner2.jpg';

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            image.classList.toggle('scrolled', scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="w-full pt-36 md:pt-48 pb-16 relative z-10 bg-gradient-to-b from-black via-[#17171d] to-[#21212b] min-h-[60vh] overflow-hidden">
            {/* Decorative radial accent */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 0%,rgba(168,85,247,0.18),transparent 70%)",
                }}
            />
            <div className="text-center max-w-5xl mx-auto px-4 space-y-3 -mt-10 relative z-10">
                <div className="space-y-7">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight
            bg-gradient-to-b from-white via-fuchsia-300 to-primary text-transparent bg-clip-text drop-shadow-lg">
                        Your Intelligent AI Coach
                        <br />
                        <span className="bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                            for Instant Symptom Analysis
                        </span>
                    </h1>
                    <p className="text-gray-300 sm:text-xl md:text-2xl max-w-2xl mx-auto font-medium drop-shadow">
                        Your trusted partner in understanding symptoms, reducing anxiety, and guiding you toward the right care—
                        <span className="bg-gradient-to-r from-fuchsia-400 to-primary bg-clip-text text-transparent font-semibold">
                            all with the power of AI.
                        </span>
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 mt-6">
                    <Button
                        size="lg"
                        className="px-8 py-5 font-semibold text-lg bg-gradient-to-tr from-primary via-fuchsia-500 to-cyan-400
              hover:from-fuchsia-500 hover:to-primary shadow-xl transition-all hover:scale-105"
                    >
                        Get Started
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-5 font-semibold text-lg border-2 border-fuchsia-500 text-fuchsia-200 hover:text-white hover:bg-gradient-to-tr from-fuchsia-600 via-primary to-cyan-400 hover:border-cyan-400 shadow-md transition-all hover:scale-105"
                    >
                        Let's Analyse
                    </Button>
                </div>

                <div className="hero-image-wrapper mt-16">
                    <div
                        ref={imageRef}
                        className="hero-image transition-transform duration-700 ease-in-out rounded-xl shadow-2xl border border-zinc-800 mx-auto max-w-3xl overflow-hidden
            bg-gradient-to-br from-black via-zinc-900 to-[#17171d] hover:scale-105"
                    >
                        <img
                            src={bannerImage}
                            alt="AI Symptom Checker Banner"
                            className="rounded-xl shadow-2xl border-none mx-auto max-w-full h-auto opacity-95"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;