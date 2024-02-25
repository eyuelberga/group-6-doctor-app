import React from 'react';
import { useTable } from 'react-table';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'; // Import from React Router



const JsonTable = ({ jsonData }) => {

  const handleDelete = async (exam_id) => {
    console.log("delete pressed")
    console.log(exam_id)

    if(window.confirm("Are you sure you want to delete this exam?")){
      // Call API to delete exam
      await fetch(`https://fmda-api.vercel.app/api/exams/${exam_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      window.location.reload()
    }

  }
  // Keep track of the page we are on
  const [currentPage, setCurrentPage] = useState('admin');
  const location = useLocation();


  // Update current page based on logic
  useEffect(() => {
    // Extract the current route from the location object
    const currentRoute = location.pathname;

    // Update the currentPage state based on your logic
    if (currentRoute === '/exams') {
      setCurrentPage('exams');
    } else if (currentRoute === '/admin') {
      setCurrentPage('admin');
    }
    

  }, [location.pathname]); 


  // Convert JSON data into columns
  const columns = React.useMemo(() => {
    if (!jsonData || jsonData.length === 0) return [];
    
    // Take the keys from the first object in the array as column headers
    const keys = Object.keys(jsonData[0]);
    
    return keys.map(key => ({ Header: key, accessor: key }));
  }, [jsonData]);

  // Create a table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: jsonData });

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
      
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()} style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {/* Check if the cell contains an image URL */}
                  {cell.column.id === 'imageURL' ? (
                    <img
                      src={cell.value}
                      alt={`Image for ${row.original.name}`}
                      style={{ maxWidth: '50px', maxHeight: '50px' }}
                    />
                  ) : 
                  cell.column.id === 'examId' ? (
                    (row && row.cells && row.cells.length > 0) && (
                      // <a href={`/exam/${cell.value}`}>{cell.value}</a>
                      <Link to = {`/exam/${cell.value}`}> {cell.value}</Link>
                      // <Link to = {`/Exam`}> {cell.value}</Link>

                    
                    )
                  ) : (
                    cell.render('Cell')
                  )
                }
                </td>
              ))}
              {currentPage === 'admin' && (
                <>
                  <td>
                    {/* <a href= { row.cells[1]}> {console.log(row.cells[1].value)}</a>
                                        <a href= { row.cells[1]}> {console.log(row.cells[1].value)}</a> */}
                    
                    {/* <a href={`/exam/${rows.cells[1].value}/update`}> Update</a> */}
                    {row && row.cells && row.cells.length >0 && <a href={`/exam/${row.cells[1].value}/update`}> Update</a>}

                  </td>
                  <td>
                  {row && row.cells && row.cells.length >0 && <button onClick={()=>{handleDelete(row.cells[1].value)}}>Delete</button>}
                    {/* <button onClick={()=>{handleDelete(rows.cells[1].value)}}>Delete</button> */}
                  </td>
                </>
              )}
              {/* <td>
                <button> Update </button>
              </td>
              <td>
                <button> Delete </button>
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
    
  );
};

export default JsonTable;