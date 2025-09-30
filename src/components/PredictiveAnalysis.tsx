import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, AlertTriangle, Calendar } from "lucide-react";

const trendData = [
  { month: "Oct", actual: 245, predicted: 250 },
  { month: "Nov", actual: 289, predicted: 285 },
  { month: "Dec", actual: 312, predicted: 320 },
  { month: "Jan", actual: null, predicted: 340 },
  { month: "Feb", actual: null, predicted: 365 },
  { month: "Mar", actual: null, predicted: 380 },
];

const categoryPrediction = [
  { category: "Rent & Compensation", current: 128, predicted: 145 },
  { category: "Allotment & Possession", current: 98, predicted: 110 },
  { category: "Society Mismanagement", current: 76, predicted: 82 },
  { category: "Illegal Construction", current: 54, predicted: 68 },
  { category: "Administrative Delays", current: 43, predicted: 55 },
];

const seasonalPattern = [
  { name: "Q1", value: 850 },
  { name: "Q2", value: 920 },
  { name: "Q3", value: 1050 },
  { name: "Q4", value: 980 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

export const PredictiveAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-warning" />
              Expected Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">+18%</div>
            <p className="text-xs text-muted-foreground mt-1">Next Quarter (Q4 2025)</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              High-Risk Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Rent Issues</div>
            <p className="text-xs text-muted-foreground mt-1">Predicted surge in March</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              Peak Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Q3</div>
            <p className="text-xs text-muted-foreground mt-1">Historically highest volume</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grievance Volume Forecast (Next 6 Months)</CardTitle>
          <CardDescription>
            Based on historical trends and seasonal patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={trendData}>
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
                dataKey="actual"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="Actual"
                dot={{ fill: "hsl(var(--primary))" }}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Predicted"
                dot={{ fill: "hsl(var(--accent))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Category-wise Predictions</CardTitle>
            <CardDescription>Current vs Predicted (Next Quarter)</CardDescription>
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
                <Bar dataKey="current" fill="hsl(var(--primary))" name="Current" />
                <Bar dataKey="predicted" fill="hsl(var(--warning))" name="Predicted" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Seasonal Pattern Analysis</CardTitle>
            <CardDescription>Quarterly complaint distribution</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={seasonalPattern}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {seasonalPattern.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Predictive Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-warning mt-2" />
              <div>
                <p className="font-medium text-foreground">
                  18% increase expected in Q4 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  Based on 3-year historical trend and current growth rate
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
              <div>
                <p className="font-medium text-foreground">
                  Rent & Compensation complaints likely to surge in March
                </p>
                <p className="text-sm text-muted-foreground">
                  Seasonal pattern observed for past 2 years coinciding with fiscal year-end
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-accent mt-2" />
              <div>
                <p className="font-medium text-foreground">
                  Illegal Construction complaints showing upward trend
                </p>
                <p className="text-sm text-muted-foreground">
                  26% predicted increase suggests need for preventive action
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Strategic Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground">
            <li>
              Increase staffing in Rent & Compensation department ahead of predicted March surge
            </li>
            <li>
              Implement proactive monitoring system for illegal constructions to reduce complaint volume
            </li>
            <li>
              Prepare additional resources for Q3 period (historically highest volume quarter)
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};
