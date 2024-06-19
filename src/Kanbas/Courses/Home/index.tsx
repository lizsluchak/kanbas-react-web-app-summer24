import ScreenSizeLabel from "../../../ScreenSizeLabel";
import Modules from "../Modules";

export default function Home() {
  return (
    
    <div id="wd-home" className="d-flex">
      <ScreenSizeLabel/>
      
      <div className="flex-fill me-5 m-3">
        <Modules />
      </div>
    </div>

  );
}