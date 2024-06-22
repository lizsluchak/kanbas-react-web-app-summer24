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
    const { cid } = useParams(); //capture parameters
    const enrolledUsers = enrollments.filter((student) => student.course === cid); //filter enrollments for only this course
    
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid); //filter assignments for only this course

    const getGrade = (userId: string, grade: number) => {
    const gradez = grades.find((g) => g.student === userId);}
    export interface UserRecord { _id: string; username: string; password: string; firstName: string, lastName: string, email: string, dob: string, role: string }

    // "_id": "123",
    // "username": "capt_america",
    // "password": "rogers123",
    // "firstName": "Steve",
    // "lastName": "Rogers",
    // "email": "steve@avengers.com",
    // "dob": "1918-07-04",
    // "role": "STUDENT"


    return (

        <div id="wd-css-responsive-tables" className="mt-3">

            <table className="table table-striped table-bordered table-hover table-responsive">
                <thead className="thead-dark text-center m-2">
                    <tr>
                        <th>Student Name<p></p></th>
                        
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                
                            
                                <th>{assignment.title} 
                                <p>Out of {assignment.points}</p></th>))}
                        
                    </tr>
                </thead>

                <tbody>
                    {enrolledUsers.map((enrolledUser) => (

                        // UserRecord temp = users.find((user) => (
                        //     user._id === enrolledUser.user
                        // ));
                        // ))}



                    <tr>
                    

                        <th>{enrolledUser.user} </th>
                        <th>{}</th>
                        </tr>


                    
                    ))}
                              
                                
                                

    
                 
                 </tbody>
                 </table>
                 </div>
    );
}
                                
                           
//                         <td className="text-danger fw-bold">{}</td>

//                         <td>
//                             <div>
//                                 <input type="text"
//                                     className="form-control border-0 text-center"

//                                     placeholder="100%"
//                                     style={{ backgroundColor: '#f8f9fa' }}>

//                                 </input>
//                             </div>


//                         </td>
//                         <td>
//                             <input type="text"
//                                 className="form-control border-0 text-center"
//                                 id="assignmentTitle1"
//                                 placeholder="88.03"
//                                 style={{ backgroundColor: '#f8f9fa' }}>

//                             </input>

//                         </td>
//                         <td><input type="text"
//                             className="form-control border-0 text-center"
//                             id="assignmentTitle1"
//                             placeholder="A1"
//                             style={{ backgroundColor: '#f8f9fa' }}>

//                         </input>
//                         </td>

//                         <td>
//                             <input type="text"
//                                 className="form-control border-0 text-center"
//                                 id="assignmentTitle1"
//                                 placeholder="99%"
//                                 style={{ backgroundColor: '#f8f9fa' }}>

//                             </input>
//                         </td>
//                     </tr>

            

//                     <tr>
//                         <td className="text-danger fw-bold">Christina Allen</td>
//                         <td className="text-center">
//                             100%
//                         </td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>

//                     </tr>

//                     <tr>
//                         <td className="text-danger fw-bold">Samreen Ansari</td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>

//                     </tr>

//                     <tr>
//                         <td className="text-danger fw-bold">Han Bao</td>
//                         <td className="text-center">
//                             100%
//                         </td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">88.03%</td>
//                         <td className="text-center">98.99%</td>

//                     </tr>

//                     <tr>
//                         <td className="text-danger fw-bold">Mahi Sai Srinivas Bobbili</td>
//                         <td className="text-center">
//                             100%
//                         </td>
//                         <td className="text-center">96.67%</td>
//                         <td className="text-center">98.37%</td>
//                         <td className="text-center">98.99%</td>

//                     </tr>

//                     <tr>
//                         <td className="text-danger fw-bold">Siran Cao</td>
//                         <td className="text-center">
//                             100%
//                         </td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>
//                         <td className="text-center">100%</td>

//                     </tr>
//                 </tbody>
//             </table>
//         </div>



//     );
// }