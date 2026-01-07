import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingDown, CheckCircle, XCircle, Clock } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const quarterlyTrend = [
  { quarter: "Q1 2024", total: 752, resolved: 598, pending: 154 },
  { quarter: "Q2 2024", total: 834, resolved: 671, pending: 163 },
  { quarter: "Q3 2024", total: 956, resolved: 782, pending: 174 },
  { quarter: "Q4 2024", total: 891, resolved: 745, pending: 146 },
  { quarter: "Q1 2025", total: 850, resolved: 712, pending: 138 },
  { quarter: "Q2 2025", total: 920, resolved: 771, pending: 149 },
  { quarter: "Q3 2025", total: 1050, resolved: 867, pending: 183 },
];

const categoryHistory = [
  { name: "Rent & Compensation", value: 312 },
  { name: "Allotment & Possession", value: 245 },
  { name: "Society Mismanagement", value: 198 },
  { name: "Illegal Construction", value: 167 },
  { name: "Administrative Delays", value: 128 },
];

const resolutionTrend = [
  { month: "Jan", avgDays: 24 },
  { month: "Feb", avgDays: 26 },
  { month: "Mar", avgDays: 28 },
  { month: "Apr", avgDays: 25 },
  { month: "May", avgDays: 23 },
  { month: "Jun", avgDays: 22 },
  { month: "Jul", avgDays: 21 },
  { month: "Aug", avgDays: 20 },
  { month: "Sep", avgDays: 19 },
];

const topIssues = [
  {
    issue: "Transit rent payment delays",
    frequency: 142,
    avgResolution: "28 days",
    status: "Declining",
  },
  {
    issue: "Allotment lottery transparency",
    frequency: 98,
    avgResolution: "35 days",
    status: "Stable",
  },
  {
    issue: "Society committee disputes",
    frequency: 87,
    avgResolution: "22 days",
    status: "Improving",
  },
  {
    issue: "Unauthorized construction",
    frequency: 76,
    avgResolution: "42 days",
    status: "Rising",
  },
  {
    issue: "Document verification delays",
    frequency: 64,
    avgResolution: "18 days",
    status: "Improving",
  },
];

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];


import { Grievance, useCombinedGrievanceData } from "@/hooks/use-combined-grievance-data";
import {GrievanceTable} from "@/components/GrievanceTable.tsx";

interface RetrospectiveAnalysisProps {
    grievances: Grievance[];
}

export const RetrospectiveAnalysis = ({ grievances }: RetrospectiveAnalysisProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Historical Grievance Data
      </h2>
      <GrievanceTable grievances={grievances} />
    </div>
  );
};

