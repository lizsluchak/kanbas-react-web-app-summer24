import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import TOC2 from "../Labs/Lab2/PillNavigation";
import "./styles.css"
import ScreenSizeLabel from "../ScreenSizeLabel";
import * as db from "./Database";
import { useState } from "react";


export default function Kanbas() {
  //create courses state variable and initalize with database's courses
  const [courses, setCourses] = useState(db.courses);

  // convert course into a state variable so we can change it and force a redraw of UI
  const [course, setCourse] = useState<any>({

    // create a course object with default values
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image_url: "/images/reactjs.jpg", description: "New Description"

  });

  // create addNewCourse event handler that sets courses as copy of current
  // courses state array add course at the end of the array overriding _id
  // to current time stamp
  const addNewCourse = () => {
    const newCourse = {
      ...course,    //... is object spread operator, it creates a shallow copy of the course object, spreading its properties into a new object
      _id: new Date().getTime().toString()
    }; // override id with current date and adds new course to array
    setCourses([...courses, { ...course, ...newCourse }]); //updates courses state variable by calling setCourses with new array just created
  };

  // add deleteCourse event handler accepting
  // ID of course to remove by filtering out
  // the course by its ID
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // updateCourse: 
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


    return (
      
      <div id="wd-kanbas">
        <ScreenSizeLabel />

        {/**--------------------------------------------------------------------------*
         * the existance of the div below is to set up flex; it is the row in which 
         * columns will be added; flex is activited by bootstrap class flex:
         * d-flex aka display flex*/}
        <div className="d-flex"> 
          
         {/**--------------------------------------------------------------------------*
         * this div defines a column within flex
         * bg-black: makes column black
         * d-none: makes the block not show
         * d-sm-block: makes kanbasNavigation render when we get to small size
         * */}
          <div className="bg-black d-none d-md-block" style={{height: "2000px"}}> 
            <KanbasNavigation />
        
          </div>


          {/*why do these routes go here?*/}
          <div className="flex-fill p-4"> {/**this div defines a column within flex */}
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account" element={<h2>Account</h2>} />
              <Route path="/Dashboard" element={<Dashboard 
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
              
              } />
              <Route path="/Courses/:cid/*" element={
                <Courses  courses={courses} />} />
              <Route path="/Calendar" element={<h2>Calendar</h2>} />
              <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
          </div>
      </div>
    </div>

);}




{/* Previous Iterations:

  (1) I dont remember why we stopped using this one:
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:id/*" element={<Courses />} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </td>
        </tr>
      </table>
  (2) We stopped using the below version because it uses table elements
      to layout screens horizontally ~ generally considered a bad practice.
      Instead we switch to implementing it with DIVs and CSS flex instead
      of tables:
            <div id="wd-kanbas">
            <table>
              <tr>
                <td valign="top">
                  <KanbasNavigation />
                </td>

                <td valign="top">
                  <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:id/*" element={<Courses />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                    <Route path="Inbox" element={<h1>Inbox</h1>} />
                  </Routes>
                </td>
              </tr>
      </table>
    </div>
    
    
    
    
    
*/}

      
  

//   //i had to add this export line.. why?
// export {}
  