import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Filter } from "lucide-react";
import { format } from "date-fns";

interface DashboardFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export const DashboardFilters = ({ onFilterChange }: DashboardFiltersProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Filter className="h-4 w-4" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Time Period
          </label>
          <Select defaultValue="q3-2025">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="q1-2025">Q1 2025</SelectItem>
              <SelectItem value="q2-2025">Q2 2025</SelectItem>
              <SelectItem value="q3-2025">Q3 2025</SelectItem>
              <SelectItem value="q4-2025">Q4 2025</SelectItem>
              <SelectItem value="2025">Year 2025</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Department
          </label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="assistant-registrar">Assistant Registrar</SelectItem>
              <SelectItem value="dy-collector">Dy. Collector</SelectItem>
              <SelectItem value="executive-engineer">Executive Engineer</SelectItem>
              <SelectItem value="it-department">IT Department</SelectItem>
              <SelectItem value="admin">Administrative</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Category
          </label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="rent-compensation">Rent & Compensation</SelectItem>
              <SelectItem value="allotment">Allotment & Possession</SelectItem>
              <SelectItem value="society">Society Mismanagement</SelectItem>
              <SelectItem value="illegal">Illegal Construction</SelectItem>
              <SelectItem value="delays">Administrative Delays</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Status
          </label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="forwarded">Forwarded</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
