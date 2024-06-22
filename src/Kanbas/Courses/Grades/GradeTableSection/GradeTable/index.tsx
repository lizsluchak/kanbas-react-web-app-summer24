import { useParams } from "react-router";
import { assignments, enrollments, users, grades } from "../../../../Database";


/**
 * When you navigate to the Grades section for the selected course:
 * (1) Use the enrollments data to display the users in that course in the 
 *      first column of the Grades table. 
 * (2) Use the assignments data to display a column for each of the assignments. 
 * (3) Use the grades data to display the grade a student got for that 
 *      assignment. Grades don't need to be editable and input fields are not 
 *      required.
 */

export default function GradeTable() {
    const { cid } = useParams(); //capture parameter -> courseId
    const enrolledUsers = enrollments.filter((student) => student.course === cid); //filter enrollments based on course id
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid); //filter assignments by passed course id

    const getGrades = (userId: string, assignmentId: string) => { //pass in user id, assignment id via arrow function
        const grade = grades.find((g) => g.student === userId && g.assignment === assignmentId); //search grades database to find student via userID
                                                                                                 //and assignment via assignmentID
        return grade ? grade.grade : "N/A"; //if grade is found return grade, else return "N/A"
    };
   

    return (
        
        <div id="wd-css-responsive-tables" className="mt-3">
            <table className="table table-striped table-bordered table-hover table-responsive">
                <thead className="thead-dark text-center m-2">
                <tr>
                        <th className = "text-center align-middle">Student Name</th>
                        {courseAssignments.map((assignment) => (
                            <th key={assignment._id} className = "text-center align-middle">
                                {assignment.title}
                                <br/>
                                <small>Out of {assignment.points}</small>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {enrolledUsers.map((enrollment) => { //for each enrolledUser in the filtered enrolledUser array
                        const user = users.find((u) => u._id === enrollment.user);  //find the id of each user
                        return (
                            <tr key={enrollment._id}>
                                <td>{user ? `${user.firstName} ${user.lastName}` : "Unknown"}</td>
                                {courseAssignments.map((assignment) => (
                                    <td key={assignment._id}>{getGrades(enrollment.user, assignment._id)}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
                </table>
                 </div>
    );
}

                              
                                
                                

    
                 
 