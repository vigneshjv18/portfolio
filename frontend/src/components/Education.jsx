import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ data }) => {
    if (!data) return null;

    return (
        <section id="education" className="py-20 bg-slate-800/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                >
                    My <span className="text-purple-500">Education</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {data.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                                    <h4 className="text-lg text-purple-400">{edu.institution}</h4>
                                </div>
                                <span className="text-gray-400 font-mono mt-2 md:mt-0 bg-slate-800 px-4 py-1 rounded-full text-sm border border-slate-700">
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-gray-300 font-medium">{edu.details}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
