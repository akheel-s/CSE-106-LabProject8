import { useState } from "react";

const S_dashboard = () => {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };

    const addRow = () => {
        console.log("Add function for adding rows.")
      };

    const delRow = () => {
        console.log("Add function for deleting rows.")
      };

    const data = [
        { Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5 },
        { Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5 },
        { Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5}
      ]

    const alldata = [
        { ClassID: "1", Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5 },
        { ClassID: "2", Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5 },
        { ClassID: "3", Course: "Test", Teacher: "Hempworth", Time: "Tesst Time", NumStudents: 5},
        { ClassID: "4", Course: "Cool", Teacher: "damn", Time: "Tesst Time", NumStudents: 10},
        { ClassID: "5", Course: "Cool", Teacher: "damn", Time: "Tesst Time", NumStudents: 10},
        { ClassID: "6", Course: "Cool", Teacher: "damn", Time: "Tesst Time", NumStudents: 10},
        { ClassID: "7", Course: "Cool", Teacher: "damn", Time: "Tesst Time", NumStudents: 10}

      ]



    return (
        <div className = "stud_dash">

        <div className="tab">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Your Courses</button>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Add Courses</button>    
        </div>

        {/* <div id="myCourse" className="tabcontent"> */}
            <div className={toggleState === 1 ? "content  active-content" : "content"}>
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

        {/* <div id="addCourse" className="tabcontent"> */}
            <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Teacher</th>
                    <th>Time</th>
                    <th>Students Enrolled</th>
                </tr>
                {alldata.map((val, key) => {
                    return (
                    <tr key={key}>
                        <td>{val.ClassID}</td>
                        <td>{val.Course}</td>
                        <td>{val.Teacher}</td>
                        <td>{val.Time}</td>
                        <td>{val.NumStudents}</td>
                    </tr>
                )
        })}
            </table>

            <input type="text" placeholder="Enter Class ID..." />
            <button onClick={addRow}> Add Class </button>

            <input type="text" placeholder="Enter Class ID..." />
            <button onClick={delRow}> Drop Class </button>



            </div>

        {/* </div> */}
        </div>
        
    );
}

export default S_dashboard;