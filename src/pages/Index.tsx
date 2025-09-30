import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KPICard } from "@/components/KPICard";
import { DashboardFilters } from "@/components/DashboardFilters";
import { PredictiveAnalysis } from "@/components/PredictiveAnalysis";
import { InferentialAnalysis } from "@/components/InferentialAnalysis";
import { RetrospectiveAnalysis } from "@/components/RetrospectiveAnalysis";
import {
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Users,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                SRA Grievance Analytics Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Performance Analysis — Q3 2025
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Last Updated</div>
              <div className="text-sm font-medium text-foreground">
                September 30, 2025
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* KPI Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Key Performance Indicators
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <KPICard
              title="Total Grievances"
              value="1,050"
              icon={FileText}
              variant="default"
              trend={{ value: 12.4, isPositive: false }}
            />
            <KPICard
              title="Resolved"
              value="867"
              icon={CheckCircle}
              variant="success"
              subtitle="82.6% resolution rate"
            />
            <KPICard
              title="Pending"
              value="183"
              icon={Clock}
              variant="warning"
              subtitle="17.4% backlog"
            />
            <KPICard
              title="Avg Resolution"
              value="19 days"
              icon={TrendingUp}
              variant="accent"
              trend={{ value: 21, isPositive: true }}
            />
            <KPICard
              title="Departments"
              value="8"
              icon={Users}
              variant="default"
              subtitle="Active units"
            />
            <KPICard
              title="Critical Issues"
              value="34"
              icon={AlertCircle}
              variant="warning"
              subtitle="Require attention"
            />
          </div>
        </section>

        {/* Main Dashboard Layout */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <DashboardFilters />
          </aside>

          {/* Analysis Tabs */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="predictive" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                <TabsTrigger value="predictive" className="py-3">
                  <div className="text-center">
                    <div className="font-semibold">Predictive</div>
                    <div className="text-xs text-muted-foreground">
                      Forecast & Trends
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="inferential" className="py-3">
                  <div className="text-center">
                    <div className="font-semibold">Inferential</div>
                    <div className="text-xs text-muted-foreground">
                      Correlations & Insights
                    </div>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="retrospective" className="py-3">
                  <div className="text-center">
                    <div className="font-semibold">Retrospective</div>
                    <div className="text-xs text-muted-foreground">
                      Historical Review
                    </div>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="predictive" className="space-y-6">
                <PredictiveAnalysis />
              </TabsContent>

              <TabsContent value="inferential" className="space-y-6">
                <InferentialAnalysis />
              </TabsContent>

              <TabsContent value="retrospective" className="space-y-6">
                <RetrospectiveAnalysis />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-6 bg-card">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>
            Slum Rehabilitation Authority — Grievance Redressal Performance Dashboard
          </p>
          <p className="mt-1">
            Data-driven insights for policy decisions and operational excellence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
