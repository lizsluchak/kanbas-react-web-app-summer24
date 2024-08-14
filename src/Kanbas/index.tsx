import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import Courses from "./Courses";
import "./styles.css"
import ScreenSizeLabel from "../ScreenSizeLabel";
// import * as db from "./Database"; //kanbas needs a database now
import { useEffect, useState } from "react"; //needs use state
import store from "./store";
import { Provider, useSelector } from "react-redux";
import * as client from "./Courses/client";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";


export default function Kanbas() {

  //state variables

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    // convert course into a state variable so we can change it and force a redraw of UI
    // create a course object with default values
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description"
  });


  //load state
  const fetchCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);


  //manipulate data
  const addNewCourse = async () => {
    const newCourse = await client.createCourse({
      name: course.name,
      number: course.number,
      startDate: course.startDate,
      endDate: course.endDate,
      description: course.description,
      image_url: "images/reactjs.jpg", 
  }); 
    setCourses([...courses, newCourse ]);
    
    //create updated user
  };


  /**
   * Updated Delete Course:
   * @param courseId 
   */
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };



  //updateCourse: 
  const updateCourse = async () => {
    await client.updateCourse(course);
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
      <Provider store={store}>
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
              <Route path="/Account/*" element={<Account />} />
              <Route path="Dashboard"      element={<ProtectedRoute><Dashboard 

                      //pass reference to state variables & event handlers to dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/>
              </ProtectedRoute>
              } />
              <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />
              <Route path="/Calendar" element={<h2>Calendar</h2>} />
              <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
          </div>
      </div>
    </div>
</Provider>
);}


