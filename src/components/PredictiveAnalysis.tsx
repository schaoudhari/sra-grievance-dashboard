import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import {Grievance} from "@/hooks/use-combined-grievance-data";
import { useMemo } from "react";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

interface PredictiveAnalysisProps {
    grievances: Grievance[];
}

export const PredictiveAnalysis = ({ grievances }: PredictiveAnalysisProps) => {

    const monthlyTrend = useMemo(() => {
        const trend: { [key: string]: number } = {};
        grievances.forEach(g => {
            const date = new Date(g["Filed On"]);
            const month = date.toLocaleString('default', { month: 'short' });
            if (trend[month]) {
                trend[month]++;
            } else {
                trend[month] = 1;
            }
        });
        return Object.entries(trend).map(([month, count]) => ({ month, count }));
    }, [grievances]);

    const categoryPrediction = useMemo(() => {
        const categories: { [key: string]: number } = {};
        grievances.forEach(g => {
            const category = g.NOG;
            if (categories[category]) {
                categories[category]++;
            } else {
                categories[category] = 1;
            }
        });
        return Object.entries(categories).map(([category, count]) => ({ category, count }));
    }, [grievances]);

    const statusDistribution = useMemo(() => {
        const statuses: { [key: string]: number } = {};
        grievances.forEach(g => {
            const status = g.Status;
            if (statuses[status]) {
                statuses[status]++;
            } else {
                statuses[status] = 1;
            }
        });
        return Object.entries(statuses).map(([name, value]) => ({ name, value }));
    }, [grievances]);


  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Grievance Volume Trend</CardTitle>
          <CardDescription>
            Grievances filed per month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
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
                dataKey="count"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="Grievances"
                dot={{ fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
            <CardDescription>Distribution of grievances by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryPrediction} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis
                  type="category"
                  dataKey="category"
                  width={150}
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Legend />
                <Bar dataKey="count" fill="hsl(var(--primary))" name="Count" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status Distribution</CardTitle>
            <CardDescription>Current status of all grievances</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
