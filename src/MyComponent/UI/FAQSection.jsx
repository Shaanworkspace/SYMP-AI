import React, { useState } from "react";
import { faqs } from "@/data/faqs";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative bg-black py-20 md:py-28 text-white overflow-x-hidden">
            {/* Decorative background effect */}
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 80% at 50% 0%,rgba(99,102,241,0.12),transparent 80%)",
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm">
                    Frequently Asked Questions
                </h2>
                <p className="max-w-2xl mx-auto text-center text-gray-300 mb-14 text-lg">
                    Everything you need to know about SympAI. Can’t find the answer you’re looking for? Reach out to our support team.
                </p>

                <div className=" min-w-2xl flex items-center justify-center flex-col space-y-5">
                    {faqs.map((faq, idx) => (
                        <div
                            key={faq.question}
                            className="rounded-xl min-w-5xl border border-gray-800 bg-gradient-to-br from-zinc-900/80 to-black/80 shadow-md transition-all"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                            >
                                <span className="text-lg md:text-xl font-medium text-white text-left">
                                    {faq.question}
                                </span>
                                <span
                                    className={`ml-4 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-primary" : "text-gray-400"
                                        }`}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M6 9l6 6 6-6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${idx}`}
                                className={`px-6 pb-6 transition-all duration-300 ease-in-out text-gray-300 ${openIndex === idx
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                            >
                                <p className="text-base">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;