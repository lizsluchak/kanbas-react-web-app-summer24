import { useSelector, useDispatch } from "react-redux";
export default function HelloRedux() {
  const { message } = useSelector((state: any) => state.helloReducer);
  return (
    <div id="wd-hello-redux">
      

      <h5 className="lab4-section-definition">2.4.2: Hello World Redux/Reducer</h5>

<ul>
  <li>To learn about Redux, let's start with a simple Hello World example. Instead of maintaining state within any particular component, Redux declares and manages state in separate reducers which then provide the state to the entire application.</li> 
  <li>Create helloReducer as shown below maintaining a state that consists of just a message state string initialized to Hello World.</li>
  <li>Application state can maintain data from various components or screens across an entire application. Each would have a separate reducer that can be combined into a single store where reducers come together to create a complex, application wide state. The store.tsx below demonstrates adding the helloReducer to the store. Later exercises and the Kanbas section will add additional reducers to the store.</li>
  <li>The application state can then be shared with the entire Web application by wrapping it with a Provider component that makes the state data in the store available to all components within the Provider's body, this happens at the Lab() level</li>
  <li>Components within the body of the Provider can then select the state data they want using the useSelector hook as shown below. Add the HelloRedux component to ReduxExamples and confirm it renders as shown below.</li>
  

</ul>
<h3>Hello Redux</h3>
      <h4>{message}</h4> <hr />
    </div>
  );
}
