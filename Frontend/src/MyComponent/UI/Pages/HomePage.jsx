import React from 'react'
import Header from '../Header'
import HeroSection from '../HeroSection'
import FeatureSection from '../FeatureSection'
import FAQSection from '../FAQSection'
import HowItWorksSection from '../HowItWorksSection'
import IndustriesSection from '../IndustriesSection'
import Footer from '../Footer'

const HomePage = () => {
    return (
        <div className="relative">
            {/* Grid Background */}
            {/* Header */}
            <Header />
            {/* Main Content */}

            <HeroSection />
            <FeatureSection />
            <FAQSection />
            <HowItWorksSection />
            <IndustriesSection />


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage