export default function IfElse(){

    /**
     * Notes:
     * (1) Conditional Rendering in JSX: in JSX, the logical AND operator is
     *      commonly used for conditional rendering. 
     *      (ie) { true1 && <p>true1</p> } works as follows: if true1 evaluates 
     *      to true, the expression after the && is rendered, if true1 evaluated
     *      to false then what was after && would not be rendered
     *      
     *      (ie) { !false1 ? <p>!false1</p> : <p>false1</p> } works: the
     *      ternary operator, ?, evaluates the expression before the operator,
     *      if expression is true -> first expression, expression before colon
     *      is rendered. If false -> second expression, expression after colon
     *      is rendered. Since false1 = false, and logical not operator, !,
     *      inverts the value, !false1 == true so the first expression is
     *      rendered.
     */

    let true1 = true, false1 = false;
 
 return(
    <div id="wd-if-else">
       <h4>If Else</h4>
       { true1 && <p>true1</p> }
       { !false1 ? <p>!false1</p> : <p>false1</p> } <hr/>
    </div>
 )

}