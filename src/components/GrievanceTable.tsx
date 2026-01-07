
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Grievance} from "@/hooks/use-combined-grievance-data";

interface GrievanceTableProps {
  grievances: Grievance[];
}

export const GrievanceTable = ({ grievances }: GrievanceTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Grievance Token</TableHead>
          <TableHead>Office Name</TableHead>
          <TableHead>Details</TableHead>
          <TableHead>NOG</TableHead>
          <TableHead>Citizen Name</TableHead>
          <TableHead>Filed On</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pendency</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {grievances.map((grievance) => (
          <TableRow key={grievance["Grevience Token"]}>
            <TableCell>{grievance["Grevience Token"]}</TableCell>
            <TableCell>{grievance["Office Name"]}</TableCell>
            <TableCell>{grievance["Details"]}</TableCell>
            <TableCell>{grievance["NOG"]}</TableCell>
            <TableCell>{grievance["Citizen Name"]}</TableCell>
            <TableCell>{grievance["Filed On"]}</TableCell>
            <TableCell>{grievance["Status"]}</TableCell>
            <TableCell>{grievance["Pendency"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
