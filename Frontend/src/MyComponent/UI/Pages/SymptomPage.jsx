import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

// Example symptom options (you can expand this list)
const SYMPTOMS = [
    "Headache (Sar dard)",
    "Fever (Bukhar)",
    "Cough (Khansi)",
    "Sore Throat (Gale mein dard)",
    "Fatigue (Thakan)",
    "Nausea (Matli)",
    "Vomiting (Ulti)",
    "Shortness of Breath (Saans lene mein takleef)",
    "Chest Pain (Seene mein dard)",
    "Dizziness (Chakkar aana)",
    "Rash (Daane ya rashes)",
    "Joint Pain (Jodon mein dard)",
    "Abdominal Pain (Pet dard)",
    "Diarrhea (Dast)",
    "Loss of Smell (Sungne ki shamta kam hona)",
    "Loss of Taste (Swad ka kam hona)",
    "Muscle Ache (Masoosiyon mein dard)",
    "Sneezing (Chheenk aana)",
    "Runny Nose (Naak behna)",
    "Anxiety (Chinta)",
    "Insomnia (Neend na aana)",
    "Back Pain (Peeth dard)",
    "Earache (Kaan dard)",
    "Eye Redness (Aankh laal hona)",
    "Swelling (Sujan)",
    "Itching (Kharish)",
    "Burning Sensation (Jalan)",
    "Palpitations (Dil ki dhadkan tez hona)",
    "Constipation (Kabz)",
    "Frequent Urination (Bar bar peshab aana)",
    "Weight Loss (Wajan kam hona)",
    "Weight Gain (Wajan badhna)",
    "Hair Loss (Baalo ka girna)",
    "Night Sweats (Raat ko paseena aana)",
    "Blurred Vision (Dhundhla dikhna)",
    "Numbness (Sunn hona)",
    "Tingling (Sun sunahat)",
    "Loss of Appetite (Bhukh kam lagna)",
    "Heartburn (Seene mein jalan)",
    "Cold Hands/Feet (Haath pair thande rehna)",
    "Swollen Glands (Gland sujan)",
    "Bruising Easily (Aasani se nishan pad jana)",
    "Dry Mouth (Munh sukhna)",
    "Difficulty Swallowing (Nigalne mein dikkat)",
    "Excessive Thirst (Zyada pyaas lagna)",
];

function SymptomPage() {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState([]);
    const [description, setDescription] = useState("");

    // Filter symptoms based on search query and not already selected
    const filteredSymptoms = SYMPTOMS.filter(
        (symptom) =>
            symptom.toLowerCase().includes(query.toLowerCase()) &&
            !selected.includes(symptom)
    );

    const handleAddSymptom = (symptom) => {
        setSelected((prev) => [...prev, symptom]);
        setQuery("");
    };

    const handleRemoveSymptom = (symptom) => {
        setSelected((prev) => prev.filter((s) => s !== symptom));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the submission here (API call, etc.)
        alert(
            `Symptoms: ${selected.join(", ")}\nDescription: ${description.trim()}`
        );
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-[#17171d] to-[#21212b]">
            <Header />
            <main className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
                <section className="bg-gradient-to-br from-zinc-900/80 to-black/80 border border-gray-800 rounded-2xl shadow-xl p-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent drop-shadow-sm">
                        Describe Your Symptoms
                    </h1>
                    <p className="text-gray-300 text-center mb-10 text-lg">
                        Select all symptoms you are experiencing. You can search and add multiple symptoms. Provide a detailed description for better analysis.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Symptom Search and Select */}
                        <div>
                            <label className="block text-lg font-semibold mb-2 text-white">
                                Search & Add Symptoms
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-gray-700 bg-zinc-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Type to search symptoms (e.g., Headache)..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    autoComplete="off"
                                />
                                {query && filteredSymptoms.length > 0 && (
                                    <ul className="absolute left-0 right-0 mt-1 bg-zinc-900 border border-gray-700 rounded-lg shadow-lg z-20 max-h-52 overflow-y-auto">
                                        {filteredSymptoms.map((symptom) => (
                                            <li
                                                key={symptom}
                                                className="px-4 py-2 cursor-pointer hover:bg-primary/20 text-white"
                                                onClick={() => handleAddSymptom(symptom)}
                                            >
                                                {symptom}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {/* Selected Symptoms */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {selected.map((symptom) => (
                                    <span
                                        key={symptom}
                                        className="flex items-center bg-gradient-to-tr from-primary to-fuchsia-500 text-white px-3 py-1 rounded-full font-medium shadow hover:scale-105 transition-all"
                                    >
                                        {symptom}
                                        <button
                                            type="button"
                                            className="ml-2 text-white hover:text-red-300 focus:outline-none"
                                            aria-label={`Remove ${symptom}`}
                                            onClick={() => handleRemoveSymptom(symptom)}
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                className="inline-block"
                                            >
                                                <path
                                                    d="M6 6l8 8M6 14L14 6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Description Box */}
                        <div>
                            <label className="block text-lg font-semibold mb-2 text-white">
                                Additional Description
                            </label>
                            <textarea
                                className="w-full min-h-[120px] rounded-lg border border-gray-700 bg-zinc-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Describe your symptoms in detail (e.g., duration, severity, triggers, etc.)"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-xl font-semibold text-lg bg-gradient-to-tr from-primary via-fuchsia-500 to-cyan-400 text-white shadow-xl hover:scale-105 transition-all"
                            >
                                Submit Symptoms
                            </button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SymptomPage;