import { FaSearch } from "react-icons/fa";

export default function StudentSearch(){
    return(

        <div className="justify-content-start" style={{ width: "350px" }}>
            <div className="input-group mb-3">
                <span className="input-group-text bg-white border-end-0"><FaSearch /></span>
                <input type="text" placeholder="Search..."
                className="border-start-0 form-control" />
            </div>
        </div>



    );
}
