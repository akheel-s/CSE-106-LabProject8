const Course_view = () => {
    const data = [
        { Student: "Testing", Grade: 80 },
        { Student: "lame", Grade: 70 },
        { Student: "karthik", Grade: 69}
      ]

      const updateGrade = () => {
        console.log("Function for running update grade function")
    }

    return (
        <div className = "teach_dash">

        {/* <div id="myCourse" className="tabcontent"> */}
            <div className="table">
            <table>
                <tr>
                    <th>Student Name</th>
                    <th>Grade</th>
                </tr>
                {data.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.Student}</td>
                        <td><input type="number" value = {val.Grade}/></td>
                    </tr>
                )
        })}
            </table>
            <button onClick={updateGrade}> Update </button>

            {/* </div> */}
        </div>
        </div>
        
    );
}

export default Course_view;