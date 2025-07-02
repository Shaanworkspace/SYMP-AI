import React from 'react'
import Header from './MyComponent/UI/Header'
import HeroSection from './MyComponent/UI/HeroSection'

const App = () => {
    return (
        <div className="relative">
            {/* Grid Background */}
            <div className="grid-background">
                
            </div>

            {/* Header */}
            <Header />

            {/* Main */}
            <main className="min-h-screen">
                <HeroSection />
            </main>

            {/* Footer */}
            <footer className="bg-muted py-12">
                <div className="container px-5 mx-auto text-center">
                    <p>Created by Shaan</p>
                </div>
            </footer>
        </div>
    )
}

export default App