import React from "react";
import {
  Brain,
  Layers,
  Database,
  RefreshCw,
  Play,
  BarChart3,
  CloudLightning,
  Code2,
  Bot,
  ShieldCheck,
  TrendingUp,
  Users,
  Heart,
  Sparkles,
  Clock,
  Globe,
  Lightbulb,
  Lock,
  Award,
  CheckCircle,
  UserCheck,
  BookOpen,
  Shield,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Send,
  Check,
  Search,
  Menu,
  X,
  ArrowRight,
  Briefcase,
  LucideProps
} from "lucide-react";

interface LucideIconProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Brain,
  Layers,
  Database,
  RefreshCw,
  Play,
  BarChart3,
  CloudLightning,
  Code2,
  Bot,
  ShieldCheck,
  TrendingUp,
  Users,
  Heart,
  Sparkles,
  Clock,
  Globe,
  Lightbulb,
  Lock,
  Award,
  CheckCircle,
  UserCheck,
  BookOpen,
  Shield,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Send,
  Check,
  Search,
  Menu,
  X,
  ArrowRight,
  Briefcase
};

export const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon
    return <HelpCircle {...props} />;
  }
  return <IconComponent {...props} />;
};

// Simple inline HelpCircle fallback component in case it's needed
const HelpCircle: React.FC<LucideProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
