import React from "react";
import Header from "./MyComponent/UI/Header";
import Footer from "./MyComponent/UI/Footer";
import AppRoutes from "./AppRoutes";

const App = () => (
    <div className="relative">
        <Header />
        <main className="min-h-full pt-20">
            <AppRoutes />
        </main>
        <Footer />
    </div>
);

export default App;
