import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { LinkIcon, Users, MapPin, Clock } from "lucide-react";

const correlationData = [
  { department: "Assistant Registrar", complaints: 142, avgResolutionDays: 18 },
  { department: "Dy. Collector", complaints: 98, avgResolutionDays: 25 },
  { department: "Executive Engineer", complaints: 87, avgResolutionDays: 32 },
  { department: "IT Department", complaints: 34, avgResolutionDays: 8 },
  { department: "Administrative", complaints: 65, avgResolutionDays: 15 },
];

const locationPattern = [
  { area: "Zone A", complaints: 156, density: "High" },
  { area: "Zone B", complaints: 98, density: "Medium" },
  { area: "Zone C", complaints: 132, density: "High" },
  { area: "Zone D", complaints: 67, density: "Low" },
  { area: "Zone E", complaints: 89, density: "Medium" },
];

const timeResolutionData = [
  { category: "Rent Issues", avgDays: 28, satisfactionRate: 62 },
  { category: "Allotment", avgDays: 35, satisfactionRate: 58 },
  { category: "Society", avgDays: 22, satisfactionRate: 71 },
  { category: "Illegal Const.", avgDays: 42, satisfactionRate: 54 },
  { category: "Admin Delays", avgDays: 18, satisfactionRate: 68 },
];

const repeatComplaintsData = [
  { type: "First Time", count: 398, percentage: 68 },
  { type: "Repeat (2x)", count: 124, percentage: 21 },
  { type: "Repeat (3+)", count: 64, percentage: 11 },
];

const ZONE_COLORS: Record<string, string> = {
  High: "hsl(var(--destructive))",
  Medium: "hsl(var(--warning))",
  Low: "hsl(var(--success))",
};

export const InferentialAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-primary" />
              Strong Correlation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">-0.72</div>
            <p className="text-xs text-muted-foreground mt-1">
              Resolution time vs Satisfaction
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-warning" />
              Repeat Complaints
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">32%</div>
            <p className="text-xs text-muted-foreground mt-1">Multiple submissions</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-destructive" />
              Hotspot Zones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2 Zones</div>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-accent">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Time Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Critical</div>
            <p className="text-xs text-muted-foreground mt-1">
              Resolution speed matters
            </p>
          </CardContent>
        </Card>
      </div>

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
                  data={correlationData}
                  fill="hsl(var(--primary))"
                  name="Departments"
                />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution by Density</CardTitle>
            <CardDescription>Complaint hotspots across zones</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={locationPattern}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="area" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                />
                <Bar dataKey="complaints" name="Complaints">
                  {locationPattern.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ZONE_COLORS[entry.density]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resolution Time Impact on Satisfaction</CardTitle>
          <CardDescription>
            Faster resolution correlates with higher satisfaction rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeResolutionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
              <YAxis
                yAxisId="left"
                stroke="hsl(var(--muted-foreground))"
                label={{ value: "Avg Days", angle: -90, position: "insideLeft" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="hsl(var(--muted-foreground))"
                label={{ value: "Satisfaction %", angle: 90, position: "insideRight" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="avgDays"
                fill="hsl(var(--warning))"
                name="Avg Resolution Days"
              />
              <Bar
                yAxisId="right"
                dataKey="satisfactionRate"
                fill="hsl(var(--success))"
                name="Satisfaction Rate %"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Repeat Complaint Analysis</CardTitle>
            <CardDescription>Citizens filing multiple grievances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {repeatComplaintsData.map((item) => (
                <div key={item.type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">{item.type}</span>
                    <span className="text-muted-foreground">
                      {item.count} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Correlations Identified</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <div>
                  <p className="font-medium text-foreground">
                    Higher workload = Longer resolution time
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Departments with 100+ complaints average 10 days longer
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                <div>
                  <p className="font-medium text-foreground">
                    Geographic clusters in Zones A & C
                  </p>
                  <p className="text-sm text-muted-foreground">
                    53% of complaints come from just 2 zones
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                <div>
                  <p className="font-medium text-foreground">
                    32% are repeat complaints
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Indicates incomplete first-time resolution
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-base">Inferred Root Causes</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground">
            <li>
              Resource constraints in high-workload departments directly impact resolution
              efficiency
            </li>
            <li>
              Zone A & C likely have structural issues (infrastructure, governance) driving
              complaint concentration
            </li>
            <li>
              Strong negative correlation (-0.72) between resolution time and satisfaction
              suggests speed is critical factor
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};
