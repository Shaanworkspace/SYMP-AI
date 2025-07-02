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
        <section className="w-full pt-36 md:pt-48 pb-16 relative z-10">
            <div className="text-center max-w-5xl mx-auto px-4 space-y-8 ">
                <div className="space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-gray-300 via-gray-100 to-gray-500 text-transparent bg-clip-text">
                        Your Intelligent AI Coach
                        <br />
                        for Instant Symptom Analysis
                    </h1>
                    <p className="text-gray-300 sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                        Your trusted partner in understanding symptoms, reducing anxiety, and guiding you toward the right care—all with the power of AI.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                    <Button size="lg" variant="outline" className="px-8">
                        Let's Analyse
                    </Button>
                </div>

                <div className="hero-image-wrapper mt-10">
                    <div ref={imageRef} className="hero-image transition-transform duration-700 ease-in-out">
                        <img
                            src={bannerImage}
                            alt="AI Symptom Checker Banner"
                            className="rounded-xl shadow-2xl border mx-auto max-w-full h-auto"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
