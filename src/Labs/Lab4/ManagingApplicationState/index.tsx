import ReduxExamples from "./ReduxExamples";
import InstallingRedux from "./ReduxExamples/InstallingRedux";





export default function ManagingApplicationState() {


    
    return (

        <div id="managing-application-state">

            <br />
            <h4 className="lab4-intro-definition ">2.4: Managing Application State</h4>
            <ul>
                <li>The useState hook is used to maintain the state within a component. </li>
                <li>State can be shared across components by passing references to state variables and mutators to other components. Although this approach is sufficient as a general approach to share state among multiple components, it is fraught with challenges when building larger, more complex applications.</li>
                <li>The downside of using useState across multiple components is that it creates an explicit dependency between these components, making it hard to refactor components adapting to changing requirements.</li> 
                <li>The solution is to eliminate the dependency using libraries such as Redux. This section explores the Redux library to manage state that is meant to be used across a large set of components, and even an entire application. We'll keep using useState to manage state within individual components, but use Redux to manage Application level state.</li>
                <li>To learn about redux, let's create a redux examples component that will contain several simple redux examples.</li>
            </ul>
            <br />

            <ul>
            {/** Application State Components */}
            <InstallingRedux />
            <ReduxExamples />
      
            </ul>
          
            
            


        </div>


    );
}
   
           

