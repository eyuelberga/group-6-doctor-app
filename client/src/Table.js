// Functions as props
const Table = ({ data, handleDelete}) => {
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
          { data.map((exam, index) => (

          // need to check that exam is non null
          // Need to restructure jsx not working
           
            
            <tr key={index}>
              {
                if (condition) {
                  
                }
                 exam[1]._id !== null && console.log(exam[1]._id)
              
                
              }
        
              <td>{exam._id}</td>
              <td>{exam.patientId}</td>
              <td>{exam.examId}</td>
              <td><img src={exam.imageURL} alt="failed to load" /></td>
              <td>{exam.keyFindings}</td>
              <td>{exam.brixiaScores}</td>
              <td>{exam.age}</td>
              <td>{exam.sex}</td>
              <td>{exam.bmi}</td>
              <td>{exam.zipCode}</td>
              {/* TODO: Implement Update functionality */}
              <td><button> Update </button></td>
              <td><button onClick={() => handleDelete(exam._id)}> Delete </button></td>


            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
export default Table;