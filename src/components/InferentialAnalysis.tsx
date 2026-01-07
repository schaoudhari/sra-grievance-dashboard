import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import {Grievance} from "@/hooks/use-combined-grievance-data";
import {useMemo} from "react";


const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

interface InferentialAnalysisProps {
    grievances: Grievance[];
}

export const InferentialAnalysis = ({ grievances }: InferentialAnalysisProps) => {

    const departmentLoad = useMemo(() => {
        const departments: { [key: string]: { count: number, totalPendency: number } } = {};
        grievances.forEach(g => {
            const dept = g["Office Name"];
            if (departments[dept]) {
                departments[dept].count++;
                departments[dept].totalPendency += g.Pendency;
            } else {
                departments[dept] = { count: 1, totalPendency: g.Pendency };
            }
        });
        return Object.entries(departments).map(([department, data]) => ({
            department,
            complaints: data.count,
            avgResolutionDays: data.totalPendency / data.count,
        }));
    }, [grievances]);


    const categoryPendency = useMemo(() => {
        const categories: { [key: string]: { count: number, totalPendency: number } } = {};
        grievances.forEach(g => {
            const category = g.NOG;
            if (categories[category]) {
                categories[category].count++;
                categories[category].totalPendency += g.Pendency;
            } else {
                categories[category] = { count: 1, totalPendency: g.Pendency };
            }
        });
        return Object.entries(categories).map(([category, data]) => ({
            category,
            avgDays: data.totalPendency / data.count,
        }));
    }, [grievances]);


  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Department Load vs Resolution Time</CardTitle>
            <CardDescription>
              Correlation between workload and efficiency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  type="number"
                  dataKey="complaints"
                  name="Complaints"
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: "Total Complaints", position: "insideBottom", offset: -5 }}
                />
                <YAxis
                  type="number"
                  dataKey="avgResolutionDays"
                  name="Avg Days"
                  stroke="hsl(var(--muted-foreground))"
                  label={{ value: "Avg Resolution Days", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Scatter
                  data={departmentLoad}
                  fill="hsl(var(--primary))"
                  name="Departments"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category vs. Average Pendency</CardTitle>
            <CardDescription>Average pendency for each grievance category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryPendency}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Bar dataKey="avgDays" name="Average Pendency">
                  {categoryPendency.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
