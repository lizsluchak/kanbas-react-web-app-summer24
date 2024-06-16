import React from "react";
export default function TernaryOperator(){
    /**
     * Ternary conditional operators are concise alternative to if/else 
     * statements. It takes three arguments:
     *      (1) A predicate expression that evaluates to true or false followed 
     *          by a question mark ( ? )
     *      (2) An expression that evaluates if the predicate is true followed 
     *          by a colon ( : )
     *      (3) Followed by an expression that evaluates iff the predicate is
     *          false
     */
    
    let loggedIn = true;
    return(
       <div id="wd-ternary-operator">
          <h4>Logged In</h4>
          { loggedIn ? <p>Welcome</p> : <p>Please login</p> } <hr/>
       </div>

    );
}