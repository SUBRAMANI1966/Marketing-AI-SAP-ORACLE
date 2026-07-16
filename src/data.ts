import { ServiceItem, ServiceDetailGroup, CoreValue, JobPosition } from "./types";

export const coreServices: ServiceItem[] = [
  {
    id: "ai-genai",
    title: "Artificial Intelligence & Generative AI",
    description: "Build next-generation intelligent applications, customized LLM agents, and cognitive automation workflows to revolutionize productivity.",
    iconName: "Brain",
  },
  {
    id: "sap-consulting",
    title: "SAP Consulting & Implementation",
    description: "End-to-end advisory, setup, and optimization for modern SAP S/4HANA, cloud analytics, and HCM applications.",
    iconName: "Layers",
  },
  {
    id: "oracle-erp",
    title: "Oracle ERP & Cloud Solutions",
    description: "Complete lifecycle management of Oracle Fusion Cloud, HCM, and database migration across high-performance Oracle Cloud Infrastructure.",
    iconName: "Database",
  },
  {
    id: "digital-transformation",
    title: "Enterprise Digital Transformation",
    description: "Strategic process consulting to design modern tech architectures, modernize legacy software, and optimize agility.",
    iconName: "RefreshCw",
  },
  {
    id: "process-automation",
    title: "Business Process Automation",
    description: "Eliminate bottlenecks with cognitive automation, RPA, and streamlined cross-functional API integrations.",
    iconName: "Play",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    description: "Extract actionable market insights, set up modern data engineering pipelines, and build real-time interactive analytics boards.",
    iconName: "BarChart3",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Modernization",
    description: "Secure, seamless, and zero-downtime migration of complex workloads to secure hyper-scale cloud environments.",
    iconName: "CloudLightning",
  },
  {
    id: "app-development",
    title: "Application Dev & System Integration",
    description: "Develop secure, responsive, and robust full-stack applications with streamlined API orchestrations.",
    iconName: "Code2",
  },
  {
    id: "ai-agents",
    title: "AI Agents & Intelligent Automation",
    description: "Deploy autonomous AI agents that handle complex customer service, text parsing, and transaction routing in real time.",
    iconName: "Bot",
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Managed Services",
    description: "Reliable 24/7 technical support, security hardening, and proactive system maintenance for critical business apps.",
    iconName: "ShieldCheck",
  },
];

export const serviceDetailGroups: ServiceDetailGroup[] = [
  {
    id: "ai",
    category: "Artificial Intelligence",
    description: "Harness cognitive engineering to build high-ROI applications, integrate custom reasoning models, and streamline structured document reading.",
    iconName: "Brain",
    subservices: [
      "Generative AI Applications",
      "AI Chatbots & Virtual Assistants",
      "AI Agents & Workflow Automation",
      "Machine Learning Solutions",
      "Predictive Analytics",
      "Intelligent Document Processing",
    ],
  },
  {
    id: "sap",
    category: "SAP Services",
    description: "Optimize global resource planning, payroll operations, and vendor management through modern enterprise modules.",
    iconName: "Layers",
    subservices: [
      "SAP S/4HANA Implementation",
      "SAP SuccessFactors (HCM)",
      "SAP Ariba (Procurement)",
      "SAP Analytics Cloud",
      "SAP Fiori Development",
      "SAP Support & Managed Services",
    ],
  },
  {
    id: "oracle",
    category: "Oracle Services",
    description: "Transition workloads seamlessly to highly secure, high-throughput cloud databases and enterprise logistics modules.",
    iconName: "Database",
    subservices: [
      "Oracle ERP Cloud",
      "Oracle Fusion Applications",
      "Oracle HCM Cloud",
      "Oracle SCM (Supply Chain)",
      "Oracle Database Solutions",
      "Oracle Cloud Infrastructure (OCI)",
    ],
  },
  {
    id: "transformation",
    category: "Digital Transformation",
    description: "Re-engineer workflows, construct unified data lakes, and design modern microservice environments built for rapid scaling.",
    iconName: "RefreshCw",
    subservices: [
      "Process Consulting",
      "Enterprise Automation",
      "Cloud Migration",
      "API & System Integration",
      "Data Engineering",
      "Business Intelligence",
    ],
  },
];

export const whyNexora = [
  {
    title: "Industry-focused expertise",
    description: "Tailored consulting solutions structured specifically for manufacturing, retail, finance, healthcare, and logistics sectors.",
    iconName: "TrendingUp",
  },
  {
    title: "Experienced technology consultants",
    description: "Deep, hands-on architectural experience with decades of certified SAP, Oracle, and AI engineering excellence.",
    iconName: "Users",
  },
  {
    title: "Customer-centric approach",
    description: "We align tightly with your long-term roadmap, treating business value creation as our absolute north star.",
    iconName: "Heart",
  },
  {
    title: "Innovative AI-powered solutions",
    description: "Pioneering custom cognitive agents that integrate directly into ERP systems to slash manual verification times.",
    iconName: "Sparkles",
  },
  {
    title: "End-to-end implementation & support",
    description: "From structural discovery and schema design to post-deployment support and 24/7 managed maintenance.",
    iconName: "Clock",
  },
  {
    title: "Global delivery model",
    description: "Cost-optimized hybrid teams offering around-the-clock implementation cycles with clear governance.",
    iconName: "Globe",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description: "We constantly research, adopt, and deploy emerging technologies to keep our clients ahead of the curve.",
    iconName: "Lightbulb",
  },
  {
    title: "Integrity",
    description: "Transparency, absolute safety of intellectual property, and high professional ethics guide all our client relationships.",
    iconName: "Lock",
  },
  {
    title: "Customer Success",
    description: "We measure our success solely by the tangible productivity gains and business growth achieved by our clients.",
    iconName: "Award",
  },
  {
    title: "Excellence",
    description: "We hold our advisory, architecture, and code delivery to the absolute highest international quality standards.",
    iconName: "CheckCircle",
  },
  {
    title: "Collaboration",
    description: "We work hand-in-hand with your internal IT leaders, transferring hands-on knowledge throughout every sprint.",
    iconName: "UserCheck",
  },
  {
    title: "Continuous Learning",
    description: "Our teams dedicate deep weekly cycles to keeping their enterprise technology certifications completely modern.",
    iconName: "BookOpen",
  },
  {
    title: "Accountability",
    description: "We take ownership of deployment schedules, SLAs, and performance optimization targets with clear transparency.",
    iconName: "Shield",
  },
];

export const jobPositions: JobPosition[] = [
  {
    id: "ai-eng",
    title: "AI Engineer",
    department: "Artificial Intelligence & R&D",
    location: "Hybrid (Chennai / Bangalore / Remote)",
    type: "Full-Time",
    description: "Design and implement custom generative AI workflows, agentic orchestrations, and production LLM integrations for enterprise clients.",
    requirements: [
      "2+ years experience building applications utilizing OpenAI, Gemini, or open-weights models (Llama, etc.).",
      "Proficient in Python, LangChain, LlamaIndex, or Microsoft Semantic Kernel.",
      "Hands-on experience with vector databases (Pinecone, Chroma, pgvector) and embedding pipelines.",
      "Knowledge of LLM fine-tuning, retrieval-augmented generation (RAG), and agentic memory systems is a major plus.",
    ],
  },
  {
    id: "ml-eng",
    title: "Machine Learning Engineer",
    department: "Data Science & AI",
    location: "Chennai / Remote",
    type: "Full-Time",
    description: "Develop, train, and host predictive analytics models and OCR/intelligent document extraction models at scale.",
    requirements: [
      "3+ years experience building and deploying machine learning models in cloud environments.",
      "Strong coding foundation in Python, PyTorch/TensorFlow, Scikit-learn, and SQL.",
      "Experience setting up end-to-end MLOps pipelines (MLflow, Kubeflow, or SageMaker).",
      "Background in computer vision (layout parsing, receipt reading) or financial time-series forecasting.",
    ],
  },
  {
    id: "sap-con",
    title: "SAP Consultant (S/4HANA)",
    department: "SAP Consulting Practice",
    location: "Bangalore / Hybrid",
    type: "Full-Time",
    description: "Advise enterprise leaders on transition architectures from SAP ECC to S/4HANA Cloud and implement customized core modules.",
    requirements: [
      "4+ years experience as a certified SAP consultant, with at least two end-to-end S/4HANA implementation lifecycles.",
      "Deep expertise in at least one module: MM, FICO, SD, PP, or SuccessFactors.",
      "Familiarity with SAP BTP (Business Technology Platform) and SAP Fiori architecture.",
      "Strong business communication and workshop facilitation skills.",
    ],
  },
  {
    id: "oracle-con",
    title: "Oracle Fusion ERP Consultant",
    department: "Oracle Enterprise Practice",
    location: "Chennai / Hybrid",
    type: "Full-Time",
    description: "Oversee functional configuration, data migration, and report authoring for Oracle ERP Cloud and SCM suite.",
    requirements: [
      "3+ years functional/technical experience with Oracle Cloud Fusion applications.",
      "Expertise in Oracle HCM, Financials, or SCM modules.",
      "Proficient in OTBI (Oracle Transactional Business Intelligence), BIP (BI Publisher), and FBDI (File-Based Data Import).",
      "Experience working with Oracle Cloud Infrastructure (OCI) networking and database services is preferred.",
    ],
  },
  {
    id: "fullstack-dev",
    title: "Full Stack Developer",
    department: "Digital Transformation & Engineering",
    location: "Remote / Hybrid",
    type: "Full-Time",
    description: "Build clean, accessible, and responsive dashboards, portals, and custom web applications connecting into enterprise APIs.",
    requirements: [
      "3+ years experience with React, TypeScript, Node.js, and Tailwind CSS.",
      "Strong understanding of state management (Zustand, Redux, Context API) and modern component design.",
      "Experienced with RESTful and GraphQL API design, database schemas (PostgreSQL, MongoDB).",
      "Prior exposure to hosting on AWS, GCP, or Azure and implementing automated CI/CD pipelines.",
    ],
  },
  {
    id: "cloud-eng",
    title: "Cloud Engineer",
    department: "Cloud Migration & Infrastructure",
    location: "Remote",
    type: "Full-Time",
    description: "Architect secure, automated, and multi-tenant AWS, GCP, and OCI environments for enterprise migrations.",
    requirements: [
      "3+ years building cloud-native infrastructure with Terraform, CloudFormation, or Pulumi.",
      "Hands-on experience with container orchestration (Kubernetes/EKS/GKE, Docker).",
      "Familiarity with security compliance, IAM boundaries, encryption-at-rest/transit, and network VPC peering.",
      "Certified in AWS, Google Cloud, or Oracle Cloud Infrastructure.",
    ],
  },
  {
    id: "data-eng",
    title: "Data Engineer",
    department: "Data Engineering & Analytics",
    location: "Chennai",
    type: "Full-Time",
    description: "Design low-latency data lake ingestions, dbt data modeling pipelines, and enterprise-grade ETL processes.",
    requirements: [
      "3+ years experience in a structured Data Engineering role.",
      "Mastery of advanced SQL and analytical programming (Python/PySpark).",
      "Experience with modern warehouse tools: Snowflake, BigQuery, Databricks, or Redshift.",
      "Familiarity with scheduling engines (Apache Airflow, Prefect) and BI reporting platforms.",
    ],
  },
];
