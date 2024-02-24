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
        {/* {
          data = data.filter((exam) => exam[1] !== null && exam[1] !== undefined)
         
        } */}
        {
          console.log(data)
        }
        <tbody>
          { data.map((exam, index) => exam[1] && Object.entries(exam[1]).length > 0 &&(

          // need to check that exam is non null
          // Need to restructure jsx not working
            // { exam = Object.entries(exam[1])}
            <tr key={index}>
              {
                exam = Object.entries(exam[1])
              }
              {
                // console.log(exam[1][1])
              }
              
        
              {/* <td>{exam[1][1]}</td> */}
              {/* <td>{exam.patientId}</td>
              <td>{exam.examId}</td>
              <td><img src={exam.imageURL} alt="failed to load" /></td>
              <td>{exam.keyFindings}</td>
              <td>{exam.brixiaScores}</td>
              <td>{exam.age}</td>
              <td>{exam.sex}</td>
              <td>{exam.bmi}</td>
              <td>{exam.zipCode}</td> */}
              {/* TODO: Implement Update functionality */}
              <td><button> Update </button></td>
              {/* <td><button onClick={() => handleDelete(exam._id)}> Delete </button></td> */}


            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
export default Table;