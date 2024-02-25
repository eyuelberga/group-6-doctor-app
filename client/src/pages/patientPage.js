import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import fakeData from "./MOCK_DATA.json";
import { useTable } from "react-table";
import Navbar from '../components/Navbar'

import { useApi } from './hooks/use-api';

function PatientPage() {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(() => [

            {
                Header: "Patient ID",
                accessor: "Patient ID"
            },

            {
                Header: "Image",
                accessor: "Image"
            },

            {
                Header: "Key Findings",
                accessor: "Key Findings"
            },

            {
                Header: "Brixia Score",
                accessor: "Brixia Score"
            },

            {
                Header: "Age",
                accessor: "Age"
            },

            {
                Header: "Sex",
                accessor: "Sex"
            },

            {
                Header: "BMI",
                accessor: "BMI"
            },

            {
                Header: "Zip Code",
                accessor: "Zip Code"
            },
        ], 
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns,data });

    return (
        <div className="PatientPage">
            <div>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PatientPage;