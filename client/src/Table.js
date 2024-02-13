const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Exam ID</th>
            <th>Image</th>
            <th>Key Findings</th>
            <th>Brixia Score</th>
            <th>Age</th>
            <th>Sex</th>
            <th>BMI</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.patient_id}</td>
              <td>{row.exam_id}</td>
              <td><img src={row.image} alt="failed to load" /></td>
              <td>{row.findings}</td>
              <td>{row.brixia_score}</td>
              <td>{row.age}</td>
              <td>{row.sex}</td>
              <td>{row.BMI}</td>
              <td>{row.zip}</td>

            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
export default Table;