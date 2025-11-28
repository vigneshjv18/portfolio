import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
    if (!data) return null;

    return (
        <section id="skills" className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
                >
                    Technical <span className="text-purple-500">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <h3 className="text-lg font-semibold text-gray-200">{skill}</h3>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full"
                                    style={{ width: `${Math.random() * 30 + 70}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
