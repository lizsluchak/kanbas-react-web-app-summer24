import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css"
import ScreenSizeLabel from "../ScreenSizeLabel";
// import * as db from "./Database"; //kanbas needs a database now
import { useEffect, useState } from "react"; //needs use state
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";


export default function Kanbas() {
  
  //we no longer need db reference since course are now temporarily in server
  //courses state is initialized as empty since we dont have database anymore
  const [courses, setCourses] = useState<any[]>([]);

  /**
   * we use useEffect to fetach all courses from the server on component load
   * and update the courses state variable that populates the Dashboard. 
   */
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);


  // convert course into a state variable so we can change it and force a redraw of UI
  const [course, setCourse] = useState<any>({

    // create a course object with default values
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image_url: "/images/reactjs.jpg", description: "New Description"

  });


  /**
   * Add New Course:
   * Posts new course to server, and new course, via response, is appended to
   * the end of the courses state variable. 
   */
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course); 
    setCourses([...courses, newCourse ]); 
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
              <Route path="/Account" element={<h2>Account</h2>} />
              <Route path="/Dashboard" element={<Dashboard 

                      //pass reference to state variables & event handlers to dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/>
              
              } />
              <Route path="/Courses/:cid/*" element={
                // pass all courses to the dashboard, since it might get ones not just from db
                <Courses  courses={courses} />} />
              <Route path="/Calendar" element={<h2>Calendar</h2>} />
              <Route path="/Inbox" element={<h2>Inbox</h2>} />
            </Routes>
          </div>
      </div>
    </div>
</Provider>
);}


