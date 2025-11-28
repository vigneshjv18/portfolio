import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    if (!data) return null;

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-purple-400 font-bold text-xl mb-2">HELLO, I'M</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{data.name}</h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">{data.title}</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                        {data.summary}
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-purple-500/30">
                            Contact Me
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-full font-semibold transition-all">
                            View Work
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-purple-500/50 overflow-hidden shadow-2xl">
                            <img
                                src={data.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=Vignesh"}
                                alt={data.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
