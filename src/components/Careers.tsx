import React, { useState } from "react";
import { jobPositions } from "../data";
import { JobPosition, CareerApplicationInput } from "../types";
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Upload, Send, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Careers: React.FC = () => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // File upload simulator state
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Form input state
  const [formData, setFormData] = useState<Partial<CareerApplicationInput>>({
    name: "",
    email: "",
    phone: "",
    experience: "1-3 Years",
    linkedin: "",
    coverLetter: "",
  });

  const toggleJobExpansion = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setUploadedFileName(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "1-3 Years",
      linkedin: "",
      coverLetter: "",
    });
  };

  // Form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File drag & drop simulator
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  return (
    <section id="careers" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
            Talent & Careers
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight">
            Careers at Nexora Global
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Join a team that is shaping the future of enterprise technology. We are always looking for passionate professionals who want to build innovative solutions in AI, SAP, Oracle, Cloud, and Digital Transformation.
          </p>
        </div>

        {/* Roles Intro Card */}
        <div className="bg-slate-50 dark:bg-slate-950/30 rounded-3xl border border-slate-200/60 dark:border-slate-800/85 p-6 sm:p-8 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white">
              We Hire Globally
            </h3>
            <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
              Our engineering hubs operate on a highly collaborative model. Explore open positions or register your portfolio for future openings.
            </p>
          </div>
          <button
            id="spontaneous-apply-btn"
            onClick={() => handleApplyClick({
              id: "general",
              title: "Spontaneous Application",
              department: "General Talent Pool",
              location: "Remote / Global",
              type: "Full-Time or Contract",
              description: "Don't see your specific role? Submit a general application and tell us how you can contribute to Nexora Global's digital consulting practices.",
              requirements: ["Strong passion for technology", "Desire to innovate", "Collaborative spirit"]
            })}
            className="px-6 py-3 rounded-full font-sans text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-400 transition-colors shrink-0 border border-indigo-200/40 dark:border-indigo-950 cursor-pointer"
          >
            Spontaneous Application
          </button>
        </div>

        {/* Jobs Accordion List */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest mb-2">
            Open Consulting & Engineering Positions ({jobPositions.length})
          </h4>
          
          {jobPositions.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                id={`job-card-${job.id}`}
                key={job.id}
                className={`bg-white dark:bg-slate-900 border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "border-indigo-500/40 shadow-md ring-1 ring-indigo-500/10"
                    : "border-slate-200/70 dark:border-slate-800 hover:border-slate-300"
                }`}
              >
                {/* Header Row */}
                <button
                  id={`job-toggle-btn-${job.id}`}
                  onClick={() => toggleJobExpansion(job.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                      <Briefcase size={18} />
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {job.type}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono">
                          {job.department}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {/* Expanded Details Panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`job-details-${job.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20"
                    >
                      <div className="p-6 sm:p-8">
                        <div className="max-w-3xl">
                          <h5 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">
                            Role Overview
                          </h5>
                          <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2.5 leading-relaxed">
                            {job.description}
                          </p>

                          <h5 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mt-6">
                            Candidate Requirements
                          </h5>
                          <ul className="mt-3.5 space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2" />
                                <span className="leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Action Apply button */}
                          <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-slate-800/45">
                            <button
                              id={`apply-btn-${job.id}`}
                              onClick={() => handleApplyClick(job)}
                              className="px-6 py-3 rounded-full font-sans text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors cursor-pointer"
                            >
                              Apply for this Position
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* Careers Application Modal */}
      <AnimatePresence>
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Dark Backdrop overlay */}
            <motion.div
              id="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              id="application-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="bg-slate-50 dark:bg-slate-950 p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                    APPLICATION FORM
                  </span>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950 dark:text-white mt-1 leading-tight">
                    {selectedJob.title}
                  </h3>
                </div>
                <button
                  id="close-modal-btn"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-850 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 max-h-[75vh] overflow-y-auto">
                {isSubmitted ? (
                  /* Success Form Confirmation Content */
                  <div id="modal-success-state" className="text-center py-10 px-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="font-display font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                      Application Submitted!
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-md mx-auto leading-relaxed">
                      Thank you for applying, <strong>{formData.name}</strong>. Our Talent Acquisition team at Nexora Global will review your details and resume (<strong>{uploadedFileName || "spontaneous_portfolio.pdf"}</strong>) shortly. We will reach back to you within 48 business hours.
                    </p>
                    <div className="mt-8">
                      <button
                        id="success-dismiss-btn"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-2.5 rounded-full font-sans text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                      >
                        Back to Careers
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Application Form fields */
                  <form id="career-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="app-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="app-name"
                          type="text"
                          name="name"
                          required
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="app-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="app-email"
                          type="email"
                          name="email"
                          required
                          placeholder="jane.doe@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label htmlFor="app-phone" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="app-phone"
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                        />
                      </div>

                      {/* Experience Dropdown */}
                      <div>
                        <label htmlFor="app-experience" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Professional Experience *
                        </label>
                        <select
                          id="app-experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                        >
                          <option value="<1 Year">Less than 1 Year</option>
                          <option value="1-3 Years">1 - 3 Years</option>
                          <option value="3-5 Years">3 - 5 Years</option>
                          <option value="5+ Years">More than 5 Years</option>
                        </select>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label htmlFor="app-linkedin" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        LinkedIn Profile URL
                      </label>
                      <input
                        id="app-linkedin"
                        type="url"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                      />
                    </div>

                    {/* Usability Guidelines: Drag & Drop File Upload */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Upload Resume (PDF, DOCX) *
                      </label>
                      
                      <div
                        id="resume-drag-container"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                          isDragOver
                            ? "border-indigo-500 bg-indigo-50/20"
                            : uploadedFileName
                            ? "border-emerald-500/40 bg-emerald-50/10"
                            : "border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950/40 hover:bg-slate-50 dark:hover:bg-slate-900"
                        }`}
                      >
                        <input
                          id="resume-file-input"
                          type="file"
                          accept=".pdf,.docx"
                          required={!uploadedFileName}
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label htmlFor="resume-file-input" className="cursor-pointer block">
                          <Upload size={28} className={`mx-auto mb-2 ${uploadedFileName ? "text-emerald-500" : "text-slate-400"}`} />
                          
                          {uploadedFileName ? (
                            <div>
                              <span className="block font-sans text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">
                                {uploadedFileName}
                              </span>
                              <span className="block font-sans text-[10px] text-slate-400 mt-1">
                                Click or drag over to replace file
                              </span>
                            </div>
                          ) : (
                            <div>
                              <span className="block font-sans text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                                Drag and drop your CV here, or <span className="text-indigo-600 underline">browse</span>
                              </span>
                              <span className="block font-sans text-[10px] text-slate-400 mt-1">
                                Max size: 10MB • Support PDF or Word
                              </span>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label htmlFor="app-cover-letter" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Tell us about yourself (Short Pitch)
                      </label>
                      <textarea
                        id="app-cover-letter"
                        name="coverLetter"
                        rows={3}
                        placeholder="Highlight your experience with SAP, Oracle, AI pipelines or digital advisory services..."
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-900 dark:text-white"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <button
                        id="submit-app-btn"
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-sans text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        <Send size={15} />
                        Submit Job Application
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
