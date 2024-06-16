import React from "react";
export default function GradeTable() {
    return (



        <div id="wd-css-responsive-tables" className="mt-3">



            <table className="table table-striped table-bordered table-hover table-responsive">
                <thead className="thead-dark text-center m-2">
                    <tr>
                        <th>Student Name<p></p></th>
                        <th>A1 SETUP <p>
                            Out of 100</p></th>
                        <th>A2 HTML <p>
                            Out of 100</p></th>
                        <th>A3 CSS<p>
                            Out of 100</p></th>
                        <th>A4 BOOTSTRAP<p>
                            Out of 100</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-danger fw-bold">Jamie Adams</td>
                   
                        <td>
                            <div>
                                <input type="text"
                                    className="form-control border-0 text-center"
                                    
                                    placeholder="100%"
                                    style={{ backgroundColor: '#f8f9fa' }}>

                                </input>
                            </div>


                        </td>
                        <td>
                            <input type="text"
                                className="form-control border-0 text-center"
                                id="assignmentTitle1"
                                placeholder="88.03"
                                style={{ backgroundColor: '#f8f9fa' }}>

                            </input>

                        </td>
                        <td><input type="text"
                            className="form-control border-0 text-center"
                            id="assignmentTitle1"
                            placeholder="A1"
                            style={{ backgroundColor: '#f8f9fa' }}>

                        </input>
                        </td>

                        <td>
                            <input type="text"
                                className="form-control border-0 text-center"
                                id="assignmentTitle1"
                                placeholder="99%"
                                style={{ backgroundColor: '#f8f9fa' }}>

                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td className="text-danger fw-bold">Christina Allen</td>
                        <td className="text-center">
                                100%
                        </td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                       
                    </tr>

                    <tr>
                        <td className="text-danger fw-bold">Samreen Ansari</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                       
                    </tr>

                    <tr>
                        <td className="text-danger fw-bold">Han Bao</td>
                        <td className="text-center">
                                100%
                        </td>
                        <td className="text-center">100%</td>
                        <td className="text-center">88.03%</td>
                        <td className="text-center">98.99%</td>
                       
                    </tr> 

                    <tr>
                        <td className="text-danger fw-bold">Mahi Sai Srinivas Bobbili</td>
                        <td className="text-center">
                                100%
                        </td>
                        <td className="text-center">96.67%</td>
                        <td className="text-center">98.37%</td>
                        <td className="text-center">98.99%</td>
                       
                    </tr> 

                    <tr>
                        <td className="text-danger fw-bold">Siran Cao</td>
                        <td className="text-center">
                                100%
                        </td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                       
                    </tr> 
                </tbody>
            </table>
        </div>



    );
}