import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

const styles = {
  sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

const jobData = [
  {
    role: "AI Engineer & Research Collaborator",
    company: "Research & Optimization Focus",
    year: "2026 - Present",
    color: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    icon: <FaBrain className="text-purple-400" />,
    desc: "Prototyped and benchmarked custom hardware-native BMT layers in TensorFlow/Keras. Achieved ~49.4% peak RAM reduction on inference by leveraging natural feature sparsity for resource-constrained edge environments.",
  },
];

const Job = () => {
  return (
    <section className="relative w-full py-24 bg-[#050816] overflow-hidden" id="job">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className={`${styles.sectionSubText} !text-left`}>Professional Journey</p>
          <h2 className={`${styles.sectionHeadText} !text-left`}>Experience.</h2>
        </motion.div>

        <div className="max-w-3xl">
          {jobData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className={`relative group p-[1px] rounded-[30px] bg-gradient-to-br ${job.color} border border-white/10`}
            >
              <div className="bg-[#0a0a1a] rounded-[29px] p-8 h-full flex flex-col justify-between overflow-hidden relative">
                {/* Background Pattern Icon */}
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaBrain size={140} />
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-2xl w-fit">
                      {job.icon}
                    </div>
                    <div>
                      <span className="text-sm font-mono text-secondary tracking-widest">{job.year}</span>
                      <h3 className="text-white text-2xl font-bold group-hover:text-[#915EFF] transition-colors">
                        {job.role}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-blue-400 font-semibold text-lg mb-4">{job.company}</p>
                  <p className="text-secondary text-[17px] leading-relaxed">
                    {job.desc}
                  </p>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-8 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#915EFF] to-transparent transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Job;