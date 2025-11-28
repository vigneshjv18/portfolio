import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
    if (!data) return null;

    return (
        <section id="experience" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                >
                    Work <span className="text-purple-500">Experience</span>
                </motion.h2>

                <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-12 space-y-12">
                    {data.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900"></div>

                            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <span className="text-purple-400 font-mono text-sm">{exp.period}</span>
                                </div>
                                {exp.company && <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>}
                                <p className="text-gray-400 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies && exp.technologies.split(',').map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
