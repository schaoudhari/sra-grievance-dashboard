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

export const RetrospectiveAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingDown className="h-4 w-4 text-primary" />
              YoY Change
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">+12.4%</div>
            <p className="text-xs text-muted-foreground mt-1">Total grievances</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              Resolution Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">82.6%</div>
            <p className="text-xs text-muted-foreground mt-1">Q3 2025</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <XCircle className="h-4 w-4 text-warning" />
              Pending Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">183</div>
            <p className="text-xs text-muted-foreground mt-1">Current backlog</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Avg Resolution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">19 days</div>
            <p className="text-xs text-muted-foreground mt-1">-21% from last year</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quarterly Grievance Trend (Last 7 Quarters)</CardTitle>
          <CardDescription>Overall volume and resolution performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={quarterlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="quarter" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="Total Grievances"
                dot={{ fill: "hsl(var(--primary))" }}
              />
              <Line
                type="monotone"
                dataKey="resolved"
                stroke="hsl(var(--success))"
                strokeWidth={2}
                name="Resolved"
                dot={{ fill: "hsl(var(--success))" }}
              />
              <Line
                type="monotone"
                dataKey="pending"
                stroke="hsl(var(--warning))"
                strokeWidth={2}
                name="Pending"
                dot={{ fill: "hsl(var(--warning))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Historical Category Distribution</CardTitle>
            <CardDescription>Q3 2025 Breakdown</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryHistory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name.split(" ")[0]}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryHistory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resolution Time Improvement</CardTitle>
            <CardDescription>Average days to resolve (2025)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={resolutionTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="avgDays"
                  stroke="hsl(var(--accent))"
                  strokeWidth={3}
                  name="Avg Resolution Days"
                  dot={{ fill: "hsl(var(--accent))", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top 5 Recurring Issues (Q3 2025)</CardTitle>
          <CardDescription>Most frequent citizen complaints and their trends</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Issue Type</TableHead>
                <TableHead className="text-right">Frequency</TableHead>
                <TableHead className="text-right">Avg Resolution</TableHead>
                <TableHead className="text-right">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topIssues.map((issue) => (
                <TableRow key={issue.issue}>
                  <TableCell className="font-medium">{issue.issue}</TableCell>
                  <TableCell className="text-right">{issue.frequency}</TableCell>
                  <TableCell className="text-right">{issue.avgResolution}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        issue.status === "Improving"
                          ? "bg-success/10 text-success"
                          : issue.status === "Rising"
                          ? "bg-destructive/10 text-destructive"
                          : issue.status === "Declining"
                          ? "bg-warning/10 text-warning"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {issue.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Historical Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-success mt-2" />
              <div>
                <p className="font-medium text-foreground">
                  21% improvement in resolution time
                </p>
                <p className="text-sm text-muted-foreground">
                  Average time reduced from 24 days (Jan) to 19 days (Sep) in 2025
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-warning mt-2" />
              <div>
                <p className="font-medium text-foreground">
                  12.4% year-over-year increase in complaints
                </p>
                <p className="text-sm text-muted-foreground">
                  From 956 (Q3 2024) to 1050 (Q3 2025), indicating growing citizen engagement
                  or systemic issues
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div>
                <p className="font-medium text-foreground">
                  Rent & Compensation remains top category
                </p>
                <p className="text-sm text-muted-foreground">
                  Consistently accounts for ~30% of all grievances over past 7 quarters
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Summary & Strategic Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Summary:</h4>
              <p className="text-sm text-foreground">
                Q3 2025 saw 1,050 grievances with an 82.6% resolution rate. While complaint
                volume increased 12.4% YoY, resolution efficiency improved significantly
                (21% faster). Rent & Compensation issues dominate, followed by Allotment
                concerns. Transit rent delays and unauthorized construction show concerning
                trends.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Recommended Actions:</h4>
              <ol className="space-y-2 list-decimal list-inside text-sm text-foreground">
                <li>
                  Establish dedicated fast-track cell for transit rent payment grievances
                </li>
                <li>
                  Implement bi-weekly interdepartmental coordination meetings for complex
                  cases
                </li>
                <li>
                  Launch preventive awareness campaign in high-complaint zones (A & C) to
                  reduce future grievances
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
