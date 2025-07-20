import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./MyComponent/UI/Header";
import HeroSection from "./MyComponent/UI/HeroSection";
import FeatureSection from "./MyComponent/UI/FeatureSection";
import FAQSection from "./MyComponent/UI/FAQSection";
import HowItWorksSection from "./MyComponent/UI/HowItWorksSection";
import IndustriesSection from "./MyComponent/UI/IndustriesSection";
import Footer from "./MyComponent/UI/Footer";

const App = () => {
    return (
        <div className="relative">
            {/* Grid Background */}

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-full pt-20">
                <HeroSection />

                <FeatureSection />
                <FAQSection/>
                <HowItWorksSection/>
                <IndustriesSection/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default App;
