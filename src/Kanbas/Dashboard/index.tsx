

// export default function Dashboard() {
//     return (
     
//       <div id="wd-dashboard">
        
//         <h1 id="wd-dashboard-title">Dashboard</h1><hr />
//         <h2 id="wd-dashboard-published">Published Courses (12)</h2><hr />
        
//         <div id="wd-dashboard-courses" className="row">
//           <div className="row row-cols-1 row-cols-md-4 g-4">
            
//             {/* course 1: */}
//             <div className="wd-dashboard-course col" style={{ width: "300px"}} >
//               <div className="card h-100">
//                 <img src="/images/reactjs.jpg" width={275} height={200} />

//                 <div className="card-body">
//                   <a className="wd-dashboard-course-link"
//                     href="#/Kanbas/Courses/1234/Home"
//                     style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                     CS1234 React JS
//                   </a>

//                   <p className="wd-dashboard-course-title card-text">
//                     Full Stack Software Development
//                   </p>

//                   <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary bottom-50">
//                     Go 
//                   </a>
                
//               </div>
//             </div>
//             </div>
    
          
          

        
          
//             {/* course 2: */}
//             <div className="wd-dashboard-course col" style={{ width: "300px"}}> 
//               <div className="card h-100">
//                 <img src="/images/dashboard_5001.jpg" width={275} height={200} />

//                 <div className="card-body">
//                   <a className="wd-dashboard-course-link"
//                     href="#/Kanbas/Courses/CS5001/Home"
//                     style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                     CS5001 Intro to Programming
//                   </a>

//                   <p className="wd-dashboard-course-title card-text">
//                     Intro to Programming
//                   </p>

//                   <a href="#/Kanbas/Courses/CS5001/Home" className="btn btn-primary bottom-50"> 
//                     Go 
//                   </a>
//                 </div>
//               </div>
//             </div>



//             {/* course 3: */}
//             <div className="wd-dashboard-course col" style={{ width: "300px"}}>
//               <div className="card h-100">
//                 <img src="/images/dashboard_5002.jpg" width={274} height={200}/>
                
//                 <div className="card-body">
//                   <a className="wd-dashboard-course-link"
//                     href="#/Kanbas/Courses/CS5002/Home"
//                     style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                     CS5002 Discrete Math
//                   </a>

//                   <p className="wd-dashboard-course-title card-text">
//                     Discrete Mathematics
//                   </p>

//                   <a href="#/Kanbas/Courses/CS5002/Home" className="btn btn-primary bottom-50"> Go </a>
//                 </div>
//               </div>
//             </div>

        
//             {/* course 4: */}
//             <div className="wd-dashboard-course col" style={{ width: "300px"}}>
//               <div className="card h-100">
//                 <img src="/images/dashboard_5004.jpg" width={275} height={200}/>
                
//                 <div className="card-body">
//                   <a className="wd-dashboard-course-link"
//                     href="#/Kanbas/Courses/CS5004/Home"
//                     style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                     CS5004 OOP
//                   </a>

//                   <p className="wd-dashboard-course-title card-text">
//                     Object Oriented Programming
//                   </p>
                  
//                   <a href="#/Kanbas/Courses/CS5004/Home" className="btn btn-primary bottom-50"> 
//                     Go 
//                   </a>
//                 </div>
//               </div> 
//             </div>
            

//            {/* course 5: */}
//            <div className="wd-dashboard-course col" style={{ width: "300px"}}> 
//             <div className="card h-100">
//             <img src="/images/dashboard_5008.jpg" width={275} height={200}/>
            
//               <div className="card-body">
//                 <a className="wd-dashboard-course-link"
//                   href="#/Kanbas/Courses/CS5008/Home"
//                   style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                   CS5008 Data Structures and Algorithms
//                 </a>
                
//                 <p className="wd-dashboard-course-title card-text">
//                   Data Structures and Algorithms
//                 </p>
                
//                 <a href="#/Kanbas/Courses/CS5008/Home" className="btn btn-primary bottom"> Go </a>
//                 </div>
//               </div>
//               </div>
        
//               {/* course 6: */}
//               <div className="wd-dashboard-course col" style={{ width: "300px"}}>
//               <div className="card h-100"> 
//                   <img src="/images/dashboard_5800.jpg" width={275} height={200} />
                    
//                     <div className="card-body">
//                       <a className="wd-dashboard-course-link"
//                         href="#/Kanbas/Courses/CS5800/Home"
//                         style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                         CS5800 Algorithms
//                       </a>
//                       <p className="wd-dashboard-course-title card-text">
//                         Algorithms
//                       </p>
//                       <a href="#/Kanbas/Courses/CS5800/Home" className="btn btn-primary bottom"> Go </a>
//                     </div>
//                     </div>
//                   </div>

      
//                     {/* course 7: */}
//               <div className="wd-dashboard-course col"  style={{ width: "300px"}}>
//                 <div className="card h-100"> 
//                   <img src="/images/dashboard_webdev.jpg" width={275} height={200} />
                
//                   <div className="card-body">
//                   <a className="wd-dashboard-course-link"
//                     href="#/Kanbas/Courses/CS5610/Home"
//                     style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
//                     CS5610 Web Dev
//                   </a>
//                   <p className="wd-dashboard-course-title card-text">
//                     Web Development
//                   </p>
//                   <a href="#/Kanbas/Courses/CS5610/Home" className="btn btn-primary bottom"> Go </a>
//                 </div>
//                 </div>
//               </div>
//         </div>
//         </div>
//         </div>
//   );}
  

//   //i had to add this export line.. why?


  import { Link } from "react-router-dom";
  import * as db from "../Database";
  export default function Dashboard() {
    const courses = db.courses;
    return (
      <div id="wd-dashboard">

        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> 
        <hr />

        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {courses.map((course) => (
              
              <div 
                className="wd-dashboard-course col" 
                style={{ width: "300px" }}>


                <Link to={`/Kanbas/Courses/${course._id}/Home`}               
                className="text-decoration-none" >
                    <div className="card rounded-3 overflow-hidden">
                    
                    <img src={course.image_url} height="{160}" />
                    <div className="card-body">
                      <span className="wd-dashboard-course-link"
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                            {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  