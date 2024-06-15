export default function VariableTypes() {
    /**
     * Notes:
     * let: block-scoped variable in javascript - variable limited 
     *      in scope to block, statement, or expression where used. 
     *      Note, this is in contrast to "var" keyword which declares
     *      a variable globally or locally to an entire function
     * 
     * {}: In React, expressions enclosed in {} within JSX are JavaScript expressions, and they are evaluated and rendered within the HTML-like syntax. In React, JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. JSX makes it easier to create and visualize the structure of your UI components by allowing you to write HTML tags directly in JavaScript.
     */
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
  return(
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = { numberVariable }<br/>
      floatingPointNumber = { floatingPointNumber }<br/>
      stringVariable = { stringVariable }<br/>

      {/* Note that we had to convert the boolean variable into a string type before it could render in the browser. */}
      booleanVariable = { booleanVariable + "" }<br/> 

      isNumber = { isNumber }<br/>
      isString = { isString }<br/>
      isBoolean = { isBoolean }<hr/>
    </div>
  );
}

  