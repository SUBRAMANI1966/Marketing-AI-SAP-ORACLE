import React, { useState, useEffect } from "react";
import { 
  Rocket, 
  Download, 
  FolderPlus, 
  Terminal, 
  Folder, 
  Check, 
  Sparkles, 
  Trash2, 
  FileText, 
  Layers, 
  Brain, 
  Database,
  CloudLightning,
  RefreshCw,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SavedDeployment {
  id: string;
  projectName: string;
  erp: string;
  aiModule: string;
  cloudHost: string;
  deployedAt: string;
}

export const ArchitectHub: React.FC = () => {
  // Config state
  const [projectName, setProjectName] = useState("Nexora Enterprise Hub");
  const [selectedErp, setSelectedErp] = useState("SAP S/4HANA");
  const [selectedAi, setSelectedAi] = useState("Generative AI Agents");
  const [selectedCloud, setSelectedCloud] = useState("OCI (Oracle Cloud Infrastructure)");

  // Interactive control states
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"terminal" | "explorer">("explorer");
  const [savedProjects, setSavedProjects] = useState<SavedDeployment[]>([]);
  const [alertMessage, setAlertMessage] = useState<{ type: "success" | "info"; text: string } | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("nexora_saved_projects");
      if (stored) {
        setSavedProjects(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load local storage configurations", e);
    }
  }, []);

  // Save to local storage
  const saveProjectsToLocalStorage = (projects: SavedDeployment[]) => {
    try {
      localStorage.setItem("nexora_saved_projects", JSON.stringify(projects));
    } catch (e) {
      console.error("Failed to write projects to local storage", e);
    }
  };

  // Deployment Logs Simulation sequence
  const startDeployment = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setActiveTab("terminal");
    setDeployStep(0);
    setTerminalLogs([
      `[${new Date().toLocaleTimeString()}] NEXORA DEPLOYMENT ENGINE v2.4.1 INITIALIZING...`,
      `[${new Date().toLocaleTimeString()}] Targeting active server cluster...`,
    ]);

    const logs = [
      `Validating corporate ledger interfaces for ${selectedErp}...`,
      `Configuring authentication tokens with secure API gateways...`,
      `Mounting cognitive intelligence layers with: "${selectedAi}"...`,
      `Initializing agentic decision memory states...`,
      `Provisioning micro-containers inside ${selectedCloud} cluster...`,
      `Binding network endpoints & configuring reverse proxies...`,
      `System sanity checks passing with 99.99% operational prediction...`,
      `NEXORA INTELLIGENT WORKFLOW DEPLOYMENT SUCCESSFUL! Node online.`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logs.length) {
        setTerminalLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${logs[currentStep]}`]);
        currentStep++;
        setDeployStep(currentStep);
      } else {
        clearInterval(interval);
        setIsDeploying(false);
        triggerAlert("success", `Successfully deployed node for ${selectedErp} with ${selectedAi}!`);
      }
    }, 1100);
  };

  // Real Integration: Triggers actual browser JSON download of the configuration
  const handleDownloadBlueprint = () => {
    const blueprintData = {
      agency: "Nexora Global Digital Transformation Advisory",
      blueprintName: projectName,
      timestamp: new Date().toISOString(),
      architectureLayout: {
        erpSystem: selectedErp,
        cognitiveLayer: selectedAi,
        cloudInfrastructure: selectedCloud
      },
      specifications: {
        networkProtocol: "RESTful JSON / gRPC Pipelines",
        dataIngestionRate: "Real-time stream (dbt enabled)",
        systemSla: "99.99% High Availability",
        agencySupport: "24/7 Managed SRE Monitoring"
      },
      verificationKey: `NX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    };

    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(blueprintData, null, 2)
    )}`;
    
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", jsonString);
    downloadAnchor.setAttribute("download", `nexora-${projectName.toLowerCase().replace(/\s+/g, "-")}-blueprint.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    triggerAlert("info", "Downloaded configuration blueprint successfully!");
  };

  // Save current parameters into a simulated folder inside local storage state
  const handleSaveToFolder = () => {
    if (!projectName.trim()) {
      triggerAlert("info", "Please provide a valid project name.");
      return;
    }

    const newProject: SavedDeployment = {
      id: `proj-${Date.now()}`,
      projectName: projectName,
      erp: selectedErp,
      aiModule: selectedAi,
      cloudHost: selectedCloud,
      deployedAt: new Date().toLocaleString()
    };

    const updated = [newProject, ...savedProjects];
    setSavedProjects(updated);
    saveProjectsToLocalStorage(updated);
    setActiveTab("explorer");
    triggerAlert("success", `Saved blueprint inside virtual workspace directory: "/saved-deployments/${projectName.toLowerCase().replace(/\s+/g, "_")}/"`);
  };

  // Delete project from workspace directory
  const handleDeleteProject = (id: string, name: string) => {
    const updated = savedProjects.filter(p => p.id !== id);
    setSavedProjects(updated);
    saveProjectsToLocalStorage(updated);
    triggerAlert("info", `Removed "${name}" from workspace directory.`);
  };

  const triggerAlert = (type: "success" | "info", text: string) => {
    setAlertMessage({ type, text });
    setTimeout(() => {
      setAlertMessage(null);
    }, 4500);
  };

  return (
    <section id="architect-hub" className="py-24 bg-white dark:bg-slate-900 border-t border-b border-slate-200/50 dark:border-slate-800/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
            Intelligent Sandbox
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white mt-4 tracking-tight">
            Intelligent Architect Hub
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Customize your digital ecosystem, simulate deployments to production, export architecture blueprints locally, and manage workspace file configurations.
          </p>
        </div>

        {/* Global Dynamic Notification Banner */}
        <AnimatePresence>
          {alertMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`max-w-3xl mx-auto mb-8 p-4 rounded-xl border flex items-start gap-3.5 shadow-sm text-xs sm:text-sm font-semibold ${
                alertMessage.type === "success"
                  ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                  : "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-500/30 text-indigo-800 dark:text-indigo-300"
              }`}
            >
              <span className="p-1 rounded bg-white dark:bg-slate-900 border shrink-0">
                <Sparkles size={14} className="animate-spin" />
              </span>
              <p className="leading-relaxed">{alertMessage.text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid Sandbox Workspace layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Customizer Parameters (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/30 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-b border-slate-200/60 dark:border-slate-800/60 pb-4">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  Integration Configuration
                </h3>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Design the architectural connections for your cloud tenant.
                </p>
              </div>

              {/* Project Name Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Project Workspace Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-xs sm:text-sm text-slate-950 dark:text-white font-medium"
                  placeholder="e.g. Finance Hub Sync"
                />
              </div>

              {/* ERP Tier Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  1. Enterprise ERP Backbone
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    { name: "SAP S/4HANA", desc: "Core materials and asset accounting modules", icon: Layers },
                    { name: "Oracle Fusion ERP", desc: "Unified global ledgers & supply chain", icon: Database },
                    { name: "Hybrid ERP Cluster", desc: "Co-located multi-tenant enterprise data", icon: CloudLightning }
                  ].map(erp => {
                    const isSelected = selectedErp === erp.name;
                    return (
                      <button
                        key={erp.name}
                        onClick={() => setSelectedErp(erp.name)}
                        className={`text-left p-3.5 rounded-xl border flex items-start gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white dark:bg-slate-900 border-indigo-500 ring-1 ring-indigo-500/25 shadow-sm"
                            : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-850 hover:bg-slate-100/50"
                        }`}
                      >
                        <span className={`p-2 rounded-lg shrink-0 ${
                          isSelected ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                        }`}>
                          <erp.icon size={16} />
                        </span>
                        <div>
                          <div className="font-display font-bold text-xs sm:text-sm text-slate-950 dark:text-white flex items-center gap-2">
                            {erp.name}
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />}
                          </div>
                          <p className="font-sans text-[11px] text-slate-400 mt-0.5 leading-normal">
                            {erp.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* AI Layer Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  2. AI Cognitive Engine
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "Generative AI Agents",
                    "Predictive Models",
                    "Document Parsing"
                  ].map((ai) => {
                    const isSelected = selectedAi === ai;
                    return (
                      <button
                        key={ai}
                        onClick={() => setSelectedAi(ai)}
                        className={`px-3 py-2.5 rounded-xl border font-display text-xs font-bold text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                            : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-100/50"
                        }`}
                      >
                        {ai}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cloud Host Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  3. Cloud Infrastructure Cluster
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { name: "OCI (Oracle Cloud Infrastructure)", key: "OCI" },
                    { name: "SAP BTP Cloud Environment", key: "SAP BTP" }
                  ].map((cloud) => {
                    const isSelected = selectedCloud === cloud.name;
                    return (
                      <button
                        key={cloud.name}
                        onClick={() => setSelectedCloud(cloud.name)}
                        className={`text-left p-3 rounded-xl border flex flex-col justify-between h-20 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-white dark:bg-slate-900 border-indigo-500 ring-1 ring-indigo-500/25 shadow-sm"
                            : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-850 hover:bg-slate-100/50"
                        }`}
                      >
                        <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                          TARGET HOST
                        </span>
                        <span className="font-display font-extrabold text-xs text-slate-950 dark:text-white leading-tight">
                          {cloud.key}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Blueprint validated & fully ready for container output</span>
            </div>
          </div>

          {/* Right panel: Controls Console & Sandbox Dashboard (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Core Command Row: Featuring requested Deploy, Download, and Save as Folder action triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* 1. DEPLOY Action Button */}
                <button
                  id="sandbox-deploy-btn"
                  onClick={startDeployment}
                  disabled={isDeploying}
                  className={`w-full flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl font-display text-xs sm:text-sm font-extrabold shadow-md scale-100 hover:scale-102 transition-all cursor-pointer text-white select-none ${
                    isDeploying
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-tr from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 hover:shadow-indigo-100 dark:hover:shadow-none"
                  }`}
                >
                  <Rocket size={16} className={isDeploying ? "animate-bounce" : ""} />
                  <span>{isDeploying ? `Deploying (${deployStep * 10}%)` : "Deploy Blueprint"}</span>
                </button>

                {/* 2. DOWNLOAD Action Button */}
                <button
                  id="sandbox-download-btn"
                  onClick={handleDownloadBlueprint}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl font-display text-xs sm:text-sm font-extrabold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-350 scale-100 hover:scale-102 transition-all cursor-pointer select-none"
                >
                  <Download size={16} className="text-slate-500" />
                  <span>Download Config</span>
                </button>

                {/* 3. SAVE AS FOLDER Action Button */}
                <button
                  id="sandbox-folder-btn"
                  onClick={handleSaveToFolder}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl font-display text-xs sm:text-sm font-extrabold bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border border-amber-200/40 dark:border-amber-950/40 shadow-sm hover:bg-amber-100/40 dark:hover:bg-amber-950/35 scale-100 hover:scale-102 transition-all cursor-pointer select-none"
                >
                  <FolderPlus size={16} />
                  <span>Save as Folder</span>
                </button>

              </div>

              {/* Console Output Workspace Component */}
              <div className="bg-slate-950 text-slate-100 rounded-3xl border border-slate-850 shadow-xl overflow-hidden flex flex-col h-[340px]">
                
                {/* Header Navigation for Sandbox Terminal Output vs Saved Folders Explorer */}
                <div className="bg-slate-900 border-b border-slate-850 px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button
                      id="tab-btn-explorer"
                      onClick={() => setActiveTab("explorer")}
                      className={`font-display text-xs font-bold tracking-tight pb-1 border-b-2 transition-all cursor-pointer ${
                        activeTab === "explorer"
                          ? "border-indigo-500 text-white"
                          : "border-transparent text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Folder size={13} />
                        Workspace Folder Explorer ({savedProjects.length})
                      </span>
                    </button>

                    <button
                      id="tab-btn-terminal"
                      onClick={() => setActiveTab("terminal")}
                      className={`font-display text-xs font-bold tracking-tight pb-1 border-b-2 transition-all cursor-pointer ${
                        activeTab === "terminal"
                          ? "border-indigo-500 text-white"
                          : "border-transparent text-slate-500 hover:text-slate-300"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Terminal size={13} />
                        Live Deployment Logs
                      </span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-800 flex items-center justify-center">
                      <span className="w-1.2 h-1.2 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                    <span className="font-mono text-[9px] text-slate-500">
                      ENV: SANDBOX_LOCAL
                    </span>
                  </div>
                </div>

                {/* Content Panel Box */}
                <div className="flex-1 overflow-y-auto p-5 font-mono text-[11px] leading-relaxed select-text">
                  <AnimatePresence mode="wait">
                    
                    {activeTab === "terminal" ? (
                      /* Terminal Logging Output list */
                      <motion.div
                        key="terminal-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-1.5"
                      >
                        {terminalLogs.length === 0 ? (
                          <div className="text-slate-600 text-center py-16 flex flex-col items-center justify-center gap-2">
                            <Terminal size={24} />
                            <span>No active logs. Click "Deploy Blueprint" to start.</span>
                          </div>
                        ) : (
                          terminalLogs.map((log, index) => (
                            <div
                              key={index}
                              className={
                                log.includes("SUCCESSFUL")
                                  ? "text-emerald-400 font-bold"
                                  : log.includes("INITIALIZING")
                                  ? "text-indigo-400"
                                  : "text-slate-300"
                              }
                            >
                              {log}
                            </div>
                          ))
                        )}
                      </motion.div>
                    ) : (
                      /* Virtual Folder File Explorer List representing Saved Configs */
                      <motion.div
                        key="explorer-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2.5"
                      >
                        <div className="text-slate-400 pb-1.5 border-b border-slate-900 flex items-center justify-between">
                          <span>Directory: /home/workspace/saved-deployments/</span>
                          <span className="text-[10px] text-indigo-400 font-bold">Virtual storage</span>
                        </div>

                        {savedProjects.length === 0 ? (
                          <div className="text-slate-600 text-center py-12 flex flex-col items-center justify-center gap-2">
                            <FolderPlus size={24} />
                            <span>Workspace directory is empty.</span>
                            <span className="text-[10px] text-slate-500 max-w-xs">
                              Select integration settings, then click "Save as Folder" to store config documents here.
                            </span>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {savedProjects.map((proj) => (
                              <div
                                id={`explorer-item-${proj.id}`}
                                key={proj.id}
                                className="bg-slate-900 rounded-xl border border-slate-850 p-3.5 hover:border-slate-700 hover:bg-slate-900/80 transition-all group flex flex-col justify-between"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div className="flex items-start gap-2.5">
                                    <span className="p-1.5 rounded-lg bg-indigo-950 text-indigo-400 mt-0.5 shrink-0">
                                      <FileText size={14} />
                                    </span>
                                    <div>
                                      <div className="font-sans font-bold text-slate-200 text-xs truncate max-w-[150px]">
                                        {proj.projectName}
                                      </div>
                                      <div className="text-[10px] text-slate-500 mt-0.5 font-mono">
                                        {proj.deployedAt}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Delete File action */}
                                  <button
                                    id={`delete-proj-btn-${proj.id}`}
                                    onClick={() => handleDeleteProject(proj.id, proj.projectName)}
                                    className="p-1 rounded text-slate-500 hover:text-rose-400 hover:bg-rose-950/30 transition-all cursor-pointer"
                                    title="Delete from folder"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>

                                <div className="mt-4 pt-2.5 border-t border-slate-850 text-[10px] text-slate-400 space-y-0.5 font-sans leading-tight">
                                  <div>
                                    <span className="font-semibold text-slate-500">ERP:</span> {proj.erp}
                                  </div>
                                  <div>
                                    <span className="font-semibold text-slate-500">AI:</span> {proj.aiModule}
                                  </div>
                                  <div>
                                    <span className="font-semibold text-slate-500">Cloud:</span> {proj.cloudHost.split(" ")[0]}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Help guidelines banner */}
            <div className="mt-6 bg-slate-50 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-850 rounded-2xl p-4 flex items-start gap-3">
              <span className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                <HelpCircle size={15} />
              </span>
              <p className="font-sans text-[11.5px] text-slate-500 dark:text-slate-400 leading-normal">
                <strong>How does this sandbox work?</strong> Customize your enterprise systems. Triggering a <strong>Deployment</strong> generates live container simulation logs. <strong>Downloading</strong> packages the variables as a valid local file. <strong>Saving as Folder</strong> persists records safely into local browser storage.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
