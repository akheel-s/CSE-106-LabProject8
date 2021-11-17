const T_dashboard = () => {
    const data = [
        { Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5 },
        { Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5 },
        { Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5}
      ]

    return (
        <div className = "teach_dash">

        {/* <div id="myCourse" className="tabcontent"> */}
            <div className="table">
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Teacher</th>
                    <th>Time</th>
                    <th>Students Enrolled</th>
                </tr>
                {data.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.Course}</td>
                        <td>{val.Teacher}</td>
                        <td>{val.Time}</td>
                        <td>{val.NumStudents}</td>
                    </tr>
                )
        })}
            </table>
            {/* </div> */}
        </div>
        </div>
        
    );
}

export default T_dashboard;