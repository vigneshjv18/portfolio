import React from 'react';
import { motion } from 'framer-motion';

const Achievements = ({ data }) => {
    if (!data) return null;

    return (
        <section id="achievements" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                >
                    <span className="text-purple-500">Achievements</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {data.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 flex items-start gap-4 hover:bg-slate-800 transition-colors"
                        >
                            <div className="mt-1 min-w-[24px]">
                                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
