export default function VariablesAndConstants() {
    // variables can store state information about applications
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    return(
      <div id="wd-variables-and-constants">
        <h4>Variables and Constants</h4>
        functionScoped = { functionScoped }<br/>
        blockScoped = { blockScoped }<br/>
        constant1 = { constant1 }<hr/>
      </div>
   );}
   