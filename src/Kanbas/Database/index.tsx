/**The Link component is used to create the hyperlinks and encode the course's ID as part of  the path. This can then be used in other components to parse the ID from the path and display content specific to the selected course. Confirm that clicking on different courses encodes the corresponding course ID in the path. Refactor the courses.json and the Dashboard component so that each course has a different image. */
import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
export {  courses, modules, assignments  };