import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { features } from '@/data/features';

const FeatureSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-black via-black-900 to-gray-900">
            {/* Decorative gradient blur */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 80% at 50% 0%,rgba(99,102,241,0.2),transparent 70%)',
                }}
            />
            <section className="relative py-20 md:py-28 text-white z-10">
                <div className="container px-4 mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
                        Why Choose Our Platform?
                    </h2>
                    <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-gray-300 mb-14">
                        Unlock a world of possibilities with features designed for performance, security, and ease of use.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <Card
                                    key={index}
                                    className="group bg-gradient-to-br from-[#222] to-[#18181b] border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-primary/60 relative overflow-hidden"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0"
                                        style={{
                                            background:
                                                'radial-gradient(ellipse 80% 60% at 50% 10%,rgba(139,92,246,0.2),transparent 70%)',
                                        }}
                                    />
                                    <CardHeader className="relative z-10 flex items-center flex-col text-center">
                                        <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 shadow-xl mb-6 p-4">
                                            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                                        </span>
                                        <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
                                        <CardDescription className="text-gray-300 text-base font-normal">
                                            {feature.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;