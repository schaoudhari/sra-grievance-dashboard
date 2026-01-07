
import {useEffect, useState} from "react";
import Papa from "papaparse";
import {parse} from "node-html-parser";

export interface Grievance  {
    "Grevience Token": string;
    "Office Name": string;
    "Details": string;
    "NOG": string;
    "Citizen Name": string;
    "Citizen Mobile": string;
    "Filed On": string;
    "Status updated On": string;
    "Pendency": number;
    "Status": "Closed" | "Auto Closed";
}


export const useCombinedGrievanceData = () => {
    const [grievances, setGrievances] = useState<Grievance[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch and parse CSV
                const csvResponse = await fetch('/aaple-sarkar-grievances.csv');
                if (!csvResponse.ok) {
                    throw new Error(`Failed to fetch CSV: ${csvResponse.statusText}`);
                }
                const csvText = await csvResponse.text();
                const csvData = await new Promise<Grievance[]>((resolve, reject) => {
                    Papa.parse(csvText, {
                        header: true,
                        skipEmptyLines: true,
                        dynamicTyping: true,
                        complete: (results) => resolve(results.data as Grievance[]),
                        error: (err) => reject(err.message),
                    });
                });

                // Fetch and parse HTML
                const htmlResponse = await fetch('/sra-portal-grievances.html');
                if (!htmlResponse.ok) {
                    throw new Error(`Failed to fetch HTML: ${htmlResponse.statusText}`);
                }
                const htmlText = await htmlResponse.text();
                const root = parse(htmlText);
                const table = root.querySelector('table.waffle');
                const htmlData: Grievance[] = [];

                if (table) {
                    const rows = table.querySelectorAll('tr');
                    const header = rows[0].querySelectorAll('th').map(th => th.structuredText);

                    for (let i = 1; i < rows.length; i++) {
                        const row = rows[i];
                        const cells = row.querySelectorAll('td');
                        const rowData: any = {};
                        cells.forEach((cell, j) => {
                            rowData[header[j]] = cell.structuredText;
                        });
                        htmlData.push({
                            "Grevience Token": rowData["Grevience Token"],
                            "Office Name": rowData["Office Name"],
                            "Details": rowData["Details "],
                            "NOG": rowData["NOG"],
                            "Citizen Name": rowData["Citizen Name"],
                            "Citizen Mobile": rowData["Citizen Mobile"],
                            "Filed On": rowData["Filed On"],
                            "Status updated On": rowData["Status updated On"],
                            "Pendency": Number(rowData["Pendency"]),
                            "Status": rowData["Status"],
                        });
                    }
                }


                setGrievances([...csvData, ...htmlData]);
                setLoading(false);
            } catch (e: any) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {grievances, loading, error};
};
