export default function Dashboard() {
    return (
      <div id="wd-dashboard">


        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

{/* course 1: */}
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

        <hr></hr>
        {/* course 2: */}
          <div className="wd-dashboard-course"> 
          <img src="/images/dashboard_5001.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/CS5001/Home">
                CS5001 Intro to Programming
              </a>
              <p className="wd-dashboard-course-title">
                CS 5001 Align: Intro to Programming
              </p>
              <a href="#/Kanbas/Courses/CS5001/Home"> Go </a>
            </div>
          </div>




          <hr></hr>
           {/* course 3: */}
           <div className="wd-dashboard-course"> 
          <img src="/images/dashboard_5002.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/CS5002/Home">
                CS5002 Discrete
              </a>
              <p className="wd-dashboard-course-title">
                Discrete Mathematics
              </p>
              <a href="#/Kanbas/Courses/CS5002/Home"> Go </a>
            </div>
          </div>

          <hr></hr>
             {/* course 4: */}
          <div className="wd-dashboard-course"> 
          <img src="/images/dashboard_5004.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/CS5004/Home">
                CS5004 OOP
              </a>
              <p className="wd-dashboard-course-title">
                Object Oriented Programming
              </p>
              <a href="#/Kanbas/Courses/CS5004/Home"> Go </a>
            </div>
          </div>
          


          <hr></hr>
           {/* course 5: */}
           <div className="wd-dashboard-course"> 
          <img src="/images/dashboard_5008.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/CS5008/Home">
                CS5008 Data Structures and Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                Data Structures and Algorithms
              </p>
              <a href="#/Kanbas/Courses/CS5008/Home"> Go </a>
            </div>
            </div>
            <hr></hr>
      {/* course 6: */}
      <div className="wd-dashboard-course"> 
          <img src="/images/dashboard_5800.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/CS5800/Home">
                CS5800 Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                Algorithms
              </p>
              <a href="#/Kanbas/Courses/CS5800/Home"> Go </a>
            </div>
          </div>

          <hr></hr>
                {/* course 7: */}
                <div className="wd-dashboard-course"> 
          <img src="/images/dashboard_webdev.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/CS5610/Home">
                CS5610 Web Dev
              </a>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <a href="#/Kanbas/Courses/CS5610/Home"> Go </a>
            </div>
          </div>





        </div>


      </div>
  );}
  

  //i had to add this export line.. why?
  export {}