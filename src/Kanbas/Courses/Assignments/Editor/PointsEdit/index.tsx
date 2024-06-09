export default function PointsEdit(){
    return(
        <div>

            <label htmlFor="assignmentDescription1"
              className="row-sm-2 row-form-label p-1">
            </label>

            <div>
              <textarea
                className="form-control"
                id="assignmentTitle1"
                rows={6}
                placeholder="The assignment is available online Submit a 
                      link to the landing page of your Web application running on Netlify. the The landing page should include the following: Your full name and section links to each of the lab assignments, link to the Kanbas application, Links to all relevant source code respositories. The kanbas application should include a link to navigate back to the landing page.
                      ">
              </textarea>
            </div>
          </div>
    )
}